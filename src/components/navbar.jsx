import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class Navbar extends Component {
  state = {};

  handleClick = (e) => {
    const { linkDisabled } = this.state
    if(linkDisabled) e.preventDefault()
}

  render() {
    const { user } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-primary shadow-sm">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Business Cards App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                {user && (
                  <NavLink className="nav-link" to="/all-cards">
                    All Cards
                  </NavLink>
                )}
              </li>
              <li className="nav-item">
                {user && user.biz && (
                  <NavLink className="nav-link" to="/my-cards">
                    My Cards
                  </NavLink>
                )}
              </li>
              <li className="nav-item">
                {user && (
                  <NavLink className="nav-link" to="/favorites">
	                  My Favorites
	                </NavLink>
                )}
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              {!user && (
                <React.Fragment>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/signin">
                      Signin
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/signup">
                      Signup
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/biz-signup">
                      Business
                    </NavLink>
                  </li>
                </React.Fragment>
              )}
              {user && (
                <React.Fragment>
                  <li className="nav-item">
                    <NavLink onClick={this.handleClick} className="nav-link" to="">{user.name}'s Profile</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/logout">
                      Logout
                    </NavLink>
                  </li>
                </React.Fragment>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
