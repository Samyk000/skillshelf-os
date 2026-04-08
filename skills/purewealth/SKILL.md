<!-- SkillShelf_START -->
# PureWealth: Warm Minimalist SaaS UI Design System Skill

## Mission
You are an expert design-system guideline author for the PureWealth UI. Create sophisticated, premium, and calm implementation-ready code that leverages warm minimalism and asymmetrical grid structures for a high-end SaaS feel.

## Brand
The aesthetic is built on "Premium Warmth." It avoids sterile corporate blues in favor of a soft, warm palette (beige, charcoal, pure white) and utilizes deep golden accents (`#FFB347`). The user should feel a sense of elite quality, focus, and modern elegance.

**Key Characteristics:**
- Warm-toned backgrounds (`#FAF9F6`) and deep charcoal text (`#1A1A1A`).
- Asymmetrical bento grid layouts with varying card sizes.
- Liberal use of white space to emphasize high-value content.
- Elegant, sharp typography with subtle tracking/kerning for a premium look.

## Style Foundations
### Base & Surfaces
- **App Background**: Light `#FAF9F6` | Dark `#121212` 
- **Surface Level 1 (Cards)**: Light `#FFFFFF` | Dark `#1E1E1E`
- **Borders**: Light `#EBE8E0` | Dark `#2A2A2A`

### Text
- **Primary**: Light `#1A1A1A` | Dark `#F5F5F5`
- **Muted**: Light `#7C786A` | Dark `#8E8E8E`

### Brand Accents
- **Warm Gold (Primary)**: `#FFB347` (Gradients to `#F9D423`)
- **Success**: `#4A7C59` (Deep Forest Green)
- **Danger**: `#A54B4B` (Muted Crimson)

## Component Families
### Navigation
**Minimalist Top Bar**
- Semi-transparent blur effect (`backdrop-blur-md`).
- Ultra-thin borders.
- Floating design with soft shadows.

### Containers & Cards
- **Asymmetrical Bento Cards**: Use a mix of `row-span` and `col-span` in a CSS grid.
- **Glassmorphism**: Subtle glass overlays for overlays or secondary actions.
- **Radii**: `rounded-2xl` (approx `1rem` / `16px`) for a soft but structured feel.

### Dashboard Elements
- **Soft Gradients**: Only used on primary CTAs or high-value charts.
- **Typography-First Metrics**: Large, elegant font sizes for top-line numbers without heavy container styling.

## Expected Behavior
- **Fluid Grid Rhythm:** Ensure spacing between bento blocks is consistent (e.g., `gap-4`).
- **Subtle Motion:** Hover states should use slow transitions (`duration-500`) to maintain a sense of calm.
- **Responsive Stacking:** Bento grids must collapse logically from multi-column to single-column on mobile.

## Accessibility
- **Contrast Ratios:** Ensure golden accents maintain legibility against charcoal/dark backgrounds.
- **Motion Sensitivity:** Use `prefers-reduced-motion` to disable non-essential animations.

## Rules: Do
- **Do** use large, legible font-weight for primary numbers.
- **Do** prioritize high-quality iconography with thin, consistent line weights.
- **Do** use asymmetrical layouts to break modern monotonous patterns.

## Rules: Don't
- **Don't** use standard "vibrant" colors like bright blue or lime green; stick to the warm palette.
- **Don't** clutter cards with too many elements; one primary focus per card.

## Quality Gates
- **Hard Rule 1:** Is the background the correct warm-toned white (`#FAF9F6`)?
- **Hard Rule 2:** Are structural cards using the `rounded-2xl` radius?
- **Hard Rule 3:** Does the layout feel "intentional" rather than just a regular grid?
<!-- SkillShelf_END -->
