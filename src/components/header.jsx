import React from 'react';

const Header = () => {
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

          @media (max-width: 1024px) {
            .header {
              flex-direction: column;
              padding: 18px 20px;
            }

            .logo-container {
              justify-content: center;
            }

            .nav {
              flex-direction: column;
              gap: 15px;
              margin-top: 10px;
              align-items: center;
            }

            .link {
              font-size: 18px;
            }
          }

          @media (max-width: 768px) {
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
        <nav className="nav">
          <a href="/" className="link">Home</a>
          <a href="#" className="link">Details</a>
          <a href="#" className="link">Contact</a>
        </nav>
      </header>
    </>
  );
};

export default Header;
