import React from "react";
import "./App.css"
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© 2024 Your Company. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://facebook.com" className="social-icon">Facebook</a>
          <a href="https://twitter.com" className="social-icon">Twitter</a>
          <a href="https://linkedin.com" className="social-icon">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
