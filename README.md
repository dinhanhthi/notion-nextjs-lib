# 🍒 notion-nextjs-lib

A collection of basic blocks/renderer/components for building nextjs site based on [Notion](https://www.notion.so/) and [Tailwind CSS](https://tailwindcss.com/).

👉 An example of using this library: [dinhanhthi-com-v6.vercel.app](https://dinhanhthi-com-v6.vercel.app). You can [fork this repo](https://github.com/dinhanhthi/dinhanhthi.com-v6) to make the same site.

> 🚨 I created this library for building my 2 websites - [math2it.com](https://www.math2it.com/) (a Vietnamese website for math and IT) and [dinhanhthi.com](https://dinhanhthi.com/) (my personal website for taking notes). **This library isn't for public use...yet!** I don't have enough time to help you use this library. Please forgive me if I don't answer your questions.

## Tech specs

- [Official Notion API](https://developers.notion.com/).
- [Tailwind CSS](https://tailwindcss.com/).
- [NextJS](https://nextjs.org/).
- Dev: [tsub](https://tsup.egoist.dev/), [prettier](https://prettier.io/), [eslint](https://eslint.org/), [yarn](https://yarnpkg.com/), [VSCode](https://code.visualstudio.com/) settings.

## Dev

🚨 **You have to use Node >= 18!**

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

## How to use?

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
  content: ['./node_modules/notion-nextjs-lib/dist/**/*.{js,ts,jsx,tsx,mdx}']
}
```

How to import a component?

```tsx
import BlockRender from 'notion-nextjs-lib/dist/components/BlockRender'
```

How to import a helper/lib?

```tsx
import { getJoinedRichText } from 'notion-nextjs-lib/dist/helpers/block-helpers'
import { makeSlugText } from 'notion-nextjs-lib/dist/helpers/helpers'
// or a lib
import { getNotionDatabaseWithoutCache } from 'notion-nextjs-lib/dist/lib/db'
```