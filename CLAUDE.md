# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

M24 Media company website - a minimal single-page landing page promoting Pattr, a parenting app. Built with Astro and deployed to Cloudflare Workers.

## Development Commands

```bash
# Development
npm run dev              # Start Astro dev server
npm run preview          # Build and preview with Wrangler

# Building & Type Checking
npm run build            # Build for production
npm run check            # Build, type check, and dry-run deploy
npm run cf-typegen       # Generate Cloudflare types

# Deployment
npm run deploy           # Deploy to Cloudflare Workers
```

## Architecture

**Framework:** Astro 5.x with Cloudflare adapter configured for Workers deployment.

**Structure:** Single-page application with no routing. The entire site is `src/pages/index.astro` with one shared component `src/components/BaseHead.astro`.

**Site constants:** Global metadata (SITE_TITLE, SITE_DESCRIPTION) is in `src/consts.ts`.

**Deployment target:** Cloudflare Workers with sitemap integration. Site URL: https://m24media.com

**Key config files:**
- `astro.config.mjs`: Cloudflare adapter with platform proxy enabled
- `wrangler.json`: Worker configuration with observability and source maps enabled

## Subdomain Setup

**PV2 Subdomain:** The Perfumers Vault 2 site is served at `pv2.m24media.com` from static files in `public/pv2/`. This is a separate static HTML site (not Astro) with its own CSS/JS.

**Routing:** Configured in `wrangler.json` to handle both main domain and pv2 subdomain through the same Worker.

## Style Guidelines

The main site uses inline Astro styles with animated gradients and glassmorphic effects. Maintain the minimal, modern aesthetic with blue-grey color palette (#546e7a, #37474f, #455a64).
