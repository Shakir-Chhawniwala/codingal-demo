import React from "react"
import NavBar from "./Home/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Post from "./Posts/Post";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact>
          <NavBar />
        </Route>
        <Route path="/posts" exact>
          <Post />
        </Route>
      </div>
    </Router>
  );
}

export default App;
