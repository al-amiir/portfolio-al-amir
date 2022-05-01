import React, { useState, useEffect } from "react";
import { createBrowserHistory } from "history";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import { TransitionGroup, CSSTransition } from "react-transition-group";

import Menu from "./components/Menu";
import ProjectPage from "./mainComponents/projectsPageComponent/ProjectPage";

const Home = React.lazy(() => import("./mainComponents/Home"));
const Story = React.lazy(() =>
  import("./mainComponents/storyPageComponent/StoryPage")
);
const ConnectPage = React.lazy(() =>
  import("./mainComponents/connectPageComponent/ConnectPage")
);

const App = () => {
  let history = createBrowserHistory();
  const [displayedLocation, setDisplayedLocation] = useState(history);

  return (
    <BrowserRouter>
      <React.Suspense fallback={<p>Loading ...</p>}>
        <Menu setDisplayedLocation={setDisplayedLocation} />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/story"
              element={<Story setDisplayedLocation={setDisplayedLocation} />}
            />
            <Route
              path="/work"
              element={
                <ProjectPage setDisplayedLocation={setDisplayedLocation} />
              }
            />
            <Route path="/connect" element={<ConnectPage />} />
          </Routes>
        </div>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;
