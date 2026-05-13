import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          CosmicWellness
        </Link>
        <ul className={styles.navLinks}>
          <li><Link href="#services">Services</Link></li>
          <li><Link href="#contact" className={styles.cta}>Book Session</Link></li>
        </ul>
      </div>
    </nav>
  );
}
