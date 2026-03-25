import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="title">Get In Touch</h2>
      <p className="contact-desc">
        I'm currently looking for new opportunities and meaningful collaborations. Whether you have a question or just want to say hi, my inbox is always open!
      </p>
      <div className="contact-links">
        <a href="mailto:khalifehhala28@gmail.com" className="btn btn-primary contact-btn">
          Email Me
        </a>
        <a href="http://linkedin.com/in/halakhalifeh03" target="_blank" rel="noreferrer" className="btn btn-outline contact-btn">
          LinkedIn Profile
        </a>
      </div>
    </section>
  );
};

export default Contact;
