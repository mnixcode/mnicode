import Link from "next/link";

export default function CtaSection() {
    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-content">
                    <h2>Ready to Start Your Project?</h2>
                    <p>Let&apos;s create something amazing together. Get in touch today and let&apos;s discuss your vision.</p>
                    <Link href="#contact" className="btn btn-cta">
                        <span>Hire Me Now</span>
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                    <div className="cta-decoration">
                        <div className="cta-circle"></div>
                        <div className="cta-circle"></div>
                        <div className="cta-circle"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
