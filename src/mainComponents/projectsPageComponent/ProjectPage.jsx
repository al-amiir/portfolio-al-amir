import React, { useEffect, useState } from "react";
import mernImage from "../../styles/pics/projects/mern.png";
import portfolioImage from "../../styles/pics/projects/portfolio1.png";
import furnitureImage from "../../styles/pics/projects/furniture.png";

const ProjectPage = () => {
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

  function resetArray(index) {
    setProjectStyle((prev) =>
      prev.map((p, i) => {
        if (i === index) return { ...p, height: "200px", border: "1px solid rgb(255 0 0)", backgroundColor: "rgb(255 0 0 )", boxShadow: "black 1px -1px 18px" };
        if (i === index - 1) return { ...p, height: "190px", border: "1px solid rgb(202 4 4)", backgroundColor: "rgb(202 4 4 )", boxShadow: "0 0 black" };
        if (i === index + 1) return { ...p, height: "190px", border: "1px solid rgb(202 4 4)", backgroundColor: "rgb(202 4 4 )", boxShadow: "0 0 black" };
        if (i === index - 2) return { ...p, height: "170px", border: "1px solid rgb(144 3 3 )", backgroundColor: "rgb(144 3 3)", boxShadow: "0 0 black" };
        if (i === index + 2) return { ...p, height: "170px", border: "1px solid rgb(144 3 3 )", backgroundColor: "rgb(144 3 3)", boxShadow: "0 0 black" };
        if (i === index - 3) return { ...p, height: "160px", backgroundColor: "transparent", boxShadow: "0 0 black" };
        if (i === index + 3) return { ...p, height: "160px", backgroundColor: "transparent", boxShadow: "0 0 black" };
        else return { ...p, height: "150px", border: "1px solid #710000", backgroundColor: "transparent", boxShadow: "0 0 black" };
      })
    );
  }
  function handleHover(e) {
    resetArray(+e.target.dataset.index);
  }
  function handleClick(e) {
    setProjectIndex((prev) => (prev = +e.target.dataset.index));
  }
  useEffect(() => {
    resetArray(0);
  }, []);

  return (
    <div className="project_container">
      <div className="project_details">
        <div className="project_details-left">
          <div className="project_details-text">
            <h1>
              {`-${fetchedProjects[projectIndex].number}`}
              &nbsp;
              {fetchedProjects[projectIndex].name}
            </h1>
            <p>{fetchedProjects[projectIndex].description}</p>
          </div>
          <div className="project_details-buttons">
            <a href={fetchedProjects[projectIndex].links.live} target="_blanck">
              <img src="https://img.icons8.com/color/40/000000/link--v1.png" />
            </a>
            <a href={fetchedProjects[projectIndex].links.code} target="_blanck">
              <img src="https://img.icons8.com/color/40/000000/github--v1.png" />
            </a>
            <a href={fetchedProjects[projectIndex].links.youtube} target="_blanck">
              <img src="https://img.icons8.com/color/40/000000/youtube-play.png" />
            </a>
          </div>
        </div>
        <div className="project_details-right">
          <img className="" src={fetchedProjects[projectIndex].image} alt="project image" />
        </div>
      </div>
      <div className="project_cursors">
        {projectStyle.map((project, i) => (
          <dir key={i} data-index={i} className="project_container-singleProject" onMouseOver={handleHover} onClick={handleClick} style={{ height: `${project?.height}`, width: `${project?.width}`, border: `${project.border}`, backgroundColor: `${project.backgroundColor}`, boxShadow: `${project.boxShadow}` }}></dir>
        ))}
      </div>
      <div className="text_select">
        <p>Select a project tube</p>
      </div>
    </div>
  );
};

export default ProjectPage;
