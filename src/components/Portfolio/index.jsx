import { useState } from 'react';
import Project from "../Project";

import classes from './index.module.css';

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'budgeIt',
      description: 'CSS / JavaScript / Handlebars',
      link: "https://blueberry-cake-79168-e1e68fe7cf3a.herokuapp.com/login",
      repo: "https://github.com/Al3xG23/Budge_It.git"
    },
    {
      name: 'cssSnippets',
      description: 'HTML / CSS',
      link: "https://chaosgale.github.io/mn2/",
      repo: "https://github.com/Chaosgale/mn2.git"
    },
    {
      name: 'weatherAPI',
      description: 'HTML / CSS / JavaScript',
      link: "https://chaosgale.github.io/weather/",
      repo: "https://github.com/Chaosgale/weather.git"
    },
    {
      name: 'vaultTec',
      description: 'Node / MySQL ',
      link: "https://github.com/Chaosgale/Vault-Tec_Employee_Tracker",
      repo: "https://github.com/Chaosgale/Vault-Tec_Employee_Tracker"
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
