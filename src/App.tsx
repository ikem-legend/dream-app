import React, {useState} from "react";
import {Router} from "@reach/router";
import Home from "./pages/Home";
import Details from "./pages/Details";
import NotFound from "./components/NotFound"
import DreamContext, {Dream} from "./context/DreamContext";

function App() {
  const [dreamList, setDreamList] = useState<Dream[] | []>([])
  return (
    <div className="App container mx-auto p-10">
      <DreamContext.Provider value={[dreamList, setDreamList]}>
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
