# 🎨 Skillshelf Open Design

The definitive open-source registry of AI-ready design systems. Give your AI coding agent pixel-perfect design DNA with a single file drop.

<div align="center">

[![License](https://img.shields.io/github/license/Samyk000/skillshelf-OpenDesign?color=blue)](LICENSE)
[![Skills](https://img.shields.io/badge/skills-1-green)](skills/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Star History](https://img.shields.io/github/stars/Samyk000/skillshelf-OpenDesign?style=social)](https://github.com/Samyk000/skillshelf-OpenDesign)

</div>

## ⚡ Why This Exists

AI coding agents (Cursor, Claude Code, Copilot) are brilliant at logic but terrible at aesthetics. They generate generic, inconsistent UIs. **Skillshelf fixes this.**

Each skill is a handcrafted, LLM-optimized design system that teaches your AI exactly how to build beautiful, consistent interfaces. No Figma exports. No JSON schemas. Just markdown.

## 🚀 Quick Start

1.  **Browse** the [skills directory](skills/) or view the [full list below](#-browse-skills).
2.  **Copy** the `SKILL.md` file into your project root.
3.  **Prompt** your AI: *"Follow the design system in SKILL.md."*
4.  **Watch** it generate pixel-perfect UI.

### Example Usage

```bash
# Copy the ForgeUI skill to your project
cp skills/forge-ui/SKILL.md ./SKILL.md

# Then ask Cursor/Claude:
# "Build a landing page following the SKILL.md design system."
```

## ✨ Featured Skills

| Skill | Category | Preview |
| :--- | :--- | :--- |
| **[ForgeUI](skills/forge-ui/)** | Developer Tools | Dark IDE aesthetic with pastel accents |
| *[Add Your Skill Here](CONTRIBUTING.md)* | *Community* | *Submit a PR!* |

## 📚 Browse All Skills

We currently have **1** design system in the registry.

| Skill | Category | Description |
| :--- | :--- | :--- |
| [**ForgeUI**](skills/forge-ui/) | Developer Tools | High-contrast dark mode, bento grids, monospace accents. |

> 💡 **Missing a design system?** [Request it here](https://github.com/Samyk000/skillshelf-OpenDesign/issues/new?template=request-skill.yml) or [contribute it yourself](CONTRIBUTING.md).

## 🛠️ How It Works

Each skill consists of three files:
1.  **`SKILL.md`**: The brain. Contains tokens, component rules, and anti-patterns optimized for LLM consumption.
2.  **`preview.html`**: The eyes. An interactive style guide showing colors, typography, and components.
3.  **`cover.png`**: The face. A visual thumbnail for quick identification.

## 🤝 Contributing

We welcome contributions! Whether you're fixing a typo, improving a color token, or adding a new design system, your help makes this registry better for everyone.

-   **Add a Skill**: Follow our [Contributing Guide](CONTRIBUTING.md).
-   **Improve a Skill**: Found an error? Open a [PR](pulls) or [Issue](issues).
-   **Request a Skill**: Use the [Request Template](https://github.com/Samyk000/skillshelf-OpenDesign/issues/new?template=request-skill.yml).

## 🌐 Hosted Version

Want a visual browser, likes, saves, and premium skills? Try the full **Skillshelf** app at [skillshelf-liart.vercel.app](https://skillshelf-liart.vercel.app).

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

Inspired by the need for consistent design in AI-generated code. Built with love by the Skillshelf community.

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/Samyk000">Samyk000</a></sub>
</div>
