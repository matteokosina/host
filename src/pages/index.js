import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import BlogCard from '../components/BlogCard';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const BLOG_POSTS = [
  {
    id: 1,
    title: 'Week 1, MVP',
    excerpt: 'Kicking off the H.O.S.T. development journey with a focus on establishing the core mechanics and architecture for our MVP.',
    date: 'February 27, 2026',
    image: '/host/img/blog-1.svg',
    url: '/blog/project-init',
  },
   {
    id: 2,
    title: 'Week 2, Architecture',
    excerpt: 'Enhancing the architecture and visual design of H.O.S.T. to create a more immersive and engaging gaming experience.',
    date: 'March 6, 2026',
    image: '/host/img/blog-2.svg',
    url: '/blog/architecture',
  },
  {
    id: 3,
    title: 'Week 3, Addictive Patterns & UI',
    excerpt: 'Exploring addictive design patterns and enhancing the user interface of H.O.S.T. for a more engaging player experience.',
    date: 'March 13, 2026',
    image: '/host/img/blog-3.svg',
    url: '/blog/addictive-patterns',
  },
  {
    id: 4,
    title: 'Week 4, Analytics',
    excerpt: 'Adding gamestats and analytics to H.O.S.T. to track player performance and gather insights for future improvements.',
    date: 'March 20, 2026',
    image: '/host/img/blog-4.svg',
    url: '/blog/analytics',
  },
  {
    id: 5,
    title: 'Week 5, Final Touches',
    excerpt: 'Adding the final touches and polish to H.O.S.T. to prepare for launch.',
    date: 'March 27, 2026',
    image: '/host/img/blog-5.svg',
    url: '/blog/final_presentation',
  },
];

function HomepageHero() {
  const [scanLineOffset, setScanLineOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanLineOffset((prev) => (prev + 2) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.hero}>
      <div className={styles.stars}></div>
      <div className={styles.gridBackground}></div>
      
      <div className={styles.heroContent}>
        <div className={styles.logoArea}>
          <div className={styles.crtEffect}>
            <h1 className={styles.title}>H.O.S.T.</h1>
            <div className={styles.subtitle}>
             Human Operated Spacecraft Terminal
            </div>
          </div>
        </div>

        {/* Control Unit - Below Monitor */}
        <div className={styles.controlUnit}>
          <div className={styles.controlPanel}>
            {/* Joystick */}
            <div className={styles.joystickHolder}>
              <div className={styles.joystick}>
                <div className={styles.joystickBase}></div>
                <div className={styles.joystickStick}></div>
              </div>
            </div>
            
            {/* Button Panel */}
            <div className={styles.buttonPanel}>
              <div className={styles.buttonRow}>
                <div className={styles.button + ' ' + styles.blinking}></div>
                <div className={styles.button + ' ' + styles.blinking}></div>
                <div className={styles.button}></div>
              </div>
              <div className={styles.buttonRow}>
                <div className={styles.button}></div>
                <div className={styles.button + ' ' + styles.blinking}></div>
                <div className={styles.button}></div>
              </div>
            </div>
            
            {/* Indicators */}
            <div className={styles.indicators}>
              <div className={styles.indicator + ' ' + styles.indicatorGreen}></div>
              <div className={styles.indicator + ' ' + styles.indicatorRed}></div>
              <div className={styles.indicator + ' ' + styles.indicatorYellow}></div>
            </div>
          </div>
        </div>

        <p className={styles.tagline}>
          A development journal documenting the creation of a retro high-tech aerospace terminal game.
          <br />
          We need you to bring the rocket back home safely.
          <span className={styles.blinkCursor}>_</span>
        </p>

        <div className={styles.ctaButtons}>
          <a href="/blog" className={styles.primaryButton}>
            ENTER LOG SYSTEM
          </a>
        </div>
      </div>

      <div className={styles.floatingElements}>
        <div className={styles.orbitingObject + ' ' + styles.orbit1}></div>
        <div className={styles.orbitingObject + ' ' + styles.orbit2}></div>
        <div className={styles.orbitingObject + ' ' + styles.orbit3}></div>
      </div>
    </div>
  );
}

function BlogSection() {
  return (
    <section className={styles.blogSection}>
      <div className={styles.sectionTitle}>
        <h2>DEVELOPMENT LOG</h2>
        <div className={styles.divider}></div>
      </div>
      
      <div className={styles.grid}>
        {BLOG_POSTS.map((post) => (
          <BlogCard
            key={post.id}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            image={post.image}
            url={post.url}
          />
        ))}
      </div>
    </section>
  );
}

function GameVisionSection() {
  return (
    <section className={styles.calloutSection + ' ' + styles.gameVision}>
      <div className={styles.calloutContent}>
        <h2 className={styles.calloutTitle}>GAME VISION</h2>
        <p className={styles.calloutText}>
            The H.O.S.T. (Human Operated Spacecraft Terminal) project is a level-based game in which the player controls a rocket using two thrusters, 
            positioned on the left and right sides of the vehicle. The player must skillfully activate and 
            deactivate these thrusters to navigate the rocket safely through increasingly challenging levels.
            Each level begins with the rocket in mid-air, moving with an initial velocity. The primary objective 
            is to slow down and land the rocket accurately on a designated landing pad, while avoiding obstacles 
            such as mountains, airplanes, and other hazards. Limited fuel adds an additional strategic element, 
            requiring careful management of resources.
            Player performance will be tracked through metrics such as landing time and fuel consumption.
        </p>
      </div>
    </section>
  );
}

function AIPolicySection() {
return (
    <section className={styles.calloutSection + ' ' + styles.aiPolicy}>
        <div className={styles.calloutContent}>
            <h2 className={styles.calloutTitle}>AI POLICY & DEVELOPMENT</h2>
            <p className={styles.calloutText} style={{ textAlign: 'left' }}>
                <strong>- Own Your Code:</strong> 
                <br />
                Use AI for speed, but manually verify every output. You must be able to explain every decision.
                <br />
                <strong>- Level Up:</strong> 
                <br />
                Use AI as a mentor for mastering C# and Unity.
                <br />
                <strong>- Transparency First:</strong> 
                <br />
                Do not use AI to edit peer code without prior alignment.
            </p>
        </div>
    </section>
);
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="H.O.S.T. - Game Development Blog" description={siteConfig.tagline}>
      <main>
        <HomepageHero />
        <BlogSection />
        <section className={styles.calloutSectionWrapper}>
          <div className={styles.calloutContainer}>
            <GameVisionSection />
            <AIPolicySection />
          </div>
        </section>
      </main>
    </Layout>
  );
}
