export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <a href="#" className="footer-logo">
                            <span className="logo-text">mnix</span><span className="logo-accent">Codes</span>
                        </a>
                        <p>Transforming ideas into powerful digital experiences since 2017.</p>
                    </div>
                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-services">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#">Web Development</a></li>
                            <li><a href="#">SEO Optimization</a></li>
                            <li><a href="#">Digital Marketing</a></li>
                            <li><a href="#">PPC Advertising</a></li>
                            <li><a href="#">Email Marketing</a></li>
                        </ul>
                    </div>
                    <div className="footer-newsletter">
                        <h4>Stay Updated</h4>
                        <p>Subscribe to receive updates and tips.</p>
                        <form className="newsletter-form">
                            <input type="email" placeholder="Your email address" />
                            <button type="submit"><i className="fas fa-arrow-right"></i></button>
                        </form>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 mnixCodes. All rights reserved. Made with <i className="fas fa-heart"></i> by Sahu</p>
                </div>
            </div>
        </footer>
    );
}
