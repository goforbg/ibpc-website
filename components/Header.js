import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="header">
      <div className="navbar-container w-container">
        <div className="nav-menu-wrapper">
          <Link href="/home-1" className="brand w-nav-brand">
              <img
                src="https://assets-global.website-files.com/65a6e5c0e8f5596f33c0ff0a/65cc6cd7ea8cd9191f322fb7_Loti%20Logo%20Dark%20(3).svg"
                loading="lazy"
                width="Auto"
                height="35"
                alt="logo dark"
                className="logo-header"
              />
          </Link>
          <p className="navbar-text-location">Based in San Francisco</p>
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
                    Demos <span class="arrow-navbar"></span>
                  </p>
                </div>
                <nav className="nav-dropdown-list w-dropdown-list">
                  <div className="nav-dropdown-link-wrapper">
                    <Link href="/home-1" class="nav-dropdown-link w-dropdown-link"
                      ><span className="nav-dropdown-dot"> </span>Home 1</Link
                    ><Link
                      href="/home-2"
                      aria-current="page"
                      className="nav-dropdown-link w-dropdown-link w--current"
                      ><span className="nav-dropdown-dot"> </span>Home 2</Link
                    ><Link href="/home-3" className="nav-dropdown-link w-dropdown-link"
                      ><span className="nav-dropdown-dot"> </span>Home 3</Link
                    >
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
                    Agency <span class="arrow-navbar"></span>
                  </p>
                </div>
                <nav class="nav-dropdown-list w-dropdown-list">
                  <div class="nav-dropdown-link-wrapper">
                    <Link
                      href="/about-us"
                      class="nav-dropdown-link w-dropdown-link"
                      ><span class="nav-dropdown-dot"> </span>About Us</Link
                    ><Link
                      href="/our-team"
                      class="nav-dropdown-link w-dropdown-link"
                      ><span class="nav-dropdown-dot"> </span>Our Team</Link
                    ><Link
                      href="/pricing"
                      class="nav-dropdown-link w-dropdown-link"
                      ><span class="nav-dropdown-dot"> </span>Pricing</Link
                    ><Link
                      href="/testimonials"
                      class="nav-dropdown-link w-dropdown-link"
                      ><span class="nav-dropdown-dot"> </span>Testimonials</Link
                    ><Link href="/faq" class="nav-dropdown-link w-dropdown-link"
                      ><span class="nav-dropdown-dot"> </span>FAQ</Link
                    >
                  </div>
                </nav>
              </div>
              <Link href="/our-services-1" class="nav-link w-nav-link">Services</Link
              ><Link href="/portfolio-1" class="nav-link w-nav-link">Portfolio</Link>
              <div
                data-hover="true"
                data-delay="0"
                data-w-id="c5679051-beb2-82be-5052-c4003973f2a7"
                class="navbar-dropdown w-dropdown"
              >
                <div class="navbar-dropdown-toggle w-dropdown-toggle">
                  <div class="nav-dropdown-arrow w-icon-dropdown-toggle"></div>
                  <p class="nav-item-title">
                    All Pages <span class="arrow-navbar"></span>
                  </p>
                </div>
                <nav class="nav-dropdown-list megamenu w-dropdown-list">
                  <div class="nav-dropdown-list-column">
                    <div class="nav-dropdown-link-wrapper">
                      <Link
                        href="/home-1"
                        class="nav-dropdown-link w-dropdown-link"
                        ><span class="nav-dropdown-dot"> </span>Home 1</Link
                      ><Link
                        href="/home-2"
                        aria-current="page"
                        class="nav-dropdown-link w-dropdown-link w--current"
                        ><span class="nav-dropdown-dot"> </span>Home 2</Link
                      ><Link
                        href="/home-3"
                        class="nav-dropdown-link w-dropdown-link"
                        ><span class="nav-dropdown-dot"> </span>Home 3</Link
                      ><Link
                        href="/about-us"
                        class="nav-dropdown-link w-dropdown-link"
                        ><span class="nav-dropdown-dot"> </span>About Us</Link
                      ><Link
                        href="/our-team"
                        class="nav-dropdown-link w-dropdown-link"
                        ><span class="nav-dropdown-dot"> </span>Our Team</Link
                      ><Link
                        href="/pricing"
                        class="nav-dropdown-link w-dropdown-link"
                        ><span class="nav-dropdown-dot"> </span>Pricing</Link
                      >
                    </div>
                  </div>
                  <div class="nav-dropdown-list-column">
                    <div class="nav-dropdown-link-wrapper">
                      <Link
                        href="/testimonials"
                        class="nav-dropdown-link w-dropdown-link"
                        ><span class="nav-dropdown-dot"> </span>Testimonials</Link
                      >
                      <Link href="/faq" class="nav-dropdown-link w-dropdown-link"
                        ><span class="nav-dropdown-dot"> </span>FAQ</Link
                      >
                      <Link
                        href="/our-services-1"
                        class="nav-dropdown-link w-dropdown-link"
                        ><span class="nav-dropdown-dot"> </span>Our Services
                        1
                        </Link>
                      <Link
                        href="/our-services-2"
                        class="nav-dropdown-link w-dropdown-link"
                        ><span class="nav-dropdown-dot"> </span>Our Services
                        2
                        </Link>
                      <Link
                        href="/our-services-3"
                        class="nav-dropdown-link w-dropdown-link"
                        ><span class="nav-dropdown-dot"> </span>Our Services
                        3
                        </Link>
                      <div class="collection-list-wrapper w-dyn-list">
                        <div role="list" class="w-dyn-items">
                          <div role="listitem" class="w-dyn-item">
                            <Link
                              href="/services/art"
                              target="_blank"
                              class="nav-dropdown-link w-dropdown-link"
                              ><span class="nav-dropdown-dot"> </span>Service
                              Details</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="nav-dropdown-list-column">
                    <div class="nav-dropdown-link-wrapper">
                      <Link
                        href="/portfolio-1"
                        class="nav-dropdown-link w-dropdown-link"
                        ><span class="nav-dropdown-dot"> </span>Portfolio 1
                        </Link>
                        <Link
                        href="/portfolio-2"
                        class="nav-dropdown-link w-dropdown-link"
                        ><span class="nav-dropdown-dot"> </span>Portfolio 2
                        </Link>
                        <Link
                        href="/portfolio-3"
                        class="nav-dropdown-link w-dropdown-link"
                        ><span class="nav-dropdown-dot"> </span>Portfolio 3
                        </Link>
                      <div className="collection-list-wrapper w-dyn-list">
                        <div role="list" className="w-dyn-items">
                          <div role="listitem" className="w-dyn-item">
                            <Link
                              href="/projects/red-highlights"
                              target="_blank"
                              className="nav-dropdown-link w-dropdown-link"
                              ><span className="nav-dropdown-dot"> </span>Portfolio
                              Details
                            </Link>
                          </div>
                        </div>
                      </div>
                      <Link href="/blog" className="nav-dropdown-link w-dropdown-link"
                        ><span className="nav-dropdown-dot"> </span>Blog
                      </Link>
                      <div className="collection-list-wrapper w-dyn-list">
                        <div role="list" className="w-dyn-items">
                          <div role="listitem" className="w-dyn-item">
                            <Link
                              href="/blog-posts/fashion-forward-trends-in-creative-portfolio-design"
                              target="_blank"
                              className="nav-dropdown-link w-dropdown-link"
                              ><span className="nav-dropdown-dot"> </span>Blog
                              details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="button-nav-tablet">
              <Link href="/contact" className="nav-link last-child w-nav-link">
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
      </div>
    </header>
  );
};

export default Header;
