"use client";

import { useState, useEffect } from "react";
import AppData from "@data/app.json";
import { usePathname } from 'next/navigation';
import Link from "next/link";

const HeaderModule = ( { layout } ) => {
    const [toggle, setToggle] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const asPath = usePathname();

    const isPathActive = (path) => {
        return (asPath.indexOf(path) !== -1) && asPath === path;
    };

    const handleSubMenuClick = (index, e) => {
        e.preventDefault();
        setActiveSubMenu(activeSubMenu === index ? null : index);
    };
    
    useEffect(() => {
        // close mobile menu
        setToggle(false);
    }, [asPath]);

    const menuOpen = () => {
        setToggle(!toggle);
    }

    return (
        <>
            {/* top panel */}
            <div className={layout == 'transparent' ? "mil-top-panel mil-transparent" : "mil-top-panel"}>
                <div className="container">
                    <div className="row mil-aic">
                        <div className="col-6">
                            <Link href="/" className="mil-logo mil-c-gone">{AppData.header.logoText}</Link>
                        </div>
                        <div className="col-6 mil-jce mil-aic ">
                            <a href="mailto:iolukokun.com">
                            <div className="mil-phone mil-group-text mil-fs14"><span className="mil-soft">{AppData.header.contact.label}</span><span className="mil-light">{AppData.header.contact.value}</span></div>
                            </a>
                            
                            <Link href="https://docs.google.com/document/d/1x75TNsqczZ0haS-xhl5CzOf4mH7FkovbDFyjOqr0slQ/edit?usp=sharing" target="_blank" className="mil-btn mil-btn-border mil-c-gone flex items-center gap-2" > RESUME
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
            {/* top panel end */}

            {/* menu */}
            <div className={`mil-menu-window ${toggle ? "mil-active" : ""}`}>
                <div className="container">
                    <ul className="mil-main-menu mil-c-gone">
                        {AppData.header.menu.map((item, index) => (
                        <li className={`menu-item ${item.children.length > 0 ? "menu-item-has-children" : ""} ${isPathActive(item.link) ? "current-menu-item" : ""}`} key={`header-menu-item-${index}`}>
                            <Link href={item.link} onClick={item.children.length > 0  ? (e) => handleSubMenuClick(index, e) : null}>{item.label}</Link>
                            {item.children.length > 0 && (
                            <ul className={activeSubMenu === index ? 'sub-menu mil-active' : 'sub-menu'}>
                                {item.children.map((subitem, subIndex) => (
                                <li key={`header-submenu-item-${subIndex}`} className={isPathActive(subitem.link) ? "menu-item current-menu-item" : "menu-item"}>
                                    <Link href={subitem.link}>{subitem.label}</Link>
                                </li>
                                ))}
                            </ul>
                            )}
                        </li>
                        ))}
                    </ul>
                    <ul className="mil-social mil-center">
                        {AppData.social.map((item, key) => (
                        <li key={`header-social-item-${key}`}><a href={item.link} target="_blank" title={item.title} className="mil-c-gone"><i className={item.icon}></i></a></li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* menu end */}
        </>
    );
};
export default HeaderModule;