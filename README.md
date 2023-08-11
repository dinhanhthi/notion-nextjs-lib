# notion-nextjs-lib

A basic blocks/renderer/components for building nextjs site based on notion and tailwind.

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

To add this project into another project locally,

```bash
# using yarn v1
cd notion-nextjs-lib
yarn link

# back to the project want to link to notion-nextjs
cd v-next # for example
yarn link notion-nextjs-lib

# DON'T FORGET to restart vscode!
```