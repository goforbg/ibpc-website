import React from "react";
import { getAllFaqs } from '../lib/parseMarkdown';



const Faq = ({ faqs }) => {
  return (
    <div>
    <form action="/search" className="search-desktop w-form">
      <div className="search-wrapper"><input className="search-wrap-input w-input" autofocus="true" maxLength={256} name="query" placeholder="Enter search keyword" type="search" id="search-2" required />
        <div className="search-bottom-line" /><input type="submit" className="primary-button serch-button w-button" defaultValue="Search" />
      </div>
      <div data-w-id="cffaa0d6-0cd7-3509-9f08-dbbd1e309db4" className="search-close-button"></div>
    </form>
    <div data-w-id="076f97e3-a0f3-a3fd-bfa7-1a9f1449f103" className="section inner-page-banner">
      <div className="w-layout-blockcontainer max-width-container w-container">
        <div className="banner-title-container full-container">
          <h1 data-w-id="076f97e3-a0f3-a3fd-bfa7-1a9f1449f106" style={{opacity: 1}} className="banner-title">Frequently
            asked questions</h1>
        </div>
        <div className="banner-overlay" /><img src="https://assets-global.website-files.com/65a6e5c0e8f5596f33c0ff0a/65b77b5f74b707183d354250_Image%20Working.webp" loading="lazy" style={{WebkitTransform: 'translate3d(0, 0, 0) scale3d(1.2, 1.2, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 0, 0) scale3d(1.2, 1.2, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 0, 0) scale3d(1.2, 1.2, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 0, 0) scale3d(1.2, 1.2, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} sizes="100vw" alt="Image Working" srcSet="https://assets-global.website-files.com/65a6e5c0e8f5596f33c0ff0a/65b77b5f74b707183d354250_Image%20Working-p-500.webp 500w, https://assets-global.website-files.com/65a6e5c0e8f5596f33c0ff0a/65b77b5f74b707183d354250_Image%20Working-p-800.webp 800w, https://assets-global.website-files.com/65a6e5c0e8f5596f33c0ff0a/65b77b5f74b707183d354250_Image%20Working-p-1080.webp 1080w, https://assets-global.website-files.com/65a6e5c0e8f5596f33c0ff0a/65b77b5f74b707183d354250_Image%20Working-p-1600.webp 1600w, https://assets-global.website-files.com/65a6e5c0e8f5596f33c0ff0a/65b77b5f74b707183d354250_Image%20Working.webp 1920w" className="banner-image" />
      </div>
    </div>
    <div className="section without-bottom-spacing">
      <div className="base-container w-container">
        <div className="counter-content-wrap">
          <div data-w-id="03dc1e2e-9a65-b680-12b3-da98007e9efc" style={{opacity: 1}} className="section-subtitle mb-30">
            <div className="subtitle-dot" />
            <h6 className="subtitle">Why loti?</h6>
          </div>
          <div className="flex-content-wrapper">
            <div className="counter-wrapper-left">
              <h2 id="provide-assistance" data-w-id="03dc1e2e-9a65-b680-12b3-da98007e9f02" style={{opacity: 1}}>
                Our specialty revolves around innovative, minimalist projects.</h2>
              <p data-w-id="03dc1e2e-9a65-b680-12b3-da98007e9f04" style={{opacity: 0}}>Crafting innovative, sleek
                projects is our expertise. We specialize in delivering minimalist designs that redefine the
                way we engage with digital solutions. Our focus on innovation drives our commitment to
                creating impactful, clean, and sophisticated projects that stand out in their simplicity.
              </p>
            </div>
            <p data-w-id="03dc1e2e-9a65-b680-12b3-da98007e9f06" style={{opacity:1}} className="text-dark-right">
              "Fueling success through innovation, one achievement at a time."</p>
          </div>
          <div className="counter-wrapper">
            <div data-w-id="03dc1e2e-9a65-b680-12b3-da98007e9f09" style={{opacity: 1}} className="counter-grid-item first-child">
              <div className="text-number">960+</div>
              <p className="counter-description">Excellent works</p>
            </div>
            <div data-w-id="03dc1e2e-9a65-b680-12b3-da98007e9f0e" style={{opacity: 1}} className="counter-grid-item second-child">
              <div>
                <div className="text-number">1390+</div>
                <p className="counter-description">Happy customers</p>
              </div>
            </div>
            <div data-w-id="03dc1e2e-9a65-b680-12b3-da98007e9f14" style={{opacity: 1}} className="counter-grid-item">
              <div>
                <div className="text-number">14+</div>
                <p className="counter-description">Successful years expierence</p>
              </div>
            </div>
            <div id="w-node-_03dc1e2e-9a65-b680-12b3-da98007e9f1a-33c0ffe5" data-w-id="03dc1e2e-9a65-b680-12b3-da98007e9f1a" style={{opacity: 1}} className="counter-grid-item last-child">
              <div className="text-number">32</div>
              <p className="counter-description">Awards won</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section">
      <div className="base-container w-container">
        <div className="faq-wrapper-large without-bottom-spacing">
          <div className="faq-wrapper-medium">

          <ul>
            {faqs.map((faq) => (
              <li key={faq.id}>
                <h2>{faq.title}</h2>
                <p>{faq.content}</p>
              </li>
            ))}
          </ul>
          
            <div data-hover="false" data-delay={0} data-w-id="78b62052-f5c9-7393-4c73-84a7b624fd4d" className="dropdown-item w-dropdown">
              <div className="accordion-toggle-2 w-dropdown-toggle">
                <h4 className="accordion-title-2">How much are your services?</h4>
                <div className="accordion-icon-small"></div>
              </div>
              <nav className="accordion-list-medium w-dropdown-list">
                <p className="accordion-list-content-2">We have transform your ideas into remarkable digital
                  products with an innovative and contemporary style. We specialize in creative minimalist
                  projects. We have many years of experience in the profession. View our portfolio with
                  detailed descriptions and order for yourself!</p>
              </nav>
            </div>
            
            
            <div data-hover="false" data-delay={0} data-w-id="78b62052-f5c9-7393-4c73-84a7b624fd56" className="dropdown-item w-dropdown">
              <div className="accordion-toggle-2 w-dropdown-toggle">
                <h4 className="accordion-title-2">How do you get inspired?</h4>
                <div className="accordion-icon-small"></div>
              </div>
              <nav className="accordion-list-medium w-dropdown-list">
                <p className="accordion-list-content-2">We have transform your ideas into remarkable digital
                  products with an innovative and contemporary style. We specialize in creative minimalist
                  projects. We have many years of experience in the profession. View our portfolio with
                  detailed descriptions and order for yourself!</p>
              </nav>
            </div>
            <div data-hover="false" data-delay={0} data-w-id="78b62052-f5c9-7393-4c73-84a7b624fd5f" className="dropdown-item last-item w-dropdown">
              <div className="accordion-toggle-2 w-dropdown-toggle">
                <h4 className="accordion-title-2">How to join the team?</h4>
                <div className="accordion-icon-small"></div>
              </div>
              <nav className="accordion-list-medium w-dropdown-list">
                <p className="accordion-list-content-2">We have transform your ideas into remarkable digital
                  products with an innovative and contemporary style. We specialize in creative minimalist
                  projects. We have many years of experience in the profession. View our portfolio with
                  detailed descriptions and order for yourself!</p>
              </nav>
            </div>
          </div>
          <div className="faq-wrapper-medium">
            <div data-hover="false" data-delay={0} data-w-id="78b62052-f5c9-7393-4c73-84a7b624fd69" className="dropdown-item w-dropdown">
              <div className="accordion-toggle-2 w-dropdown-toggle">
                <h4 className="accordion-title-2">How many awards have you won?</h4>
                <div className="accordion-icon-small"></div>
              </div>
              <nav className="accordion-list-medium w-dropdown-list">
                <p className="accordion-list-content-2">We have transform your ideas into remarkable digital
                  products with an innovative and contemporary style. We specialize in creative minimalist
                  projects. We have many years of experience in the profession. View our portfolio with
                  detailed descriptions and order for yourself!</p>
              </nav>
            </div>
            <div data-hover="false" data-delay={0} data-w-id="78b62052-f5c9-7393-4c73-84a7b624fd72" className="dropdown-item w-dropdown">
              <div className="accordion-toggle-2 w-dropdown-toggle">
                <h4 className="accordion-title-2">What are the team relationships?</h4>
                <div className="accordion-icon-small"></div>
              </div>
              <nav className="accordion-list-medium w-dropdown-list">
                <p className="accordion-list-content-2">We have transform your ideas into remarkable digital
                  products with an innovative and contemporary style. We specialize in creative minimalist
                  projects. We have many years of experience in the profession. View our portfolio with
                  detailed descriptions and order for yourself!</p>
              </nav>
            </div>
            <div data-hover="false" data-delay={0} data-w-id="78b62052-f5c9-7393-4c73-84a7b624fd7b" className="dropdown-item last-item w-dropdown">
              <div className="accordion-toggle-2 w-dropdown-toggle">
                <h4 className="accordion-title-2">How to create a portfolio?</h4>
                <div className="accordion-icon-small"></div>
              </div>
              <nav className="accordion-list-medium w-dropdown-list">
                <p className="accordion-list-content-2">We have transform your ideas into remarkable digital
                  products with an innovative and contemporary style. We specialize in creative minimalist
                  projects. We have many years of experience in the profession. View our portfolio with
                  detailed descriptions and order for yourself!</p>
              </nav>
            </div>
          </div>
        </div>
        <div className="faq-about-wrapper section-top-spacing">
          <div data-w-id="90655940-9dcb-3d91-bbc2-d744b616f42c" style={{opacity: 1}} className="faq-column-left"><img src="https://assets-global.website-files.com/65a6e5c0e8f5596f33c0ff0a/65c24910005806cb8fc328c1_fleur-kaan-w4Dj3MshHQ0-unsplash%20(1).webp" loading="lazy" sizes="(max-width: 479px) 94vw, (max-width: 767px) 96vw, (max-width: 991px) 97vw, (max-width: 1279px) 47vw, (max-width: 1919px) 583.6328125px, 835.1953125px" srcSet="https://assets-global.website-files.com/65a6e5c0e8f5596f33c0ff0a/65c24910005806cb8fc328c1_fleur-kaan-w4Dj3MshHQ0-unsplash%20(1)-p-500.webp 500w, https://assets-global.website-files.com/65a6e5c0e8f5596f33c0ff0a/65c24910005806cb8fc328c1_fleur-kaan-w4Dj3MshHQ0-unsplash%20(1)-p-800.webp 800w, https://assets-global.website-files.com/65a6e5c0e8f5596f33c0ff0a/65c24910005806cb8fc328c1_fleur-kaan-w4Dj3MshHQ0-unsplash%20(1)-p-1080.webp 1080w, https://assets-global.website-files.com/65a6e5c0e8f5596f33c0ff0a/65c24910005806cb8fc328c1_fleur-kaan-w4Dj3MshHQ0-unsplash%20(1)-p-1600.webp 1600w, https://assets-global.website-files.com/65a6e5c0e8f5596f33c0ff0a/65c24910005806cb8fc328c1_fleur-kaan-w4Dj3MshHQ0-unsplash%20(1).webp 1920w" alt="Girl Portrait" className="faq-content-image" /></div>
          <div className="faq-column-right">
            <h2 data-w-id="90655940-9dcb-3d91-bbc2-d744b616f42f" style={{opacity: 1}}>We can answer all your
              burning questions now</h2>
            <p data-w-id="90655940-9dcb-3d91-bbc2-d744b616f431" style={{opacity: 1}}>We have transform your ideas
              into remarkable digital products with an innovative and contemporary style. We specialize in
              creative minimalist projects. We have many years of experience in the profession. View our
              portfolio with detailed descriptions and order for yourself! We have transform your ideas into
              remark digital products with an innovative style. </p><a href="/about-us" data-w-id="6d696887-b6f4-5727-c1ed-77f4eca3c4ff" style={{opacity: 1}} className="button-primary w-button">About Loti<span className="span-image-arrow"> </span></a>
          </div>
        </div>
      </div>
    </div>
    <div className="section-contact-us">
      <div className="base-container w-container">
        <div className="subscribe-wrap">
          <div data-w-id="0e8c28d0-6e6c-3e71-662f-81bc93b7ab27" className="section-subtitle mb-30">
            <div className="subtitle-dot" />
            <h6 className="subtitle">contact us</h6>
          </div>
          <h2 data-w-id="7adfb2a1-e2f0-9a43-502a-7ff634415695">Collaborating with driven brands and individuals is
            our passion. Reach out, let's craft an outstanding portfolio together!</h2>
          <div data-w-id="b58f9758-a16e-b8d9-46c2-6330a2c645ee" className="dual-buttons-wrapper"><a href="/our-services-1" data-w-id="82b10bbe-a24a-f823-8d87-e792863aac1b" className="button-primary w-button">Our Services<span className="span-image-arrow"> </span></a><a href="/contact-us" data-w-id="e3a0e73d-5f7c-9908-ee35-2c53876de4ab" className="button-primary-white w-button">Discuss a project<span className="span-image-arrow red">
              </span></a></div>
        </div>
      </div>
    </div>
  </div>

)

}

export async function getStaticProps() {
  const faqs = getAllFaqs();
  return {
    props: {
      faqs,
    },
  };
}


export default Faq;