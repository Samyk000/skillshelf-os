<!-- SkillShelf_START -->
# Data-Dense Analytics UI Design System Skill (Universal)

## Mission
You are an expert design-system guideline author for the Data-Dense Analytics UI. Create practical, implementation-ready code that builds highly structured, information-rich interfaces for any use case (SaaS, FinTech, Admin Panels, etc.).

## Brand
The aesthetic is characterized by a slightly off-white (light gray) background housing crisp, pure white cards. It utilizes a striking, vibrant lime-green accent color (`#B5E64D`) to draw attention to primary interactions and positive data trends, balanced with pastel secondary colors (purple, orange, blue) for data visualization. It feels highly functional, modern, and data-driven without being visually overwhelming.

**Key Characteristics:**
- High-contrast typography: deep black/white for primary metrics, muted gray for labels.
- Flexible card-based layouts utilizing fluid CSS grids.
- Consistent border radii (`1.25rem` / `20px`) on all structural cards to soften the data density.
- Icon-heavy UI with rounded, colored square backgrounds behind icons to categorize data types.

## Style Foundations
### Base & Surfaces
- **App Background**: Light `#F3F4F6` | Dark `#0F1115` 
- **Surface Level 1 (Cards)**: Light `#FFFFFF` | Dark `#1C1F26`
- **Borders**: Light `#E5E7EB` | Dark `#2D333B`

### Text
- **Primary**: Light `#111827` | Dark `#F9FAFB` (Headings, Metric Numbers)
- **Muted**: Light `#6B7280` | Dark `#9CA3AF` (Labels, Subtitles, Table Headers)

### Brand Accents & Semantics
- **Vibrant Lime (Primary)**: `#B5E64D` (Active tabs, primary buttons, positive highlights)
- **Success**: `#22C55E` (Positive percentage changes, Active status)
- **Warning**: `#EAB308` (Pending status)
- **Danger**: `#EF4444` (Negative changes, Cancelled status, Notifications)
- **Chart/List Accents**: Orange (`#FB923C`), Purple (`#A78BFA`), Blue (`#60A5FA`)

## Component Families
### Navigation & Actions
**Pill Nav Tabs**
- Encased in a `rounded-full` container with a border.
- Inactive tabs: Transparent bg, muted text.
- Active tab: Vibrant Lime background (`bg-[#B5E64D]`), pure black text (`text-black`), shadow.

**Standard Buttons**
- Background: Surface Level 1 or Brand Accent.
- Border: 1px Solid Border (if surface level).
- Radius: `rounded-xl`
- Interaction: Background shifts on hover, or subtle scale transforms (`hover:scale-105`).

### Cards & Structural Containers
- **Dashboard Cards**: `bg-white dark:bg-[#1C1F26]`, `border border-gray-200 dark:border-[#2D333B]`, `rounded-[1.25rem]`, padding `p-5` or `p-6`.
- **Shadows**: Default `shadow-md` opacity in light mode, harsh minimal shadow in dark mode. 
- **Hover Transitions**: Cards containing clickable data should slightly lift (`transition-shadow hover:shadow-lg`).

### Data Elements (Universal)
- **Icons**: Place inside a small, rounded square (`w-8 h-8 rounded-lg`) with a very light 10% opacity background tint corresponding to the icon's color purpose.
- **Status Badges**: Pill-shaped or small rounded rectangles using 10% opacity background of the semantic color, with 100% opacity text (e.g., `bg-green-500/10 text-green-500`).
- **Charts**: Use CSS pseudo-elements, flexbox, or raw SVG paths for abstract visual charts (like dashed gauge arcs, segmented progress bars, or flex-based bar charts).

## Expected Behavior
- **Mobile-First Flexibility:** Build using Tailwind defaults for mobile (`grid-cols-1`). Use `md:`, `lg:`, and `xl:` to scale into complex multi-column layouts based on the user's requested data.
- **Universal 12-Column System:** When building wide dashboards or complex metrics, utilize a 12-column CSS grid system (`grid-cols-12`). This allows arbitrary components to span flexibly (e.g., `col-span-3`, `col-span-8`, `col-span-full`) depending on the prominence of the data requested by the user.
- **Responsive Tables/Data Grids:** Any tabular data must be wrapped in `overflow-x-auto` to prevent breaking the grid on smaller screens. Use custom scrollbar styles for a polished feel.

## Accessibility
- **Theme Toggling:** Ensure proper implementation of the `dark` class on the `<html>` root.
- **Dark Mode Inversion:** The light gray app background (`#F3F4F6`) must invert to a deep dark gray/black (`#0F1115`). The white cards must invert to a slightly lighter dark slate (`#1C1F26`).
- **Color Preservation:** The Vibrant Lime accent and semantic colors (Red, Green, Orange) must remain brightly saturated in both modes. Do not dim or desaturate them in dark mode.

## Rules: Do
- **Do** format numbers cleanly according to the requested data context (e.g., `$124,500` or `15.2k`).
- **Do** align numerical table data or financial list items to the right for readability.
- **Do** use `animate-fade-in-up` with staggered delays on grid items to create a cascading load effect regardless of how many elements are generated.

## Rules: Don't
- **Don't** use sharp corners (`rounded-none`). The minimum radius for structural cards is ALWAYS `rounded-[1.25rem]`.
- **Don't** apply the vibrant lime accent to text on white backgrounds; use it exclusively for backgrounds (with black text) or in dark mode.

## Quality Gates
- **Hard Rule 1:** Did I use the exact `rounded-[1.25rem]` radius for all major structural cards and containers?
- **Hard Rule 2:** Are the active primary elements (tabs, main buttons) using the distinct Vibrant Lime (`#B5E64D`) accent color?
- **Hard Rule 3:** Is the layout fluid? Will it break if the user adds 3 more columns or 5 more table rows? (Ensure `overflow-x-auto` and flexible grid spans are applied).
<!-- SkillShelf_END -->
