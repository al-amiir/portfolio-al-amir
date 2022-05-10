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
      description: "This was my first portfolio I made in 2020.",
      links: {
        live: "https://al-amiir.github.io/",
        youtube:
          "https://www.youtube.com/watch?v=yHXzoj2mp-g&t=0s&ab_channel=AlAmir",
        code: "https://github.com/al-amiir/al-amiir.github.io",
      },
      image: portfolioImage,
    },
    {
      number: "01",
      name: "Duchess",
      description: "a Landing Page for a Brand New Jewellery Store.",
      links: {
        live: "https://al-amiir.github.io/Jewellery__Store/",
        youtube: "https://youtu.be/B3A8s_wwvt8",
        code: "https://github.com/al-amiir/Jewellery__Store/blob/main/README.md",
      },
      image: duchessImage,
    },
    {
      number: "02",
      name: "furniture",
      description:
        "an E-commerce web app that uses 3D in intro & Commerce.js to fetch data from.",
      links: {
        live: "",
        youtube: "https://youtu.be/4EFq7s8OoWc",
        code: "https://github.com/al-amiir/furniture",
      },
      image: furnitureImage,
    },
    {
      number: "03",
      name: "Boutique",
      description:
        "an E-commerce app, Focuses mainly on Fetching Products from commerce.js.",
      links: {
        live: "https://al-amiir.github.io/Boutique/",
        youtube: "https://youtu.be/zKDwLI7SGHI",
        code: "https://github.com/al-amiir/Boutique",
      },
      image: boutiqueImage,
    },
    {
      number: "04",
      name: "Hyakah",
      description:
        "an ANGULAR web app that consist of Define New Produc Products List view Add Quantity Product Evaluation",
      links: {
        live: "",
        youtube: "https://www.youtube.com/watch?v=ltvwlV0dq6c",
        code: "https://github.com/al-amiir/hyakah-web-app",
      },
      image: hyakahImage,
    },
    {
      number: "05",
      name: "SwiftX Shop",
      description:
        "an E-commerce web app that fetches data from the GraphQL endpoint.",
      links: {
        live: "",
        youtube: "https://www.youtube.com/watch?v=2NCkstSViic",
        code: "https://github.com/al-amiir/swiftx-shop",
      },
      image: xshopImage,
    },
    {
      number: "06",
      name: "X Studios",
      description: "Xstudios Agency's Website.",
      links: {
        live: "",
        youtube: "https://www.youtube.com/watch?v=U9wmJrfkIOo",
        code: "https://github.com/al-amiir/Xstudios",
      },
      image: xstudiosImage,
    },
    {
      number: "07",
      name: "Authentication",
      description: `a simple web app about user authentication, authorization.`,
      links: {
        live: "",
        youtube: "https://www.youtube.com/watch?v=WrJEdH7nghY",
        code: "https://github.com/al-amiir/mern-authntication-system",
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
