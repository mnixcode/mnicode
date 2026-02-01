"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        if (!mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <>
            <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
                <div className="nav-container">
                    <Link href="#" className="logo">
                        <span className="logo-text">mnix</span>
                        <span className="logo-accent">Codes</span>
                    </Link>
                    <ul className="nav-links">
                        <li><Link href="#home" className="nav-link active">Home</Link></li>
                        <li><Link href="#about" className="nav-link">About</Link></li>
                        <li><Link href="#skills" className="nav-link">Skills</Link></li>
                        <li><Link href="#services" className="nav-link">Services</Link></li>
                        <li><Link href="#portfolio" className="nav-link">Portfolio</Link></li>
                        <li><Link href="#contact" className="nav-link">Contact</Link></li>
                    </ul>
                    <Link href="#contact" className="nav-cta">
                        <span>Hire Me</span>
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                    <ThemeToggle />
                    <button
                        className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
                        aria-label="Toggle menu"
                        onClick={toggleMobileMenu}
                    >
                        <span style={mobileMenuOpen ? { transform: 'rotate(45deg) translate(5px, 6px)' } : {}}></span>
                        <span style={mobileMenuOpen ? { opacity: 0 } : {}}></span>
                        <span style={mobileMenuOpen ? { transform: 'rotate(-45deg) translate(5px, -6px)' } : {}}></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
                <button className="close-menu-btn" aria-label="Close menu" onClick={closeMobileMenu}>
                    <i className="fas fa-times"></i>
                </button>
                <ul className="mobile-nav-links">
                    <li><a href="#home" className="mobile-nav-link" onClick={closeMobileMenu}>Home</a></li>
                    <li><a href="#about" className="mobile-nav-link" onClick={closeMobileMenu}>About</a></li>
                    <li><a href="#skills" className="mobile-nav-link" onClick={closeMobileMenu}>Skills</a></li>
                    <li><a href="#services" className="mobile-nav-link" onClick={closeMobileMenu}>Services</a></li>
                    <li><a href="#portfolio" className="mobile-nav-link" onClick={closeMobileMenu}>Portfolio</a></li>
                    <li><a href="#contact" className="mobile-nav-link" onClick={closeMobileMenu}>Contact</a></li>
                </ul>
                <a href="#contact" className="mobile-cta" onClick={closeMobileMenu}>Hire Me Now</a>
            </div>
        </>
    );
}
