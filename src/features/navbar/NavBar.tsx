import { Container, LinkText, Navbar, StyledLink } from './NavBar.styles';
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <Navbar>
      <Container>
        <StyledLink to={'/'}>
          <LinkText>Все котики</LinkText>
        </StyledLink>
        <StyledLink to={'/likes'}>
          <LinkText>Любимые котики</LinkText>
        </StyledLink>
      </Container>
    </Navbar>
  );
}

export default NavBar;
