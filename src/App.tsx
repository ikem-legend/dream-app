import React from "react";
import {Router} from "@reach/router";
import Home from "./pages/Home";
import Details from "./pages/Details";
import NotFound from "./components/NotFound"
import DreamContext from "./context/DreamContext";

function App() {
  return (
    <div className="App container mx-auto p-10">
      <DreamContext.Provider value={[[], () => {}]}>
        <Router>
          <Home path="/" />
          <Details path="/details" />
          <NotFound default />
        </Router>
      </DreamContext.Provider>
    </div>
  );
}

export default App;
