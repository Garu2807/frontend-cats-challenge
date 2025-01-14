import { Navbar } from './NavBar.styles';
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <Navbar>
      <Link to={'/'}>Все котики</Link>
      <Link to={'/likes'}>Любимые котики</Link>
    </Navbar>
  );
}

export default NavBar;
