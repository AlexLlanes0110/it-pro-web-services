# Technical Context — ITPro Web

## Stack

The decided stack is:

- Astro
- Tailwind CSS
- TypeScript
- GitHub
- GitHub Actions
- AWS S3
- AWS CloudFront
- Cloudflare DNS

Docker is not part of V1.

## Current server setup

The repository is cloned on the server at:

/opt/apps/itpro-web

The server has:

- Git installed
- Node installed through nvm
- npm installed
- SSH access to GitHub using a deploy key
- Deploy key with write access enabled because development is being done from the server

## Node

Node was installed using nvm.

Avoid installing Node with apt unless explicitly required.

## Project structure goal

Desired structure:

itpro-web/
├── .ai/
├── .github/workflows/
├── public/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── config/
│   ├── content/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   └── utils/
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md

## Technical rules

- Keep V1 static.
- Prefer Astro components.
- Prefer content/config files for text and navigation.
- Avoid unnecessary client-side JavaScript.
- Avoid unnecessary dependencies.
- Use Tailwind CSS for styling.
- Keep SEO metadata centralized when possible.
- Keep WhatsApp links centralized.
- Keep navigation anchors centralized.
- Do not add backend functionality in V1.
- Do not add database, auth, CMS, tickets, payments, or chatbot.
- Do not add Docker for now.

## Build

Use:

npm run build

Expected output:

dist/

## Local development

Use:

npm run dev -- --host 0.0.0.0

Do not expose the development server publicly unless explicitly required.

## Deployment target

Production should be static hosting:

Astro build output → S3 bucket → CloudFront distribution → Cloudflare DNS
