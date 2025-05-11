"use client";

import { useEffect } from "react";

import Footer from "@layouts/footers/Index";
import Header from "@layouts/headers/Index";
import Cursor from "@layouts/cursor/Index";
import ScrollProgress from "@layouts/scroll-progress/Index";

import { ScrollAnimation } from "@common/scrollAnimation";

const OkaiLayout = ({ children, header = '', footer = '' }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            ScrollAnimation();
        }, 100);
    
        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <Cursor />
            
            <ScrollProgress />

            <Header layout={header} />

            {/* content */}
            <div id="smooth-content" className="mil-content">
                {children}

                {footer !== "none" &&
                <Footer layout={footer} />
                }
            </div>
            {/* content end */}
        </>
    );
};
export default OkaiLayout;