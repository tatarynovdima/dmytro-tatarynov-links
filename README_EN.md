# Dmytro Tatarynov - Personal Links Page

💫 **[Live
Demo](https://tatarynovdima.github.io/dmytro-tatarynov-links/)**

A modern personal portfolio page with interactive elements and
responsive design.\
The project is a minimalist developer profile page with links to social
networks and professional platforms.

## 📋 Table of Contents

-   [Project Description](#project-description)
-   [Technologies and Stack](#technologies-and-stack)
-   [Installation and Setup Guide](#installation-and-setup-guide)
-   [Project Structure](#project-structure)
-   [Features](#features)
-   [Usage Examples](#usage-examples)

## 📝 Project Description

This is a personal portfolio page for **Dmytro Tatarynov**, a Software
Engineer with 5+ years of experience.\
The project is designed for:

-   **IT professionals** -- to showcase profiles and contacts\
-   **Recruiters and HR specialists** -- for quick access to
    professional profiles\
-   **Colleagues and partners** -- for convenient contact sharing

**Key Benefits:** - 🎨 Modern minimalist design\
- 🌙 Light and dark mode support\
- 📱 Fully responsive interface\
- ⚡ Fast loading with Vite

## 🛠 Technologies and Stack

### Core technologies:

-   **React 18.2.0** -- UI library\
-   **Vite 4.5.0** -- build tool and dev server\
-   **Material-UI 5.14.20** -- component library\
-   **Emotion** -- CSS-in-JS solution

### Additional dependencies:

-   **@fontsource/roboto** -- web fonts\
-   **@mui/icons-material** -- Material Design icons\
-   **gh-pages** -- GitHub Pages deployment

### Development tools:

-   **ESLint** -- code linter\
-   **TypeScript types** -- for React components

## 🚀 Installation and Setup Guide

### Prerequisites:

-   Node.js (version 16 or higher)\
-   npm or yarn

### Installation:

``` bash
# Clone the repository
git clone https://github.com/tatarynovdima/dmytro-tatarynov-links.git
cd dmytro-tatarynov-links

# Install dependencies
npm install
# or
yarn install
```

### Run in development mode:

``` bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:5173`

### Build for production:

``` bash
npm run build
# or
yarn build
```

### Preview production build:

``` bash
npm run preview
# or
yarn preview
```

### Deploy to GitHub Pages:

``` bash
npm run deploy
# or
yarn deploy
```

## 📁 Project Structure

    dmytro-tatarynov-links/
    ├── public/
    │   └── photo_2025-09-14_21-30-33.jpg    # Profile avatar
    ├── src/
    │   ├── components/
    │   │   ├── CursorFollower.jsx           # Interactive cursor effect
    │   │   └── LinkButton.jsx               # Link button component
    │   ├── App.jsx                          # Main app component
    │   ├── main.jsx                         # App entry point
    │   └── theme.js                         # Material-UI theme configuration
    ├── dist/                                # Production build (generated)
    ├── package.json                         # Dependencies and scripts
    ├── vite.config.js                       # Vite configuration
    ├── eslint.config.js                     # ESLint configuration
    └── README.md                            # Project documentation

## ✨ Features

### 🎨 Design & UX:

-   **Monochrome theme** -- elegant black-and-white design\
-   **Adaptive theme** -- auto-switch based on system theme\
-   **Interactive elements** -- floating animations and cursor effects\
-   **Glassmorphism effect** -- backdrop-filter for a modern look

### 📱 Responsiveness:

-   **Mobile devices** -- optimized for all screen sizes\
-   **Tablets** -- proper layout for medium screens\
-   **Desktop** -- full-featured interface

**Built with ❤️ using React and Material-UI**
