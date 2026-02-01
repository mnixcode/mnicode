"use client";
import { useState } from "react";


export default function Portfolio() {
    const [filter, setFilter] = useState("all");

    const projects = [
        {
            id: 1,
            title: "Zennova AI - Visual Generation",
            description: "Zennova AI is a premium visual generation platform that turns ideas into stunning content.",
            category: "ai web",
            link: "https://zennova-ai.vercel.app/",
            tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "AI Integration", "Vercel"],
            features: [
                "Visuals: Create Portraits, Art, and Digital Assets",
                "Multimedia: Integrated Text-to-Video and AI Music",
                "Design: Modern, premium interface",
                "Performance: High-speed AI inference"
            ]
        },
        {
            id: 2,
            title: "Zenviq - Digital Agency",
            description: "Zenviq is a comprehensive digital agency providing innovative solutions for business growth.",
            category: "web",
            link: "https://zenviq.vercel.app/",
            tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "SEO", "WordPress"],
            features: [
                "Services: Web Development, Next.js & Modern Apps",
                "AI Tools: Custom chatbots, AI Content Generator",
                "Digital Growth: SEO, automation services",
                "Global Reach: Serving global clients 24/7"
            ]
        },
        {
            id: 3,
            title: "NuroxFit",
            description: "NuroxFit is a stylish e-commerce platform offering comfortable and affordable unisex clothing.",
            category: "ecommerce web",
            link: "https://nuroxfit.myshopify.com/",
            tech: ["Shopify", "Liquid", "E-commerce", "Fashion"],
            features: [
                "Collection: Trendy collection including T-shirts",
                "Experience: Modern, responsive Shopify store",
                "Designs: Graphic tees, oversized fits",
                "Support: Free shipping and 24/7 customer support"
            ]
        },
        {
            id: 4,
            title: "Credify - Fintech Platform",
            description: "Credify is a modern fintech platform for effortless finance management and smarter financial future.",
            category: "fintech web",
            link: "https://credify-fintech.vercel.app/",
            tech: ["Next.js", "TypeScript", "Fintech", "AI Integration", "Chart.js"],
            features: [
                "Features: Track expenses, optimize budgets",
                "Security: Secure and seamless finance solutions",
                "Management: Virtual and physical card management",
                "UI/UX: Modern, premium UI with dark theme"
            ]
        }
    ];

    const filteredProjects = filter === "all"
        ? projects
        : projects.filter(project => project.category.includes(filter));

    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">My Work</span>
                    <h2 className="section-title">Projects I&apos;ve Built</h2>
                </div>
                <div className="portfolio-filter">
                    <button className={`filter-btn ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>All</button>
                    <button className={`filter-btn ${filter === "ai" ? "active" : ""}`} onClick={() => setFilter("ai")}>AI & GenAI</button>
                    <button className={`filter-btn ${filter === "web" ? "active" : ""}`} onClick={() => setFilter("web")}>Web Development</button>
                    <button className={`filter-btn ${filter === "ecommerce" ? "active" : ""}`} onClick={() => setFilter("ecommerce")}>E-Commerce</button>
                    <button className={`filter-btn ${filter === "fintech" ? "active" : ""}`} onClick={() => setFilter("fintech")}>Fintech</button>
                </div>
                <div className="portfolio-grid">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="project-card animate-fadeIn">
                            {/* Added animate-fadeIn class for simple fade effect, would need keyframes in css */}
                            <div className="project-header">
                                <h3>{project.title}</h3>
                                <a href={project.link} target="_blank" className="project-link" rel="noopener noreferrer">
                                    <i className="fas fa-external-link-alt"></i>
                                </a>
                            </div>
                            <p className="project-description">
                                {project.description}
                            </p>
                            <ul className="project-features">
                                {project.features.map((feature, idx) => {
                                    const parts = feature.split(':');
                                    const title = parts[0];
                                    const content = parts.slice(1).join(':');
                                    return (
                                        <li key={idx}>
                                            <i className="fas fa-check"></i>
                                            {content ? (
                                                <><strong>{title}:</strong> {content}</>
                                            ) : (
                                                feature
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className="project-tech">
                                {project.tech.map((t, i) => (
                                    <span key={i}>{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
