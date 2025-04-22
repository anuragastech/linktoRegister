import React from 'react';
import Header from './header'; // Import the Header component

const Contact = () => {
  return (
    <div style={styles.pageContainer}>
      {/* Render the Header component */}
      <Header />

      <div style={styles.mainContent}>
        <h2 style={styles.headerText}>Contact Us</h2>
        <p style={styles.subHeader}>Get in touch with us for more information</p>

        <div style={styles.contactDetails}>
          <h3 style={styles.sectionTitle}>📍 Our Location</h3>
          <p style={styles.location}>
            Symphony Onchiyam Club is located in the heart of Onchiyam. We are a cultural hub offering opportunities for growth and creativity.
          </p>
          <div style={styles.mapContainer}>
            <img 
              src="https://www.google.com/maps/dir/11.6274813,75.6586182/MH2H%2B9R8+Onchiyam+UP+School,+MAdappally+Railway+Rd,+Onchiyam,+Kerala+673106/@11.6457051,75.5367379,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3ba683a949c7b109:0x99c1b5d71f09bda4!2m2!1d75.5795753!2d11.6509229?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D"
              alt="Map Location"
              style={styles.mapImage}
            />
          </div>

          <h3 style={styles.sectionTitle}>📞 Contact Information</h3>
          <div style={styles.contactInfo}>
            <p><strong>Phone:</strong> +91 871370285</p>
            <p><strong>Email:</strong> info@symphonyonchiyam.com</p>
          </div>

          <h3 style={styles.sectionTitle}>💬 Get in Touch</h3>
          <form style={styles.contactForm}>
            <input type="text" placeholder="Your Name" style={styles.input} required />
            <input type="email" placeholder="Your Email" style={styles.input} required />
            <textarea placeholder="Your Message" style={styles.textarea} required></textarea>
            <button type="submit" style={styles.submitButton}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
    padding: '40px 20px',
    marginTop: '0', // Removed space above
  },
  mainContent: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '30px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    marginTop: '20px', // Corrected space
  },
  headerText: {
    fontSize: '36px',
    fontWeight: '700',
    color: '#003d99',
    marginBottom: '10px', // Adjusted to reduce space
  },
  subHeader: {
    fontSize: '18px',
    color: '#555',
    fontWeight: '400',
    marginBottom: '30px', // Corrected space below subheader
  },
  contactDetails: {
    padding: '20px',
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#003d99',
    marginBottom: '15px', // Reduced margin between section titles
  },
  location: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '25px', // Reduced space between text and map
  },
  mapContainer: {
    marginBottom: '30px', // Adjusted space after map
  },
  mapImage: {
    width: '100%',
    borderRadius: '8px',
  },
  contactInfo: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '30px',
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  textarea: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
    height: '150px',
    resize: 'vertical',
  },
  submitButton: {
    padding: '12px 20px',
    backgroundColor: '#003d99',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  submitButtonHover: {
    backgroundColor: '#0052cc',
  },
};

export default Contact;
