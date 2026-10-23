# Banglangdang Translations

The public portfolio for Banglangdang Translations: Korean–English translation, editing, publications, and course translations.

- **LIVE website:** https://banglangdang.vercel.app/
- **Git repository:** https://github.com/omatty123/translation_website
- **LOCAL source:** `/Users/wegehaum/workspaces/translation_website`

## Development

Use Node.js 22 and the committed npm lockfile.

```sh
npm ci
npm run dev
```

The development server is **LOCAL only** at http://localhost:3000/. If that port is occupied, use the address printed by Next.js.

The site uses Next.js App Router, React, TypeScript, and Tailwind CSS. Page content lives in `app/page.tsx`, shared styles in `app/globals.css`, metadata and document structure in `app/layout.tsx`, and public assets in `public/`.

## Verification

Run the production build before the type check so Next.js can generate route types.

```sh
npm run build
npm run typecheck
```

To inspect the production build locally:

```sh
npm run start
```

Check the LOCAL site at http://localhost:3000/ in desktop and mobile widths. Check navigation, publication and course links, image rendering, readable sans-serif fonts, and horizontal overflow before publishing.

GitHub Actions runs `npm ci`, `npm run build`, and `npm run typecheck` on pushes to `main` and on pull requests targeting `main`. The workflow is `.github/workflows/checks.yml`.

## Production deployment

The existing Vercel project is `banglangdang`. Its Git integration deploys updates to `main` from this repository to the LIVE website at https://banglangdang.vercel.app/. Keep this project and address when updating the site. GitHub Actions verifies the code; Vercel performs the deployment independently.

Before pushing, inspect the diff and complete the local checks. After pushing, verify the Vercel status for the exact Git commit and its successful Production deployment in GitHub. Then inspect the LIVE address for the expected content and layout. Deployment-specific Vercel URLs can require login, so an HTTP response from those URLs alone does not prove that the public website has updated.

The local `.vercel/` association and environment files are ignored by Git. Keep credentials and private correspondence out of the repository.

## Sources and maintenance

- `maintenance/content-sources.md` records content and photograph provenance for the current site.
- `maintenance/course-links.md` records the K-MOOC course-link audit and its date. A successful HTTP response alone does not verify an active course page; confirm the expected course title in the page content.

Preserve original assets and source evidence when preparing display copies or revising text. Verify substantive changes against their sources before publication.
