<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Project rules

- All official school facts live in `src/lib/school-data.ts`; pages, the chatbot prompt, and tests read from it so content never drifts between them.
- Never publish a phone number or phone icon anywhere on the site or in chatbot answers; `src/test/school-data.test.ts` guards this.
- Photos are referenced as `/images/<file>` (served from `public/images/`) through `SmartImage`, which shows a branded placeholder when a file is missing.
- Contact form inserts into `public.messages` directly from the browser (insert-only RLS); messages are read only by the `/admin` server functions using the admin client after the session check.
- `/admin` is a shared-password gate: password in server secret `ADMIN_PASSWORD`, encrypted cookie session keyed by `SESSION_SECRET` (SameSite=None + Partitioned so it works inside the editor iframe).
- Chatbot quick replies answer locally from school data; free-text questions go to the AI gateway via `askSchoolBot` with the school data as the only allowed knowledge.
