"use client";
import { useState } from "react";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // Simulate submission
        setTimeout(() => {
            setStatus("success");
            setTimeout(() => setStatus("idle"), 3000);
            (e.target as HTMLFormElement).reset();
        }, 1500);
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <div className="section-header">
                            <span className="section-tag">Get In Touch</span>
                            <h2 className="section-title">Let&apos;s Work Together</h2>
                        </div>
                        <p className="contact-description">
                            Ready to take your digital presence to the next level? I&apos;m here to help.
                            Let&apos;s discuss how we can achieve your goals together.
                        </p>
                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:manishsahu04560@gmail.com">manishsahu04560@gmail.com</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="fab fa-whatsapp"></i>
                                </div>
                                <div>
                                    <h4>WhatsApp</h4>
                                    <a href="https://wa.me/+917357401195">+91 73574 01195</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <h4>Location</h4>
                                    <span>Hanumangarh, Rajasthan</span>
                                </div>
                            </div>
                        </div>
                        <div className="contact-social">
                            <a href="https://www.linkedin.com/in/manniishsahu/" target="_blank" rel="noopener noreferrer" className="contact-social-link"><i className="fab fa-linkedin-in"></i></a>
                            <a href="https://github.com/mnixcode" target="_blank" rel="noopener noreferrer" className="contact-social-link"><i className="fab fa-github"></i></a>
                            <a href="https://www.instagram.com/manniishsahu/" target="_blank" rel="noopener noreferrer" className="contact-social-link"><i className="fab fa-instagram"></i></a>
                            <a href="https://facebook.com/manish.sahu.37362" target="_blank" rel="noopener noreferrer" className="contact-social-link"><i className="fab fa-facebook"></i></a>
                        </div>
                    </div>
                    <div className="contact-form-wrapper">
                        <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" id="name" name="name" required />
                                <label htmlFor="name">Your Name</label>
                                <span className="form-line"></span>
                            </div>
                            <div className="form-group">
                                <input type="email" id="email" name="email" required />
                                <label htmlFor="email">Your Email</label>
                                <span className="form-line"></span>
                            </div>
                            <div className="form-group">
                                <select id="service" name="service" required defaultValue="">
                                    <option value="" disabled></option>
                                    <option value="webdev">Web Development</option>
                                    <option value="seo">SEO Services</option>
                                    <option value="marketing">Digital Marketing</option>
                                    <option value="ppc">PPC Advertising</option>
                                    <option value="email">Email Marketing</option>
                                    <option value="whatsapp">WhatsApp Marketing</option>
                                    <option value="complete">Complete Package</option>
                                </select>
                                <label htmlFor="service">Service Interested In</label>
                                <span className="form-line"></span>
                            </div>
                            <div className="form-group">
                                <textarea id="message" name="message" rows={4} required></textarea>
                                <label htmlFor="message">Your Message</label>
                                <span className="form-line"></span>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary btn-submit"
                                disabled={status === "submitting" || status === "success"}
                                style={status === "success" ? { backgroundColor: "#22c55e" } : {}}
                            >
                                {status === "idle" && (
                                    <><span>Send Message</span><i className="fas fa-paper-plane"></i></>
                                )}
                                {status === "submitting" && (
                                    <><span>Sending...</span><i className="fas fa-spinner fa-spin"></i></>
                                )}
                                {status === "success" && (
                                    <><span>Message Sent!</span><i className="fas fa-check"></i></>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
