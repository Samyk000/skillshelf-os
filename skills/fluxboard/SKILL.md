<!-- SkillShelf_START -->
# FluxBoard: Premium Kanban Design System Skill

## Mission
You are an expert design-system guideline author for the FluxBoard UI. Create moody, high-contrast, and focused implementation-ready code that leverages the "Neo-Dark Bento" aesthetic for productivity and project management tools.

## Brand
The aesthetic is "Deep Productivity." It uses a base of ultra-dark warm grays (`#0A0A0A`) paired with high-contrast, vibrant bento blocks in pastel and neon tones. It's designed to minimize distraction while making progress feel visually rewarding.

**Key Characteristics:**
- Deep, low-saturation dark backgrounds with subtle warm undertones.
- High-contrast card elements with vibrant "Productivity Glows."
- Tight, geometric grid structures (Bento style).
- Emphasis on "Status as Color" (Green = Done, Blue = In Progress, Purple = Backlog).

## Style Foundations
### Base & Surfaces
- **App Background**: Dark `#0A0A0A` | Light `#F5F5F3`
- **Surface Level 1 (Kanban Columns)**: Dark `#121212` | Light `#FFFFFF`
- **Surface Level 2 (Task Cards)**: Dark `#1D1D1D` | Light `#FAF9F6`
- **Borders**: Dark `#222222` | Light `#E0E0E0`

### Text
- **Primary**: Dark `#FFFFFF` | Light `#1A1A1A`
- **Muted**: Dark `#888888` | Light `#707070`

### Brand Accents (Vibrant Blocks)
- **Flux Blue**: `#3B82F6` (Active tasks)
- **Flux Purple**: `#A855F7` (Backlog/Ideas)
- **Flux Emerald**: `#10B981` (Completed)
- **Flux Rose**: `#F43F5E` (Urgent/Blocked)

## Component Families
### Navigation
**Minimalist Sidebar**
- Collapsible design.
- Active states using "Productivity Glows" (subtle outer shadows of the accent color).

### Kanban / Grid Elements
- **Bento Columns**: Fixed width on desktop, horizontal scroll on mobile. Semi-transparent headers.
- **Flux Task Cards**: `bg-[#1D1D1D]`, `border border-white/5`, `rounded-xl`, `p-4`, with a 4px left-border accent corresponding to the status.

### Status Indicators
- **Glow Dots**: Small circles with an outer `box-shadow: 0 0 10px currentcolor` to indicate real-time activity.

## Expected Behavior
- **Information Density:** High utility, low clutter. Use tooltips for secondary information.
- **Drag-and-Drop Visuals:** Cards should tilt slightly (`rotate-2`) and gain a glowing border when "lifted" or "dragged."
- **Ambient Focus:** The background should remain static and dark to keep focus on the vibrant task cards.

## Accessibility
- **WCAG Compliance:** Ensure vibrant accent colors maintain proper contrast for status labels (use black text on light accents, white text on dark accents).
- **Tab Focus:** High-visibility focus rings for keyboard navigation.

## Rules: Do
- **Do** use consistent 16px (`1rem`) gaps between bento containers.
- **Do** apply a subtle `inner-shadow` to containers to create depth.
- **Do** prioritize crisp, monochromatic icons with thin strokes.

## Rules: Don't
- **Don't** use standard bright-white text for everything; use `#D1D1D1` for general readability to reduce eye strain.
- **Don't** use rounded corners larger than `1rem` for task cards; keep them structured.

## Quality Gates
- **Hard Rule 1:** Are the primary columns using the Deep Dark Gray (`#121212`) background?
- **Hard Rule 2:** Do active tasks have the signature "Productivity Glow"?
- **Hard Rule 3:** Is the layout 100% Bento (structured, grid-aligned, high-contrast)?
<!-- SkillShelf_END -->
