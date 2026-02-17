import styles from '../styles/CertificationsPage.module.css';

const certifications = [
  {
    id: 1,
    name: 'DP-700 (Fabric Data Engineer Associate)',
    issuer: 'Microsoft',
    date: '',
    credentialId: '',
    icon: '\u{1F4CA}',
  },
  {
    id: 2,
    name: 'AWS Certified Data Engineer',
    issuer: 'Amazon Web Services',
    date: '',
    credentialId: '',
    icon: '\u{2601}',
  },
];

const CertificationsPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Certifications</h2>
      <p className={styles.subtitle}>Professional certifications and credentials</p>
      <div className={styles.grid}>
        {certifications.map((cert) => (
          <div key={cert.id} className={styles.card}>
            <div className={styles.icon}>{cert.icon}</div>
            <div className={styles.content}>
              <h3 className={styles.name}>{cert.name}</h3>
              <p className={styles.issuer}>{cert.issuer}</p>
              {cert.date && <p className={styles.date}>{cert.date}</p>}
              {cert.credentialId && <p className={styles.credentialId}>ID: {cert.credentialId}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Certifications' },
  };
}

export default CertificationsPage;
