import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cursor from "./components/cursor/Cursor";
import Loader from "./components/loader/Loader";
import Menu from "./components/menu/Menu";

const Home = React.lazy(() =>
  import("./mainComponents/homePageComponent/Home")
);
const Story = React.lazy(() =>
  import("./mainComponents/storyPageComponent/StoryPage")
);
const ProjectPage = React.lazy(() =>
  import("./mainComponents/projectsPageComponent/ProjectPage")
);

const ConnectPage = React.lazy(() =>
  import("./mainComponents/connectPageComponent/ConnectPage")
);

const App = () => {
  const [greyFilter, setGreyFilter] = useState("grayscale(0)");
  return (
    <BrowserRouter>
      <Menu setGreyFilter={setGreyFilter} />
      <Cursor />
      <React.Suspense fallback={<Loader />}>
        <section style={{ filter: `${greyFilter}` }}></section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/work" element={<ProjectPage />} />
          <Route path="/connect" element={<ConnectPage />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;
