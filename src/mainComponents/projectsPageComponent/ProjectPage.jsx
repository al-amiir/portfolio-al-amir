import React, { useEffect, useState } from "react";
import mernImage from "../../styles/pics/projects/mern.png";
import portfolioImage from "../../styles/pics/projects/portfolio1.png";
import furnitureImage from "../../styles/pics/projects/furniture.png";
import ProjectDetails from "./ProjectDetails";
import ProjectTubes from "./ProjectTubes";

import {createBrowserHistory } from "history";

const ProjectPage = ({setDisplayedLocation}) => {
  let history = createBrowserHistory();
  useEffect(() => {
  console.log("project",history.location)

  }, [])
  
  const [projectIndex, setProjectIndex] = useState(0);
  const [fetchedProjects, setFetchedProjects] = useState([
    {
      number: 0,
      name: "portfolio",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero cumque dicta",
      links: {
        live: "",
        youtube: "https://www.youtube.com/watch?v=yHXzoj2mp-g&t=0s&ab_channel=AlAmir",
        code: "",
      },
      image: portfolioImage,
    },
    {
      number: 1,
      name: "MERN",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero cumque dicta",
      links: {
        live: "",
        youtube: "",
        code: "",
      },
      image: mernImage,
    },
    {
      number: 2,
      name: "furniture",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero cumque dicta",
      links: {
        live: "",
        youtube: "",
        code: "",
      },
      image: furnitureImage,
    },
    {
      number: 3,
      name: "portfolio",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero cumque dicta",
      links: {
        live: "",
        youtube: "",
        code: "",
      },
      image: mernImage,
    },
    {
      number: 4,
      name: "MERN",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero cumque dicta",
      links: {
        live: "",
        youtube: "",
        code: "",
      },
      image: mernImage,
    },
    {
      number: 5,
      name: "MERN",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero cumque dicta",
      links: {
        live: "",
        youtube: "",
        code: "",
      },
      image: mernImage,
    },
    {
      number: 6,
      name: "MERN",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero cumque dicta",
      links: {
        live: "",
        youtube: "",
        code: "",
      },
      image: mernImage,
    },
    {
      number: 7,
      name: "MERN",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero cumque dicta",
      links: {
        live: "",
        youtube: "",
        code: "",
      },
      image: mernImage,
    },
  ]);
  const [projectStyle, setProjectStyle] = useState(Array(fetchedProjects.length).fill({ height: "150px", width: "15px", border: "1px solid #710000", backgroundColor: "transparent", boxShadow: "0 0  black" }));

  return (
    <div className="project_container">
      <ProjectDetails projectInfo={fetchedProjects[projectIndex]} />
      <ProjectTubes projectStyle={projectStyle} setProjectStyle={setProjectStyle} setProjectIndex={setProjectIndex} />
    </div>
  );
};

export default ProjectPage;