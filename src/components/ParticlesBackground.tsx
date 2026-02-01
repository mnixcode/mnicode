"use client";
import { useEffect } from "react";

export default function ParticlesBackground() {
    useEffect(() => {
        const particlesContainer = document.getElementById("particles-container");
        if (!particlesContainer) return;

        // Clear existing particles if any (though strict mode might run effect twice)
        particlesContainer.innerHTML = '';

        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement("div");
            particle.classList.add("particle");

            // Random properties
            const size = Math.random() * 3 + 1;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const duration = Math.random() * 20 + 10; // 10s to 30s
            const delay = Math.random() * 5;

            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationDelay = `${delay}s`;

            // Need to set these inline as well because class style is generic
            particle.style.position = 'absolute';
            particle.style.background = 'rgba(255, 255, 255, 0.1)';

            particlesContainer.appendChild(particle);
        }
    }, []);

    return null; // This component doesn't render DOM itself, it populates the container in layout
}
