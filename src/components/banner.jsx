import React from 'react';

const Banner = () => {
  return (
    <div style={styles.bannerWrapper}>
      <img
        src="https://res.cloudinary.com/dd6qdgpfr/image/upload/v1744960378/photo_2025-04-18_12-42-16_felngi.jpg"
        alt="Banner"
        style={styles.banner}
      />
      <h2 style={styles.title}>📋 Symphony Onchiyam - രജിസ്ട്രേഷൻ ഫോം</h2>
    </div>
  );
};

const styles = {
  bannerWrapper: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  banner: {
    width: '100%',
    maxHeight: '600px',
    objectFit: 'cover',
    borderRadius: '12px',
    display: 'block',
  },
  title: {
    marginTop: '20px',
    color: '#333',
    fontWeight: '600',
  },
};

export default Banner;
