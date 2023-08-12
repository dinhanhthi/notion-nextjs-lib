# notion-nextjs-lib

A collection of basic blocks/renderer/components for building nextjs site based on notion and tailwind.

## Install

```bash
yarn add https://github.com/dinhanhthi/notion-nextjs-lib.git
```

Put the following to `tailwind.config.ts`,

```ts
export default {
  content: [
    './node_modules/notion-nextjs-lib/dist/**/*.{js,ts,jsx,tsx,mdx}'
  ]
}
```

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