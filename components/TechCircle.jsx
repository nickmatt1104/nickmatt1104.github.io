import styles from '../styles/TechCircle.module.css';
import { getAssetPath } from '../lib/utils';

// Outer ring tech items (12 items)
const outerTechItems = [
  { icon: 'python', name: 'Python', color: '#3776AB' },
  { icon: 'sql', name: 'SQL', color: '#F29111' },
  { icon: 'spark', name: 'Apache Spark', color: '#E25A1C' },
  { icon: 'kafka', name: 'Apache Kafka', color: '#231F20' },
  { icon: 'airflow', name: 'Airflow', color: '#017CEE' },
  { icon: 'aws', name: 'AWS', color: '#FF9900' },
  { icon: 'azure', name: 'Azure', color: '#0089D6' },
  { icon: 'postgresql', name: 'PostgreSQL', color: '#4169E1' },
  { icon: 'docker', name: 'Docker', color: '#2496ED' },
  { icon: 'tableau', name: 'Tableau', color: '#E97627' },
  { icon: 'dbt', name: 'dbt', color: '#FF694B' },
  { icon: 'hadoop', name: 'Hadoop', color: '#66CCFF' },
];

// Inner ring tech items (6 items)
const innerTechItems = [
  { icon: 'pyspark', name: 'PySpark', color: '#E25A1C' },
  { icon: 'awsglue', name: 'AWS Glue', color: '#FF9900' },
  { icon: 'tensorflow', name: 'TensorFlow', color: '#FF6F00' },
  { icon: 'powerbi', name: 'Power BI', color: '#F2C811' },
  { icon: 'mongodb', name: 'MongoDB', color: '#47A248' },
  { icon: 'git', name: 'Git', color: '#F05032' },
];

