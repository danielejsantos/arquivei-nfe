# Arquivei Lite - Fiscal document consult

All the instructions, architecture and decisions about the project can be found below.

## Language and Framework

Following the challenge recommendation, it was used JavaScript and its library, React.

## Dependencies

- [TypeScript](https://www.typescriptlang.org/): it types the code at runtime
- [Styled Components](https://styled-components.com/): it optimizes the styling experience for React components.

## Architecture

This project architecture was created in order to support its growth and keep it organized.

**Project Tree**

```
├── public
│  ├── favicon.ico
│  └── index.html
├── src
│  ├── assets
│  │  └── logo.svg
│  ├── components
│  │  ├── Header
│  │  │  ├── index.tsx
│  │  │  └── styles.ts
│  │  └── Tab
│  │     ├── index.tsx
│  │     └── styles.ts
│  ├── pages
│  │  └── Home
│  │     ├── BuyConsult
│  │     │   ├── index.tsx
│  │     │   └── styles.ts
│  │     ├── Payment
│  │     │   ├── index.tsx
│  │     │   └── styles.ts
│  │     ├── PurchaseSummary
│  │     │   ├── index.tsx
│  │     │   └── styles.ts
│  │     ├── Tabs
│  │     │   ├── index.tsx
│  │     │   └── styles.ts
│  │     ├── home.hook.ts
│  │     ├── index.tsx
│  │     └── styles.ts
│  ├── styles
│  │  └── GlobalStyles.ts
│  ├── App.tsx
│  ├── index.tsx
│  └── react-app-env.d.ts
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
├── yarn.lock
```

The simplified version of the project tree is described below:

- **components**: react components used inside the homepage and that can be reusable
- **pages**: application screens and hooks
- **styles**: global styles to be used in the entire application

The entire application was built with the concept of responsiveness.

As it isn't a considerably large application, the state could be controlled by using only _React Hooks_.

## Settings

You must have Git installed in your machine to download the following GitHub repository:

- https://github.com/danielejsantos/arquive-nfe

Or you can download it by following the command:

`git clone https://github.com/danielejsantos/arquive-nfe.git`

Then, you must install its dependencies. At the root, run the command:

```
# with yarn:
yarn install
# with npm:
npm install
```

## How to run

Navigate to the root folder and run the following command:

```
# with yarn:
yarn start
# with npm:
npm start
```
