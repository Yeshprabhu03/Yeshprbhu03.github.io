import React from 'react';
import styled from 'styled-components';

const ProjectSection = styled.section`
  background: ${({ theme }) => theme.colors.surface};
  padding: 5rem 2rem;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 3rem auto;
`;

const ProjectCard = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: all ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
  }

  .project-type {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    margin: 1rem 0;
  }

  li {
    margin-bottom: 0.5rem;
    position: relative;
    padding-left: 1.5rem;
    
    &:before {
      content: "•";
      color: ${({ theme }) => theme.colors.primary};
      position: absolute;
      left: 0;
    }
  }

  .project-link {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background: ${({ theme }) => theme.colors.gradient};
    color: white;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    transition: transform ${({ theme }) => theme.transitions.fast};

    &:hover {
      transform: translateX(5px);
    }
  }
`;

const Projects = (): JSX.Element => {
  const projects = [
    {
      title: "User Engagement Platform",
      type: "Full Stack Project",
      description: [
        "Developed an education platform increasing course registrations by 25% and generating $50,000 in additional revenue annually",
        "Implemented automated workflows reducing operational costs by 15%",
        "Integrated analytics dashboard using React and D3.js for real-time metrics"
      ],
      link: "/user-engagement-platform"
    },
    {
      title: "AI-Powered Content Monitor",
      type: "Machine Learning Project",
      description: [
        "Built content monitoring system with 95% accuracy using TensorFlow",
        "Reduced manual review time by 15 hours per week",
        "Implemented real-time alert system for content violations"
      ],
      link: "/content-monitor"
    },
    {
      title: "Digital Marketing Analytics",
      type: "Data Analysis Project",
      description: [
        "Managed $6K monthly media budgets across multiple platforms",
        "Increased organic traffic by 20% through SEO optimization",
        "Developed automated reporting system using Python and Google Analytics API"
      ],
      link: "/marketing-analytics"
    }
  ];

  return (
    <ProjectSection id="projects">
      <h2>Featured Projects</h2>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index} className="animate-scaleIn">
            <h3>{project.title}</h3>
            <div className="project-type">{project.type}</div>
            <ul>
              {project.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <a href={project.link} className="project-link">
              View Project →
            </a>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectSection>
  );
};

export default Projects; 