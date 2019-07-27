import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Container, Styled } from 'theme-ui'
import { MDXProvider } from '@mdx-js/react'

import Layout from './layout'
import Title from './title'
import Nav from './nav'
import Description from '../description.mdx'

// Adjust all glossary page headings to be one level
// less since all files are being aggregated into one
// in order to ensure proper semantic structure of the
// document.
const components = {
  h1: Styled.h2,
  h2: Styled.h3,
  h3: Styled.h4,
  h4: Styled.h5,
  h5: Styled.h6,
}

export default ({ sections }) => {
  const includedLinks = sections
    .map(section => {
      const headings = section.childMdx.headings || []
      const value = headings && headings[0] && headings[0].value
      return value ? value.toLowerCase() : null
    })
    .filter(Boolean)

  return (
    <Layout>
      <Styled.root>
        <Container>
          <Title />
          <Description />
          <Nav includedLinks={includedLinks} />
          <MDXProvider components={components}>
            {sections.map(section => (
              <MDXRenderer>{section.childMdx.body}</MDXRenderer>
            ))}
          </MDXProvider>
        </Container>
      </Styled.root>
    </Layout>
  )
}
