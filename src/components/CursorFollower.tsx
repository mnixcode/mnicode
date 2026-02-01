"use client";
import { useEffect, useRef } from "react";

export default function CursorFollower() {
    const followerRef = useRef<HTMLDivElement>(null);
    const dotRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const follower = followerRef.current;
        const dot = dotRef.current;

        if (!follower || !dot) return;

        // Only enable custom cursor on desktop
        if (window.innerWidth <= 991) return;

        const moveCursor = (e: MouseEvent) => {
            dot.style.left = `${e.clientX}px`;
            dot.style.top = `${e.clientY}px`;

            // Add a slight delay for the follower for a smooth effect
            setTimeout(() => {
                if (follower) {
                    follower.style.left = `${e.clientX}px`;
                    follower.style.top = `${e.clientY}px`;
                }
            }, 10);
        };

        const handleMouseEnter = () => {
            follower.style.transform = 'translate(-50%, -50%) scale(1.5)';
            follower.style.backgroundColor = 'rgba(99, 102, 241, 0.1)';
            follower.style.borderColor = 'transparent';
        };

        const handleMouseLeave = () => {
            follower.style.transform = 'translate(-50%, -50%) scale(1)';
            follower.style.backgroundColor = 'transparent';
            follower.style.borderColor = 'var(--primary-light)';
        };

        const handleMouseDown = () => {
            follower.style.transform = 'translate(-50%, -50%) scale(0.8)';
            dot.style.transform = 'translate(-50%, -50%) scale(0.8)';
        };

        const handleMouseUp = () => {
            follower.style.transform = 'translate(-50%, -50%) scale(1)';
            dot.style.transform = 'translate(-50%, -50%) scale(1)';
        };

        document.addEventListener("mousemove", moveCursor);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        // Initial setup for existing elements
        const clickableElements = document.querySelectorAll('a, button, .project-card, .skill-card, .service-card');
        clickableElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        // MutationObserver to handle dynamically added elements (like when routing changes if we didn't use Next.js Link everywhere yet)
        // For now, simpler to just re-attach or use a global context, but native event delegation might be complex to replicate exactly without more logic.
        // Actually, event delegation is better.

        // Cleaning up event listeners on unmount is tricky if we added them to individual elements.
        // simpler: use event delegation for hover effects? 
        // CSS :hover usually handles cursor, but this is a DOM element cursor.
        // Let's stick to the basic implementation: global listener for mouse move, and component-based listeners?
        // The original script attached listeners to specific elements. React way is to use `onMouseEnter` prop, but that requires changing every link.
        // Let's keep the global listener approach but maybe improve it.

        return () => {
            document.removeEventListener("mousemove", moveCursor);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);

            clickableElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <>
            <div ref={followerRef} className="cursor-follower"></div>
            <div ref={dotRef} className="cursor-dot"></div>
        </>
    );
}
