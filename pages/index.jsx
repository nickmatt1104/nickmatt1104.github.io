import { useState, useEffect } from 'react';
import Link from 'next/link';
import TechCircle from '../components/TechCircle';
import styles from '../styles/HomePage.module.css';
import user from '../data/user.json';

const roles = [
  'Data Engineer',
  'ETL Developer',
  'Cloud Data Architect',
  'BI Developer',
  'Python Developer',
];

export default function HomePage() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // Get first and last name for styling
  const nameParts = user.name.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I BUILD</h1>
          <h1>DATA-DRIVEN SOLUTIONS</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <p className={styles.greeting}>
              <span className={styles.codeIcon}>&lt;/&gt;</span> Hello, I'm
            </p>
            <h1 className={styles.firstName}>{firstName}</h1>
            <h1 className={styles.lastName}>{lastName}</h1>
            <p className={styles.role}>
              I'm a <span className={styles.typed}>{displayText}</span>
              <span className={styles.cursor}>|</span>
            </p>
            <p className={styles.description}>
              {user.shortBio.slice(0, 180)}...
            </p>
            <div className={styles.buttons}>
              <Link href="/projects">
                <button className={styles.button}>View Work</button>
              </Link>
              <Link href="/contact">
                <button className={styles.outlined}>Contact Me</button>
              </Link>
            </div>
          </div>
          <TechCircle />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
