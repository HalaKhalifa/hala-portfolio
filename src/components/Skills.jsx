import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: ["Python", "C++", "JavaScript", "SQL"]
    },
    {
      name: "AI & NLP",
      skills: ["RAG systems", "Embeddings", "Prompt Engineering", "LoRA Fine-tuning", "Model Evaluation", "Hugging Face", "Torch", "OpenCV"]
    },
    {
      name: "Data Analysis",
      skills: ["Pandas", "Scikit-Learn", "Tableau", "Apache Spark", "Kafka", "Elasticsearch", "Looker Studio"]
    },
    {
      name: "Web Development",
      skills: ["ReactJS", "NodeJS", "Django", "Flask", "MongoDB", "REST APIs", "HTML/CSS"]
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
