# Contributing to Skillshelf Open Design

Thank you for your interest in contributing! This document outlines the process for adding new design skills or improving existing ones.

## 📋 Standards for Skills

Every skill folder (`skills/[slug]/`) must contain:

1. **SKILL.md** - The design system specification following our required format
2. **preview.html** - An interactive style guide showing colors, typography, components
3. **cover.png** - A 1200×630 PNG image showing the design in action (preview screenshot)

## 🎯 SKILL.md Structure

Use this exact structure for the markdown file:

```markdown
# [Brand] Design System

## 1. Visual Identity
- **Mood**: [e.g., Enterprise, Playful, Minimal]
- **Density**: [e.g., Spacious, Compact]
- **Philosophy**: [1-sentence design ethos]

## 2. Color Palette
| Token | Hex | Role |
|-------|-----|------|
| `--bg-primary` | `#0A0A0A` | Main background |
| `--accent` | `#6D28D9` | Primary actions, links |

## 3. Typography
- **Font Family**: `[Font Name]`
- **Scale**: `12px, 14px, 16px, 20px, 24px, 32px, 48px`
- **Weights**: `400, 500, 600`

## 4. Component Rules
- **Buttons**: `rounded-md`, `px-4 py-2`, hover states
- **Cards**: Border, background, spacing rules
- **Inputs**: Focus states, borders

## 5. Layout & Spacing
- **Grid**: [e.g., 12-column]
- **Spacing Scale**: `4, 8, 12, 16, 24, 32, 48, 64`
- **Container**: `max-width: [value]`

## 6. Do's & Don'ts
- ✅ Use semantic color tokens
- ❌ Avoid pure black backgrounds

## 7. Agent Prompt Guide
> "Build a [component] using the [Brand] design system..."

## 8. Accessibility
- WCAG 2.1 AA compliance
- Contrast ratios
- Focus states
- Dark mode support
```

## 🎨 preview.html Requirements

The preview file should be a standalone HTML page that:

1. **Shows the color palette** with hex codes and variable names
2. **Displays the typography scale** from smallest to largest
3. **Renders common UI components** (buttons, cards, inputs) in all their states
4. **Demonstrates the theme toggle** (if light/dark modes exist)
5. **Uses the same CSS variables** that would be used in production
6. **Is fully self-contained** (no external dependencies except fonts if needed)

**Keep it simple**: Use Tailwind CSS CDN or plain CSS. The goal is to visually showcase the design, not build a full app.

## 🖼️ cover.png Specifications

- Dimensions: 1200×630 pixels (standard Open Graph)
- Format: PNG with transparency if applicable
- Content: A representative screenshot of the design system in action (hero section, component showcase, or full page)
- Text overlay: Brand name optional (keep minimal)
- Quality: High resolution, compressed for web (<200KB)

## 📝 Updating registry.json

After adding a new skill folder:

1. Open `registry.json`
2. Add a new object to the `skills` array:

```json
{
  "slug": "brand-name",
  "title": "Brand Name",
  "category": "Developer Tools",
  "tags": ["tag1", "tag2", "tag3"],
  "description": "One-sentence summary of the design.",
  "files": {
    "skill": "skills/brand-name/SKILL.md",
    "preview": "skills/brand-name/preview.html",
    "cover": "skills/brand-name/cover.png"
  }
}
```

**Categories**: Use one of the existing categories or propose a new one:
- Developer Tools
- SaaS & Enterprise
- AI & ML
- Fintech
- Consumer
- Infrastructure
- Design & Productivity

## 🔍 Validation

Before submitting a PR, run the validation script:

```bash
npm run validate
```

This checks:
- All referenced files exist
- SKILL.md follows the required structure
- preview.html is valid HTML
- registry.json syntax is correct

## 🚀 Pull Request Process

1. Fork the repository
2. Create a feature branch (`git checkout -b skill/brand-name`)
3. Add your skill files to `skills/[brand-name]/`
4. Update `registry.json`
5. Run validation: `npm run validate`
6. Commit with a clear message: "Add [Brand] design skill"
7. Push to your fork
8. Open a PR against `main` branch

## 📝 PR Checklist

- [ ] SKILL.md follows the template structure
- [ ] preview.html renders correctly (open in browser to test)
- [ ] cover.png exists and is 1200×630
- [ ] registry.json updated with correct paths
- [ ] Validation script passes
- [ ] No placeholder content (all sections must be complete)

## ❓ Questions?

Open an issue using the "Request Skill" or "Improve Skill" templates.

## 🙏 Code of Conduct

Be respectful. Design systems are subjective — provide constructive feedback.

---

Happy contributing! 🎨
