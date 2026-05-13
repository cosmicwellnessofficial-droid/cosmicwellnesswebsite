import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.brand}>
          <span className={styles.logo}>CosmicWellness</span>
          <p className={styles.tagline}>Heal naturally, Heal better.</p>
        </div>
        <div className={styles.contactInfo}>
          <h4>Get in touch directly</h4>
          <a href="mailto:cosmicwellnessofficial@gmail.com" className={styles.email}>cosmicwellnessofficial@gmail.com</a>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} CosmicWellness. All rights reserved.</p>
      </div>
    </footer>
  );
}
