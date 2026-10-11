import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "MLOps Scholarship Trainee",
      company: "Qafza",
      date: "08/2026 – Present | Remote",
      points: [
        "Training in production ML pipelines, APIs, Docker, data and model versioning, and monitoring."
      ]
    },
    {
      title: "AI Software Engineer Intern",
      company: "Palsoft",
      date: "03/2026 – 05/2026 | Remote",
      points: [
        "Built five full-stack applications using Python, Django, React, and Docker.",
        "Designed scalable application architectures and maintainable project structures.",
        "Developed Mentrix, an AI learning platform with OCR, code evaluation, and Gemini-powered mentorship."
      ]
    },
    {
      title: "NLP & LLMs Intern",
      company: "Reconess",
      date: "09/2025 – 01/2026 | Remote",
      points: [
        "Built Bosala AI, an Arabic RAG platform for domain-specific question answering.",
        "Implemented document ingestion, embeddings, Qdrant vector search, and LLM response generation.",
        "Developed Django REST APIs, authentication, chat history, and privacy-aware analytics."
      ]
    },
    {
      title: "AI Intern",
      company: "Aqlama.ai",
      date: "10/2024 – 01/2025 | Remote",
      points: [
        "Developed CNN and RNN models for sentiment analysis and image classification.",
        "Built a mural layout system using image preprocessing, color clustering, and visual harmony evaluation."
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
