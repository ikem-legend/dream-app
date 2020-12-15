import React from "react";
import {Router} from "@reach/router";
import Home from "./pages/Home";
import Details from "./pages/Details";
import NotFound from "./components/NotFound"
import useController, {DreamContext} from "./context/DreamContext";

function App() {
  const {state, dispatch} = useController();
  return (
    <div className="App container mx-auto p-10">
      <DreamContext.Provider value={{...state, dispatch}}>
        <Router>
          <Home path="/" />
          <Details path="/details/:id" />
          <NotFound default />
        </Router>
      </DreamContext.Provider>
    </div>
  );
}

export default App;
