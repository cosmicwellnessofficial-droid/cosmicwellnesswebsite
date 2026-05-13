import styles from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={`container ${styles.contactContainer}`}>
        <div className={styles.textBlock}>
          <h2 className={styles.title}>Ready to heal yourself?</h2>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeAIC-mwN9EASflO7V0IbQ7CArh-y0lb5Pu-HuyAqAIOiormw/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className={styles.button}>
            Book a Session (Google Form)
          </a>
          <p className={styles.note}>
            *You will be redirected to our secure Google Form.
          </p>
        </div>
      </div>
    </section>
  );
}
