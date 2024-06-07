import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className="header blur-md"
      style={{ position: "sticky !important", top: 0, zIndex: 999 }}
    >
      <div className="navbar-container w-container">
        <div className="nav-menu-wrapper">
          <Link href="/home" className="brand w-nav-brand">
            <img
              src="https://inboxpirates.com/images/inbox_pirates_logo_header.svg"
              loading="lazy"
              width="auto"
              height="35"
              alt="logo dark"
              className="logo-header"
            />
          </Link>
          <nav role="navigation" className="navbar-menu w-nav-menu">
            <div className="tablet-menu-wrapper">
              <Link href="#" className="brand-tablet w-nav-brand">
                <img
                  src="https://assets-global.website-files.com/65a6e5c0e8f5596f33c0ff0a/65cc6cad8792f0ced96056c3_Loti%20Logo%20Light%20(3).svg"
                  loading="lazy"
                  alt="Logo light"
                  height="35"
                  className="logo-header"
                />
              </Link>
              <div className="close-menu-button w-nav-button">
                <img
                  src="https://assets-global.website-files.com/65a6e5c0e8f5596f33c0ff0a/65a6e5c1e8f5596f33c10021_close-btn.svg"
                  loading="lazy"
                  alt="icon"
                  className="nav-close-icon"
                />
              </div>
            </div>
            <div className="menu-wrapper">
              <div
                data-hover="true"
                data-delay="0"
                data-w-id="c5679051-beb2-82be-5052-c4003973f252"
                className="navbar-dropdown w-dropdown"
              >
                <div className="navbar-dropdown-toggle w-dropdown-toggle">
                  <div className="nav-dropdown-arrow w-icon-dropdown-toggle"></div>
                  <p className="nav-item-title">
                    Demos <span className="arrow-navbar"></span>
                  </p>
                </div>
                <nav className="nav-dropdown-list w-dropdown-list">
                  <div className="nav-dropdown-link-wrapper">
                    <Link
                      href="/"
                      className="nav-dropdown-link w-dropdown-link"
                    >
                      <span className="nav-dropdown-dot"> </span>Home 1
                    </Link>
                    <Link
                      href="/"
                      aria-current="page"
                      className="nav-dropdown-link w-dropdown-link w--current"
                    >
                      <span className="nav-dropdown-dot"> </span>Home 2
                    </Link>
                    <Link
                      href="/"
                      className="nav-dropdown-link w-dropdown-link"
                    >
                      <span className="nav-dropdown-dot"> </span>Home 3
                    </Link>
                  </div>
                </nav>
              </div>
              <div
                data-hover="true"
                data-delay="0"
                data-w-id="a25547d7-3a3f-ab05-7772-c09d779c90bc"
                className="navbar-dropdown w-dropdown"
              >
                <div className="navbar-dropdown-toggle w-dropdown-toggle">
                  <div className="nav-dropdown-arrow w-icon-dropdown-toggle"></div>
                  <p className="nav-item-title">
                    Agency <span className="arrow-navbar"></span>
                  </p>
                </div>
                <nav className="nav-dropdown-list w-dropdown-list">
                  <div className="nav-dropdown-link-wrapper">
                    <Link
                      href="/about"
                      className="nav-dropdown-link w-dropdown-link"
                    >
                      <span className="nav-dropdown-dot"> </span>About Us
                    </Link>
                    <Link
                      href="/pricing"
                      className="nav-dropdown-link w-dropdown-link"
                    >
                      <span className="nav-dropdown-dot"> </span>Pricing
                    </Link>
                    <Link
                      href="/testimonials"
                      className="nav-dropdown-link w-dropdown-link"
                    >
                      <span className="nav-dropdown-dot"> </span>Testimonials
                    </Link>
                    <Link
                      href="/faq"
                      className="nav-dropdown-link w-dropdown-link"
                    >
                      <span className="nav-dropdown-dot"> </span>FAQ
                    </Link>
                  </div>
                </nav>
              </div>
              <Link href="/our-services-1" className="nav-link w-nav-link">
                Services
              </Link>

              <Link href="/portfolio-1" className="nav-link w-nav-link">
                Portfolio
              </Link>

              <div
                data-hover="true"
                data-delay="0"
                data-w-id="c5679051-beb2-82be-5052-c4003973f2a7"
                className="navbar-dropdown w-dropdown"
              >
                <div className="navbar-dropdown-toggle w-dropdown-toggle">
                  <div className="nav-dropdown-arrow w-icon-dropdown-toggle"></div>
                  <p className="nav-item-title">
                    All Pages <span className="arrow-navbar"></span>
                  </p>
                </div>
                <nav className="nav-dropdown-list megamenu w-dropdown-list">
                  <div className="nav-dropdown-list-column">
                    <div className="nav-dropdown-link-wrapper">
                      <Link
                        href="/"
                        className="nav-dropdown-link w-dropdown-link"
                      >
                        <span className="nav-dropdown-dot"> </span>Home
                      </Link>
                      <Link
                        href="/about"
                        className="nav-dropdown-link w-dropdown-link"
                      >
                        <span className="nav-dropdown-dot"> </span>About Us
                      </Link>
                      <Link
                        href="/pricing"
                        className="nav-dropdown-link w-dropdown-link"
                      >
                        <span className="nav-dropdown-dot"> </span>Pricing
                      </Link>
                    </div>
                  </div>
                  <div className="nav-dropdown-list-column">
                    <div className="nav-dropdown-link-wrapper">
                      <Link
                        href="/testimonials"
                        className="nav-dropdown-link w-dropdown-link"
                      >
                        <span className="nav-dropdown-dot"> </span>Testimonials
                      </Link>
                      <Link
                        href="/faq"
                        className="nav-dropdown-link w-dropdown-link"
                      >
                        <span className="nav-dropdown-dot"> </span>FAQ
                      </Link>
                      <Link
                        href="/our-services-1"
                        className="nav-dropdown-link w-dropdown-link"
                      >
                        <span className="nav-dropdown-dot"> </span>Our Services
                        1
                      </Link>
                      <div className="collection-list-wrapper w-dyn-list">
                        <div role="list" className="w-dyn-items">
                          <div role="listitem" className="w-dyn-item">
                            <Link
                              href="/services-art"
                              className="nav-dropdown-link w-dropdown-link"
                              target="_blank"
                            >
                              <span className="nav-dropdown-dot"> </span>Service
                              Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="nav-dropdown-list-column">
                    <div className="nav-dropdown-link-wrapper">
                      <Link
                        href="/portfolio-1"
                        className="nav-dropdown-link w-dropdown-link"
                      >
                        <span className="nav-dropdown-dot"> </span>Portfolio 1
                      </Link>

                      <Link
                        href="/blog"
                        className="nav-dropdown-link w-dropdown-link"
                      >
                        <span className="nav-dropdown-dot"> </span>Blog
                      </Link>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="button-nav-tablet">
                <Link
                  href="/contact"
                  className="nav-link last-child w-nav-link"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </nav>
          <div className="button-nav-desktop">
            <Link href="/contact" className="nav-link last-child w-nav-link">
              Contact Us
            </Link>
          </div>
          <div className="menu-button w-nav-button">
            <img
              src="https://assets-global.website-files.com/652e8894b6b4a09a2f4f1394/652e8894b6b4a09a2f4f1523_menu-btn.svg"
              loading="lazy"
              alt=""
              height="16"
              className="image-burger"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
