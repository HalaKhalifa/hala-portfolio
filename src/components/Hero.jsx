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
          I hold a bachelor’s degree in Computer Science (AI Track), with hands-on experience building machine learning and applied AI systems.
        </p>
        <p className="hero-education">B.S. Computer Science · Artificial Intelligence · An-Najah National University</p>
        <br/>
        <p>
          Through internships and hands-on projects, I’ve built experience in deep learning, large language models, and retrieval-augmented generation (RAG), developing practical AI systems from models to user-facing applications. I’m motivated to build thoughtful, responsible AI that creates meaningful impact in Palestine and beyond.
        </p>
        <br/>
        <p>
          As a Palestinian, I’m seeking career opportunities that align with my values and don’t support or contribute to systems that harm my people. I want to grow professionally and contribute ethically without having to choose between my career and my principles.
        </p>
        <br/>
        <p>
          <strong>'For Gaza and Palestine' 🌿</strong>
        </p>
      </div>
      <div className="hero-cta">
        <a href="#projects" className="btn btn-primary">Check out my work</a>
        <a href="#contact" className="btn btn-outline">Contact Me</a>
        <a href="https://www.linkedin.com/in/hala-khalifeh" target="_blank" rel="noreferrer" className="btn btn-outline">LinkedIn</a>
      </div>
    </section>
  );
};

export default Hero;
