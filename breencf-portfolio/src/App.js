import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Resume } from "./Components/Resume";
import { ProjectList } from "./Components/ProjectList";
import { ContactForm } from "./Components/ContactForm";
import { Homepage } from "./Components/Homepage";
import { Link, NavLink, Route, Switch } from "react-router-dom";
import { BsLinkedin, BsGithub, BsSpotify, BsInstagram } from "react-icons/bs";

function App() {
  return (
    <div className="App">
      <h1>christopher breen</h1>
      <img
        className="background-cabbage"
        src="https://res.cloudinary.com/jadecabbage/image/upload/v1648847126/cabbage-green-no-bg_ddhgs7.png"
      />
      <Navbar />
      <div className="main">
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
          <Route exact path="/projects">
            <ProjectList />
          </Route>
          <Route exact path="/contact">
            <ContactForm />
          </Route>
          <Route>
            <Homepage />
          </Route>
        </Switch>
      </div>
      <div>
        JavaScript, React, Redux, React-Hooks, Google Maps API, Express, Python,
        Flask, SQL, postgresql, Node, git{" "}
      </div>
      <h3>
        <a href="https://linkedin.com/in/breencf">
          <BsLinkedin />
        </a>{" "}
        <a href="https://github.com/breencf">
          <BsGithub />
        </a>{" "}
        <a href="https://open.spotify.com/user/cfc4">
          <BsSpotify />
        </a>{" "}
        <a href="https://instagram.com/breencf">
          <BsInstagram />
        </a>
      </h3>
    </div>
  );
}

export default App;
