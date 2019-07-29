# gatsby-theme-glossary

A minimalist [Gatsby Theme](https://gatsbyjs.org/docs/themes)
for a glossary built with [MDX](https://mdxjs.com)
and [Theme UI](https://theme-ui.com).

Get up and running in seconds with a beautiful glossary so
you can do what's more important: **define terminology**.

![image](https://user-images.githubusercontent.com/1424573/62055530-04ea6300-b1d9-11e9-9800-75c41798bedf.png)

## Features

- 📑 MDX files per letter
- 🎨 Theme UI-based theming
- 📱 Mobile friendly

### Directory structure

```
glossary
├── a.mdx
├── b.mdx
├── ...
└── z.mdx
```

## Installation

```
yarn add gatsby-theme-glossary
```

### Install as a starter

Name | Command
---- | -------
[Base](https://github.com/johno/gatsby-starter-glossary) | `gatsby new johno/gatsby-starter-glossary`

## Usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    'gatsby-theme-glossary'
  ]
}
```

### Options

Name | Default | Description
---- | ------- | -----------
`contentPath` | `glossary` | Path to directory of glossary files
`basePath` | `glossary` | Path to render the glossary page

## Customizing

The glossary itself can be customized in a few ways. You can change
the description text, the layout, and even the theme.

### Description

You can optionally include a description under the glossary title
that can introduce/describe the glossary that will follow below.
You can achieve this by shadowing the `description.mdx` file:

`src/gatsby-theme-glossary/description.mdx`
```md
## Hey!

This is a custom description of my glossary.
```

### Layout

`gatsby-theme-glossary` doesn't use a layout because it's intended
that you shadow the layout component with your own so that it's properly
embedded in your site.

```js
// src/gatsby-theme-glossary/components/layout.js
export { default } from '../../components/layout'
```

### Theme

This theme uses Theme UI so you can read about how to customize
the theme in [the official docs](https://theme-ui.com/gatsby-plugin#customizing-the-theme).

## License

MIT
