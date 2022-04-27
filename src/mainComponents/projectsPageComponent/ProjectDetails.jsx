import React from "react";

const ProjectDetails = ({ projectInfo }) => {
  return (
    <div className="project_details">
      <div className="project_details-left">
        <div className="project_details-text">
          <h1>
            {`-${projectInfo.number}`}
            &nbsp;
            {projectInfo.name}
          </h1>
          <p>{projectInfo.description}</p>
        </div>
        <div className="project_details-buttons">
          <a href={projectInfo.links.live} target="_blanck">
            <img src="https://img.icons8.com/color/40/000000/link--v1.png" />
          </a>
          <a href={projectInfo.links.code} target="_blanck">
            <img src="https://img.icons8.com/color/40/000000/github--v1.png" />
          </a>
          <a href={projectInfo.links.youtube} target="_blanck">
            <img src="https://img.icons8.com/color/40/000000/youtube-play.png" />
          </a>
        </div>
      </div>
      <div className="project_details-right">
        <img className="" src={projectInfo.image} alt="project image" />
      </div>
    </div>
  );
};

export default ProjectDetails;
