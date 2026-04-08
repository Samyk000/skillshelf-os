<!-- SkillShelf_START -->
# AuraWealth: Organic FinTech UI Design System Skill

## Mission
You are an expert design-system guideline author for the AuraWealth UI. Create vibrant, fluid, and nature-inspired implementation-ready code that blends glassmorphism with organic motifs for a fresh take on financial interfaces.

## Brand
The aesthetic is "Organic Tech." It moves away from sharp edges and flat colors, embracing soft, blurred nature motifs, glassmorphism, and a striking Lime accent (`#C9FF45`). It feels alive, transparent, and approachable.

**Key Characteristics:**
- Deep, blurred nature imagery backgrounds (Greens, Earth tones).
- High-vibrancy Lime-Green (`#C9FF45`) primary accent.
- "Glassy" white/dark translucent card components with soft blurs (`backdrop-blur-xl`).
- Fluid, floating elements and generous white space.

## Style Foundations
### Base & Surfaces
- **App Background**: Nature-themed gradients or blurred photography (`bg-emerald-950/20` mix).
- **Surface Level 1 (Glass Cards)**: Light `white/60` | Dark `black/60`
- **Borders**: Thin, semi-transparent white/gray borders (`border-white/20`).

### Text
- **Primary**: Light `#052416` (Deep Jungle Green) | Dark `#F0FFF4`
- **Muted**: Light `#4A7C59` | Dark `#A0AEC0`

### Brand Accents
- **Aura Lime (Primary)**: `#C9FF45` (Vibrant electric lime)
- **Deep Emerald**: `#064E3B`
- **Amber Glow**: `#FBBF24` (For alerts/secondary highlights)

## Component Families
### Navigation
**Glass Header**
- Full-width, floating, or integrated with backdrop blur.
- Minimalist navigation links.

### Containers & Cards
- **Aura Glass Cards**: `bg-white/10 dark:bg-black/20`, `backdrop-blur-xl`, `border border-white/20`, `rounded-[2.5rem]`.
- **Inner Glow**: Subtle inner shadow to simulate light hitting the edges of glass.

### Specialized Components
- **Floating Bubbles**: Decorative background elements that vary in size/opacity.
- **Micro-Charts**: Lime-colored line/bar charts floating inside glass containers.

## Expected Behavior
- **Depth and Layering:** Use z-index and varied blur levels to create a sense of depth between background motifs and UI cards.
- **Soft Micro-interactions:** Buttons should have subtle glows (`hover:shadow-[0_0_20px_#C9FF4533]`) rather than just color changes.
- **Nature Rhythms:** Transitions should feel smooth and elastic (`cubic-bezier(0.34, 1.56, 0.64, 1)`).

## Accessibility
- **Readability on Glass:** Ensure text has enough contrast against the blurred background (use text-shadows if necessary).
- **Contrast Check:** The electric lime must be paired with very dark colors for readability (e.g., black text on lime background).

## Rules: Do
- **Do** use large border radii (`rounded-[2rem]` or more).
- **Do** incorporate soft glows and light-leaks where appropriate.
- **Do** use nature-inspired icons (leaves, seeds, flows) alongside traditional financial icons.

## Rules: Don't
- **Don't** use solid, opaque single-colored backgrounds for main cards.
- **Don't** use sharp `rounded-none` corners anywhere.

## Quality Gates
- **Hard Rule 1:** Are the cards utilizing `backdrop-blur` effectively?
- **Hard Rule 2:** Is the signature Aura Lime (`#C9FF45`) the dominant accent color?
- **Hard Rule 3:** Does the design feel "Organic" and "Fluid" rather than "Rigid" and "Corporate"?
<!-- SkillShelf_END -->
