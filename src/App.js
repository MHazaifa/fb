
import React from "react";
import Home from "./Home"
import About from "./About"
import Users from "./Users"
import Navigation from "./Navigation"

import'./App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    
      <div>
        <Router>
        <Navigation/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="users" element={<Users />} />
      </Routes>
        </Router>
      </div>
    
  );
}

export default App;
