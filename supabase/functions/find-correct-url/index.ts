// find-correct-url — Secure Edge Function that calls Claude API to find correct scholarship URLs.
// Keeps the Anthropic API key server-side instead of exposing it in the frontend.
//
// Expected POST body:
//   { name: string, current_url: string }
//
// Returns:
//   { url: string | null }
//
// Environment variables (set in Supabase dashboard → Edge Functions → Secrets):
//   ANTHROPIC_API_KEY — your Claude API key

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  }

  const apiKey = Deno.env.get("ANTHROPIC_API_KEY");
  if (!apiKey) {
    console.error("ANTHROPIC_API_KEY not set");
    return new Response(
      JSON.stringify({ error: "API key not configured" }),
      {
        status: 500,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      }
    );
  }

  try {
    const body = await req.json();
    const { name, current_url } = body;

    if (!name) {
      return new Response(
        JSON.stringify({ error: "Missing required field: name" }),
        {
          status: 400,
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
        }
      );
    }

    // Call Claude API with web_search tool
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        tools: [{ type: "web_search_20250305", name: "web_search" }],
        system: `You are a URL verification assistant for a Malaysian scholarship website.
Your job: find the correct, working official URL for a scholarship.
Rules:
- Search for the scholarship's official application/info page
- Return ONLY the URL as plain text — no explanation, no markdown, no quotes
- Must start with https://
- Must be the official organisation's website, not a third-party aggregator
- If the current URL looks correct, return it as-is
- Return null if you genuinely cannot find it`,
        messages: [
          {
            role: "user",
            content: `Find the official website URL for this Malaysian scholarship: "${name}"
Current URL (may be broken): ${current_url || "none"}
Search for the correct official URL and return ONLY the URL.`,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error(`Claude API error ${response.status}: ${errText}`);
      return new Response(JSON.stringify({ url: null }), {
        status: 200,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();

    // Extract the final text response (after web search tool use)
    const textBlock = data.content?.find(
      (b: { type: string }) => b.type === "text"
    );
    if (!textBlock) {
      return new Response(JSON.stringify({ url: null }), {
        status: 200,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      });
    }

    const text = textBlock.text.trim();

    // Validate it looks like a URL
    let foundUrl: string | null = null;
    if (text.startsWith("https://") || text.startsWith("http://")) {
      foundUrl = text.replace(/['"]/g, "").trim();
    } else {
      // Try to extract URL from response
      const match = text.match(/https?:\/\/[^\s'"]+/);
      foundUrl = match ? match[0] : null;
    }

    return new Response(JSON.stringify({ url: foundUrl }), {
      status: 200,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Edge function error:", err);
    return new Response(JSON.stringify({ url: null }), {
      status: 200,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  }
});
