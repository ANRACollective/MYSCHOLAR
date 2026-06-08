// update-url-status — Secure Edge Function for updating scholarship URL status.
// Uses service_role key server-side so the anon key cannot PATCH scholarships directly.
//
// Expected POST body:
//   { id: number, url_status: string, last_verified: string, url?: string }
//
// Environment variables (set in Supabase dashboard → Edge Functions → Secrets):
//   SUPABASE_URL          — auto-provided by Supabase
//   SUPABASE_SERVICE_ROLE_KEY — set manually in dashboard

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

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

  try {
    const body = await req.json();
    const { id, url_status, last_verified, url } = body;

    // Validate required fields
    if (!id || !url_status) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: id, url_status" }),
        {
          status: 400,
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
        }
      );
    }

    // Validate url_status is one of the allowed values
    const ALLOWED_STATUSES = ["ok", "broken", "suspected", "unverified"];
    if (!ALLOWED_STATUSES.includes(url_status)) {
      return new Response(
        JSON.stringify({
          error: `Invalid url_status. Must be one of: ${ALLOWED_STATUSES.join(", ")}`,
        }),
        {
          status: 400,
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
        }
      );
    }

    // Validate URL format if provided
    if (url && !url.startsWith("https://") && !url.startsWith("http://")) {
      return new Response(
        JSON.stringify({ error: "URL must start with http:// or https://" }),
        {
          status: 400,
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
        }
      );
    }

    // Create Supabase client with service_role key (bypasses RLS)
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Build update payload
    const updateData: Record<string, unknown> = {
      url_status,
      last_verified: last_verified || new Date().toISOString().split("T")[0],
    };
    if (url) {
      updateData.url = url;
    }

    // Perform the update
    const { error } = await supabase
      .from("scholarships")
      .update(updateData)
      .eq("id", id);

    if (error) {
      console.error("Supabase update error:", error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Edge function error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      }
    );
  }
});
