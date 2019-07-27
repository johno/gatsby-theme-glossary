import React from 'react'
import { graphql } from 'gatsby'

import Glossary from '../components/glossary'

export default ({ data }) => (
  <Glossary sections={data.sections.nodes} />
)

export const pageQuery = graphql`
  {
    sections: allFile(filter: {sourceInstanceName: {eq: "glossary"}}) {
      nodes {
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
