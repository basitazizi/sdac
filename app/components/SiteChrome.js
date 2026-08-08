"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUp, HeartHandshake, Menu } from "lucide-react";
import { navItems, site } from "../lib/siteData";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 520);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className="relative z-20 bg-white shadow-[0_2px_16px_rgba(0,0,0,0.07)]">
        <div className="relative mx-auto flex h-[72px] max-w-[884px] items-center justify-between px-5 sm:px-8 lg:px-0">
          <Link className="site-logo-badge" href="/" aria-label="SDAC home">
            <img
              className="site-logo-image"
              src="/sdac-logo.png"
              alt="SDAC logo"
            />
          </Link>

        <nav className="hidden items-center gap-7 text-[13px] font-bold text-[#282d35] lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className="relative py-7 transition hover:text-navy"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="header-donate hidden lg:flex" href="/get-involved">
          <HeartHandshake size={18} strokeWidth={2.25} />
          Get Support
        </Link>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center border border-[#494744] text-navy lg:hidden"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Menu size={23} />
        </button>

        {menuOpen ? (
          <nav className="mobile-menu lg:hidden" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link className="mobile-menu-support" href="/contact" onClick={() => setMenuOpen(false)}>
              Get Support
            </Link>
          </nav>
        ) : null}
      </div>
      </header>

      <button
        type="button"
        className={`back-to-top ${showBackToTop ? "visible" : ""}`}
        aria-label="Back to top"
        onClick={scrollToTop}
      >
        <ArrowUp size={18} />
        <span>Top</span>
      </button>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-cta">
        <div>
          <p className="eyebrow light">How Can We Help?</p>
          <h2>Education, family resources, mentorship, and community support.</h2>
        </div>
        <div className="footer-cta-actions">
          <Link className="btn-primary" href="/contact">
            Request Support
          </Link>
          <Link className="btn-accent" href="/contact">
            Contact SDAC
          </Link>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-brand">
          <img className="site-logo-image" src="/sdac-logo.png" alt="SDAC logo" />
          <h3>{site.displayName}</h3>
          <p>
            Supporting Afghan families through education, mentorship, culture,
            community programs, and essential resources.
          </p>
        </div>

        <FooterColumn
          title="Quick Links"
          links={[
            ["Home", "/"],
            ["About", "/about"],
            ["Services", "/services"],
            ["Blog", "/blog"],
            ["Contact", "/contact"],
            ["Get Involved", "/get-involved"],
          ]}
        />
        <FooterColumn
          title="Programs"
          links={[
            ["Youth Mentorship", "/services"],
            ["English Classes", "/services"],
            ["Family Support", "/services"],
            ["Sports", "/services"],
            ["Culture", "/services"],
          ]}
        />
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <a href="tel:+16192052912">{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.mapUrl}>{site.address}</a>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {site.year} {site.displayName}. All Rights Reserved.
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div className="footer-links">
      <h4>{title}</h4>
      {links.map(([label, href]) => (
        <Link key={label} href={href}>
          {label}
        </Link>
      ))}
    </div>
  );
}
