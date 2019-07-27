module.exports = options => {
  const { mdx = true, contentPath = 'glossary' } = options

  return {
    plugins: [
      'gatsby-plugin-theme-ui',
      mdx && {
        resolve: 'gatsby-plugin-mdx',
        options: {
          extensions: ['.mdx', '.md'],
          remarkPlugins: [require('remark-slug'), require('remark-emoji')]
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: contentPath,
          name: 'glossary'
        }
      }
    ]
      .filter(Boolean)
  }
}
