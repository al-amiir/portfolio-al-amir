import React, { useState } from "react";

const ConnectLinks = () => {
  const [connectionArray, setConnectionArray] = useState([
    {
      link: "https://docs.google.com/document/d/1Ib8fcVEwBZkPbYGxaiinklCVOFpSoUs7RKY_7aIa1Ic/edit",
      name: "CV",
    },
    {
      link: "https://accounts.google.com/b/0/AddMailService",
      name: "GMAIL",
    },
    {
      link: "https://github.com/al-amiir",
      name: "Github",
    },
    {
      link: "https://www.linkedin.com/in/al-amiir/",
      name: "LinkedIn",
    },
    {
      link: "https://www.youtube.com/channel/UCVQzuaxXlqa8xgwA5xAQY4Q",
      name: "Youtube",
    },
  ]);
  return (
    <ul className="connect_links">
      {connectionArray.map((li, i) => (
        <li key={i}>
          <a href={li.link} target="_blank">
            {li.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ConnectLinks;
