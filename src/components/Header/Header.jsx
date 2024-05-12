import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'

// const HomeLogo = styled.img`
//   height: 70px;
// `

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Header = () => {
  return (
    <NavContainer>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        {/* <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink> */}
      </div>
    </NavContainer>
  )
}
