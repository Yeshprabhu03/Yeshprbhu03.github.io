const Experience = () => {
  const experiences = [
    {
      title: "Product Manager",
      company: "Quant Masters Technologies Pvt Ltd",
      duration: "January 2021 - June 2024",
      achievements: [
        "Led cross-functional teams achieving 20% improvement in operational efficiency and $50K annual cost savings",
        "Managed end-to-end development of content monitoring dashboard, reducing manual reporting time by 15 hours",
        "Redesigned analytical backend infrastructure, reducing onboarding time by 10 hours per client",
        "Led bi-weekly Scrum meetings resulting in 20% faster time-to-market for key updates",
        "Developed training programs upskilling 10+ team members, improving feature prioritization accuracy by 15%"
      ]
    },
    {
      title: "Founder",
      company: "Digital Axia",
      duration: "March 2018 - July 2019",
      achievements: [
        "Developed end-to-end websites generating over $25K in revenue",
        "Managed $6K monthly media budgets across Google Ads, Meta Ads, and SEO",
        "Optimized digital campaigns for higher ROAS with 20% increase in organic traffic"
      ]
    }
  ];

  return (
    <section id="experience">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3>{exp.title}</h3>
          <p className="company">{exp.company}</p>
          <p className="duration">{exp.duration}</p>
          <ul>
            {exp.achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience; 