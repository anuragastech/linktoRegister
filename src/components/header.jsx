import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>🎶 Symphony Onchiyam</div>
      <nav style={styles.nav}>
        <a href="#" style={styles.link}>Home</a>
        <a href="#details" style={styles.link}>Details</a>
        <a href="#contact" style={styles.link}>Contact</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#004aad',
    color: 'white',
    padding: '15px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: "'Poppins', sans-serif",
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: 20,
    fontWeight: 600,
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: 16,
    fontWeight: 500,
    transition: 'opacity 0.2s ease',
  }
};

export default Header;
