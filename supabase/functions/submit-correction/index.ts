// submit-correction — Edge Function for students to submit scholarship corrections.
// Inserts into a corrections table using service_role key.
//
// Expected POST body:
//   { scholarship_id: number, scholarship_name: string, correction: string }
//
// Environment variables:
//   SUPABASE_URL              — auto-provided
//   SUPABASE_SERVICE_ROLE_KEY — set in dashboard

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
    const { scholarship_id, scholarship_name, correction } = body;

    // Validate
    if (!scholarship_id || !correction || correction.trim().length < 5) {
      return new Response(
        JSON.stringify({ error: "Missing or invalid fields" }),
        {
          status: 400,
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
        }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Insert into corrections table
    // If table doesn't exist yet, create it:
    //   CREATE TABLE corrections (
    //     id SERIAL PRIMARY KEY,
    //     scholarship_id INT REFERENCES scholarships(id),
    //     scholarship_name TEXT,
    //     correction TEXT NOT NULL,
    //     status TEXT DEFAULT 'pending',
    //     created_at TIMESTAMPTZ DEFAULT now()
    //   );
    const { error } = await supabase.from("corrections").insert({
      scholarship_id,
      scholarship_name: scholarship_name || "",
      correction: correction.trim(),
      status: "pending",
    });

    if (error) {
      console.error("Insert error:", error);
      // Don't expose internal error to user
      return new Response(JSON.stringify({ success: false }), {
        status: 200,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Edge function error:", err);
    return new Response(JSON.stringify({ success: false }), {
      status: 200,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  }
});
