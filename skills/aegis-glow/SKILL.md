<!-- SkillShelf_START -->
# Obsidian Glow Fintech Design System Skill (Universal)

## Mission
Create practical, full-fledged, implementation-ready code that builds highly premium, metallic, and institutional financial interfaces.

## Brand
Obsidian Glow Fintech UI. The aesthetic is luxurious and deeply textured. It utilizes cinematic lighting effects in copper, rust, and bright orange. It feels wealthy, secure, and technologically advanced.

**Key Characteristics:**
- **Dual-Theme Parity:** The dark theme features deep blacks (`#09090B`) with glowing copper shadows. The light theme features an ultra-premium "Alabaster" off-white (`#F5F5F7`) with crisp white cards (`#FFFFFF`) and softer, warmer lens flares.
- **Cinematic Lens Flares:** Backgrounds feature distinct, angled beams of light (`transform: rotate(-15deg)`) and intense radial edge glows rather than just soft ambient blurs.
- **Flat-Scaled Layering:** Instead of steep 3D rotations, hero graphics overlap cards by scaling background elements (`scale-90`) and offsetting them along the X and Y axes, creating a tight, precise stack.
- **Intense Edge Lighting:** Premium/Highlighted cards feature intense, concentrated glow effects at their base, simulating a strong under-light.

## Style Foundations

### Base & Surfaces
- **App Background**: Dark `#09090B` | Light `#F5F5F7`
- **Surface Cards**: Dark `#121214` (or `#18181B` for depth) | Light `#FFFFFF`
- **Borders**: Dark `rgba(255, 255, 255, 0.08)` | Light `rgba(0, 0, 0, 0.06)`

### Text
- **Primary**: Dark `#FFFFFF` | Light `#111827` (gray-900)
- **Muted**: Dark `#A1A1AA` | Light `#6B7280` (gray-500)

### Brand Accents (The Metallic Palette)
- **Copper**: `#D9654B` (Primary highlights, glowing shadows)
- **Rust/Ruby**: `#8C3B2D` (Deep backgrounds for premium cards)
- **Gold**: `#E6B981` (Secondary accents, chart lines)
- **Glow Accent**: `#FF8A66` (Intense bottom edge lighting)

## 3. Typography Rules

### Hierarchy
| Role | Font (Tailwind) | Size | Weight | Line Height | Tracking |
|------|-----------------|------|--------|-------------|----------|
| Hero Display | `font-sans` | 4rem to 5rem | 600 (`font-semibold`) | 1.1 | `tracking-tight` |
| Section Title | `font-sans` | 2.25rem to 3rem | 600 (`font-semibold`) | 1.2 | `tracking-tight` |
| Card/Plan Title | `font-sans` | 1.5rem (`text-2xl`) | 600 (`font-semibold`) | 1.4 | Normal |
| Body Text | `font-sans` | 1rem (`text-base`) | 500 (`font-medium`) | 1.6 | Normal |
| Labels/Headers | `font-sans` | 0.75rem (`text-xs`) | 600 (`font-semibold`) | 1.5 | `tracking-wider`, `uppercase` |

## Component Families

### Buttons & Inputs
- **Primary CTA**: `rounded-full`, high contrast, `font-semibold`. In Light mode, use black with white text. In Dark mode, use white with black text.
- **Input Pills**: Flex containers with `backdrop-blur-xl`, `border`. Inside, place the input field and a CTA button.

### Cards & Structural Containers
- **Standard Cards**: Use `rounded-2xl` or `rounded-[2rem]`. In dark mode: `bg-[#121214]`, `border-white/5`. In light mode: `bg-white`, `border-gray-200`.
- **Metallic Hero Cards**: Apply linear gradients (e.g., `from-[#3f3f46] to-[#09090b]` in dark, `from-white to-gray-100` in light) to simulate metal credit cards. Add a "shine" pseudo-element overlay.
- **Premium Pricing Card**: This card ALWAYS remains dark, even in Light Mode, to emphasize its premium nature. Use a rich red/copper gradient (`linear-gradient(180deg, #18181B, #2D1412, #8C3B2D)`). 
- **The Intense Glow**: Add an absolute positioned div at the `bottom-0` of the premium card with `bg-brand-accent-glow blur-[40px] opacity-60` to create a blinding bottom light effect.

### Ambient Lighting & Backgrounds
- Use sharp, angled linear gradients (`rotate(-15deg)`) to create cinematic light beams.
- Ensure light beams adapt to Light Mode: they should become soft, warm peach/orange overlays rather than stark white flares.
- Use a circuit pattern background (`circuit-bg`) generated via CSS linear-gradients masked with a radial gradient.

## Expected Behavior

- **Full-Fledged Delivery:** Ensure output contains a complete page narrative. Nav -> Hero (with precise layered cards) -> Logo Cloud -> Features Dashboard Snippets -> Pricing Cards -> Comparison Table -> Footer.
- **Flat-Scaled Layering:** When creating 3D card stacks, use `translate-x` and `translate-y` with `scale-90` to overlap cards cleanly.
- **Comparison Tables:** Minimalist design. Only horizontal borders (`border-b`). Clean, generous padding (`py-4`). Left-aligned features, center/left-aligned checks/data. Include top headers with styled pricing card summaries.

## Accessibility

- **Theme Toggling:** Implement Javascript to toggle the `dark` class on the `<html>` root.
- **Light Mode Adaptation:** Dark surfaces become crisp white (`#FFFFFF`), glowing copper shadows become soft gray drop-shadows (`shadow-card-soft`), and white text becomes deep gray (`#111827`).
- **Contrast Check:** WCAG 2.2 AA. Use `text-gray-500` or `text-white/70` for muted text, ensuring it is legible against its respective background.

## Rules: Do
- use `backdrop-blur` heavily on overlapping elements.
- build small UI mockups inside feature section floating cards.
- maintain the dark styling of the Premium pricing card globally.

## Rules: Don't
- avoid 3D skewing or rotation for hero credit cards.
- avoid bright primary colors (pure blue, bright green).

## 8. Agent Prompt Guide
*Self-Prompting Examples for Universal Generation:*
- "Construct a Hero section. Huge H1 centered. An email input pill with a 'Request Access' button inside it. Below it, a composition of 3 overlapping credit cards using flat-scaled layering (`scale-90`, `translate-x`). Put an angled cinematic light beam behind them."
- "Build a Pricing Section. Two cards. The left card is standard (white in light mode, dark gray in dark mode). The right card is the Premium tier: it MUST remain dark in both themes. Use a rich red/copper linear gradient background with an intense blurred light div at the bottom edge."

## 9. Quality Gates
- **Hard Rule 1:** Did I build a full-fledged page with multiple sections (Hero, Features, Pricing, Table, Footer) rather than a single snippet?
- **Hard Rule 2:** Is the Light Theme correctly implemented using an off-white background (`#F5F5F7`) and crisp white (`#FFFFFF`) cards, preventing a "muddy" or flat look?
- **Hard Rule 3:** Does the Premium Pricing card utilize the intense, blurred bottom-edge glow effect?

<!-- SkillShelf_END -->