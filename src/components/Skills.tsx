import React from 'react';

interface SkillCategory {
  title: string;
  skills: string;
}

const Skills = (): JSX.Element => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Product Management",
      skills: "Market Research, Product Roadmapping, User Story Mapping, Go-to-Market Strategy, MVP Development"
    },
    {
      title: "Technical",
      skills: "SQL, Python, Tableau, Microsoft Suite, Data-Driven Insights, Metrics Tracking"
    },
    {
      title: "Digital Marketing",
      skills: "SEO, PPC, Google Ads, Meta Ads, Email Marketing, Market Analysis"
    }
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.title}</h3>
            <p>{category.skills}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 