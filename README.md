# puku.sh

Official website for Puku Editor - Download page and documentation.

## Tech Stack
- React 18 + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Deployed to Cloudflare R2

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

```bash
wrangler r2 sync dist/ r2://puku-sh
```
