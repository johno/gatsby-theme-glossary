const crypto = require(`crypto`)

let contentPath
let basePath

const GlossaryTemplate = require.resolve('./src/templates/glossary')

const mdxResolverPassthrough = fieldName => async (
  source,
  args,
  context,
  info
) => {
  const type = info.schema.getType(`Mdx`)
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  })

  const resolver = type.getFields()[fieldName].resolve
  const result = await resolver(mdxNode, args, context, {
    fieldName,
  })

  return result
}

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

exports.sourceNodes = ({ actions, schema }) => {
  const { createTypes } = actions

  createTypes(
    schema.buildObjectType({
      name: `GlossaryLetter`,
      fields: {
        id: { type: `ID!` },
        headings: {
          type: `[MdxHeadingMdx!]`,
          resolve: mdxResolverPassthrough(`headings`),
        },
        body: {
          type: `String!`,
          resolve: mdxResolverPassthrough(`body`),
        },
      },
      interfaces: [`Node`],
    })
  )
}

exports.onCreateNode = ({ node, actions, getNode, createNodeId }) => {
  const { createNode, createParentChildLink } = actions

  // Make sure it's an MDX node
  if (node.internal.type !== `Mdx`) {
    return
  }

  // Create source field (according to contentPath)
  const fileNode = getNode(node.parent)
  const source = fileNode.sourceInstanceName

  if (node.internal.type === `Mdx` && source === contentPath) {
    console.log(node)
    createNode({
      id: createNodeId(`${node.id} >>> GlossaryLetter`),
      parent: node.id,
      children: [],
      internal: {
        type: `GlossaryLetter`,
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(fieldData))
          .digest(`hex`),
        content: JSON.stringify(fieldData),
        description: `GlossaryLetter`,
      },
    })

    createParentChildLink({ parent: fileNode, child: node })
  } else {
    console.log(node)
  }
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty'
    }
  })
}
