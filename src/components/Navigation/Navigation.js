import React from "react";

import { Link } from "react-router-dom";

// import firebase from "../firebase/firebase";

const Navigation = ({ isSignedIn }) => {
  // const logout = firebase.logout();
  return (
    <div>
      {/* <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p onClick={logout} className="f3 link dim black underline pa3 pointer">
          Sign Out
        </p>
      </nav> */}

      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p className="f3 link dim black underline pa3 pointer">
          <Link style={{ color: "black" }} to="/signin">
            Sign In
          </Link>
        </p>
        <p className="f3 link dim black underline pa3 pointer">
          <Link style={{ color: "black" }} to="/register">
            Register
          </Link>
        </p>
      </nav>
    </div>
  );
};

export default Navigation;
