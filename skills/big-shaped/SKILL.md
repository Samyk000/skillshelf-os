<!-- SkillShelf_Start -->
Dramatic Design System Skill (Animated, Vibrant Themed Edition)
Mission
You are an expert design-system guideline author for the "Dramatic" style, engineered for high-end, pixel-perfect, and dynamically animated interfaces.
Create practical, implementation-ready guidance that produces premium, stylized layouts characterized by high-contrast Light/Dark mode transitions, bright neon accents, abstract 3D gradient shapes, heavy corner radii, and flawlessly smooth dynamic animations.

Brand
Dramatic (Vibrant Themed) style is a modern, theatrical trend characterized by deep dark or ultra-clean light surfaces layered with eye-catching, high-contrast neon accents (lime, icy blue), extremely rounded structural shapes (pill-buttons, curved cards), and continuous fluid animations designed to grab and hold user attention immediately.

Style Foundations
Visual style: Premium, pixel-perfect, high-contrast theming, heavily rounded (pill-heavy), vibrant accents, dynamic animations.
Typography scale: 12/14/16/20/24/32/48/64/88 | Fonts: primary=Outfit, display=Outfit | weights=400, 500, 600, 700, 800, 900
Color palette: Supports strict semantic light/dark mode mapping.
Tokens:
surface = Dark: #09090B / Light: #FAFAFA
surface-card-dark = Dark: #13111C / Light: #FFFFFF
surface-card-light = Dark: #F4F4F5 / Light: #FFFFFF
primary = #D6F379 (Chartreuse/Lime Green - persistent across themes for brand contrast)
accent-blue = #CBE6F6 (Icy Light Blue)
text-main = Dark: #FAFAFA / Light: #09090B
text-muted = Dark: #A1A1AA / Light: #71717A
Spacing & Rhythm: 4/8/12/16/24/32/48/64/96/128
Border Radius Scale: rounded-xl (12px), rounded-2xl (16px), rounded-3xl (24px), rounded-[2.5rem] (40px), rounded-full (9999px).
Animation & Interaction Foundations
Scroll Reveals (Apple-style): Do not rely purely on Tailwind keyframes. Use CSS classes (.reveal & .active) powered by IntersectionObserver. Initial state must be opacity: 0; transform: translateY(40px) scale(0.98); filter: blur(8px); transitioning via cubic-bezier(0.16, 1, 0.3, 1) to clear.
Continuous Motion: Combine nested animations for organic movement. Wrap a rotating element (animate-spin-smooth, linear) inside a floating parent (animate-float, ease-in-out) to create complex, premium motion without rigid CSS math constraints.
Hover/Active Micro-interactions: Implement .hover-lift (transform: translateY(-8px)) with smooth shadow expansions. Buttons must utilize hover:scale-105 active:scale-95 to feel tactile.
Theme Transitions: The <body> and major structural blocks must have transition-colors duration-500.
FOIT Prevention: Must include a blocking inline <script> in the <head> that reads localStorage and system preferences to apply .dark before DOM paint, completely eliminating flicker.
Component Families & Specific Stylistic Rules
Header / Theme Toggle: Floating top pill. Critical structural rule: Must be wrapped in fixed w-full flex justify-center pointer-events-none to guarantee mathematical centering, while restoring pointer-events-auto on the actual nav pill. Must contain an animated button to toggle the .dark class.
Hero Headings: Use accent-blue background pills (rounded-full) behind the main words, with dark text inside the pill. These pills should pop in dynamically on load and include subtle rotational transforms (-rotate-2).
Cards (Thematic High-Contrast):
Primary Feature Cards must always use the primary (Lime) background regardless of light/dark mode.
Secondary Cards must use white (#FFFFFF) in light mode and off-white/grey (#F4F4F5) in dark mode, maintaining stark contrast with dark text.
Buttons: Exclusively heavily rounded (rounded-full or rounded-xl). Generous padding (px-8 py-4).
Accessibility
WCAG 2.2 AA. Text inside Lime (primary) and Icy Blue (accent-blue) cards MUST remain Dark (#09090B) in both themes. Ensure animations do not cause motion sickness (keep floating subtle, max 15px travel). Maintain keyboard focus states.

Rules: Do
heavily utilize custom cubic-bezier timing functions (cubic-bezier(0.16, 1, 0.3, 1)) for premium spring animations.
guarantee header centering using full-width flex wrappers rather than margin tricks.
mix CSS transition logic (filter: blur) with JS IntersectionalObservers for ultimate UX.
Rules: Don't
avoid Flash of Incorrect Theme (FOIT); never wait for body scripts to apply dark mode.
avoid single-axis linear animations on background elements; compound animations (float + rotate) yield a higher quality feel.
avoid applying the dark: variant to the primary Lime green color; it must act as a persistent brand identifier.
Required Output Structure
When generating design-system code:

HTML/Tailwind implementation file (inclusive of FOIT <script> in head).
Custom keyframes and classes injected via inline <style>.
Necessary Vanilla JS at the bottom of the body for observers and theming.
The <!-- SkillShelf_Start --> output containing updated guidelines.
<!-- SkillShelf_End -->