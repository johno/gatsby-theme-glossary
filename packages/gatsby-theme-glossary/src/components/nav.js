/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'

import links from './links'

export default ({ includedLinks }) => (
  <nav
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > a': {
        borderRightStyle: 'solid',
        borderRightWidth: 'thin',
        borderColor: 'muted'
      },
      '& > a:last-child': {
        borderColor: 'transparent'
      }
    }}
  >
    {links.map(link => {
      if (!includedLinks.includes(link)) {
        return (
          <Styled.a
            key={link}
            disabled={true}
            sx={{
              py: 1,
              px: 2,
              fontSize: 2,
              fontWeight: 'bold',
              textDecoration: 'none',
              textTransform: 'uppercase',
              color: 'darkGray',
              '&:hover': {
                color: 'darkGray',
              }
            }}
          >
            {link}
          </Styled.a>
        )
      }

      return (
        <Styled.a
          key={link}
          href={'#' + link}
          sx={{
            py: 1,
            px: 2,
            fontSize: 2,
            fontWeight: 'bold',
            textDecoration: 'none',
            textTransform: 'uppercase'
          }}
        >
          {link}
        </Styled.a>
      )
    })}
  </nav>
)
