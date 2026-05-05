"use client"
import React, { useState, useEffect, useRef } from "react";
import styles from "./page.module.css"
import Cardloader from "./CardLoader/page";

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIntroVisible, setIsIntroVisible] = useState(true);
  const [isNameVisible, setIsNameVisible] = useState(false);
  const [isContentReady, setIsContentReady] = useState(false);
  const [keyOutput, setKeyOutput] = useState("");

  useEffect(() => {
    // Stage 1: Show Name
    const nameTimer = setTimeout(() => setIsNameVisible(true), 400);
    
    // Stage 2: Lift Loader
    const liftTimer = setTimeout(() => {
      setIsIntroVisible(false);
    }, 2200);

    // Stage 3: Trigger Content Entrance (shortly after lift starts)
    const contentTimer = setTimeout(() => {
      setIsContentReady(true);
    }, 2600);

    // Intersection Observer for scroll-triggered elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.active);
          }
        });
      },
      { threshold: 0.1 }
    );


    const elementsToReveal = document.querySelectorAll(`.${styles.scrollreveal}, .${styles.imgcont}`);
    elementsToReveal.forEach((el) => observer.observe(el));

    // Handle keydown events
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeyOutput(`Typed: ${e.key}`);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(liftTimer);
      clearTimeout(contentTimer);
      observer.disconnect();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className={styles.body} id="app">
      {/* Animated Background Orbs */}
      <div className={styles.bgOrbs}>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
      </div>

      {/* Navigation */}
      <nav className={styles.header}>
        <div className={styles.logo}>EVANS<span>.</span></div>

        <button 
          className={`${styles.menutoggle} ${isMenuOpen ? styles.active : ""}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`${styles.nav} ${isMenuOpen ? styles.active : ""}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>

      {/* Intro Loader Overlay */}
      <div className={`${styles.introloader} ${!isIntroVisible ? styles.lifted : ""}`}>
        <h1 
          className={styles.name} 
          style={{ 
            opacity: isNameVisible ? 1 : 0, 
            transform: isNameVisible ? "translateY(0)" : "translateY(40px)" 
          }}
        >
          CODE WITH EVANS
        </h1>
      </div>

      {/* Main Content Sections */}
      <main className={styles.mainContent}>
        {/* Section 1: Hero */}
        <section id="home" className={styles.hero}>
          <div className={`${styles.heroLeft} ${isContentReady ? styles.slideIn : ""}`}>
            <h2 className={styles.heroGreeting}>Hello, I'm Evans</h2>
            <h1>
              I build <span className={styles.glowText}>Experience</span> <br/>
              Through Code.
            </h1>
            <p>A passionate developer focused on creating immersive, highly-performant digital ecosystems with cutting-edge web technologies.</p>
            <div className={styles.heroCta}>
              <a href="#projects" className={styles.primaryBtn}>Explore Work</a>
              <a href="#contact" className={styles.secondaryBtn}>Get in Touch</a>
            </div>
          </div>
          <div className={`${styles.heroRight} ${isContentReady ? styles.slideIn : ""}`}>
             <div className={styles.heroImageWrapper}>
                <div className={styles.heroImageOverlay}></div>
                <img src="/validme2.JPG" alt="Developer Portrait" />
             </div>
          </div>
        </section>

        {/* Info Banner */}
        <div className={styles.infoBanner}>
          <div className={styles.keyOutputWrapper}>
             <span className={styles.terminalIcon}>{'>_'}</span>
             <span className={styles.keyOutput}>{keyOutput || "Press any key to test interaction..."}</span>
             <span className={styles.blinkingCursor}></span>
          </div>
        </div>

        {/* Section 2: About (Reveals on scroll) */}
        <section id="about" className={`${styles.about} ${styles.scrollreveal}`}>
           <div className={styles.sectionHeader}>
              <h2>About Me</h2>
              <div className={styles.underline}></div>
           </div>
           
           <div className={styles.aboutGrid}>
             <div className={styles.aboutCard}>
                <p>I specialize in crafting complex, robust applications using the latest JavaScript frameworks. I prioritize not just making things that work, but making things that feel incredible to use.</p>
                <p>When I'm not coding, I'm constantly learning new paradigms and architectural patterns to elevate the standard of my work.</p>
             </div>
             
             <div className={styles.skillsContainer}>
                <h3>Technical Arsenal</h3>
                <div className={styles.skills}>
                  <div className={styles.skillBadge}>Next.js</div>
                  <div className={styles.skillBadge}>React</div>
                  <div className={styles.skillBadge}>TypeScript</div>
                  <div className={styles.skillBadge}>Tailwind CSS</div>
                  <div className={styles.skillBadge}>Node.js</div>
                  <div className={styles.skillBadge}>Framer Motion</div>
                  <div className={styles.skillBadge}>Supabase</div>
                </div>
             </div>
           </div>
        </section>

        {/* Section 3: Projects */}
        <section id="projects" className={styles.projects}>
           <div className={styles.sectionHeader}>
              <h2>Selected Projects</h2>
              <div className={styles.underline}></div>
           </div>
           
           <div className={styles.projectGrid}>

            {/* Project 1 */}
             <div className={`${styles.projectCard} ${styles.scrollreveal}`}>
                <div className={styles.projectImage}>
                  <img src="newsimg.png" alt="Modern UI Dashboard" />
                </div>
                <div className={styles.projectInfo}>
                   <div className={styles.projectMeta}>
                     <span>2026</span>
                     <span>Web App</span>
                   </div>
                   <h3>NewsHub</h3>
                   <p>A modern full-stack news platform featuring role-based author workflows, dynamic subscriptions, and real-time content delivery.</p>
                   <div className={styles.projectTags}>
                     <span>Next.js</span>
                     <span>Supabase</span>
                   </div>
                   <button className={styles.projectLink}>View Case Study ↗</button>
                </div>
             </div>

             {/* Project 2 */}
             <div className={`${styles.projectCard} ${styles.scrollreveal}`}>
                <div className={styles.projectImage}>
                  <img src="/image/download.jpg" alt="Modern UI Dashboard" />
                </div>
                <div className={styles.projectInfo}>
                   <div className={styles.projectMeta}>
                     <span>2026</span>
                     <span>Web App</span>
                   </div>
                   <h3>Fintech Dashboard</h3>
                   <p>A high-performance financial dashboard featuring real-time data visualization and complex state management.</p>
                   <div className={styles.projectTags}>
                     <span>Next.js</span>
                     <span>Recharts</span>
                   </div>
                   <button className={styles.projectLink}>View Case Study ↗</button>
                </div>
             </div>

             {/* Project 3 */}
             <div className={`${styles.projectCard} ${styles.scrollreveal}`}>
                <div className={styles.projectImage}>
                  <img src="/image/download.jpg" alt="E-commerce Experience" />
                </div>
                <div className={styles.projectInfo}>
                   <div className={styles.projectMeta}>
                     <span>2025</span>
                     <span>Platform</span>
                   </div>
                   <h3>Omnichannel Store</h3>
                   <p>A headless e-commerce solution architected for extreme scalability and instantaneous load times.</p>
                   <div className={styles.projectTags}>
                     <span>React</span>
                     <span>Stripe</span>
                   </div>
                   <button className={styles.projectLink}>View Case Study ↗</button>
                </div>
             </div>
           </div>
        </section>

        {/* Section 4: Contact CTA */}
        <section id="contact" className={`${styles.contact} ${styles.scrollreveal}`}>
           <div className={styles.contactGlass}>
             <h2>Let's Build Something Extraordinary</h2>
             <p>Currently available for freelance opportunities and innovative projects.</p>
             <button className={styles.primaryBtn}>Send a Message</button>
           </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.logo}>EVANS<span>.</span></div>
          <div className={styles.socials}>
             <a href="#">GitHub</a>
             <a href="#">LinkedIn</a>
             <a href="#">Twitter</a>
          </div>
        </div>
        <p className={styles.copyright}>&copy; {new Date().getFullYear()} Evans. Crafted with precision.</p>
      </footer>
    </div>
  );
}