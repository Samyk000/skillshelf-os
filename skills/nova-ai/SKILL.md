<!-- SkillShelf_START -->
# Radiant Soft-Glass AI Design System Skill (Universal)

## Mission
Create practical, implementation-ready code that builds airy, consumer-friendly, full-fledged SaaS interfaces.

## Brand
Radiant Soft-Glass AI UI. The aesthetic is characterized by a central "sunburst" radiant gradient background, floating 3D-like glassmorphic UI cards, thick app-like viewport frames, and a highly rounded, approachable design language. It uses a signature warm "AI Spark" gradient (pink to orange) to highlight intelligent features.

**Key Characteristics:**
- **App Frame:** The main viewport has a thick solid border (white in light mode, deep black in dark mode) acting as a device frame, wrapping a `rounded-[3rem]` inner radiant background.
- **Floating Composition:** UI elements in hero sections are broken down into small, isolated cards that overlap and float out of sync to create z-axis depth.
- **Comprehensive Structure:** Always generate full pages (Nav, Hero, Feature Bento Grids, Pricing, Footer) rather than just single snippets.
- **Soft Shadows:** Avoid harsh lines; rely on soft, diffuse drop shadows to lift elements off the page.

## Style Foundations

### Base & Surfaces
- **Outer Frame**: Light `#FFFFFF` | Dark `#020617`
- **Radiant Background (Top)**: Light `#E6F0FF` | Dark `#0F172A`
- **Radiant Background (Bottom)**: Light `#FFF1EB` | Dark `#1E1B4B`
- **Surface Cards**: Light `#FFFFFF` | Dark `#1E293B`
- **Borders**: Light `#F1F5F9` | Dark `#334155`

### Text
- **Primary**: Light `#0F172A` | Dark `#F8FAFC` (Headings, data values)
- **Muted**: Light `#64748B` | Dark `#94A3B8` (Subtitles, labels)

### Brand Accents
- **AI Spark Gradient**: `linear-gradient(135deg, #EC4899, #F97316, #FBBF24)`
- **Primary Buttons**: Light `#0F172A` | Dark `#FFFFFF`

## 3. Typography Rules

### Hierarchy
| Role | Font (Tailwind) | Size | Weight | Line Height | Tracking |
|------|-----------------|------|--------|-------------|----------|
| Hero Display | `font-sans` | 4.5rem to 5.5rem | 900 (`font-black`) | 1.05 | `tracking-tighter` |
| Section Title | `font-sans` | 3rem (`text-5xl`) | 900 (`font-black`) | 1.1 | `tracking-tight` |
| Sub-heading | `font-sans` | 1.125rem (`text-lg`) | 500 (`font-medium`) | 1.6 | Normal |
| Card Title | `font-sans` | 1.5rem (`text-2xl`) | 700 (`font-bold`) | 1.2 | Normal |
| UI Label | `font-sans` | 0.875rem (`text-sm`) | 600 (`font-semibold`) | 1.5 | Normal |

## Component Families

### Buttons & CTAs
- **Primary CTA**: Fully rounded (`rounded-full`), deep contrast (Black in light mode, White in dark mode), firm shadow. Hover states slightly lift (`-translate-y-1`).
- **Secondary CTA**: `bg-white dark:bg-slate-800`, `border-gray-200 dark:border-white/10`, `rounded-full`. 
- **Nav Links**: Muted text, no background, hover opacity shifts. `backdrop-blur-md` containers for the header.

### Cards & Structural Containers
- **Radius**: Highly rounded: `rounded-[2.5rem]` for main bento/feature cards.
- **Shadows**: Extremely soft and diffuse: `shadow-[0_20px_50px_-12px_rgba(15,23,42,0.1)]`. In dark mode, replace with a heavy black shadow `rgba(0,0,0,0.6)`.
- **Pricing Cards**: Highlight the middle/Pro tier using the AI Spark Gradient as a border (`border-[4px]`) and a glowing inner shadow.

### Animations & Graphics
- **Floating Effect**: Apply CSS keyframe animations like `animate-float` with staggered delays (`1.5s`, `3s`) to floating showcase cards.
- **Gradients**: Use `text-transparent bg-clip-text bg-gradient-to-r` to highlight specific magic words in headings.
- **Icons**: Emphasize AI features with a tiny rotating "spark" SVG icon colored with the AI Spark Gradient.

## Expected Behavior

- **Full-Fledged Delivery:** Ensure output contains a complete page narrative. Hero -> Logo Cloud -> Features (Bento Grid) -> Pricing -> Footer.
- **Central Alignment:** Hero sections are strictly center-aligned (`items-center text-center`) to draw the eye down into the floating card composition.
- **Mobile-First Safety:** Absolute positioned floating cards in the Hero MUST be hidden on mobile (`hidden md:flex`) to prevent breaking the viewport and causing horizontal scrolling.
- **Framed Canvas:** The `body` should wrap its content in a padded container (`p-2 sm:p-4`) containing a `min-h-screen` inner div with the `radiant-bg` and thick borders.

## Accessibility

- **Theme Toggling:** Implement Javascript to toggle the `dark` class on the `<html>` root.
- **Background Shift:** The sunburst radiant background MUST transition from light, airy pastels (blue to peach) to deep, cosmic night colors (slate to deep indigo).
- **Contrast Check:** WCAG 2.2 AA. The floating cards must contrast strongly with the radiant background. Do not use pure black for cards in dark mode; use `#1E293B` to maintain the soft aesthetic. Ensure the AI gradient text is legible in both modes.

## Rules: Do
- populate Feature Cards with mini-UI mockups.
- use `backdrop-blur` on top navigation bars.
- use `text-balance` on large headings.

## Rules: Don't
- avoid sharp corners (`rounded-none` or `rounded-md`).
- avoid single-section snippets; deliver full pages.

## 8. Agent Prompt Guide
*Self-Prompting Examples for Universal Generation:*
- "Construct a hero section: Center aligned. H1 uses tracking-tighter, font-black. Create a composition of 5 overlapping floating cards (`animate-float` with staggered delays). Hide the peripheral cards on mobile."
- "Create a feature bento grid: 3 columns. Span the first card 2 columns. Inject abstract UI mockups (a chat bubble sequence) inside the card body. Use `rounded-[2.5rem]`."
- "Build a 3-tier pricing section. Highlight the middle tier with an AI Spark Gradient border and a glowing CTA button."

## 9. Quality Gates
- **Hard Rule 1:** Did I build a full-fledged page with multiple sections (Hero, Features, Pricing, Footer)?
- **Hard Rule 2:** Does the main container have the thick outer frame and highly rounded inner corners (`rounded-[3rem]`)?
- **Hard Rule 3:** Are the absolute-positioned floating cards hidden on mobile (`hidden md:flex`) to prevent horizontal scrolling?

<!-- SkillShelf_END -->