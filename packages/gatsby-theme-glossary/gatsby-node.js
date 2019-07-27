let basePath

const GlossaryTemplate = require.resolve('./src/templates/glossary')

exports.onPreBootstrap = (_, themeOptions) => {
  contentPath = themeOptions.contentPath || `glossary`
  basePath = themeOptions.basePath || `glossary`
}

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  createPage({
    path: basePath,
    component: GlossaryTemplate
  })
}
