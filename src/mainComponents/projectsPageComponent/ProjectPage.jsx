import React, { useEffect, useState } from "react";
import ProjectDetails from "./ProjectDetails";
import ProjectTubes from "./ProjectTubes";
// Images
import portfolioImage from "../../styles/pics/projects/portfolio1.jpg";
import duchessImage from "../../styles/pics/projects/duchess.jpg";
import mernImage from "../../styles/pics/projects/mern.jpg";
import furnitureImage from "../../styles/pics/projects/furniture.jpg";
import boutiqueImage from "../../styles/pics/projects/boutique.jpg";
import hyakahImage from "../../styles/pics/projects/hyakah.jpg";
import xshopImage from "../../styles/pics/projects/xshop.jpg";
import xstudiosImage from "../../styles/pics/projects/xstudios.jpg";

const ProjectPage = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    document.body.style.width = "100vw";
    document.body.style.height = "100vh";

    setOpacity(1);
    return () => {
      setOpacity(0);
    };
  }, []);

  const [projectIndex, setProjectIndex] = useState(0);
  const [fetchedProjects, setFetchedProjects] = useState([
    {
      number: "00",
      name: "portfolio",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero cumque dicta",
      links: {
        live: "",
        youtube:
          "https://www.youtube.com/watch?v=yHXzoj2mp-g&t=0s&ab_channel=AlAmir",
        code: "",
      },
      image: portfolioImage,
    },
    {
      number: "01",
      name: "MERN",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero cumque dicta",
      links: {
        live: "",
        youtube: "",
        code: "",
      },
      image: duchessImage,
    },
    {
      number: "02",
      name: "furniture",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero cumque dicta",
      links: {
        live: "",
        youtube: "",
        code: "",
      },
      image: furnitureImage,
    },
    {
      number: "03",
      name: "portfolio",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero cumque dicta",
      links: {
        live: "",
        youtube: "",
        code: "",
      },
      image: boutiqueImage,
    },
    {
      number: 4,
      name: "MERN",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero cumque dicta",
      links: {
        live: "",
        youtube: "",
        code: "",
      },
      image: hyakahImage,
    },
    {
      number: 5,
      name: "MERN",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero cumque dicta",
      links: {
        live: "",
        youtube: "",
        code: "",
      },
      image: xshopImage,
    },
    {
      number: 6,
      name: "MERN",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero cumque dicta",
      links: {
        live: "",
        youtube: "",
        code: "",
      },
      image: xstudiosImage,
    },
    {
      number: 7,
      name: "MERN",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero cumque dicta",
      links: {
        live: "",
        youtube: "",
        code: "",
      },
      image: mernImage,
    },
  ]);
  const [projectStyle, setProjectStyle] = useState(
    Array(fetchedProjects.length).fill({
      height: "150px",
      width: "15px",
      border: "1px solid #710000",
      backgroundColor: "transparent",
      boxShadow: "0 0  black",
    })
  );

  return (
    <div className="project_container" style={{ opacity: `${opacity}` }}>
      <ProjectDetails projectInfo={fetchedProjects[projectIndex]} />
      <ProjectTubes
        projectStyle={projectStyle}
        setProjectStyle={setProjectStyle}
        setProjectIndex={setProjectIndex}
      />
    </div>
  );
};

export default ProjectPage;
