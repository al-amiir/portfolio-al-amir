import React from "react";
// import Home from "./pages/Home";
const Home = React.lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <React.Suspense fallback={<p>Loading ...</p>}>
      <div>
        <Home />
      </div>
    </React.Suspense>
  );
};

export default App;
