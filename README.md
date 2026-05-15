# ITPro Web

Official website for **ITPro — Inteligencia Tecnológica Profesional**.

ITPro is a technology services brand for PyMEs focused on software, automation, managed operational platforms, continuous technology operations, and infrastructure as complementary support.

Main message:

> Software y automatización para empresas que quieren operar mejor.

## Project goal

This repository contains the official one-page landing page for ITPro.

The website is intended for:

- Commercial presentation
- QR destination from physical business cards
- Professional credibility
- New client contact
- Bridge between ITPro and Alejandro Aguilar as founder
- WhatsApp conversion

## Stack

- Astro
- Tailwind CSS
- TypeScript
- GitHub
- GitHub Actions
- AWS S3
- AWS CloudFront
- Cloudflare DNS

Docker is intentionally out of scope for V1.

## Development

Install dependencies:

    npm install

Start development server:

    npm run dev

Build production output:

    npm run build

Preview production build:

    npm run preview

## V1 scope

Included:

- One-page Spanish landing page
- Fixed header
- Internal anchor navigation
- Floating WhatsApp button
- Hero section
- Problem section
- Services section
- Process section
- Generic case study
- Technology philosophy section
- Founder section
- Contact section
- Footer
- Responsive layout
- Basic SEO
- Basic Open Graph
- Static deployment to AWS

Not included:

- Blog
- CMS
- Client portal
- Login
- Tickets
- Database
- Payments
- Complex forms
- Chatbot
- Active multi-language support
- Docker

## Deployment architecture

Expected production flow:

    GitHub -> GitHub Actions -> Astro build -> AWS S3 -> CloudFront -> Cloudflare DNS -> User

## AI project context

This repository includes an `.ai/` folder with project memory and prompts for AI-assisted development.

Before using Codex, GPT, or another AI assistant on this project, read:

    .ai/README.md

Main Codex prompt:

    .ai/prompts/codex-system-prompt.md

## Security and client data

Do not publish:

- Client names without authorization
- Client logos without authorization
- Private screenshots
- Order data
- End-client data
- Credentials
- Unauthorized amounts
- Sensitive configuration

## Maintainer

Alejandro Aguilar
