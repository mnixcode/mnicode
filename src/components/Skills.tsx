"use client";
import { useEffect, useRef } from "react";

export default function Skills() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBars = entry.target.querySelectorAll('.progress-bar');
                    progressBars.forEach((bar) => {
                        const progress = (bar as HTMLElement).getAttribute('data-progress');
                        (bar as HTMLElement).style.width = `${progress}%`;
                    });
                }
            });
        }, { threshold: 0.2 });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Mouse move effect for skill cards
        // Ideally we should use a more React-way, but reusing the logic is faster.
        const handleMouseMove = (e: MouseEvent) => {
            const cards = document.querySelectorAll('.skill-card');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
                (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
            });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section id="skills" className="skills" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">My Expertise</span>
                    <h2 className="section-title">Skills & Technologies</h2>
                </div>
                <div className="skills-grid">
                    <div className="skill-card" data-skill="webdev">
                        <div className="skill-icon">
                            <i className="fas fa-code"></i>
                        </div>
                        <h3>Web Development</h3>
                        <p>Full-stack development with modern frameworks and cutting-edge technologies</p>
                        <div className="skill-tags">
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>JavaScript</span>
                            <span>React</span>
                            <span>Node.js</span>
                        </div>
                        <div className="skill-progress">
                            <div className="progress-bar" data-progress="95"></div>
                        </div>
                    </div>
                    <div className="skill-card" data-skill="seo">
                        <div className="skill-icon">
                            <i className="fas fa-search"></i>
                        </div>
                        <h3>SEO Optimization</h3>
                        <p>Data-driven strategies to boost your search rankings and organic traffic</p>
                        <div className="skill-tags">
                            <span>On-Page SEO</span>
                            <span>Technical SEO</span>
                            <span>Link Building</span>
                            <span>Analytics</span>
                        </div>
                        <div className="skill-progress">
                            <div className="progress-bar" data-progress="92"></div>
                        </div>
                    </div>
                    <div className="skill-card" data-skill="marketing">
                        <div className="skill-icon">
                            <i className="fas fa-bullhorn"></i>
                        </div>
                        <h3>Digital Marketing</h3>
                        <p>Comprehensive marketing strategies that drive engagement and conversions</p>
                        <div className="skill-tags">
                            <span>Content Strategy</span>
                            <span>Social Media</span>
                            <span>Analytics</span>
                            <span>Branding</span>
                        </div>
                        <div className="skill-progress">
                            <div className="progress-bar" data-progress="90"></div>
                        </div>
                    </div>
                    <div className="skill-card" data-skill="ppc">
                        <div className="skill-icon">
                            <i className="fas fa-ad"></i>
                        </div>
                        <h3>PPC Advertising</h3>
                        <p>High-ROI paid campaigns that maximize your advertising budget</p>
                        <div className="skill-tags">
                            <span>Google Ads</span>
                            <span>Meta Ads</span>
                            <span>Remarketing</span>
                            <span>A/B Testing</span>
                        </div>
                        <div className="skill-progress">
                            <div className="progress-bar" data-progress="94"></div>
                        </div>
                    </div>
                    <div className="skill-card" data-skill="email">
                        <div className="skill-icon">
                            <i className="fas fa-envelope-open-text"></i>
                        </div>
                        <h3>Email Marketing</h3>
                        <p>Engaging email campaigns that nurture leads and boost conversions</p>
                        <div className="skill-tags">
                            <span>Automation</span>
                            <span>Segmentation</span>
                            <span>A/B Testing</span>
                            <span>Analytics</span>
                        </div>
                        <div className="skill-progress">
                            <div className="progress-bar" data-progress="88"></div>
                        </div>
                    </div>
                    <div className="skill-card" data-skill="whatsapp">
                        <div className="skill-icon">
                            <i className="fab fa-whatsapp"></i>
                        </div>
                        <h3>WhatsApp Marketing</h3>
                        <p>Direct customer engagement through strategic WhatsApp campaigns</p>
                        <div className="skill-tags">
                            <span>Business API</span>
                            <span>Chatbots</span>
                            <span>Broadcasts</span>
                            <span>Automation</span>
                        </div>
                        <div className="skill-progress">
                            <div className="progress-bar" data-progress="91"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
