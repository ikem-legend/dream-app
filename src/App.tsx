import React from 'react';
import {Router} from '@reach/router';
import Home from './pages/Home';
import Details from './pages/Details';
import NotFound from './components/NotFound'

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Details path="/details" />
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
