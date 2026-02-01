"use client";
import { useEffect } from "react";

export default function Services() {

    useEffect(() => {
        const tiltCards = document.querySelectorAll('.service-card') as NodeListOf<HTMLElement>;

        const handleMouseMove = (e: MouseEvent) => {
            // Logic for each card
            tiltCards.forEach(card => {
                const rect = card.getBoundingClientRect();

                // Only trigger tilt if mouse is near or over the card? The original script was global listener or card listener?
                // Original: card.addEventListener('mousemove', ...)
                // This is better done by attaching event listener to each card.
            });
        };

        const attachListeners = (card: HTMLElement) => {
            const handleMove = (e: MouseEvent) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = ((y - centerY) / centerY) * -10; // Max rotation deg
                const rotateY = ((x - centerX) / centerX) * 10;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
                card.style.transition = 'transform 0.1s ease';
            };

            const handleLeave = () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
                card.style.transition = 'transform 0.5s ease';
            };

            card.addEventListener('mousemove', handleMove);
            card.addEventListener('mouseleave', handleLeave);

            // Store cleanup function on the element? Or just return a cleanup for all.
            (card as any)._cleanup = () => {
                card.removeEventListener('mousemove', handleMove);
                card.removeEventListener('mouseleave', handleLeave);
            };
        };

        tiltCards.forEach(card => attachListeners(card));

        return () => {
            tiltCards.forEach(card => {
                if ((card as any)._cleanup) (card as any)._cleanup();
            });
        };
    }, []);

    return (
        <section id="services" className="services">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">What I Offer</span>
                    <h2 className="section-title">Premium Services</h2>
                </div>
                <div className="services-grid">
                    <div className="service-card">
                        <div className="service-number">01</div>
                        <div className="service-icon">
                            <i className="fas fa-laptop-code"></i>
                        </div>
                        <h3>Custom Web Development</h3>
                        <p>Bespoke websites tailored to your brand, built with modern technologies for optimal performance.</p>
                        <ul className="service-features">
                            <li><i className="fas fa-check"></i> Responsive Design</li>
                            <li><i className="fas fa-check"></i> Fast Loading Speed</li>
                            <li><i className="fas fa-check"></i> SEO Optimized</li>
                            <li><i className="fas fa-check"></i> Cross-browser Compatible</li>
                        </ul>
                    </div>
                    <div className="service-card featured">
                        <div className="featured-badge">Most Popular</div>
                        <div className="service-number">02</div>
                        <div className="service-icon">
                            <i className="fas fa-rocket"></i>
                        </div>
                        <h3>Complete Digital Package</h3>
                        <p>All-in-one solution combining web development with strategic marketing for maximum impact.</p>
                        <ul className="service-features">
                            <li><i className="fas fa-check"></i> Custom Website</li>
                            <li><i className="fas fa-check"></i> SEO Setup</li>
                            <li><i className="fas fa-check"></i> Ad Campaign Setup</li>
                            <li><i className="fas fa-check"></i> Marketing Automation</li>
                        </ul>
                    </div>
                    <div className="service-card">
                        <div className="service-number">03</div>
                        <div className="service-icon">
                            <i className="fas fa-chart-pie"></i>
                        </div>
                        <h3>Marketing Strategy</h3>
                        <p>Data-driven marketing strategies designed to grow your online presence and revenue.</p>
                        <ul className="service-features">
                            <li><i className="fas fa-check"></i> PPC Campaigns</li>
                            <li><i className="fas fa-check"></i> Email Marketing</li>
                            <li><i className="fas fa-check"></i> WhatsApp Marketing</li>
                            <li><i className="fas fa-check"></i> Analytics & Reports</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
