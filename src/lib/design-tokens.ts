/**
 * Hanafuda Design System — Token Reference
 * 
 * All tokens are defined in src/index.css as CSS custom properties
 * and mapped to Tailwind classes in tailwind.config.ts.
 * 
 * ## Color Tokens (use via Tailwind: `text-primary`, `bg-accent`, etc.)
 * 
 * | Token              | Light                | Dark                 | WCAG               | Usage                    |
 * |--------------------|----------------------|----------------------|---------------------|--------------------------|
 * | --background       | Warm cream           | Deep navy            | Pure black          | Page background          |
 * | --foreground       | Dark navy            | Light cream           | Pure white          | Body text                |
 * | --primary          | Coral/vermillion     | Warm coral           | Gold                | CTAs, highlights         |
 * | --secondary        | Teal green           | Brighter teal        | Cyan                | Secondary actions        |
 * | --accent           | Warm gold            | Warm gold            | Gold                | Badges, decorative       |
 * | --muted            | Light beige          | Dark muted           | Dark gray           | Subdued backgrounds      |
 * | --muted-foreground | Medium gray          | Light muted          | Light gray          | Secondary text           |
 * | --card             | Off-white            | Dark card            | Near-black          | Card surfaces            |
 * | --destructive      | Red                  | Dark red             | Bright red          | Error/delete actions     |
 * | --border           | Light border         | Dark border          | Medium gray         | Borders, dividers        |
 * 
 * ## Custom Hanafuda Colors
 * 
 * | Token          | Tailwind Class    | Usage                          |
 * |----------------|-------------------|--------------------------------|
 * | --sakura       | text-sakura       | Cherry blossom accents         |
 * | --wisteria     | text-wisteria     | Purple floral accents          |
 * | --chrysanthemum| text-chrysanthemum| Gold floral accents            |
 * | --maple        | text-maple        | Autumn accents                 |
 * | --pine         | text-pine         | Evergreen accents              |
 * | --moon         | text-moon         | Moonlight/glow effects         |
 * | --night        | text-night        | Dark overlay accents           |
 * | --coral        | text-coral        | Primary alias                  |
 * | --teal         | text-teal         | Secondary alias                |
 * | --cream        | text-cream        | Background alias               |
 * 
 * ## Difficulty Colors (themed per mode)
 * 
 * | Token              | Tailwind Class          | Usage              |
 * |--------------------|-------------------------|--------------------|
 * | --difficulty-easy   | text-difficulty-easy    | Easy mode UI       |
 * | --difficulty-medium | text-difficulty-medium  | Medium mode UI     |
 * | --difficulty-hard   | text-difficulty-hard    | Hard mode UI       |
 * 
 * ## Spacing Tokens (CSS custom properties)
 * 
 * | Token           | Value  | Usage                    |
 * |-----------------|--------|--------------------------|
 * | --space-section | 6rem   | Between page sections    |
 * | --space-block   | 2rem   | Between content blocks   |
 * | --space-element | 1rem   | Between elements         |
 * | --space-inline  | 0.5rem | Inline gaps              |
 * 
 * ## Radius Tokens
 * 
 * | Token          | Value    | Tailwind     | Usage              |
 * |----------------|----------|--------------|--------------------|
 * | --radius       | 0.75rem  | rounded-lg   | Default components |
 * | --radius-card  | 0.75rem  | —            | Card elements      |
 * | --radius-pill  | 9999px   | rounded-full | Pills/badges       |
 * | --radius-panel | 1rem     | —            | Large panels       |
 * 
 * ## Gradient Tokens (CSS custom properties)
 * 
 * | Token            | Usage                        |
 * |------------------|------------------------------|
 * | --gradient-cream  | Page background gradient     |
 * | --gradient-coral  | Primary accent gradient      |
 * | --gradient-teal   | Secondary accent gradient    |
 * | --gradient-card   | Card surface gradient        |
 * 
 * ## Shadow Tokens (CSS custom properties)
 * 
 * | Token          | Usage                        |
 * |----------------|------------------------------|
 * | --shadow-soft   | Subtle elevation             |
 * | --shadow-card   | Card resting state           |
 * | --shadow-hover  | Card hover state             |
 * 
 * ## Typography
 * 
 * | Class        | Font              | Usage        |
 * |--------------|-------------------|--------------|
 * | font-display | DM Serif Display  | Headings     |
 * | font-body    | DM Sans           | Body text    |
 * 
 * ## Theme Modes
 * 
 * Three modes supported, toggled via `useTheme()`:
 * - `light` — Warm cream & coral (default)
 * - `dark` — Deep navy & warm coral  
 * - `dark-wcag` — WCAG AAA high-contrast (7:1+ ratios)
 * 
 * ## Usage Rules
 * 
 * 1. NEVER use hardcoded colors (text-red-500, bg-blue-200, #hex, rgb())
 * 2. Always use semantic tokens: text-primary, bg-card, border-border, etc.
 * 3. For custom Hanafuda colors: text-sakura, bg-pine, text-difficulty-easy
 * 4. Use CSS vars for gradients/shadows: var(--gradient-coral), var(--shadow-card)
 * 5. Typography: font-display for headings, font-body (or default) for text
 */

export const DESIGN_TOKENS = {
  colors: {
    semantic: ['background', 'foreground', 'primary', 'secondary', 'accent', 'muted', 'destructive', 'card', 'popover', 'border', 'input', 'ring'] as const,
    hanafuda: ['sakura', 'wisteria', 'chrysanthemum', 'maple', 'pine', 'moon', 'night', 'coral', 'teal', 'cream'] as const,
    difficulty: ['easy', 'medium', 'hard'] as const,
  },
  themes: ['light', 'dark', 'dark-wcag'] as const,
  fonts: {
    display: 'DM Serif Display',
    body: 'DM Sans',
  },
} as const;
