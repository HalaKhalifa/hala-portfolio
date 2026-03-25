import React, { useState } from 'react';

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  const highlightProjects = [
    {
      title: "Bosala AI – Arabic RAG Chatbot",
      desc: "Designed an Arabic RAG chatbot for domain-specific Q&A. Built document ingestion, embeddings, vector search, user auth, and privacy analytics with a web UI.",
      tech: ["Python", "Django", "Hugging Face", "Qdrant", "RAG", "REST APIs"],
      github: "https://github.com/HalaKhalifa/rag_arabic_chatbot.git" 
    },
    {
      title: "Olive Leaf Disease Detector",
      desc: "Developed a MobileNetV2-based deep learning system for classification using transfer learning and augmentation. Achieved 92% test accuracy.",
      tech: ["Python", "TensorFlow", "Keras", "scikit-learn", "OpenCV"],
      github: "https://github.com/HalaKhalifa/olive-disease-detector.git"
    },
    {
      title: "Automatic Essay Grading System",
      desc: "Built an automated essay grading system using a fine-tuned Mistral-7B (LoRA, 4-bit) model with a Flask + Streamlit interface.",
      tech: ["Hugging Face", "Unsloth", "Flask", "Streamlit", "MLX"],
      github: "https://github.com/HalaKhalifa/automatic-essay-grading.git"
    },
    {
      title: "Twitter Stream Processing Pipeline",
      desc: "Developed a real-time pipeline for analyzing tweets with sentiment classification, hashtag extraction, and interactive visual dashboards.",
      tech: ["Scala", "Kafka", "Elasticsearch", "Kibana", "Python"],
      github: "https://github.com/HalaKhalifa/twitter-stream-pipeline.git"
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
    {
      title: "Comma & Freepik Clone",
      desc: "Participated in full-stack team projects building 'Comma' (Node.js/Express) and a Freepik clone frontend.",
      tech: ["Node.js", "Express", "MongoDB", "ReactJS", "Bootstrap"],
      github: "https://github.com/HalaKhalifa/Comma-Backup.git"
    }
  ];

  const renderProjectCard = (proj, i) => (
    <div className="project-card" key={i}>
      <div className="project-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <h3 className="project-title">{proj.title}</h3>
          <a href={proj.github} target="_blank" rel="noreferrer" className="github-link" title="View Source">
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>
        <p className="project-desc">{proj.desc}</p>
      </div>
      <div className="project-tech">
        {proj.tech.map((t, j) => <span key={j}>#{t}</span>)}
      </div>
    </div>
  );

  return (
    <section id="projects">
      <h2 className="title">Featured Projects</h2>
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
