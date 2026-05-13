import Image from 'next/image';
import styles from './ServicesShowcase.module.css';

const services = [
  {
    id: 1,
    name: 'Acupuncture',
    description: 'Restore balance and energy flow through precise, traditional techniques.',
    image: '/images/service_acupuncture.png',
  },
  {
    id: 2,
    name: 'Naturopathy',
    description: 'Harness the healing power of nature and holistic remedies.',
    image: '/images/service_naturopathy.png',
  },
  {
    id: 3,
    name: 'Dorn Therapy',
    description: 'Gentle spinal and joint alignment for lasting pain relief.',
    image: '/images/service_dorn.png',
  },
  {
    id: 4,
    name: 'Reiki',
    description: 'Channel universal energy for emotional and physical healing.',
    image: '/images/service_reiki.png',
  },
  {
    id: 5,
    name: 'Vastu',
    description: 'Harmonize your living and working spaces with cosmic energy.',
    image: '/images/service_vastu.png',
  },
  {
    id: 6,
    name: 'Sujok Therapy',
    description: 'Powerful acupressure healing through hands and feet.',
    image: '/images/service_sujok.png',
  },
  {
    id: 7,
    name: 'Diet Plan',
    description: 'Personalized holistic nutrition to nourish your body and mind.',
    image: '/images/service_diet.png',
  },
  {
    id: 8,
    name: 'Reiki Course',
    description: 'Learn the sacred art of energy healing and become a practitioner.',
    image: '/images/service_reiki_course.png',
  }
];

export default function ServicesShowcase() {
  return (
    <section id="services" className={styles.showcase}>
      <div className={`container`}>
        <div className={styles.header}>
          <h2 className={styles.title}>For your wellness.</h2>
          <p className={styles.subtitle}>Explore our services.</p>
        </div>
        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={service.image} 
                  alt={service.name} 
                  fill 
                  className={styles.image} 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className={styles.info}>
                <h3 className={styles.serviceName}>{service.name}</h3>
                <p className={styles.serviceDesc}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
