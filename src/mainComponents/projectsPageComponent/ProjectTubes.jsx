import React, { useEffect } from "react";

const ProjectTubes = ({ projectStyle, setProjectStyle, setProjectIndex }) => {
  function resetArray(index) {
    setProjectStyle((prev) =>
      prev.map((p, i) => {
        if (i === index)
          return {
            ...p,
            height: "100px",
            border: "1px solid wheat",
            backgroundColor: "wheat",
            boxShadow: "black 1px -1px 18px",
          };
        // if (i === index - 1)
        //   return {
        //     ...p,
        //     height: "95px",
        //     border: "1px solid rgb(202 4 4)",
        //     backgroundColor: "rgb(202 4 4 )",
        //     boxShadow: "0 0 black",
        //   };
        // if (i === index + 1)
        //   return {
        //     ...p,
        //     height: "95px",
        //     border: "1px solid rgb(202 4 4)",
        //     backgroundColor: "rgb(202 4 4 )",
        //     boxShadow: "0 0 black",
        //   };
        // if (i === index - 2)
        //   return {
        //     ...p,
        //     height: "90px",
        //     border: "1px solid rgb(144 3 3 )",
        //     backgroundColor: "rgb(144 3 3)",
        //     boxShadow: "0 0 black",
        //   };
        // if (i === index + 2)
        //   return {
        //     ...p,
        //     height: "90px",
        //     border: "1px solid rgb(144 3 3 )",
        //     backgroundColor: "rgb(144 3 3)",
        //     boxShadow: "0 0 black",
        //   };
        // if (i === index - 3)
        //   return {
        //     ...p,
        //     height: "85px",
        //     backgroundColor: "transparent",
        //     boxShadow: "0 0 black",
        //   };
        // if (i === index + 3)
        //   return {
        //     ...p,
        //     height: "85px",
        //     backgroundColor: "transparent",
        //     boxShadow: "0 0 black",
        //   };
        else
          return {
            ...p,
            height: "80px",
            border: "1px solid wheat",
            backgroundColor: "transparent",
            boxShadow: "0 0 black",
          };
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
    <>
      <div className="project_cursors">
        {projectStyle.map((project, i) => (
          <dir
            key={i}
            data-index={i}
            className="project_container-singleProject"
            onMouseOver={handleHover}
            onClick={handleClick}
            style={{
              height: `${project?.height}`,
              width: `${project?.width}`,
              border: `${project.border}`,
              backgroundColor: `${project.backgroundColor}`,
              boxShadow: `${project.boxShadow}`,
            }}
          ></dir>
        ))}
      </div>
      <div className="text_select">
        <p>Click on project tube</p>
      </div>
    </>
  );
};

export default ProjectTubes;
