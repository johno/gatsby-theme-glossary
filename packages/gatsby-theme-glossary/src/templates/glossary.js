import React from 'react'
import { graphql } from 'gatsby'

import Glossary from '../components/glossary'

export default ({ data }) => {
  const sections = data.sections.nodes.sort((a, b) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1

    return 0
  })

  return <Glossary sections={sections} />
}

export const pageQuery = graphql`
  {
    sections: allFile(filter: {sourceInstanceName: {eq: "glossary"}}) {
      nodes {
        name
        childMdx {
          body
          headings(depth: h1) {
            value
          }
        }
      }
    }
  }
`
