import React, { useState } from 'react';
import axios from 'axios';
import Header from './header'; // Adjust path as needed
import Banner from './banner';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    house: '',
    age: '',
    studentClass: '',
    father: '',
    phone: '',
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo') {
      setFormData({ ...formData, photo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, val]) => data.append(key, val));

    try {
      await axios.post('http://localhost:5000/register', data);
      alert('Registration successful!');
      setFormData({
        name: '', house: '', age: '', studentClass: '',
        father: '', phone: '', photo: null
      });
    } catch (err) {
      alert('Something went wrong');
    }
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: '#f9f9fb', minHeight: '100vh' }}>
      <Header />
      <div style={styles.container}>
        <div style={styles.bannerWrapper}>
          <Banner />
        </div>
        <div style={styles.formWrapper}>
          <h2 style={{ marginBottom: 10, color: '#333' }}>🎉 Symphony Onchiyam 2025</h2>
          <p id="details" style={{ marginBottom: 25, fontSize: 15, color: '#555' }}>
            താഴെയിരിക്കുന്ന രജിസ്ട്രേഷൻ ഫോം പൂരിപ്പിച്ച് Symphony Onchiyam പരിപാടിയിൽ പങ്കെടുക്കാം.
            പങ്കെടുക്കുന്നവർക്ക് സർട്ടിഫിക്കറ്റുകൾ, പുരസ്കാരങ്ങൾ എന്നിവ നൽകുന്നതാണ്.
          </p>
          <form onSubmit={handleSubmit}>
            <div style={field}>
              <label>കുട്ടിയുടെ പേര്</label>
              <input name="name" value={formData.name} onChange={handleChange} required style={input} />
            </div>

            <div style={field}>
              <label>വീട്ടുപേര്</label>
              <input name="house" value={formData.house} onChange={handleChange} required style={input} />
            </div>

            <div style={field}>
              <label>വയസ്സ്</label>
              <input name="age" type="number" value={formData.age} onChange={handleChange} required style={input} />
            </div>

            <div style={field}>
              <label>ക്ലാസ്സ്</label>
              <input name="studentClass" value={formData.studentClass} onChange={handleChange} required style={input} />
            </div>

            <div style={field}>
              <label>അച്ഛൻ്റെ പേര്</label>
              <input name="father" value={formData.father} onChange={handleChange} required style={input} />
            </div>

            <div style={field}>
              <label>ഫോൺ നമ്പർ</label>
              <input name="phone" value={formData.phone} onChange={handleChange} required style={input} />
            </div>

            <div style={field}>
              <label>ഫോട്ടോ അപ്‌ലോഡ്</label>
              <input name="photo" type="file" accept="image/*" onChange={handleChange} required />
            </div>

            <button type="submit" style={button}>✅ Register Now</button>
          </form>

          <div id="contact" style={{ marginTop: 30, fontSize: 14, color: '#666' }}>
            <hr style={{ margin: '20px 0' }} />
            <strong>Contact:</strong> +91 98765 43210 | Symphony Club, Onchiyam
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '40px 10px',
    flexWrap: 'wrap',
    backgroundColor: '#f9f9fb',
  },
  bannerWrapper: {
    width: '100%',
    maxWidth: '800px',
    marinLeft:'60px',

    marginRight: '10px',
  },
  formWrapper: {
    width: '100%',
    maxWidth: '600px',
    background: '#fff',
    borderRadius: 12,
    boxShadow: '0 0 20px rgba(0,0,0,0.1)',
    padding: '30px',
  },
};

const field = {
  marginBottom: 20,
};

const input = {
  width: '100%',
  padding: 10,
  borderRadius: 6,
  border: '1px solid #ccc',
  marginTop: 5,
  fontSize: 15,
};

const button = {
  width: '100%',
  padding: 12,
  backgroundColor: '#0066ff',
  color: 'white',
  fontWeight: 'bold',
  border: 'none',
  borderRadius: 6,
  cursor: 'pointer',
  fontSize: 16,
  marginTop: 15,
};

export default RegisterForm;
