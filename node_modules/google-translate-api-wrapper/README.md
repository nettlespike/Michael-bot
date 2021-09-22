# Google Translate Api Wrapper


Convert text to different languages on the browser. Flexible package and powerful back-end using Google :


## Getting started

This package can be used in on the browser. For the browser we are using `fetch`, so you might want to [polyfill it](https://polyfill.io/v2/docs/) depending on [the browsers you support](https://caniuse.com/#feat=fetch).

### Install:

```bash
npm install google-translate-api-wrapper
```

Then import it to use it:

```js
import {translate, detect} from 'google-translate-api-wrapper'
```

To use it in the browser download the main `translate.min.js` file and include it:

```html
<script src="google-translate.js"></script>
```

## Options

The first parameter is the **string** that you want to translate. Right now only a single string of text is accepted.

The second parameter is the options. It accepts either a `String` of the language to translate **to** or a simple `Object` with these options:

Examples:

```js
// Translate from Indonesia  to English
const foo = await translate('Nasi goreng', { to: 'en', from: 'id', key: ${GoogleTranslationKeys} )

// Detect Language:
const bar = await  detect('Nasi goreng', { key: ${GoogleTranslationKeys} )
```


## Authors and thanks

Current package and development: [Thofik Wiranata](https://github.com/thofik93/)
