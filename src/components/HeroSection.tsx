import Link from 'next/link';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Heal naturally, <span className={styles.highlight}>heal better.</span>
          </h1>
          <p className={styles.subtitle}>
            Use the power of naturopathy and alternative medicine to cure yourself and stay away from side effect causing medicines. HEAL NATURALLY.
          </p>
          <div className={styles.actions}>
            <Link href="#services" className={styles.primaryBtn}>
              Explore Services
            </Link>
            <Link href="#contact" className={styles.secondaryBtn}>
              Book a Session
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
