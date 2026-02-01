import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CursorFollower from "@/components/CursorFollower";
import Navbar from "@/components/Navbar";
import ParticlesBackground from "@/components/ParticlesBackground";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
});

export const metadata = {
    title: "mnixCodes | Manish Sahu - Professional Web Developer & Digital Marketing Expert",
    description: "mnixCodes - Manish Sahu | Professional Web Developer with 8+ years of experience in Web Development, SEO, Digital Marketing, PPC, Meta & Google Ads",
    keywords: "Web Developer, SEO Expert, Digital Marketing, PPC, Google Ads, Meta Ads, Email Marketing, WhatsApp Marketing",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
            <body className="antialiased">
                <CursorFollower />
                <ParticlesBackground />
                <Navbar />
                <div id="particles-container"></div>
                {children}
            </body>
        </html>
    );
}
