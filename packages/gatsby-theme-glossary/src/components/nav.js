/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'

const LINKS = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

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
    {LINKS.map(link => {
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
