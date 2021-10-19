# @kweli/cs-vue-vite-plugin

## What is this?

This package is an opinionated Vue component library for creating user interfaces in OpenText Content Server.  It can be seen as a rewrite of [cs-vue-plugin](https://github.com/chriscdn/cs-vue-plugin), but with some key differences:

- written in ES6, which makes it work nicely with [Vite](https://vitejs.dev/)
- compatible with [Vue 3](https://v3.vuejs.org/)
- uses [Tailwind CSS](https://tailwindcss.com/) for styling
- dropped support for Vuetify

## Installation

```bash
yarn add https://github.com/chriscdn/cs-vue-vite-plugin
```

In your Vue/Vite project (likely in `main.js`):

```js
import CSVueVite from '@kweli/cs-vue-vite-plugin'
import '@kweli/cs-vue-vite-plugin/dist/style.css'

const initialState = {
	baseURL: '/otcs/cs.exe',
	img: '/img/',
	otcsticket: 'ZZZZZZZ',
	datelong: 'YYYY-MM-DD HH:mm',
	dateshort: 'YYYY-MM-DD'
}

app.use(CSVueVite, initialState)
```

This automatically registers all components in `~/src/components/`.