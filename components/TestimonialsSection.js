import { useEffect, useState } from 'react';

const TestimonialsSection = () => {
  const [isClient, setIsClient] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      content: "Loti's innovative approach transformed our vision into reality. Their dedication to excellence and creative expertise resulted in a product that exceeded our expectations.",
      name: "Ryan Westervelt",
      position: "Founder of Aquamarine Studio"
    },
    {
      content: "The design is professional, giving my portfolio a polished look that impresses clients and colleagues alike. It's easy to customize, making it a perfect fit for any creative professional.",
      name: "Ryan Mitchell",
      position: "Marketing Manager in Horizon Media Solutions"
    },
    {
      content: "The user-friendly interface and simple customization options allowed me to create a stunning portfolio without any hassle. It's a versatile template that adapts to my style and projects.",
      name: "Ethan Reynolds",
      position: "Software Engineer in Quantum Innovations Ltd."
    },
    {
      content: "The clean layout and attention to detail make my work stand out, leaving a lasting impact on potential clients and employers. It's the perfect tool for anyone about making a introduction.",
      name: "Olivia Morgan",
      position: "Graphic Designer Creative Visions Studio"
    }
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-primary-bg">
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="testimonials-block-home-2">
          <div
            data-w-id="8a0b74d9-9ebf-c544-ab77-b43e7e8c76a4"
            style={{ opacity: 1 }}
            className="section-subtitle"
          >
            <div className="subtitle-dot color-white" />
            <h6 className="subtitle text-white">Hear from our happy clients</h6>
          </div>
          <div
            data-delay={4000}
            data-animation="slide"
            className="sider-testimonials w-slider"
            data-autoplay="false"
            data-easing="linear"
            style={{ opacity: 1 }}
            data-hide-arrows="false"
            data-disable-swipe="false"
            data-w-id="d27f4f84-4766-7081-253f-8c3794ee7ad4"
            data-autoplay-limit={0}
            data-nav-spacing={3}
            data-duration={500}
            data-infinite="true"
          >
            <div className="slider-mask-testimonials w-slider-mask">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-slide"
                  style={{ display: index === currentSlide ? 'block' : 'none' }}
                >
                  <div className="testimonial-content">
                    {testimonial.content}
                  </div>
                  <div className="testimonial-name-wrapper">
                    <h6 className="testimonial-name text-white">{testimonial.name}</h6>
                    <p className="paragraph-large text-white">{testimonial.position}</p>
                  </div>
                </div>
              ))}
            </div>
            <div id="left-arrow" className="round-icon-with-arrow left-arrow w-slider-arrow-left" onClick={handlePrev}>
              <div className="arrow-red left" />
            </div>
            <div id="right-arrow" className="round-icon-with-arrow w-slider-arrow-right" onClick={handleNext}>
              <div className="arrow-red" />
            </div>
            <div className="hidden w-slider-nav w-round w-num" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
