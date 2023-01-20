This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
- Once files are copied …
- Copy `.env.sample` to `.env.local`
- Run `npm i` (same as npm install)
- Run `npm run dev`

```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

If you get “'next' is not recognized as an internal or external command”
**`npm install react react-dom next`**

## Developing with builder Notes
Getting [Builder.io](http://Builder.io) working
* npm install ‘@builder.io/react’ on windows i needed the quotes linux probably not
* The builder config file `builder-config.js` needs to load so custom components will be visible in Builder editor. 
  * loading it in `_app.js` 
  * The config file is under `components/builder/`
* If you rename a custom component in next.js, you may get ”Missing registration” errors. It may take builder time to update and if it doesn't you may need to edit the different pages using the components and remove the old version 
