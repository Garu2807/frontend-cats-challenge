import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.link}>
          <span className={styles.linkText}>Все котики</span>
        </Link>
        <Link to="/likes" className={styles.link}>
          <span className={styles.linkText}>Любимые котики</span>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
