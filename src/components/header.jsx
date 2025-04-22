import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img
          src="https://res.cloudinary.com/dd6qdgpfr/image/upload/v1745303732/logosimphony_oregbf.png"
          alt="Symphony Logo"
          style={styles.logoImg}
        />
        <span style={styles.logoText}>Symphony Onchiyam</span>
      </div>
      <nav style={styles.nav}>
        <a href="/" style={styles.link}>Home</a>
        {/* <a href="#details" style={styles.link}>Details</a> */}
        <a href="/contact" style={styles.link}>Contact</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    background: 'linear-gradient(90deg, #003D99, #0052cc)',
    color: '#ffffff',
    padding: '18px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: "'Poppins', sans-serif",
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  logoImg: {
    height: 40,
    borderRadius: 6,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
  },
  logoText: {
    fontSize: 22,
    fontWeight: 600,
    color: '#fff',
    letterSpacing: '0.5px',
  },
  nav: {
    display: 'flex',
    gap: 25,
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: 16,
    fontWeight: 500,
    transition: 'all 0.3s ease',
    position: 'relative',
  },
};

export default Header;
