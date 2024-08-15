import React from 'react';
import '../styles/Footer.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-icons">
                    <a href="https://www.instagram.com/kristianmikael__/" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/kristian-pekkanen-4051ba226/" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="https://github.com/Krizu9" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-github"></i>
                    </a>
                </div>
                <p className="footer-text">Social medias</p>
            </div>
        </footer>
    );
};

export default Footer;