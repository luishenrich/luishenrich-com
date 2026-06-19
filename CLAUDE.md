@AGENTS.md

# luishenrich.com — Luis's personal blog

Next.js + MDX. Blog posts live in `content/blog/<slug>.mdx` (drafts in `content/drafts/`); post images in `public/blog/<slug>/`. This is Luis's founder / personal brand site, and many posts are about StudyPDF.

## StudyPDF assets are SHARED with the marketing repo (important)

Any StudyPDF brand asset made or updated here for a blog post — post **thumbnails**, **SVG charts**, product **screenshots / stills**, og-images — is also a StudyPDF *marketing* asset. The two repos must not drift:

- **When you create or change a StudyPDF asset here, copy it over** to the marketing repo at `~/VSCode/marketing-os/brands/studypdf/assets/`:
  - designed thumbnails (e.g. 1920×1080) → `assets/thumbnails/`
  - brand-palette SVG charts → `assets/charts/`
  - product screenshots / stills → `assets/screenshots/`
- **You can also pull FROM there** — reuse an existing StudyPDF asset from `marketing-os/brands/studypdf/assets/` instead of regenerating one.
- After copying into marketing-os, its `asset-sync` skill uploads the assets to Cloudflare R2 (presigned URLs) so they can be attached to LinkedIn/social posts. Re-run that sync when assets change.

Think of it this way: assets are *born here* (for a blog post), but `marketing-os` is the reusable library + the social pipeline. Keep both in sync.

## Voice (all posts)
Plain, human, first person. **No em-dashes.** No MRR/revenue or AI/infra cost figures (paying-customer count is fine). Short sentences. The full voice + claims gate lives in the marketing-os `founder-voice` and `brand-review` skills.
