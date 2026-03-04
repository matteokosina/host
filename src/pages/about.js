import React from 'react';
import Layout from '@theme/Layout';
import styles from './about.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function About() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="About H.O.S.T."
      description="Learn about the H.O.S.T. game development project and our vision"
    >
      <main className={styles.aboutPage}>
        <div className={styles.container}>
          {/* Hero Section */}
          <section className={styles.heroSection}>
            <h1 className={styles.pageTitle}>ABOUT H.O.S.T.</h1>
            <div className={styles.divider}></div>
            <p className={styles.introText}>
              Human Operated Spacecraft Terminal - A High-Tech Aerospace Simulation
            </p>
          </section>

          

          {/* Team Section */}
          <section className={styles.infoSection}>
            <h2 className={styles.sectionTitle}>THE TEAM</h2>
            <div className={styles.sectionDivider}></div>
            <p className={styles.teamIntro}>
              Building H.O.S.T. for the Games & Gaming class at DHBW as part of our Bachelor's degree.
            </p>
            <div className={styles.teamGrid}>
              <div className={styles.teamMember}>
                <img 
                  src="https://github.com/matteokosina.png" 
                  alt="Matteo Kosina"
                  className={styles.memberAvatar}
                />
                <h3 className={styles.memberName}>Matteo Kosina</h3>
                <p className={styles.memberRole}>Game Developer</p>
              </div>
              <div className={styles.teamMember}>
                <img 
                  src="https://github.com/habetuz.png" 
                  alt="Marvin Fuchs"
                  className={styles.memberAvatar}
                />
                <h3 className={styles.memberName}>Marvin Fuchs</h3>
                <p className={styles.memberRole}>Game Developer</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
