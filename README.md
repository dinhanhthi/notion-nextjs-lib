# 🍒 notion-nextjs-lib

A collection of basic blocks/renderer/components for building nextjs site based on [Notion](https://www.notion.so/) and [Tailwind CSS](https://tailwindcss.com/).

🚧 **Work under progress and need document, tests,...**

## Tech specs

- [Official Notion API](https://developers.notion.com/).
- [Tailwind CSS](https://tailwindcss.com/).
- [NextJS](https://nextjs.org/).
- Dev: [tsub](https://tsup.egoist.dev/), [prettier](https://prettier.io/), [eslint](https://eslint.org/), [yarn](https://yarnpkg.com/), [VSCode](https://code.visualstudio.com/) settings.

## Dev

```bash
# first install
yarn install

# build lib to ./dist
yarn build

# prettier
yarn prettier

# lint
yarn lint
```

Link to a project **locally**,

```bash
# using yarn v1
cd notion-nextjs-lib
yarn link

# back to the project
cd your-project # for example
yarn link notion-nextjs-lib

# DON'T FORGET to restart vscode!
```

To unlink,

```bash
cd notion-nextjs-lib
yarn unlink

cd your-project
yarn unlink notion-nextjs-lib

rm yarn.lock
yarn install --check-files
```

## Install in other projects

```bash
yarn add https://github.com/dinhanhthi/notion-nextjs-lib.git
```

You have to [install Tailwind CSS to your project](https://tailwindcss.com/docs/installation).

Add the following style to your main project,

```css
import 'notion-nextjs-lib/dist/styles.css'
```

Put the following to `tailwind.config.ts`,

```ts
export default {
  content: [
    './node_modules/notion-nextjs-lib/dist/**/*.{js,ts,jsx,tsx,mdx}'
  ]
}
```

How to import a component?

```tsx
import BlockRender from 'notion-nextjs-lib/dist/components/BlockRender'
```

How to import a helper?

```tsx
import { getJoinedRichText } from 'notion-nextjs-lib/dist/helpers/block-helpers'
```

