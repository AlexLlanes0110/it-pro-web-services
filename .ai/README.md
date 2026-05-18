# AI Context — ITPro Web Services

This folder contains the project memory for AI assistants and coding agents.

The main rules are defined in:

- ../CODEX.md

Use this folder as structured context, not as a place to duplicate every rule.

## Purpose

The `.ai` folder helps keep the project organized by separating:

- Project context.
- Product and business context.
- Technical decisions.
- Design direction.
- Roadmap.
- Current working status.
- Reusable prompts for specific tasks.

## Recommended reading order

Before modifying the repository, read:

1. ../CODEX.md
2. .ai/decisions.md
3. .ai/project-context.md
4. .ai/product-context.md
5. .ai/technical-context.md
6. .ai/design-context.md
7. .ai/roadmap.md
8. .ai/working-log.md

For specific tasks, also read the relevant prompt inside:

- .ai/prompts/

## Folder structure

.ai/
├── README.md
├── project-context.md
├── product-context.md
├── technical-context.md
├── design-context.md
├── roadmap.md
├── decisions.md
├── working-log.md
└── prompts/
    ├── codex-system-prompt.md
    ├── code-review.md
    ├── ux-review.md
    └── image-generation.md

## File roles

### project-context.md

General project identity and purpose.

### product-context.md

Business positioning, services, audience, commercial message, and value proposition.

### technical-context.md

Stack, deployment direction, technical scope, and implementation constraints.

### design-context.md

UX direction, visual identity, tone, navigation, and layout priorities.

### roadmap.md

Current phase, V1 scope, future improvements, and longer-term possibilities.

### decisions.md

Official project decisions. If something is decided, it should be recorded here.

### working-log.md

Current working status and latest meaningful changes.

This file should stay clean. Do not accumulate unnecessary logs forever.

### prompts/

Reusable task-specific prompts for Codex, UX review, code review, and visual asset direction.

## Main rule

Keep the project focused on V1:

- Spanish-first.
- One-page landing page.
- Static Astro site.
- Clear WhatsApp conversion.
- No unnecessary features.
- No Docker.
- No backend.
- No CMS.
- No login.
- No ticket system.
- No database.

## Maintenance rule

When project direction changes:

1. Update CODEX.md if it affects global rules.
2. Update .ai/decisions.md if it is an official decision.
3. Update the relevant context file.
4. Update .ai/working-log.md with the current status only.
