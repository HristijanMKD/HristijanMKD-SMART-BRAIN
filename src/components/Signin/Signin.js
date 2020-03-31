import React, { useState } from "react";

import { Link, withRouter } from "react-router-dom";

import firebase from "../firebase/firebase";

function Signin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
                autoFocus
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
          </fieldset>
          <div className="">
            <input
              onClick={login}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
            />
          </div>
          <Link to="/register">
            <div className="lh-copy mt3">
              <p className="f6 link dim black db pointer">Register</p>
            </div>
          </Link>
        </div>
      </main>
    </article>
  );

  async function login() {
    try {
      await firebase.login(email, password);
      props.history.replace("/");
    } catch (error) {
      alert(error.message);
    }
  }
}

export default withRouter(Signin);
