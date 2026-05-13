import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.aboutContainer}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>Meet Your Healer</h2>
          <div className={styles.bioBlock}>
            <p className={styles.bioText}>
              Hey, this is <strong>Satyendra Kumar Pandey</strong>, a certified Sujok therapist, Reiki master, and holistic healer. 
            </p>
            <p className={styles.bioText}>
              I have been healing people fed up of conventional medicine for more than 10 years and have acquired great results. 
            </p>
            <p className={styles.bioText}>
              If you are someone who is suffering through problems and illnesses, someone who has been failed by conventional medicine, make sure you contact us and we will make sure to help you heal naturally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
