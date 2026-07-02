# deactivate-expired

Scheduled Supabase Edge Function that hides internships whose deadline has
passed. Called daily by `.github/workflows/deactivate-expired.yml`.

## What it does

Selects internships where:
- `is_visible = true`
- `rolling = false`
- `deadline_date` is set and strictly before today

For each match, sets `is_visible = false`. The card feed on
`internships.html` filters `is_visible=eq.true`, so the row silently
disappears from the student's view. Nothing is destroyed — a human can flip
it back.

## Setup (one-time)

1. **Deploy the function** to your Supabase project:

   ```
   supabase functions deploy deactivate-expired --project-ref <your-ref>
   ```

2. **Set the shared cron secret** in Supabase → Edge Functions → Secrets:

   - `DEACTIVATE_CRON_SECRET` = any long random string (this value must
     match the GitHub Actions secret of the same name).

   `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are auto-provided.

3. **Set the same value + your project URL** as GitHub Actions secrets
   (Repo → Settings → Secrets and variables → Actions):

   - `DEACTIVATE_CRON_SECRET` — same value as step 2.
   - `SUPABASE_FUNCTIONS_URL` — e.g. `https://<your-ref>.supabase.co/functions/v1`.

## Manual invocation

For a dry run or to backfill after a delay:

```
curl -sS -X POST \
  "$SUPABASE_FUNCTIONS_URL/deactivate-expired" \
  -H "X-Cron-Secret: $DEACTIVATE_CRON_SECRET" \
  -H "Content-Type: application/json" \
  --data '{}'
```

Response:

```json
{ "success": true, "deactivated": 3, "ids": [12, 34, 56], "ran_at": "2026-07-02" }
```

## Notes

- The function does not touch `scholarships` — those have a longer natural
  lifecycle and no hard deadline-date semantics that map cleanly to hiding.
- Rolling internships (`rolling = true`) are never deactivated by this
  function; they have no deadline to expire against.
- If `internships` doesn't have a `last_verified` column yet, the freshness
  signal on the card renders nothing — the deactivator itself does not
  depend on that column.
