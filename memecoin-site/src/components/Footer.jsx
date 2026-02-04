import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">
              <span className="molt">Molt</span>
              <span className="id">ID</span>
            </h3>
            <p className="footer-tagline">🦞One agent. One identity. Real reputation starts here.🦞</p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#stats">Stats</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Community</h4>
              <ul>
                <li><a href="https://x.com/moltid_agent" target="_blank" rel="noopener noreferrer">X</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Trade</h4>
              <ul>
                <li><a href="https://gmgn.ai/base/token/0x68b5a255a2c450adfb2fdf610a8605d3966a1c31" target="_blank" rel="noopener noreferrer">GMGN.AI</a></li>
                <li><a href="https://dexscreener.com/base/0x2a8e5321a54dbeb948c23bd2eb0dd970241af6a50367bbac05319110cdbf21bb" target="_blank" rel="noopener noreferrer">Dexscreener</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 MoltID. All rights reserved.🦀</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;