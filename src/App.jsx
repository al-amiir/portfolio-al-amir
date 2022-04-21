import React from "react";
import Menu from "./components/Menu";

const Home = React.lazy(() => import("./pages/Home"));
const Story = React.lazy(() => import("./pages/Story"));

const App = () => {
  return (
    <React.Suspense fallback={<p>Loading ...</p>}>
      <div>
        {/* <Home /> */}
        <Story />
        <Menu />
      </div>
    </React.Suspense>
  );
};

export default App;
