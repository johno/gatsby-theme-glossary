import React from 'react'
import { Styled } from 'theme-ui'

export default Tag => props => (
  <Tag {...props}>
    <Styled.a href={'#' + props.id}>{props.children}</Styled.a>
  </Tag>
)
