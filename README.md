# 🌐 Reusable Multilingual Angular Portfolio

![Angular](https://img.shields.io/badge/Angular-21-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![i18n](https://img.shields.io/badge/i18n-ngx--translate-6C63FF)
![Version](https://img.shields.io/badge/version-1.0.0-green)
![License](https://img.shields.io/badge/license-Apache%202.0-blue)

This project is a reusable, responsive portfolio template built with Angular standalone components. Its content is separated from the presentation layer and loaded from JSON translation files, allowing the portfolio to be adapted to another person without rewriting the Angular components.

Personal details, navigation labels, professional experience, education, skills, projects, research, publications, and contact information can be updated from the files in `public/assets/i18n/`. The same content structure also supports multiple languages through `@ngx-translate`.

## 🚀 Features

- 🧾 **Content-driven configuration**
  - Stores the portfolio content in JSON instead of hardcoding it in components
  - Reuses the same Angular interface for different profiles by replacing the values in an i18n file
- 🌍 **Multiple-language support**
  - Loads language files dynamically with `@ngx-translate/core` and `@ngx-translate/http-loader`
  - Supports adding languages without duplicating page components
  - Provides configurable active and fallback languages
- 🧩 **Reusable Angular components**
  - Uses standalone components for every portfolio section
  - Shares common UI elements such as section headers, information cards, skill cards, icon badges, and technology chips
- 📚 **Data-driven collections**
  - Renders education, experience, skills, projects, research topics, and publications from arrays in the translation files
- 📱 **Responsive interface**
  - Provides desktop and mobile navigation for a single-page portfolio layout
- 🎨 **Centralized styling and assets**
  - Uses Sass for component and global styles
  - Keeps colors, images, fonts, and technology icons in reusable asset directories
- 🪟 **Angular Material integration**
  - Uses Angular Material and the Angular CDK for publication dialogs and interface behavior
- 🚀 **Automated GitHub Pages deployment**
  - Includes a GitHub Actions workflow that builds and deploys the project after changes are pushed to `main`

## 📂 Project Overview

### ▶️ Execution guide

To run this project locally, install:

1. [Node.js 22](https://nodejs.org/) or another version compatible with Angular 21
2. [npm](https://www.npmjs.com/)
3. An IDE or code editor such as [Visual Studio Code](https://code.visualstudio.com/) or [IntelliJ Idea](https://www.jetbrains.com/idea/)

Clone the repository and install its dependencies:

```bash
git clone https://github.com/victoriaogomes/victoriaogomes.github.io.git
cd victoriaogomes.github.io
npm install
```

Start the development server:

```bash
npm start
```

Open [http://localhost:4200](http://localhost:4200) in your browser. The application reloads automatically when source files change.

### 🏗️ Production build

Create an optimized production build with:

```bash
npm run build
```

The generated static files are written to the `dist/` directory.

### 👩🏻‍💻 Technologies used

This project was developed using:

- [Angular 21](https://angular.dev/)
- [Angular CDK](https://material.angular.dev/cdk/categories)
- [angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages)
- [Angular Material](https://material.angular.dev/)
- [Font Awesome for Angular](https://github.com/FortAwesome/angular-fontawesome)
- [ngx-translate](https://github.com/ngx-translate/core)
- [RxJS](https://rxjs.dev/)
- [Sass](https://sass-lang.com/)
- [TypeScript 5.9](https://www.typescriptlang.org/)

## 🏛️ Architecture: Standalone Components and i18n-Driven Content

The application follows a component-oriented Angular architecture with a clear separation between presentation, reusable UI, content, and static assets.

- **Section components** define the layout and behavior of each portfolio area
- **Shared UI components** provide reusable visual building blocks
- **Translation files** act as the content source for text and structured collections
- **Static assets** store profile images, icons, fonts, and shared Sass variables
- **Application configuration** initializes HTTP loading and the translation service

The primary content flow is:

```text
public/assets/i18n/<language>.json
                ↓
      ngx-translate service
                ↓
     Angular section components
                ↓
       Shared UI components
                ↓
        Rendered portfolio
```

## ♻️ Reusing the Portfolio

The portfolio can be adapted to another profile mainly by changing the content and assets. The Angular components do not need to be rewritten when the existing data structure is preserved.

### 1. Update the portfolio content

Edit:

```text
public/assets/i18n/en.json
```

The file contains the data used by all main sections. Update the values while keeping the existing JSON keys and collection structures. This includes names, descriptions, links, education, experience, skills, projects, research interests, publications, and contact details.

### 2. Replace images and icons

- Replace the profile image in `public/assets/images/`
- Add the CV PDF to `public/assets/documents/` and configure its path under `intro.cv` in each language file
- Add or replace technical-skill icons in `public/assets/images/technical-skills/`
- Update image paths and alternative text in the corresponding i18n file
- Replace `public/favicon.png` when using a different visual identity

### 3. Customize the visual theme

- Edit global styles in `src/styles.sass`
- Edit shared color variables in `public/assets/colors.sass`
- Update section-specific styles in each component's `.sass` file
- Modify shared UI components in `src/app/shared/ui/` to apply changes across the portfolio

### 4. Add or remove sections

Each portfolio area is an independent standalone component. A section can be removed from or added to the page by updating the imports and template references in the root application component.

## 🌍 Multiple Languages

The project supports multiple languages through JSON files loaded by `ngx-translate`.

### Adding a language

1. Copy one of the existing files:

```text
public/assets/i18n/en.json
```

2. Rename the copy using the new language code, for example:

```text
public/assets/i18n/es.json
```

3. Translate the values while preserving the same keys and JSON structure used by `en.json`.

4. Add the new language to the service stored in `src/app/services/language-service.ts` by adding another entry to the `supportedLanguages` array. The `name` should be the language name, and the `value` should be the name of the `.json` file containing the translations for that language.

The HTTP translation loader is configured in `src/app/app.config.ts` to load files using this pattern:

```text
assets/i18n/<language>.json
```

### Setting the default and fallback languages

The current language configuration is defined in `src/app/app.config.ts`:

```typescript
provideTranslateService({
  loader: provideTranslateHttpLoader({
    prefix: 'assets/i18n/',
    suffix: '.json'
  }),
  fallbackLang: 'en'
})
```

Moreover, the service file at `src/app/services/language-service.ts` contains most of the language configuration. It attempts to detect the browser's language and checks whether it is supported by the application. If it isn't, English is used as the default.

### Switching languages at runtime

A language selector is available in the navbar. After a language is selected, it is stored in the browser's `localStorage`, so future visits to the website will use the chosen language.

## 🧱 Main Components

1. 👋 Introduction: renders the profile headline, summary, location, profile image, availability status, and external links from the active language file.
2. 🙋🏻‍♀️ About Me: displays translated descriptive content and structured professional highlights.
3. 🎓 Background: builds education and work-experience cards from translated arrays.
4. 🧰 Technical Skills: loads skill groups and individual technologies from i18n data and combines them with reusable skill components and image assets.
5. 💼 Projects and Research: renders reusable cards from translated project and research collections.
6. 📚 Publications: groups publication data and uses Angular Material dialogs to display expanded publication lists and details.
7. ✉️ Contact: reads contact text and external profile URLs from the same centralized content source.

## 🚀 GitHub Pages Deployment

The repository includes `.github/workflows/build-deploy.yml`. On every push to the `main` branch, the workflow:

1. Checks out the repository
2. Configures Node.js 22
3. Installs npm dependencies
4. Runs the GitHub Pages production build
5. Publishes `dist/browser` with `angular-cli-ghpages`

Build the GitHub Pages version manually with:

```bash
npm run build:gitHubPages
```

Deploy it manually with:

```bash
npx angular-cli-ghpages --dir=dist/browser
```

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm start` | Starts the Angular development server |
| `npm run build` | Creates a production build |
| `npm run watch` | Rebuilds the project when source files change |
| `npm test` | Runs the unit-test suite |
| `npm run build:gitHubPages` | Builds the project for GitHub Pages |
