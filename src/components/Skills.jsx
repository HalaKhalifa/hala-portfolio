import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: ["Python", "C++", "JavaScript", "SQL", "Scala", "Node.js", "TypeScript"]
    },
    {
      name: "AI & Machine Learning",
      skills: ["PyTorch", "TensorFlow", "Hugging Face", "Transformers", "LLMs", "NLP", "RAG", "Prompt Engineering", "Computer Vision", "OpenCV", "scikit-learn", "Unsloth"]
    },
    {
      name: "Backend & Web",
      skills: ["Django", "Flask", "REST APIs", "React", "SQLAlchemy", "FastAPI"]
    },
    {
      name: "Data Engineering & Databases",
      skills: ["PostgreSQL", "MySQL", "Qdrant", "Elasticsearch", "Apache Spark SQL", "Spark Streaming", "Kafka"]
    },
    {
      name: "Data Analysis & Visualization",
      skills: ["Pandas", "Matplotlib", "Tableau", "Kibana", "Excel PivotTables", "Excel PivotCharts", "QGIS"]
    },
    {
      name: "MLOps & Development Tools",
      skills: ["Git", "GitHub", "Docker", "AWS", "VS Code", "pgAdmin", "DVC", "Prometheus", "GitHub Actions", "MLflow"]
    },
    {
      name: "Project Management",
      skills: ["Notion", "Trello", "Linear"]
    }
  ];

  return (
    <section id="skills">
      <h2 className="title">Skills</h2>
      <div className="skills-container">
        {skillCategories.map((cat, i) => (
          <div className="skill-category" key={i}>
            <h3>{cat.name}</h3>
            <div className="skill-list">
              {cat.skills.map((skill, j) => (
                <span className="skill-tag" key={j}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
