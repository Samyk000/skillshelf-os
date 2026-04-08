# 🎨 Skillshelf Open Design

The largest open-source registry of AI-ready design systems. Drop a `SKILL.md` into your project and give your AI coding agent pixel-perfect design DNA.

[![Skills](https://img.shields.io/badge/skills-4-blue)](skills/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

## ⚡ Quick Start
Copy a `SKILL.md` into your project, tell your AI agent "follow the design system in SKILL.md" and get pixel-perfect UI that actually matches.

## 📖 What is SKILL.md?
`SKILL.md` is a plain-text design system document optimized for AI coding agents. It's the missing link between generic AI output and professional, consistent UI.

It's just a markdown file. No Figma exports, no JSON schemas, no special tooling. Drop it into your project root and any AI coding agent (Cursor, Claude Code, Copilot) instantly understands how your UI should look and behave.

| File | Who reads it | What it defines |
|------|--------------|-----------------|
| `AGENTS.md` | Coding agents | How to build the project |
| `SKILL.md` | Design agents | How the project should look and feel |

This repo provides ready-to-use `SKILL.md` files extracted from real websites and handcrafted for maximum AI comprehension.

## 📦 What's Inside Each SKILL.md
Every file follows a strict, LLM-optimized structure:

| # | Section | What it captures |
|---|---------|------------------|
| 1 | Mission & Brand | Design philosophy, mood, target audience |
| 2 | Style Foundations | Typography, colors, spacing, borders, shadows |
| 3 | Component Families | Buttons, cards, inputs, navigation with states |
| 4 | Accessibility | WCAG compliance, contrast ratios, theme support |
| 5 | Do's & Don'ts | Design guardrails and anti-patterns |
| 6 | Expected Behavior | Interactions, animations, hover states |
| 7 | Quality Gates | Validation checklist for AI output |
| 8 | Agent Prompt Guide | Ready-to-use prompts for generation |

Each skill includes:

| File | Purpose |
|------|---------|
| `SKILL.md` | The design system (what agents read) |
| `preview.html` | Visual catalog showing colors, type scale, components |
| `cover.png` | Thumbnail for quick identification |

## 🚀 How to Use
1. Copy a skill's `SKILL.md` into your project root
2. Tell your AI agent to use it

```bash
# Example: Copy ForgeUI to your project
cp skills/forge-ui/SKILL.md ./SKILL.md

# Then prompt your AI:
# "Build a landing page following the design system in SKILL.md"
```

## 📥 Request a Skill
[Open a GitHub issue with this template](https://github.com/Samyk000/skillshelf-OpenDesign/issues/new?template=request-skill.yml) to request a `SKILL.md` generation for a website.

## 🗂️ Collection

### Developer Tools
- [**ForgeUI**](skills/forge-ui/) - Developer-first dark app. High-contrast IDE aesthetic with pastel accents, bento grids, and seamless light/dark mode.

### Fintech
- [**Aegis Glow**](skills/aegis-glow/) - Obsidian Glow Fintech UI. Luxurious metallic interfaces with cinematic copper lighting and glassmorphic cards.

### Clean Tech
- [**Ecovolt**](skills/ecovolt/) - Eco-Brutalist Clean Tech. Stark typography meets organic softness with neon lime accents and pill-shaped containers.

### AI & ML
- [**Nova AI**](skills/nova-ai/) - Radiant Soft-Glass AI. Airy SaaS interfaces with sunburst gradients, floating 3D glassmorphic cards, and warm AI Spark accents.

### More Coming Soon
We're actively adding new design systems. [Request one](https://github.com/Samyk000/skillshelf-OpenDesign/issues/new?template=request-skill.yml) or [contribute your own](CONTRIBUTING.md).

## 🤝 Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

- **Add new skills**: Follow the template in `templates/SKILL.md`
- **Improve existing files**: Fix wrong colors, missing tokens, weak descriptions
- **Report issues**: Let us know if something looks off

Before opening a PR, please [open an issue](https://github.com/Samyk000/skillshelf-OpenDesign/issues) first to discuss your idea and get feedback from maintainers.

## 🌐 Hosted Version
Want a visual browser, likes, saves, and premium skills? Try the full **Skillshelf** app at [skillshelf-liart.vercel.app](https://skillshelf-liart.vercel.app).

## 📜 License
MIT License - see [LICENSE](LICENSE)

This repository is a curated collection of design system documents. All `SKILL.md` files are provided "as is" without warranty. The extracted design tokens represent publicly visible CSS values. We do not claim ownership of any site's visual identity. These documents exist to help AI agents generate consistent UI.

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/Samyk000">Samyk000</a></sub>
</div>
