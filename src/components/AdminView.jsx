import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const AdminView = () => {
  const [registrations, setRegistrations] = useState([]);
  const tableRef = useRef(null);

  useEffect(() => {
    axios.get('https://linktoregisterbackend.onrender.com/registrations')
      .then(response => setRegistrations(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const downloadPDF = () => {
    const input = tableRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('l', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 10, 10, pdfWidth - 20, pdfHeight);
      pdf.save('registrations.pdf');
    });
  };

  const exportToExcel = () => {
    const data = registrations.map(({ name, house, age, studentClass, father, phone }) => ({
      name, house, age, class: studentClass, father, phone
    }));
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Registrations');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, 'registrations.xlsx');
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
      <img
  src="https://res.cloudinary.com/dd6qdgpfr/image/upload/v1744960378/photo_2025-04-18_12-42-16_felngi.jpg"
  alt="Banner"
  style={styles.banner}
/>

        <h2 style={styles.title}>📋 Symphony Onchiyam - രജിസ്ട്രേഷൻ ലിസ്റ്റ്</h2>

        <div style={styles.buttonRow}>
          <button style={styles.exportBtn} onClick={downloadPDF}>
            ⬇️ PDF ആയി ഡൗൺലോഡ്
          </button>
          <button style={styles.exportBtn} onClick={exportToExcel}>
            ⬇️ Excel ആയി ഡൗൺലോഡ്
          </button>
        </div>

        <div style={{ overflowX: 'auto' }} ref={tableRef}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.theadRow}>
                <th>കുട്ടിയുടെ പേര്</th>
                <th>വീട്ടുപേര്</th>
                <th>വയസ്സ്</th>
                <th>ക്ലാസ്സ്</th>
                <th>അച്ഛൻ്റെ പേര്</th>
                <th>ഫോൺ നമ്പർ</th>
                <th>ഫോട്ടോ</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((reg, index) => (
                <tr key={index} style={index % 2 === 0 ? styles.rowEven : styles.rowOdd}>
                  <td>{reg.name}</td>
                  <td>{reg.house}</td>
                  <td>{reg.age}</td>
                  <td>{reg.studentClass}</td>
                  <td>{reg.father}</td>
                  <td>{reg.phone}</td>
                  <td>
                    <img
                      src={`http://localhost:5000/uploads/${reg.photo}`}
                      alt="Photo"
                      style={styles.image}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: '#f4f6f8',
    minHeight: '100vh',
    padding: '40px 20px',
  },
  card: {
    maxWidth: '1000px',
    margin: 'auto',
    background: '#fff',
    borderRadius: '12px',
    padding: '30px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '20px',
  },
  exportBtn: {
    padding: '10px 20px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#0066ff',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '15px',
  },
  banner: {
    width: '100%',
    borderRadius: '12px',
    marginBottom: '20px',
    objectFit: 'cover',
    height: '250px', // Add a fixed height!
    display: 'block',
  }
  ,
  theadRow: {
    backgroundColor: '#004aad',
    color: 'white',
  },
  rowEven: {
    backgroundColor: '#f9f9f9',
  },
  rowOdd: {
    backgroundColor: '#ffffff',
  },
  image: {
    width: '50px',
    height: '50px',
    objectFit: 'cover',
    borderRadius: '6px',
  },
};

export default AdminView;
