"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch by ensuring content is only rendered on client
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <button
            id="theme-toggle"
            className="theme-toggle"
            aria-label="Toggle Dark Mode"
            onClick={toggleTheme}
        >
            <i className={`fas ${theme === "dark" ? "fa-sun" : "fa-moon"}`}></i>
        </button>
    );
}
