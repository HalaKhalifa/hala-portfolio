import React from 'react';

const Hero = () => {
  return (
    <section id="about" className="hero-section">
      <div className="arabic-watermark">فلسطين</div>
      <div className="hero-greeting">Salam, my name is</div>
      <h1 className="hero-name">Hala Khalifeh | Yafa.</h1>
      <h2 className="hero-subtitle">I build intelligent AI systems.</h2>
      <div className="hero-desc">
        <p>
          I am a Bachelor of Computer Science graduate (AI Track) with hands-on experience in machine learning, deep learning, and applied AI systems.
        </p>
        <br/>
        <p>
          During my internships, I gained extensive experience in Deep Learning, Large Language Models, and Retrieval-Augmented Generation (RAG) systems. I am driven by a strong belief in using technology for impact, especially AI solutions that serve Arabic content, my country, and the world.
        </p>
        <br/>
        <p>
          <strong>'For Gaza and Palestine' 🌿</strong>
        </p>
      </div>
      <div className="hero-cta">
        <a href="#projects" className="btn btn-primary">Check out my work</a>
        <a href="#contact" className="btn btn-outline">Contact Me</a>
      </div>
    </section>
  );
};

export default Hero;
