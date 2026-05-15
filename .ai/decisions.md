# Decisions — ITPro Web

## 001 — Use Astro

Decision:

Use Astro for the landing page.

Reason:

The site is mostly static, content-driven, and performance-sensitive. Astro is a good fit for fast static websites with component structure.

## 002 — Use Tailwind CSS

Decision:

Use Tailwind CSS for styling.

Reason:

Tailwind allows fast iteration, consistent design tokens, and easy responsive styling without maintaining large custom CSS files.

## 003 — No Docker in V1

Decision:

Do not use Docker for V1.

Reason:

The project is a static Astro landing page. Docker would add complexity without immediate benefit.

## 004 — Use AWS S3 + CloudFront

Decision:

Deploy static build output to S3 and serve through CloudFront.

Reason:

The site is static and benefits from low-cost, highly available CDN delivery.

## 005 — Use Cloudflare DNS

Decision:

Use Cloudflare for DNS.

Reason:

Cloudflare provides flexible DNS management and can point cleanly to CloudFront.

## 006 — Use GitHub Actions for deploy

Decision:

Use GitHub Actions to build and deploy.

Reason:

The expected production flow is automated from GitHub to AWS.

## 007 — Server uses SSH deploy key

Decision:

The server authenticates to GitHub using an SSH deploy key.

Reason:

A deploy key can be scoped to a single repository, reducing risk compared to broad account tokens.

## 008 — Deploy key has write access

Decision:

The deploy key has write access.

Reason:

Alejandro wants to develop and push directly from the server.

Risk:

If the server is compromised, the attacker could push to this repository. Keep the private key protected and server access restricted.

## 009 — Spanish first

Decision:

Spanish is the only active language for V1.

Reason:

The initial target market is Spanish-speaking PyMEs. English support is planned for V1.5.

## 010 — Generic case study in V1

Decision:

Use a generic case study for the textile sector in V1.

Reason:

There is a real founding client, but name/logo/data must not be published without formal authorization.
