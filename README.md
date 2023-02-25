This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
- Once files are copied …
- Copy `.env.sample` to `.env.local`
- Run `npm i` (same as npm install)
- Run `npm run dev`
# or
- `yarn build`
- `yarn run dev`

```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

If you get “'next' is not recognized as an internal or external command”
**`npm install react react-dom next`**

If yarn can't run Next you may have to run `yarn add next`

## Developing with builder Notes
Getting [Builder.io](http://Builder.io) working
* npm install ‘@builder.io/react’ on windows i needed the quotes linux probably not
* The builder config file `builder-config.js` needs to load so custom components will be visible in Builder editor. 
  * loading it in `_app.js` 
  * The config file is under `components/builder/`
* If you rename a custom component in next.js, you may get ”Missing registration” errors. It may take builder time to update and if it doesn't you may need to edit the different pages using the components and remove the old version 
* It can take a little time for the content changes form builder.io to come through
* By default builder.io is linked to the liver (vercel version) when editing pages you can point them towards your local dev i.e. http://localhost:3000 [here's the documentation on how](https://www.builder.io/c/docs/guides/preview-url) 

## Custom Components
- This is a list of [Component Field Types](https://www.builder.io/c/docs/custom-components-input-types) i.e. Test, Number etc use this to understnad what parameters you need to pass through when registering them

## Misc
* If the bulder account is cancelled then the content will still be displayed but no longer editable. There are also options to [export the content as JSON or files here](https://forum.builder.io/t/what-if-i-want-to-move-off-of-builder-io/384) if you wanted to modify it in the future 

## Note: 
The following branches are synced with vercel
* cquel-development is the staging version - under cquel-mach49com account
* cquel-production is the live version - under cquel-mach49com account
* main is the live version - under rdt-mach49com account 

