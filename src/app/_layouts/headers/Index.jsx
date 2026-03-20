"use client";

import { useState } from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Writing", href: "/#writing" },
  { label: "Contact", href: "/#contact" },
];

const HeaderModule = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="ib-header">
      <div className="ib-container">
        <div className="ib-header__inner">

          {/* Logo */}
          <Link href="/" className="ib-header__logo" onClick={() => setMobileOpen(false)}>
            Ibrahim Olukokun
            <span className="ib-header__logo-dot" aria-hidden="true" />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation">
            <ul className="ib-header__nav">
              {navLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resume + hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href="https://drive.google.com/file/d/1yKEvDMtDg-iTc140sQg-UVo1TlE62YLE/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="ib-header__resume"
            >
              Resume <MdArrowOutward style={{ verticalAlign: 'middle' }} />
            </a>

            <button
              className="ib-hamburger"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 6H17M3 10H17M3 14H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          </div>

        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="ib-mobile-nav" aria-label="Mobile navigation">
            <ul>
              {navLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://drive.google.com/file/d/1yKEvDMtDg-iTc140sQg-UVo1TlE62YLE/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent)' }}
                  onClick={() => setMobileOpen(false)}
                >
                  Resume <MdArrowOutward style={{ verticalAlign: 'middle' }} />
                </a>
              </li>
            </ul>
          </nav>
        )}

      </div>
    </header>
  );
};

export default HeaderModule;
