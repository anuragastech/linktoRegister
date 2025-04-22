import React, { useState } from 'react';
import axios from 'axios';
import Header from './header';
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
    } else if (name === 'phone') {
      const onlyNums = value.replace(/\D/g, '');
      setFormData({ ...formData, phone: onlyNums });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, val]) => {
      if (val !== null && val !== '') {
        data.append(key, val);
      }
    });

    try {
      await axios.post('https://linktoregisterbackend.onrender.com/register', data);
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
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
            <img
              src="https://res.cloudinary.com/dd6qdgpfr/image/upload/v1745303732/logosimphony_oregbf.png"
              alt="Symphony Logo"
              style={{ height: 40, marginRight: 10 }}
            />
            <h2 style={{ margin: 0, color: '#333' }}>Symphony Onchiyam 2025</h2>
          </div>
          <p id="details" style={{ marginBottom: 25, fontSize: 15, color: '#555' }}>
            താഴെയിരിക്കുന്ന രജിസ്ട്രേഷൻ ഫോം പൂരിപ്പിച്ച് സിംഫണി ഒഞ്ചിയം നടത്തുന്ന "ചിറകുകൾ"- ഏകദിന ക്യാമ്പിൽ പങ്കെടുക്കാം.
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
              <input
                name="studentClass"
                type="number"
                min="1"
                max="12"
                value={formData.studentClass}
                onChange={handleChange}
                required
                style={input}
                placeholder="1 to 12"
              />
            </div>

            <div style={field}>
              <label>അച്ഛൻ്റെ പേര്</label>
              <input name="father" value={formData.father} onChange={handleChange} required style={input} />
            </div>

            <div style={field}>
              <label>ഫോൺ നമ്പർ</label>
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                maxLength="10"
                required
                style={input}
                placeholder="10-digit phone number"
              />
            </div>

            <div style={field}>
              <label>ഫോട്ടോ അപ്‌ലോഡ് </label>
              <input name="photo" type="file" accept="image/*" onChange={handleChange} />
            </div>

            <button type="submit" style={button}>✅ Register Now</button>
          </form>

          <div id="contact" style={{ marginTop: 30, fontSize: 14, color: '#666' }}>
            <hr style={{ margin: '20px 0' }} />
            <strong>Contact:</strong> +91 8714370285 | Symphony Onchiyam 
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
    marginLeft: '25px',
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
