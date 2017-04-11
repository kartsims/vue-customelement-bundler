# Vue Custom Element Bundler

Example using Rollup to bundle one or many Vue.js components into a single .js file that **can be used in any HTML/JS application.**

Another example using Webpack available [here](https://github.com/kartsims/vue-customelement-bundler).

Refer to [this post on vuetips.com](http://vuetips.com/vue-web-components) for more information.

```html
<html>
  <body>

    ...

    <my-vue-component/>
    <!-- you can add many instances of the component in the same page -->
    <my-vue-component/>

    <script src="my-vue-component.js"></script>

  </body>
</html>
```

## How it works

Components are registered in `src/main.js`.

Component code is in `src/components/ComponentName.vue`.

To add a component :

- Add a `.vue` file in `src/components`
- Register the component in `src/main.js`

## Development

To test your components :

- Launch rollup : `npm run dev` (watch mode)
- Open `demo/index.html` in a browser
- Edit `src/main.js` or your component file
- Refresh the page

## Bundle a release

```
npm run build
```

File will be placed in `dist/my-vue-component.js`.

Refer to `rollup.config.js` for customization options.
