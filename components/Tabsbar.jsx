import { useRef, useState, useEffect } from 'react';
import Tab from './Tab';
import styles from '../styles/Tabsbar.module.css';

const Tabsbar = () => {
  const tabsRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkScroll = () => {
    if (tabsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scrollLeft = () => {
    if (tabsRef.current) {
      tabsRef.current.scrollBy({ left: -150, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (tabsRef.current) {
      tabsRef.current.scrollBy({ left: 150, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.tabsContainer}>
      {showLeftArrow && (
        <button className={`${styles.scrollBtn} ${styles.scrollLeft}`} onClick={scrollLeft} aria-label="Scroll left">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
      )}
      <div className={styles.tabs} ref={tabsRef} onScroll={checkScroll}>
        <Tab icon="/react_icon.svg" filename="home.jsx" path="/" />
        <Tab icon="/html_icon.svg" filename="about.html" path="/about" />
        <Tab icon="/css_icon.svg" filename="experience.css" path="/experience" />
        <Tab icon="/js_icon.svg" filename="projects.js" path="/projects" />
        <Tab icon="/yaml_icon.svg" filename="education.yaml" path="/education" />
        <Tab icon="/markdown_icon.svg" filename="github.md" path="/github" />
        <Tab icon="/react_icon.svg" filename="certifications.jsx" path="/certifications" />
        <Tab icon="/css_icon.svg" filename="contact.css" path="/contact" />
      </div>
      {showRightArrow && (
        <button className={`${styles.scrollBtn} ${styles.scrollRight}`} onClick={scrollRight} aria-label="Scroll right">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Tabsbar;
