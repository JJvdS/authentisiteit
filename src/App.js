import "./App.css";
import "./fonts.css";
import { useEffect, useState } from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import AboutMeMobile from "./components/AboutMeMobile";
//import Preloader from "./components/Preloader";
import HelpGebieden from "./components/Helpgebieden";
import Ondersteuningsvormen from "./components/Ondersteuningsvormen";
import Werkwijze from "./components/Werkwijze";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import BlogCarousel from "./components/BlogCarousel";

function ScrollToTopOnRouteChange() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            window.setTimeout(() => {
                const targetId = hash.replace("#", "");
                const element = document.getElementById(targetId);

                if (element) {
                    element.scrollIntoView({ behavior: "auto", block: "start" });
                    return;
                }

                window.scrollTo(0, 0);
            }, 0);
            return;
        }

        window.scrollTo(0, 0);
    }, [pathname, hash]);

    return null;
}

function App() {
    const [isMobileAboutMe, setIsMobileAboutMe] = useState(() => window.innerWidth <= 1150);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileAboutMe(window.innerWidth <= 1150);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const HomePage = () => (
        <>
            <Hero />
            {isMobileAboutMe ? <AboutMeMobile preview /> : <AboutMe preview />}
            <HelpGebieden />
            <div className="home-hoeikhelp-cta">
                <Link className="home-hoeikhelp-link clickable" to="/hoeikhelp#ondersteuningsvormen">
                    Bekijk hoe ik kan helpen
                </Link>
            </div>
            <BlogCarousel />
            <FAQ />
        </>
    );

    const HoeIkHelpPage = () => (
        <>
            <HelpGebieden />
            <Ondersteuningsvormen />
            <Werkwijze />
            <FAQ />
        </>
    );

    const OverMijPage = () => (
        <>
            {isMobileAboutMe ? <AboutMeMobile /> : <AboutMe />}
            <FAQ />
        </>
    );

    const BlogPage = () => (
        <>
            <Blog />
            <FAQ />
        </>
    );

    const BlogPostPage = () => (
        <>
            <BlogPost />
            <FAQ />
        </>
    );

    return (
        <>
            <ScrollToTopOnRouteChange />
            <Nav />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/overmij" element={<OverMijPage />} />
                <Route path="/hoeikhelp" element={<HoeIkHelpPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogPostPage />} />
            </Routes>
        </>
    );
}

export default App;
