import React from "react";
import { Link } from "react-router-dom";
import FormikAddBucketList from './AddBucketList';
import "./ComponentCSS/NavBar.css";

//NavBar built for after users log in
const HomePageNav = () => {
  return (
    <nav className="login-nav">
      <h1>30before30</h1>
      <div className="button-contain-nav">
        <button>
        <FormikAddBucketList />
        </button>
        <button>
          <Link className="nav-link" to="/"> 
          {/* need to add logout functionality  */}
            Logout
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default HomePageNav;
