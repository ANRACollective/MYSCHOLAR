// myintern-shared.js — Shared utilities for MyIntern CV Builder ecosystem
// State management, voice recognition, navigation, HTML escaping
// Loaded on every page before page-specific scripts.

// ── HTML ESCAPING ───────────────────────────────────
function esc(s){return s?String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'):''}

// ── TOAST NOTIFICATION ──────────────────────────────
// Requires <div id="toast" class="toast"></div> in page HTML
function showToast(msg){
  var t=document.getElementById('toast');
  t.textContent=msg;
  t.classList.add('show');
  setTimeout(function(){t.classList.remove('show')},2000);
}

// ── STATE MANAGEMENT ────────────────────────────────
var cvState = {
  current:0, strength:0,
  name:'', email:'', phone:'', city:'',
  university:null, course:null, level:null,
  projects:[], projectDescs:{},
  activities:[], activityDetail:'',
  skills:[], motivation:null, motivationText:'',
  cvRawText:''
};

// Load saved state
function loadState(){
  try{
    var saved=localStorage.getItem('myintern_cv_state');
    if(saved){var parsed=JSON.parse(saved);if(parsed&&parsed.name)cvState=parsed;}
  }catch(e){}
}

// Save state
function saveState(){
  try{localStorage.setItem('myintern_cv_state',JSON.stringify(cvState))}catch(e){}
}

// ── SUPABASE SYNC — persist CV data to database ────
var SB_URL='https://ywvfvjvxwhcfprfrkgqm.supabase.co';
var SB_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3dmZ2anZ4d2hjZnByZnJrZ3FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUwNTQ5MzEsImV4cCI6MjA5MDYzMDkzMX0.5EzrJuW1fdPca2ZEKGPXXgbd_XYDqKzzu6e-iRQT9po';

var _saveDebounce=null;
var _profileId=null; // track the Supabase row ID for this student

function saveToDB(){
  // Only save if student has entered meaningful data
  if(!cvState.name||!cvState.email)return;
  clearTimeout(_saveDebounce);
  _saveDebounce=setTimeout(function(){
    var payload={
      name:cvState.name,
      email:cvState.email,
      phone:cvState.phone||null,
      city:cvState.city||null,
      university:cvState.university||null,
      course:cvState.course||null,
      study_level:cvState.level||null,
      projects:cvState.projects.length?cvState.projects:null,
      project_descriptions:cvState.projectDescs||{},
      activities:cvState.activities.length?cvState.activities:null,
      activity_detail:cvState.activityDetail||null,
      skills:cvState.skills.length?cvState.skills:null,
      motivation:cvState.motivation||null,
      motivation_text:cvState.motivationText||null,
      cv_score:typeof calculateScore==='function'?calculateScore():null,
      xp:typeof xpState!=='undefined'?xpState.xp:0,
      streak:typeof xpState!=='undefined'?xpState.streak:0,
      updated_at:new Date().toISOString()
    };
    // Load profile ID from localStorage
    if(!_profileId)_profileId=localStorage.getItem('myintern_profile_id');
    if(_profileId){
      // UPDATE existing row
      fetch(SB_URL+'/rest/v1/student_profiles?id=eq.'+_profileId,{
        method:'PATCH',
        headers:{'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY,'Content-Type':'application/json','Prefer':'return=minimal'},
        body:JSON.stringify(payload)
      }).catch(function(){});
    } else {
      // INSERT new row
      fetch(SB_URL+'/rest/v1/student_profiles',{
        method:'POST',
        headers:{'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY,'Content-Type':'application/json','Prefer':'return=representation'},
        body:JSON.stringify(payload)
      }).then(function(r){return r.json()}).then(function(data){
        if(data&&data[0]&&data[0].id){
          _profileId=data[0].id;
          localStorage.setItem('myintern_profile_id',_profileId);
        }
      }).catch(function(){});
    }
  },2000); // debounce 2s to avoid spamming on every keystroke
}

// Hook saveToDB into saveState so it syncs automatically
var _origSaveState=saveState;
saveState=function(){
  _origSaveState();
  saveToDB();
};

// Load interview progress
var interviewAnswered=[];
function loadInterviewState(){
  try{
    var saved=localStorage.getItem('myintern_interview');
    if(saved)interviewAnswered=JSON.parse(saved);
    else interviewAnswered=[false,false,false,false,false,false,false];
  }catch(e){interviewAnswered=[false,false,false,false,false,false,false]}
}

function saveInterviewState(){
  try{localStorage.setItem('myintern_interview',JSON.stringify(interviewAnswered))}catch(e){}
}

// Course category helper (uses COURSE_DATA from myintern-data.js, loaded first)
function getCourseCategory(){
  var c=cvState.course;if(!c)return null;
  for(var i=0;i<COURSE_DATA.length;i++){
    for(var j=0;j<COURSE_DATA[i].items.length;j++){
      if(COURSE_DATA[i].items[j].name===c)return COURSE_DATA[i].cat;
    }
  }
  return null;
}

// ── NAVIGATION ──────────────────────────────────────
// Navigate to another MyIntern page
function goToPage(page){
  saveState();
  window.location.href=page;
}

// Escape key → back to internships page
document.addEventListener('keydown',function(e){
  if(e.key==='Escape')window.location.href='/internships';
});

// ── VOICE / SPEECH RECOGNITION ──────────────────────
var MIC_SVG='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>';
var STOP_SVG='<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>';

var voiceLang='en-MY'; // default: English (Malaysia)
var activeRecognition=null; // tracks current recording session

function hasSpeechAPI(){
  return !!(window.SpeechRecognition||window.webkitSpeechRecognition);
}

function setVoiceLang(lang){
  voiceLang=lang;
  // Update all lang toggle buttons on page
  document.querySelectorAll('.mic-lang-opt').forEach(function(el){
    el.classList.toggle('active',el.dataset.lang===lang);
  });
  if(lang==='ms-MY')showToast('Bahasa Malaysia dipilih');
  else showToast('English selected');
}

function buildMicRow(targetId){
  if(!hasSpeechAPI())return'';
  return '<div class="mic-row">'
    +'<button class="mic-btn" id="micBtn-'+targetId+'" onclick="toggleVoice(\''+targetId+'\')" title="Tap to speak">'+MIC_SVG+'</button>'
    +'<span class="mic-status" id="micStatus-'+targetId+'">Tap mic to speak</span>'
    +'<div class="mic-lang">'
    +'<button class="mic-lang-opt active" data-lang="en-MY" onclick="setVoiceLang(\'en-MY\')">EN</button>'
    +'<button class="mic-lang-opt" data-lang="ms-MY" onclick="setVoiceLang(\'ms-MY\')">BM</button>'
    +'</div></div>';
}

function toggleVoice(targetId){
  // If already recording, stop
  if(activeRecognition){
    activeRecognition.stop();
    activeRecognition=null;
    return;
  }
  var SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SR){showToast('Speech recognition not supported in this browser');return;}

  var recognition=new SR();
  recognition.lang=voiceLang;
  recognition.continuous=true;
  recognition.interimResults=true;
  recognition.maxAlternatives=1;
  activeRecognition=recognition;

  var btn=document.getElementById('micBtn-'+targetId);
  var status=document.getElementById('micStatus-'+targetId);
  var target=document.getElementById(targetId);
  var existingText=target?target.value:'';
  var finalTranscript=existingText;

  btn.classList.add('recording');
  btn.innerHTML=STOP_SVG;
  status.textContent=voiceLang==='ms-MY'?'Sedang mendengar...':'Listening...';

  recognition.onresult=function(event){
    var interim='';
    for(var i=event.resultIndex;i<event.results.length;i++){
      var t=event.results[i][0].transcript;
      if(event.results[i].isFinal){
        finalTranscript+=(finalTranscript?' ':'')+t;
      } else {
        interim+=t;
      }
    }
    if(target){
      target.value=finalTranscript+(interim?' '+interim:'');
      // Trigger any oninput handlers
      target.dispatchEvent(new Event('input',{bubbles:true}));
    }
  };

  recognition.onerror=function(event){
    btn.classList.remove('recording');
    btn.innerHTML=MIC_SVG;
    activeRecognition=null;
    if(event.error==='not-allowed'){
      status.textContent='Mic access denied — check browser permissions';
    } else if(event.error==='no-speech'){
      status.textContent='No speech detected — try again';
    } else {
      status.textContent='Error: '+event.error;
    }
  };

  recognition.onend=function(){
    btn.classList.remove('recording');
    btn.innerHTML=MIC_SVG;
    status.textContent=voiceLang==='ms-MY'?'Selesai — ketuk untuk bercakap lagi':'Done — tap to speak again';
    activeRecognition=null;
    if(target)target.value=finalTranscript;
  };

  recognition.start();
}

// Override toggleVoice to handle div targets (not just textareas)
var _origToggleVoice=toggleVoice;
toggleVoice=function(targetId){
  var target=document.getElementById(targetId);
  // If target is a div (not textarea), wrap it to behave like one
  if(target&&target.tagName!=='TEXTAREA'&&target.tagName!=='INPUT'){
    // Create a proxy object so recognition writes to textContent
    Object.defineProperty(target,'value',{
      get:function(){return this.textContent},
      set:function(v){this.textContent=v;this.classList.toggle('empty',!v||v==='Your answer will appear here...')},
      configurable:true
    });
    target.dispatchEvent=function(){};
  }
  _origToggleVoice(targetId);
};

// ══════════════════════════════════════════════════════════════
// GAMIFICATION — XP, Levels, Streaks (Duolingo-inspired)
// ══════════════════════════════════════════════════════════════

var XP_KEY='myintern_xp';
var STREAK_KEY='myintern_streak';

var LEVELS=[
  {name:'Getting Started',min:0,cls:'level-1'},
  {name:'CV Builder',min:50,cls:'level-2'},
  {name:'Gap Closer',min:120,cls:'level-3'},
  {name:'Match Finder',min:200,cls:'level-4'},
  {name:'Interview Ready',min:300,cls:'level-5'}
];

var xpState={xp:0,lastVisit:null,streak:0};

function loadXP(){
  try{
    var saved=localStorage.getItem(XP_KEY);
    if(saved)xpState=JSON.parse(saved);
  }catch(e){}
  // Update streak
  var today=new Date().toISOString().split('T')[0];
  if(xpState.lastVisit){
    var last=new Date(xpState.lastVisit);
    var diff=Math.floor((new Date(today)-last)/(1000*60*60*24));
    if(diff===1)xpState.streak++;
    else if(diff>1)xpState.streak=1;
    // same day = no change
  } else {
    xpState.streak=1;
  }
  xpState.lastVisit=today;
  saveXP();
}

function saveXP(){
  try{localStorage.setItem(XP_KEY,JSON.stringify(xpState))}catch(e){}
}

function addXP(points,label){
  xpState.xp+=points;
  saveXP();
  showXPPopup('+'+points+' XP');
  updateProgressRing();
}

function getLevel(){
  var lvl=LEVELS[0];
  for(var i=LEVELS.length-1;i>=0;i--){
    if(xpState.xp>=LEVELS[i].min){lvl=LEVELS[i];break;}
  }
  return lvl;
}

function getNextLevel(){
  for(var i=0;i<LEVELS.length;i++){
    if(xpState.xp<LEVELS[i].min)return LEVELS[i];
  }
  return null;
}

// ── XP POPUP (floating animation) ──
function showXPPopup(text){
  var el=document.getElementById('xpPopup');
  if(!el){
    el=document.createElement('div');
    el.className='xp-popup';
    el.id='xpPopup';
    document.body.appendChild(el);
  }
  el.textContent=text;
  el.classList.remove('show');
  void el.offsetWidth; // force reflow
  el.classList.add('show');
}

// ── PROGRESS RING (renders into any .progress-ring-wrap element) ──
function updateProgressRing(){
  var wrap=document.getElementById('progressRing');
  if(!wrap)return;
  var lvl=getLevel();
  var next=getNextLevel();
  var pct=next?Math.min(((xpState.xp-lvl.min)/(next.min-lvl.min))*100,100):100;
  var circumference=113; // 2*PI*18
  var offset=circumference-(circumference*pct/100);

  wrap.innerHTML='<svg class="progress-ring-svg" viewBox="0 0 40 40">'
    +'<circle cx="20" cy="20" r="18" fill="none" stroke="rgba(255,255,255,.06)" stroke-width="3"/>'
    +'<circle cx="20" cy="20" r="18" fill="none" stroke="url(#xpGrad)" stroke-width="3" stroke-linecap="round" stroke-dasharray="'+circumference+'" stroke-dashoffset="'+offset+'" class="progress-ring-circle"/>'
    +'<defs><linearGradient id="xpGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#6366f1"/></linearGradient></defs>'
    +'</svg>'
    +'<div class="progress-ring-info">'
    +'<div class="progress-ring-level"><span class="level-badge '+lvl.cls+'">'+esc(lvl.name)+'</span></div>'
    +'<div class="progress-ring-xp">'+xpState.xp+' XP'+(next?' / '+next.min:'')+'</div>'
    +(xpState.streak>1?'<div class="progress-ring-streak">'+xpState.streak+'-day streak</div>':'')
    +'</div>';
}

// ── BOTTOM NAV (renders into .bottom-nav element) ──
function renderBottomNav(activePage){
  var nav=document.getElementById('bottomNav');
  if(!nav)return;
  var items=[
    {page:'index.html',label:'Hub',icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>'},
    {page:'cv-builder.html',label:'CV',icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>'},
    {page:'gap-analysis.html',label:'Gaps',icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>'},
    {page:'match.html',label:'Match',icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>'},
    {page:'interview.html',label:'Prep',icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg>'}
  ];
  var html='';
  items.forEach(function(item){
    var isActive=activePage===item.page;
    html+='<div class="bottom-nav-item'+(isActive?' active':'')+'" onclick="goToPage(\''+item.page+'\')">'
      +'<div class="bottom-nav-icon">'+item.icon+'</div>'
      +'<div class="bottom-nav-label">'+item.label+'</div>'
      +'</div>';
  });
  nav.innerHTML=html;
}

// ── AUTO-INIT ───────────────────────────────────────
loadState();
loadXP();
