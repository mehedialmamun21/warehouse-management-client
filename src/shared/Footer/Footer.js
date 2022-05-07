import React from 'react';
import './Footer.css'

const Footer = () => {
    const d = new Date();
    return (
        <div>
            <footer className="footer-section">
                <div className="footer-text">
                    <small>
                        copyright © {d.getDate()}/{d.getMonth() + 1}/{d.getFullYear()}
                        <br />
                        Contact us : 01234-010203 / Email : smarthouse@gmail.com
                        <br />
                        <h6>All rights are reserved</h6>
                    </small>
                </div>
            </footer>
        </div>
    );
};

export default Footer;