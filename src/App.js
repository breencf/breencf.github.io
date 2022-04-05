import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Resume } from "./Components/Resume";
import { ProjectList } from "./Components/ProjectList";
import { ContactForm } from "./Components/ContactForm";
import { Homepage } from "./Components/Homepage";
import { Link, NavLink, Route, Switch } from "react-router-dom";
import { BsLinkedin, BsGithub, BsSpotify, BsInstagram } from "react-icons/bs";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  return (
    <div className="App">
      <h1 onClick={() => history.push("/")}>christopher breen</h1>
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

      <h2>
        <a target="_blank" href="https://linkedin.com/in/breencf">
          <BsLinkedin />
        </a>{" "}
        <a target="_blank" href="https://github.com/breencf">
          <BsGithub />
        </a>{" "}
        <a target="_blank" href="https://open.spotify.com/user/cfc4">
          <BsSpotify />
        </a>{" "}
        <a target="_blank" href="https://instagram.com/grindrveltliner">
          <BsInstagram />
        </a>
      </h2>
      <div className="stack">
        JavaScript, React, Redux, React-Hooks, Google Maps API, Express, Python,
        Flask, SQL, postgresql, Node, git{" "}
      </div>
    </div>
  );
}

export default App;
