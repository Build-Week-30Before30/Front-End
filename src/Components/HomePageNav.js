import React from "react";
import { Link } from "react-router-dom";
import FormikAddBucketList from './AddBucketList';
import "./ComponentCSS/NavBar.css";

const HomePageNav = () => {
  return (
    <nav className="login-nav">
      <h1>30before30</h1>
      <div className="button-contain-nav">
        <FormikAddBucketList />
        <button>
          <Link to="/Home">
            Home
          </Link>
        </button>
        <button>
          <Link className="nav-link" to="/login"> 
          {/* need to add logout functionality  */}
            Logout
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default HomePageNav;
