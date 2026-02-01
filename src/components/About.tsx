export default function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">About Me</span>
                    <h2 className="section-title">My Coding Journey</h2>
                </div>
                <div className="about-content">
                    <div className="about-image">
                        <div className="image-wrapper">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/minimalist_coding_setup.png" alt="Minimalist Developer Workspace" />
                            <div className="experience-badge">
                                <span className="exp-number">5</span>
                                <span className="exp-text">Years Learning</span>
                            </div>
                        </div>
                    </div>
                    <div className="about-text">
                        <h3>Curious & Dedicated Developer</h3>
                        <p>
                            I&apos;m <strong>Manish Sahu</strong>. I&apos;ve spent the last 5 years exploring web development,
                            learning from mistakes, and building better code every day. I don&apos;t claim to know everything,
                            but I&apos;m committed to solving problems and delivering quality work.
                        </p>
                        <p>
                            My focus is on writing clean, maintainable code and understanding the &quot;why&quot; behind the
                            technology.
                            I&apos;m currently expanding my skills in modern JavaScript frameworks and backend architecture.
                        </p>
                        <div className="about-highlights">
                            <div className="highlight-card">
                                <i className="fas fa-briefcase"></i>
                                <div>
                                    <h4>Experience</h4>
                                    <p>Founder @ Zenviq Agency</p>
                                </div>
                            </div>
                            <div className="highlight-card">
                                <i className="fas fa-puzzle-piece"></i>
                                <div>
                                    <h4>Problem Solver</h4>
                                    <p>Finding logical solutions</p>
                                </div>
                            </div>
                            <div className="highlight-card">
                                <i className="fas fa-code-branch"></i>
                                <div>
                                    <h4>Full Stack</h4>
                                    <p>Frontend & Backend focus</p>
                                </div>
                            </div>
                        </div>
                        <a href="#contact" className="btn btn-primary">
                            <span>Let&apos;s Work Together</span>
                            <i className="fas fa-handshake"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
