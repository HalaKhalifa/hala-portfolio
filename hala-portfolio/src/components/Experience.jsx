import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "NLP Intern",
      company: "Reconess",
      date: "09/2025 – 01/2026 | Remote",
      points: [
        "Built and evaluated Arabic RAG-based chatbot system using embeddings and vector databases.",
        "Worked on LLM integration, prompt design, and performance optimization for local deployment.",
        "Implemented user authentication, chat history, and basic analytics in a Django-based backend."
      ]
    },
    {
      title: "AI Intern",
      company: "Aqlama.ai",
      date: "10/2024 – 01/2025 | Remote",
      points: [
        "Developed and optimized CNN/RNN models for sentiment analysis and image classification.",
        "Designed the Mural Organizer AI System for auto-arranging wall murals based on color harmony.",
        "Built end-to-end preprocessing and feature extraction pipelines using Python and OpenCV."
      ]
    },
    {
      title: "Data Analytics Fellow",
      company: "Correlation One",
      date: "09/2023 – Paused | Remote",
      points: [
        "Selected amongst top 5% of applicants for a 14-week data science fellowship.",
        "Addressed real-world challenges with an intensive curriculum in Python, SQL, Tableau, and Looker Studio."
      ]
    }
  ];

  return (
    <section id="experience">
      <h2 className="title">Where I've Worked</h2>
      <div className="exp-timeline">
        {experiences.map((exp, i) => (
          <div className="exp-item" key={i}>
            <h3 className="exp-title">{exp.title} <span className="exp-company">@ {exp.company}</span></h3>
            <div className="exp-date">{exp.date}</div>
            <ul className="exp-desc">
              {exp.points.map((pt, j) => <li key={j}>{pt}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
