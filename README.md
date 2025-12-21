# Phaser 3 + TypeScript + Vite Starter Template

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Phaser](https://img.shields.io/badge/Phaser-3.90.0-red?style=for-the-badge&logo=phaser&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

A modern, production-ready starter template for creating games and interactive experiences with **Phaser 3**, leveraging the speed of **Vite** and the safety of **TypeScript**. This template provides a streamlined development environment with hot-reloading, optimized builds, and a clear project structure.


## ✨ Features

*   **Phaser 3.90.0**: The latest version of the fast, free, and fun open-source HTML5 game framework.
*   **TypeScript**: Full type safety for better developer experience, maintainability, and fewer runtime errors.
*   **Vite**: Next-generation frontend tooling for lightning-fast server start and hot module replacement (HMR).
*   **Optimized Builds**: Pre-configured to generate minified, production-ready bundles.
*   **Clean Project Structure**: A logical and scalable folder structure to organize your scenes, assets, and code.
*   **Code Quality Tools**: Integrated with Prettier for consistent code formatting.
*   **Asset Handling Examples**: Clear examples for importing both static and bundled images and assets.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Yarn package manager

### Installation

1.  **Create a new project** from this template using `degit` or by cloning the repository.
    ```bash
    git clone https://github.com/z-starter/vite-phaser-ts.git my-phaser-game
    cd my-phaser-game
    ```

2.  **Install the dependencies.** This template uses Yarn by default (as seen in the lockfile).
    ```bash
    yarn install
    ```

### Usage

**Start the development server:**
```bash
yarn dev
```
Open your browser to the local address shown in the terminal (typically `http://localhost:5173`). The game will hot-reload as you edit the source files.

**Create a production build:**
```bash
yarn build
```
This will generate optimized files in the `/dist` directory, ready for deployment.

**Preview the production build locally:**
```bash
yarn preview
```

## 📁 Project Structure
```
vite-phaser-ts/
├── public/ # Static assets served at root
│ └── assets/ # Static assets (audio, videos, large images)
├── src/
│ ├── scenes/ # Phaser Scene classes
│ │ └── Game.ts # Example main game scene
│ ├── main.ts # Main entry point & Phaser game config
│ └── vite-env.d.ts # Vite type declarations
├── index.html # Main HTML page
├── vite.config.ts # Vite configuration
├── tsconfig.json # TypeScript configuration
├── package.json
└── (various config files for yarn, prettier, etc.)
```

## 🖼️ Handling Assets

This template supports two primary methods for handling assets, both crucial for optimal performance:

1.  **Bundled Assets (Recommended for most images):**
    Import assets directly in your TypeScript/SCSS files. Vite will process them (e.g., apply hashing, optional compression) and include them in the bundle.
    ```typescript
    // Import at the top of your scene file
    import logoImg from './assets/logo.png';
    // ... later in preload()
    this.load.image('logo', logoImg);
    ```

2.  **Static Assets (For large files like audio/video):**
    Place files in the `public/assets/` directory. They are copied directly to the build output and can be referenced by a public path.
    ```typescript
    // In preload(), use the public path
    this.load.image('background', '/assets/bg.png');
    this.load.audio('theme', '/assets/music/theme.mp3');
    ```

## 🧑‍💻 Development

The core game logic starts in `src/main.ts`, where the Phaser.Game instance is configured. The template includes a sample `Game` scene in `src/scenes/Game.ts` to demonstrate scene structure, asset loading, and basic interaction.

Key files to edit:
*   `src/main.ts`: Modify game width, height, physics, and default scene.
*   `src/scenes/Game.ts`: Your main game logic. Create additional scenes in the `src/scenes/` folder.
*   `index.html`: Update page title, meta tags, or add global styles/scripts.

## 📦 Building for Production

Running `yarn build` instructs Vite to:
*   Bundle and minify your TypeScript/SCSS code.
*   Optimize imported assets.
*   Copy static assets from the `public` folder.
*   Output the final, deployable site to the `dist` directory.

**To deploy your game**, upload the entire contents of the `dist` folder to any static web hosting service (e.g., GitHub Pages, Netlify, Vercel, or a traditional web server).

## 📄 License

This project is licensed under the **MIT License**. See the `LICENSE` file in the repository for the full text.

## 🙏 Acknowledgments

*   [Phaser](https://phaser.io/) for the amazing game framework.
*   [Vite](https://vitejs.dev/) for the superb developer experience.
*   All contributors and the open-source community.

---

*Happy Game Dev! 🎮*