// SVG Icons as components
const icons = {
  python: (
    <svg viewBox="0 0 24 24">
      <path d="M11.5 2c-2.5 0-4 1-4 3v2h4v1h-6c-2 0-3.5 1.5-3.5 4v2c0 2.5 1.5 4 3.5 4h2v-3c0-1.5 1-2.5 2.5-2.5h4c1.5 0 2.5-1 2.5-2.5v-4c0-2-1.5-3-4-3h-1zm-.5 1.5a1 1 0 110 2 1 1 0 010-2z" fill="#3776AB"/>
      <path d="M12.5 22c2.5 0 4-1 4-3v-2h-4v-1h6c2 0 3.5-1.5 3.5-4v-2c0-2.5-1.5-4-3.5-4h-2v3c0 1.5-1 2.5-2.5 2.5h-4c-1.5 0-2.5 1-2.5 2.5v4c0 2 1.5 3 4 3h1zm.5-1.5a1 1 0 110-2 1 1 0 010 2z" fill="#FFD43B"/>
    </svg>
  ),
  sql: (
    <svg viewBox="0 0 24 24">
      <ellipse cx="12" cy="6" rx="8" ry="3" fill="#F29111"/>
      <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6" fill="none" stroke="#F29111" strokeWidth="2"/>
      <ellipse cx="12" cy="18" rx="8" ry="3" fill="none" stroke="#F29111" strokeWidth="1.5"/>
      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" fill="none" stroke="#F29111" strokeWidth="1.2"/>
    </svg>
  ),
  spark: (
    <svg viewBox="0 0 24 24">
      <path d="M12 2l2.5 7H22l-6 4.5 2.5 7L12 16l-6.5 4.5 2.5-7L2 9h7.5z" fill="#E25A1C"/>
    </svg>
  ),
  kafka: (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="3" fill="none" stroke="white" strokeWidth="1.5"/>
      <circle cx="7" cy="16" r="2.5" fill="none" stroke="white" strokeWidth="1.5"/>
      <circle cx="17" cy="16" r="2.5" fill="none" stroke="white" strokeWidth="1.5"/>
      <line x1="10" y1="10" x2="8" y2="14" stroke="white" strokeWidth="1.5"/>
      <line x1="14" y1="10" x2="16" y2="14" stroke="white" strokeWidth="1.5"/>
      <line x1="9.5" y1="16" x2="14.5" y2="16" stroke="white" strokeWidth="1.5"/>
    </svg>
  ),
  airflow: (
    <svg viewBox="0 0 24 24">
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" fill="none" stroke="#017CEE" strokeWidth="1.5"/>
      <path d="M12 6v6l4 4" stroke="#017CEE" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="1.5" fill="#017CEE"/>
      <path d="M8 4l4 8M16 4l-4 8M4 16h8M20 16h-8" stroke="#017CEE" strokeWidth="0.8" opacity="0.5"/>
    </svg>
  ),
  aws: (
    <svg viewBox="0 0 24 24">
      <path d="M6.5 11l1.5-5h1l1.5 5h-1l-.3-1h-1.4l-.3 1h-1zm1.5-2h.8l-.4-1.5-.4 1.5z" fill="#FF9900"/>
      <path d="M11 6h1l.8 3.5.8-3.5h1l-1.3 5h-1L11 6z" fill="#FF9900"/>
      <path d="M15 8.5c0-.8.7-1.5 1.5-1.5.4 0 .7.1 1 .3l-.3.7c-.2-.1-.4-.2-.6-.2-.4 0-.6.3-.6.7 0 .4.2.7.6.7.2 0 .4-.1.6-.2l.3.7c-.3.2-.6.3-1 .3-.8 0-1.5-.7-1.5-1.5z" fill="#FF9900"/>
      <path d="M4 15c2.5 1.5 5.5 2.5 8.5 2.5s6-.5 8.5-2" stroke="#FF9900" strokeWidth="1.5" fill="none"/>
      <path d="M18.5 14l1-2.5 1.5 1-2.5 1.5z" fill="#FF9900"/>
    </svg>
  ),
  azure: (
    <svg viewBox="0 0 24 24">
      <path d="M9 3l-7 14h5l1-2h8l-3 6h5l7-14H9z" fill="#0089D6" opacity="0.8"/>
      <path d="M13 3l-4 8h6l-2 4h5l4-8h-6l2-4h-5z" fill="#0089D6"/>
    </svg>
  ),
  postgresql: (
    <svg viewBox="0 0 24 24">
      <ellipse cx="12" cy="6" rx="8" ry="3" fill="#336791"/>
      <path d="M4 6v10c0 1.7 3.6 3 8 3s8-1.3 8-3V6" fill="none" stroke="#336791" strokeWidth="2"/>
      <ellipse cx="12" cy="16" rx="8" ry="3" fill="none" stroke="#336791" strokeWidth="1.5"/>
      <path d="M4 11c0 1.7 3.6 3 8 3s8-1.3 8-3" fill="none" stroke="#336791" strokeWidth="1.2"/>
    </svg>
  ),
  docker: (
    <svg viewBox="0 0 24 24">
      <path d="M4.5 11h2v2h-2v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm3-3h2v2h-2V8zm-3 0h2v2h-2V8zm-3 0h2v2h-2V8zm-3 0h2v2h-2V8zm6-3h2v2h-2V5zm-3 0h2v2h-2V5z" fill="#2496ED"/>
      <path d="M23 11.5c-.5-.5-1.5-1-2.5-1-.2-1-1-2-2-2.5.5 1 .5 2 0 3-1 .5-2.5 1-4 1H2c0 3 1 5 3 6.5 2.5 2 6 2 9 1 3-.5 5-2 7-5 .5-1 1-2 1-3h1c.5 0 1-.5 1.5-1 .5-.5 0-1-.5-1z" fill="#2496ED"/>
    </svg>
  ),
  tableau: (
    <svg viewBox="0 0 24 24">
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="#E97627" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M12 7v10M7 12h10" stroke="#E97627" strokeWidth="2" strokeLinecap="round"/>
      <path d="M5 5l2 2M17 5l-2 2M5 19l2-2M17 19l-2-2" stroke="#E97627" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  dbt: (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" fill="none" stroke="#FF694B" strokeWidth="2"/>
      <path d="M8 12h8M12 8v8" stroke="#FF694B" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="3" fill="#FF694B"/>
    </svg>
  ),
  hadoop: (
    <svg viewBox="0 0 24 24">
      <circle cx="8" cy="8" r="3" fill="#66CCFF"/>
      <circle cx="16" cy="8" r="3" fill="#66CCFF"/>
      <circle cx="8" cy="16" r="3" fill="#66CCFF"/>
      <circle cx="16" cy="16" r="3" fill="#66CCFF"/>
      <line x1="8" y1="11" x2="8" y2="13" stroke="#66CCFF" strokeWidth="1.5"/>
      <line x1="16" y1="11" x2="16" y2="13" stroke="#66CCFF" strokeWidth="1.5"/>
      <line x1="11" y1="8" x2="13" y2="8" stroke="#66CCFF" strokeWidth="1.5"/>
      <line x1="11" y1="16" x2="13" y2="16" stroke="#66CCFF" strokeWidth="1.5"/>
    </svg>
  ),
  pyspark: (
    <svg viewBox="0 0 24 24">
      <path d="M12 2l2 6H20l-5 4 2 6-7-4-7 4 2-6-5-4h6z" fill="#E25A1C"/>
      <text x="12" y="14" textAnchor="middle" fill="white" fontSize="5" fontWeight="bold">Py</text>
    </svg>
  ),
  awsglue: (
    <svg viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="#FF9900" strokeWidth="1.5"/>
      <path d="M7 8h10M7 12h10M7 16h10" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="17" cy="8" r="1.5" fill="#FF9900"/>
      <circle cx="17" cy="12" r="1.5" fill="#FF9900"/>
      <circle cx="17" cy="16" r="1.5" fill="#FF9900"/>
    </svg>
  ),
  tensorflow: (
    <svg viewBox="0 0 24 24">
      <path d="M12 2L4 6v4l8 4v8l8-4v-4l-8-4V2z" fill="#FF6F00"/>
      <path d="M12 10l-8 4v4l8-4v-4z" fill="#FF9800" opacity="0.7"/>
    </svg>
  ),
  powerbi: (
    <svg viewBox="0 0 24 24">
      <rect x="4" y="10" width="3" height="10" rx="1" fill="#F2C811"/>
      <rect x="8.5" y="7" width="3" height="13" rx="1" fill="#F2C811" opacity="0.85"/>
      <rect x="13" y="4" width="3" height="16" rx="1" fill="#F2C811" opacity="0.7"/>
      <rect x="17.5" y="2" width="3" height="18" rx="1" fill="#F2C811" opacity="0.55"/>
    </svg>
  ),
  mongodb: (
    <svg viewBox="0 0 24 24">
      <path d="M12 2c0 0 .5 2 .5 4 0 1 .5 2 1 3 .5 1 1 2 1 3.5 0 2.5-1 5-1.5 6v2c0 .5-.5 1-1 1s-1-.5-1-1v-2c-.5-1-1.5-3.5-1.5-6 0-1.5.5-2.5 1-3.5.5-1 1-2 1-3 0-2 .5-4 .5-4z" fill="#47A248"/>
      <path d="M11.5 20v2c.3.3.5.3 1 0v-2h-1z" fill="#A6CE39"/>
    </svg>
  ),
  git: (
    <svg viewBox="0 0 24 24">
      <path d="M21.6 11.2L12.8 2.4c-.5-.5-1.3-.5-1.8 0l-1.8 1.8 2.3 2.3c.5-.2 1.1-.1 1.5.3.4.4.5 1 .3 1.5l2.2 2.2c.5-.2 1.1-.1 1.5.3.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.4-.4-.5-1.1-.3-1.6l-2.1-2.1v5.4c.1.1.3.2.4.3.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1.2-.2.4-.3.6-.4V9.1c-.2-.1-.4-.2-.6-.4-.4-.4-.5-1-.3-1.5L8.3 4.9l-5.9 5.9c-.5.5-.5 1.3 0 1.8l8.8 8.8c.5.5 1.3.5 1.8 0l8.6-8.6c.5-.5.5-1.3 0-1.8z" fill="#F05032"/>
    </svg>
  ),
};

const TechCircle = () => {
  return (
    <div className={styles.container}>
      {/* Glow effect behind */}
      <div className={styles.glowEffect}></div>

      {/* Outer dashed ring */}
      <div className={styles.outerDashedRing}></div>

      {/* Outer rotating ring with tech items */}
      <div className={styles.outerRing}>
        {outerTechItems.map((tech, index) => {
          const angle = (360 / outerTechItems.length) * index;
          return (
            <div
              key={tech.name}
              className={styles.techItem}
              style={{
                '--angle': `${angle}deg`,
                '--delay': `${index * 0.08}s`,
                '--glow-color': tech.color,
              }}
              title={tech.name}
            >
              <div className={styles.techIcon}>{icons[tech.icon]}</div>
            </div>
          );
        })}
      </div>

      {/* Middle dashed ring */}
      <div className={styles.middleDashedRing}></div>

      {/* Inner rotating ring with tech items */}
      <div className={styles.innerRing}>
        {innerTechItems.map((tech, index) => {
          const angle = (360 / innerTechItems.length) * index;
          return (
            <div
              key={tech.name}
              className={styles.innerTechItem}
              style={{
                '--angle': `${angle}deg`,
                '--delay': `${index * 0.1}s`,
                '--glow-color': tech.color,
              }}
              title={tech.name}
            >
              <div className={styles.techIcon}>{icons[tech.icon]}</div>
            </div>
          );
        })}
      </div>

      {/* Center circle with code icon */}
      <div className={styles.centerCircle}>
        <span className={styles.centerIcon}>{'</>'}</span>
      </div>
    </div>
  );
};

export default TechCircle;
