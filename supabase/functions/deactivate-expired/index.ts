// deactivate-expired — Scheduled Edge Function that hides expired internships.
//
// Flips is_visible=false on internships whose deadline_date is in the past
// and are not rolling. Called on a schedule (see .github/workflows/
// deactivate-expired.yml) so students never land on a listing whose deadline
// has already come and gone.
//
// Auth: requires an X-Cron-Secret header matching the DEACTIVATE_CRON_SECRET
// environment variable — no anon-key or JWT flow, since the caller is a
// scheduled job, not a human session.
//
// Environment variables (set in Supabase → Edge Functions → Secrets):
//   SUPABASE_URL              — auto-provided by Supabase
//   SUPABASE_SERVICE_ROLE_KEY — set manually in dashboard
//   DEACTIVATE_CRON_SECRET    — shared secret with the GH Action / cron caller

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, X-Cron-Secret",
};

const jsonResponse = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }
  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  // Shared-secret auth — reject if header missing or wrong
  const provided = req.headers.get("X-Cron-Secret");
  const expected = Deno.env.get("DEACTIVATE_CRON_SECRET");
  if (!expected || !provided || provided !== expected) {
    return jsonResponse({ error: "Unauthorized" }, 401);
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const today = new Date().toISOString().split("T")[0];

    // Candidates: visible, not rolling, deadline_date strictly before today.
    // The service_role client bypasses RLS.
    const { data: candidates, error: selErr } = await supabase
      .from("internships")
      .select("id, company, programme_name, deadline_date")
      .eq("is_visible", true)
      .eq("rolling", false)
      .not("deadline_date", "is", null)
      .lt("deadline_date", today);

    if (selErr) {
      console.error("select err:", selErr);
      return jsonResponse({ error: selErr.message }, 500);
    }

    if (!candidates || candidates.length === 0) {
      return jsonResponse({ success: true, deactivated: 0, ran_at: today });
    }

    const ids = candidates.map((r: { id: number }) => r.id);

    const { error: upErr } = await supabase
      .from("internships")
      .update({ is_visible: false })
      .in("id", ids);

    if (upErr) {
      console.error("update err:", upErr);
      return jsonResponse({ error: upErr.message }, 500);
    }

    console.log(`Deactivated ${ids.length} expired internships`, ids);
    return jsonResponse({
      success: true,
      deactivated: ids.length,
      ids,
      ran_at: today,
    });
  } catch (err) {
    console.error("Edge function error:", err);
    return jsonResponse({ error: String(err) }, 500);
  }
});
