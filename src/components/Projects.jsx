const Projects = () => {
  const projects = [
    {
      title: "Praan-e-Rakshak",
      description: "Led a team of 4 to build a real-time animal rescue reporting platform connecting with NGOs"
    },
    {
      title: "Genz Hub",
      description: "Launched a YouTube podcast featuring Gen-Z achievers and Invest edu, a blog on personal finance"
    },
    {
      title: "Product Management Club",
      description: "President at Fordham University; led team to 2nd place in Pitch Competition"
    }
  ];

  return (
    <section id="projects">
      <h2>Notable Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 