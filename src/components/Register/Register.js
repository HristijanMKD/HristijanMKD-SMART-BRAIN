import React, { useState } from "react";

import { Link, withRouter } from "react-router-dom";

import firebase from "../firebase/firebase";

const Register = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">
                Name
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="name"
                id="name"
                autoFocus
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                id="email"
                name="email"
                autoComplete="off"
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
                name="password"
                type="password"
                id="password"
                autoComplete="off"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
          </fieldset>
          <div className="">
            <input
              onClick={onRegister}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Register"
            />
          </div>
          <div className="">
            <Link to="/signin">
              <div className="lh-copy mt3">
                <p className="f6 link dim black db pointer">Sign In</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </article>
  );

  async function onRegister() {
    try {
      await firebase.register(name, email, password);
      return props.history.push("/");
    } catch (error) {
      alert(error.message);
    }
  }
};

export default withRouter(Register);
