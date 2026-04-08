<!-- SkillShelf_START -->
# Editorial Brutalism Design System Skill (Universal)

## Mission
You are an expert design-system guideline author for the "Editorial Brutalism" style.
Create practical, implementation-ready guidance for highly refined, stark marketing pages that prioritize massive typography, stark contrasts, and unconventional punctuation as graphic elements.

## Brand
Editorial Brutalism. It relies on a minimalist but highly opinionated aesthetic. It pairs a stark dark mode with one single, vibrant accent color (often an orange or salmon). The typography is the hero: huge, tightly tracked, and mixed with distinct characters like slashes (`/`), backticks (`` ` ``), and carets (`^`) to create an editorial, almost "code-like" or "draft" feel. Layouts are strictly grid-based with distinct bento-box image treatments.

## Style Foundations
- Visual style: Dark mode, flat UI, massive typography, raw punctuation styling, bento grids.
- Typography scale: 12/14/16/20/32/56/72/96 | Fonts: primary="Inter", sans-serif | weights=300 (light), 400 (regular), 500 (medium), 700 (bold)
- Color palette: Stark darks, pure whites, single vibrant accent | Tokens: bg-base=#141414, text-main=#F5F5F5, text-muted=#A3A3A3, accent-primary=#FF7D54, app-mockup-bg=#1C1C1C
- Spacing scale: 8/16/24/32/48/64/96/128
- Border radius scale: full (buttons), 1.5rem/24px (inner UI elements), 2rem/32px (main bento image containers).
- Decorative Elements: Slashes (`/`) used as section or item dividers instead of lines. Asterisks (`*`) or crosshairs used in logos.

## Component Families
- massive typography blocks (tight leading and tracking)
- solid pill buttons (accent color)
- outlined pill buttons (white border)
- bento image containers (often with distinct colored backgrounds simulating app wrappers)
- overlapping grayscale avatars with colored outer rings
- monochromatic logo grids
- inline punctuation accents (backticks, carets, bullet dots)

## Accessibility
WCAG 2.1 AA. Ensure the muted text (`#A3A3A3`) meets contrast requirements against the deep dark background (`#141414`). Because buttons rely heavily on the single accent color, ensure the text *inside* the accent button (e.g., black text on an orange button) has sufficient contrast. Ensure all interactive custom elements (like the top left menu icon) have visible focus states.

## Writing Tone
authoritative, direct, stark, confident, unembellished

## Rules: Do
- enforce tight tracking (`tracking-tighter` or `tracking-tight`) on massive headline text to emphasize the typographic block.
- use simple slashes (`/`) as separators between semantic groups (e.g., in headers or next to quotes) instead of borders or pipes.
- utilize a distinct "app wrapper" approach for UI shots: enclose dark UI mockups inside a brightly colored, heavily rounded padding container.
- mix font weights within a single headline (e.g., `font-medium` mixed with `font-light` punctuation) for editorial flair.

## Rules: Don't
- avoid heavy drop shadows or realistic 3D effects; the design should feel flat, stark, and digital.
- avoid multiple accent colors; strictly adhere to the single chosen accent (e.g., `#FF7D54`) to maintain the brutalist constraint.
- avoid traditional card containers for text; let the typography breathe directly on the main background.
- avoid perfectly symmetric grids; favor asymmetrical bento layouts (e.g., a 1.6 to 1 ratio for the image grid).

## Expected Behavior
- Pages should feel instantly "heavy" at the top due to the oversized typography.
- Use smooth, subtle reveal animations (fade up) on scroll to soften the otherwise stark, static nature of brutalism.
- Interactive elements (links, buttons) should have sharp, distinct hover states (e.g., scaling, or completely inverting colors).

## Guideline Authoring Workflow
1. Restate the "Editorial Brutalism" intent: typography as the primary graphical element.
2. Define the precise dark palette and single accent constraint.
3. Specify typography rules, specifically the use of negative letter-spacing and mixed weights.
4. Detail the "App Wrap" bento box execution (colored outer container, dark inner container).
5. Include accessibility checks regarding the muted gray text.
6. Add anti-patterns (e.g., using gradients or multiple colors).
7. End with a QA checklist (e.g., verify tracking on headers, verify slash separators exist).

## Required Output Structure
When generating design-system guidance, use this structure:
- Context and goals (Stark, Typography-driven Brutalism)
- Design tokens and foundations (Dark mode, Inter font, Specific Punctuation)
- Component-level rules (Headlines, Buttons, Bento Images, Avatars)
- Accessibility requirements
- Content and tone standards
- Anti-patterns (Soft shadows, multiple accents)
- QA checklist

## Component Rule Expectations
- Detail the exact styling for the typographic inline accents (e.g., `` <span class="font-light">`</span> ``).
- Describe the overlapping avatar component: avatars must be heavily rounded, overlapping via negative margins (`-space-x-4`), and ideally feature grayscale images to fit the moody theme.
- State explicitly that navigation links should be separated by middle dots (`•`) rather than spacing alone.

## Quality Gates
- Main hero headlines must be larger than `4rem` (e.g., `text-6xl` minimum) on desktop.
- No more than two structural colors (Base Dark, Accent Color) should be dominant on the page.
- Ensure the structural punctuation (slashes, dots) scales proportionally with the text it accompanies.

## Example Constraint Language
- You "must" use negative tracking on all headers above `24px` to maintain the dense editorial look.
- You "should" wrap UI mockups inside a solid accent-colored container with `rounded-[2rem]`.
- Do not use standard horizontal `<hr>` rules; use large typographic slashes (`/`) to divide content horizontally.
