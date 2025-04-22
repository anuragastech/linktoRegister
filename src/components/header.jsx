import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <style>
        {`
          .header {
            background: linear-gradient(90deg, #003D99, #0052cc);
            color: #ffffff;
            padding: 18px 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-family: 'Poppins', sans-serif;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
            position: sticky;
            top: 0;
            z-index: 1000;
            flex-wrap: wrap;
          }

          .logo-container {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .logo-img {
            height: 40px;
            border-radius: 6px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          }

          .logo-text {
            font-size: 22px;
            font-weight: 600;
            color: #fff;
            letter-spacing: 0.5px;
          }

          .nav {
            display: flex;
            gap: 25px;
          }

          .link {
            color: #ffffff;
            text-decoration: none;
            font-size: 16px;
            font-weight: 500;
            transition: all 0.3s ease;
            padding: 8px 15px;
          }

          .menu-icon {
            display: none;
            font-size: 28px;
            cursor: pointer;
            color: white;
          }

          @media (max-width: 768px) {
            .nav {
              display: none;
              flex-direction: column;
              gap: 10px;
              width: 100%;
              background: #0047b3;
              padding: 10px 20px;
              margin-top: 10px;
              border-radius: 8px;
            }

            .nav.open {
              display: flex;
            }

            .menu-icon {
              display: block;
            }

            .logo-text {
              font-size: 20px;
            }

            .logo-img {
              height: 35px;
            }
          }

          @media (max-width: 480px) {
            .logo-text {
              font-size: 18px;
            }

            .link {
              font-size: 16px;
            }

            .header {
              padding: 12px 15px;
            }
          }
        `}
      </style>

      <header className="header">
        <div className="logo-container">
          <img
            src="https://res.cloudinary.com/dd6qdgpfr/image/upload/v1745303732/logosimphony_oregbf.png"
            alt="Symphony Logo"
            className="logo-img"
          />
          <span className="logo-text">Symphony Onchiyam</span>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          &#9776; {/* Hamburger icon */}
        </div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="/" className="link">Home</a>
          <a href="#" className="link">Details</a>
          <a href="#" className="link">Contact</a>
        </nav>
      </header>
    </>
  );
};

export default Header;
