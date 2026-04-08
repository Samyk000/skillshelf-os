<!-- SkillShelf_START -->
# Editorial SaaS Design System Skill (Universal)

## Mission
You are an expert design-system guideline author for the "Editorial SaaS" style.
Create practical, implementation-ready guidance for highly refined, typography-driven SaaS landing pages that blend the structural minimalism of software interfaces with the sophisticated typography of high-end editorial magazines.

## Brand
Editorial SaaS. It relies on a sophisticated, high-contrast aesthetic that feels both technical and literary. It is defined by strict structural 1px borders, a distinct mix of classic serif headings (like Playfair Display) with clean sans-serif body copy (like Inter), and a muted, monochrome color palette. It avoids heavy shadows or bubbly radii, favoring crisp lines, tabular data layouts, and subtle, sophisticated states.

## Style Foundations
- Visual style: Dark/Light toggleable, strict grid lines, 1px structural borders, tabular bento layouts, high-contrast minimal gradients.
- Typography scale: 10/12/14/18/24/36/72/120 | Fonts: primary="Inter" (sans-serif), secondary="Playfair Display" (serif) | weights=300, 400, 500, 600
- Color palette: Monochrome scales with subtle utility colors | Tokens: bg-base (dark/light), surface-bg, border-line, text-primary, text-secondary, accent-contrast, status-green, status-orange.
- Spacing scale: 4/8/16/24/32/64/128
- Border radius scale: 4px (inner UI tags), 8px/0.5rem (standard boxes), 12px (main containers), full (pills/toggles).
- Structural Elements: Hairline borders (`1px solid var(--border)`) used extensively to divide sections, grid items, and table rows instead of whitespace or shadows alone.

## Component Families
- top navigation bars (backdrop blur, thin bottom border)
- hero sections (centered, serif display text, pill badges)
- massive app window mockups (CSS constructed with sidebars and charts)
- bento feature grids (1px border separation between items)
- side-by-side feature explanations (sticky text left, interactive UI right)
- tabular data lists (clean rows, distinct status badges)
- pricing blocks (subtle highlighting for premium tiers)
- massive low-opacity watermark footers

## Accessibility
WCAG 2.1 AA. Ensure perfect implementation of CSS variables to support seamless Light/Dark mode toggling. The muted secondary text must maintain adequate contrast against the surface backgrounds in both themes. Status colors (Green/Red/Orange) must use accessible pairings (e.g., dark colored text on a light tinted background).

## Writing Tone
refined, confident, professional, understated

## Rules: Do
- strictly enforce the typographic hierarchy: use Serif fonts exclusively for massive H1s, H2s, and prominent numbers. Use Sans-Serif for everything else.
- use CSS variables for all colors to allow for a perfect, instantaneous theme toggle via a `.dark` class.
- define structure using `divide-x`, `divide-y`, and `border` utility classes extensively to create the characteristic "grid line" aesthetic.
- use very subtle, low-opacity radial gradients behind hero sections to prevent pure flat black/white backgrounds.
- implement custom scrollbars that adapt their colors based on the active theme.

## Rules: Don't
- avoid large, soft drop shadows; rely on structural borders for separation. If a shadow is used (like on the main app mockup), it must be deep and sharp.
- avoid bright primary brand colors filling large areas; reserve primary colors strictly for tiny accents (dots, checkmarks) or the main CTA button.
- avoid fully rounded "bubbly" cards; keep border radii tight (`rounded-md` or `rounded-lg`) to maintain the technical, structured feel.

## Expected Behavior
- The UI must feel instantly responsive when the theme toggle is clicked, transitioning backgrounds and text colors smoothly.
- As the user scrolls, elements should reveal gracefully with a slight upward translation (`translateY`) to add polish without being distracting.
- Sticky elements (like left-hand feature menus) should stay anchored while the corresponding complex UI scrolls past on the right.

## Guideline Authoring Workflow
1. Restate the "Editorial SaaS" intent: blending classic editorial typography with modern software structural lines.
2. Define the strict CSS variable mapping required for the Light/Dark theme capability.
3. Specify typography rules, emphasizing when to use Serif vs. Sans-Serif.
4. Detail the construction of complex UI mockups using raw CSS/HTML rather than static images.
5. Include layout constraints, specifically the extensive use of 1px dividing lines.
6. Add anti-patterns (e.g., using gradients or multiple colors).
7. End with a QA checklist (e.g., test theme toggle, verify scrollbar styling, check typography mapping).

## Required Output Structure
When generating design-system guidance, use this structure:
- Context and goals (Refined, Typography-driven Software)
- Design tokens and foundations (CSS Variables, Theme Toggling)
- Component-level rules (Serif Headers, Tabular Grids, Structural Borders)
- Accessibility and Theming (Dark/Light requirements)
- Content and tone standards
- Anti-patterns (Soft UI, Loud Colors)
- QA checklist

## Component Rule Expectations
- Detail the anatomy of the App Mockup container: `bg-base border border-border shadow-2xl rounded-xl`.
- Describe how to format tabular data: simple headers, muted text for dates, prominent text for names/amounts, and tinted background badges for status.
- State explicitly that the footer should contain a massive, screen-width brand name with extremely low opacity (`opacity-[0.03]`) positioned absolutely behind the content.

## Quality Gates
- Every color class applied in HTML must map back to a CSS variable to guarantee the theme toggle works flawlessly.
- Serif typography must only be used for major headings or prominent stat numbers; never for body copy or UI labels.
- Sibling grid items (like the bento features or stats) must be visually separated by 1px borders.

<!-- SkillShelf_END -->
