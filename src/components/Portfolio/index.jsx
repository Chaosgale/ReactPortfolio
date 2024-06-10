import { useState } from 'react';
import Project from "../Project";

import classes from './index.module.css';

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'surfReport',
      description: 'MERN Stack',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'pastelPuzzels',
      description: 'MERN Stack',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'runBuddy',
      description: 'HTML/CSS',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'ledWall',
      description: 'Node/IoT',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'calculator',
      description: 'React/JavaScript/CSS',
      link: "https://github.com",
      repo: "https://github.com"
    },
  ]);

  return (
    <div className={classes.main}>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
