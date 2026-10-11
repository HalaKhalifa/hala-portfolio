import React, { useState } from 'react';

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  const highlightProjects = [
    {
      id: "bosala",
      title: "Bosala AI – Arabic RAG Chatbot",
      desc: "Built an Arabic RAG platform for domain-specific question answering, with document ingestion, embeddings, Qdrant vector search, Django APIs, authentication, chat history, and privacy-aware analytics.",
      tech: ["Python", "Django", "Gemini", "Qdrant", "RAG", "Docker"],
      github: "https://github.com/HalaKhalifa/rag_arabic_chatbot.git",
      mark: "BA",
      demo: `${import.meta.env.BASE_URL}videos/bosala-demo.mp4`,
      demoType: "video/mp4"
    },
    {
      id: "mentrix",
      title: "Mentrix – AI Coding Mentor",
      desc: "Built a coding practice platform that evaluates code and pseudocode for logic, quality, and efficiency. Includes AI-generated hints, personalized progress tracking, and OCR that turns uploaded PDFs into interactive problems.",
      tech: ["React", "TypeScript", "Django REST", "Gemini", "OCR", "Docker"],
      github: null,
      mark: "M",
      demo: `${import.meta.env.BASE_URL}videos/mentrix-demo.mp4`,
      demoType: "video/mp4"
    },
    {
      id: "olist",
      title: "Olist Late Delivery Prediction",
      desc: "Building an end-to-end MLOps system to predict late e-commerce deliveries, with a containerized prediction API, model tracking, input validation, and monitoring.",
      tech: ["Python", "FastAPI", "MLflow", "DVC", "Docker", "Prometheus"],
      github: null,
      mark: "OD"
    },
    {
      id: "olive-leaf",
      title: "Olive Leaf Disease Detector",
      desc: "Developed a MobileNetV2-based deep learning system for classification using transfer learning and augmentation. Achieved 92% test accuracy.",
      tech: ["Python", "TensorFlow", "Keras", "scikit-learn", "OpenCV"],
      github: "https://github.com/HalaKhalifa/olive-disease-detector.git",
      mark: "OL"
    },
    {
      id: "essay-grading",
      title: "Automatic Essay Grading System",
      desc: "Built an automated essay grading system using a fine-tuned Mistral-7B (LoRA, 4-bit) model with a Flask + Streamlit interface.",
      tech: ["Hugging Face", "Unsloth", "Flask", "Streamlit", "MLX"],
      github: "https://github.com/HalaKhalifa/automatic-essay-grading.git",
      mark: "AG"
    },
    {
      id: "twitter-pipeline",
      title: "Twitter Stream Processing Pipeline",
      desc: "Developed a real-time pipeline for analyzing tweets with sentiment classification, hashtag extraction, and interactive visual dashboards.",
      tech: ["Scala", "Kafka", "Elasticsearch", "Kibana", "Python"],
      github: "https://github.com/HalaKhalifa/twitter-stream-pipeline.git",
      mark: "TP"
    }
  ];

  const otherProjects = [
    {
      title: "Mural Organizer AI Model",
      desc: "Developed an AI-powered solution for arranging pictures on wall murals focusing on harmony, utilizing dynamic image resizing and KMeans clustering for hues.",
      tech: ["Python", "Pillow", "NumPy", "Machine Learning"],
      github: "https://github.com/HalaKhalifa"
    },
    {
      title: "Race Game",
      desc: "Developed a 2D endless runner in Godot with difficulty scaling and an AI Coach (Gemma) providing motivational feedback.",
      tech: ["Godot 4.x", "GDScript", "Gemma LLM"],
      github: "https://github.com/HalaKhalifa/Race-Game.git"
    },
    {
      title: "Rental ETL",
      desc: "Designed a star schema and built an ETL pipeline in Python to load clean dimensions and fact tables into MySQLWorkspace.",
      tech: ["Python", "pandas", "MySQL", "Streamlit"],
      github: "https://github.com/HalaKhalifa/rental_dw_etl_project.git"
    },
  ];

  const renderProjectCard = (proj, i) => (
    <article className="project-card" id={proj.id} key={i}>
      <div className="project-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <h3 className="project-title">{proj.title}</h3>
          {proj.github && <a href={proj.github} target="_blank" rel="noreferrer" className="github-link" title="View Source">
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>}
        </div>
        <p className="project-desc">{proj.desc}</p>
        {proj.demo && (
          <video className="project-demo" controls preload="metadata" playsInline aria-label={`${proj.title} video demo`}>
            <source src={proj.demo} type={proj.demoType || "video/quicktime"} />
            Your browser does not support embedded video. <a href={proj.demo}>Open the demo video</a>.
          </video>
        )}
      </div>
      <div className="project-tech">
        {proj.tech.map((t, j) => <span key={j}>#{t}</span>)}
      </div>
    </article>
  );

  return (
    <section id="projects">
      <h2 className="title">Featured Projects</h2>
      <div className="project-marquee" role="region" aria-label="Featured project logo carousel">
        <div className="project-marquee-track">
          {highlightProjects.map((project) => (
            <a className="project-mark" href={`#${project.id}`} key={project.id}>
              <span className={`project-mark-logo project-mark-logo-${project.id}`} aria-hidden="true">{project.mark}</span>
              <span>{project.title.split(" – ")[0]}</span>
            </a>
          ))}
          {highlightProjects.map((project) => (
            <a className="project-mark" href={`#${project.id}`} key={`${project.id}-repeat`} tabIndex={-1} aria-hidden="true">
              <span className={`project-mark-logo project-mark-logo-${project.id}`}>{project.mark}</span>
              <span>{project.title.split(" – ")[0]}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="projects-grid">
        {highlightProjects.map(renderProjectCard)}
      </div>

      {showMore && (
        <div className="projects-grid" style={{ marginTop: '2rem' }}>
          {otherProjects.map(renderProjectCard)}
        </div>
      )}

      <div className="show-more-container">
        <button className="btn btn-outline show-more-btn" onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : "Show More Projects"}
        </button>
      </div>
    </section>
  );
};

export default Projects;
