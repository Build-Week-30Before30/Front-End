import React from "react";
import { Link } from "react-router-dom"

const ListNav = () => {
    return (
      <nav className="login-nav">
        <h1>30before30</h1>
        <div className="button-contain-nav">
        <button>
            <Link className="nav-link" to="/home"> 
            {/* need to add logout functionality  */}
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
  
  export default ListNav;