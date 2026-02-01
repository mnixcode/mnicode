"use client";
import { useEffect, useState } from "react";

import Link from "next/link";

export default function Hero() {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const phrases = ['Full Stack Developer', 'Next.js Expert', 'UI/UX Designer', 'Founder @ Zenviq'];
        const i = loopNum % phrases.length;
        const fullText = phrases[i];

        const handleType = () => {
            setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

            if (isDeleting) {
                setTypingSpeed(50);
            } else {
                setTypingSpeed(150);
            }

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(500);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]); // Removed phrases from dependency array

    // Converting 120, 100, 100 loops to useEffect seems inefficient for stats but okay for now.
    // Actually, I'll use a simple count up hook for stats.

    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">
                        <span className="title-line">Hi, I&apos;m</span>
                        <span className="title-name">Manish Sahu</span>
                        <span className="title-role">
                            <span className="typing-text">{text}</span>
                            <span className="cursor">|</span>
                        </span>
                    </h1>
                    <p className="hero-description">
                        <strong>5 years</strong> of coding journey. I build clean, functional websites and enjoy figuring
                        out how things work.
                        From frontend experiments to backend logic, I&apos;m always looking to improve my skills.
                    </p>
                    <div className="hero-buttons">
                        <Link href="#contact" className="btn btn-primary">
                            <span>Let&apos;s Talk</span>
                            <i className="fas fa-paper-plane"></i>
                        </Link>
                        <Link href="#portfolio" className="btn btn-secondary">
                            <span>See My Code</span>
                            <i className="fas fa-code"></i>
                        </Link>
                    </div>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/manniishsahu/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://github.com/mnixcode" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub"><i className="fab fa-github"></i></a>
                        <a href="https://www.instagram.com/manniishsahu/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                        <a href="https://facebook.com/manish.sahu.37362" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="profile-container">
                        <div className="profile-ring ring-1"></div>
                        <div className="profile-ring ring-2"></div>
                        <div className="profile-ring ring-3"></div>
                        <div className="profile-image">
                            {/* Note: In Next.js we should use Image component and put images in public folder. 
                   The original path was public/manish.JPG. Next.js serves from public root directly.
                   So path should be /manish.JPG */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/manish.JPG" alt="Manish Sahu - Web Developer" />
                        </div>
                        <div className="floating-icons">
                            <div className="float-icon icon-1"><i className="fab fa-html5"></i></div>
                            <div className="float-icon icon-2"><i className="fab fa-react"></i></div>
                            <div className="float-icon icon-3"><i className="fab fa-google"></i></div>
                            <div className="float-icon icon-4"><i className="fab fa-node-js"></i></div>
                            <div className="float-icon icon-5"><i className="fas fa-database"></i></div>
                            <div className="float-icon icon-6"><i className="fab fa-js"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
