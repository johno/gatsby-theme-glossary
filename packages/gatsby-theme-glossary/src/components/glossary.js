import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Container, Styled } from 'theme-ui'
import { MDXProvider } from '@mdx-js/react'

import Layout from './layout'
import Title from './title'
import Nav from './nav'
import heading from './heading'

import Description from '../description.mdx'

// Adjust all glossary page headings to be one level
// less since all files are being aggregated into one
// in order to ensure proper semantic structure of the
// document.
const components = {
  h1: heading(Styled.h2),
  h2: heading(Styled.h3),
  h3: heading(Styled.h4),
  h4: heading(Styled.h5),
  h5: heading(Styled.h6),
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
