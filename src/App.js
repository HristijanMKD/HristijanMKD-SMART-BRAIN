import React from "react";

import HomePage from "./home-page";

import { Route, Switch } from "react-router-dom";

import Particles from "react-particles-js";

import SignIn from "./components/Signin/Signin";
import Register from "./components/Register/Register";

function App(props) {
  const particlesOptions = {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 200
        }
      }
    }
  };
  return (
    <div>
      <Particles className="particles" params={particlesOptions} />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

// return (
//   <Switch>
//     <Route exact path="/">
//       <HomePage />
//     </Route>
//     <Route path="/register">
//       <Register />
//     </Route>
//     <Route path="/signin">
//       <SignIn />
//     </Route>
//   </Switch>
// );
