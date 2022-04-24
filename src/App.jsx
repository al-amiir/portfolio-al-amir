import React from "react";
import Menu from "./components/Menu";
import ProjectPage from "./mainComponents/projectsPageComponent/ProjectPage";

const Home = React.lazy(() => import("./mainComponents/Home"));
const Story = React.lazy(() => import("./mainComponents/storyPageComponent/StoryPage"));

const App = () => {
  return (
    <React.Suspense fallback={<p>Loading ...</p>}>
      <div>
        {/* <Home /> */}
        {/* <Story /> */}
        <ProjectPage />
        <Menu />
      </div>
    </React.Suspense>
  );
};

export default App;
