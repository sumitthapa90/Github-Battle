import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <header className="header">
          <div className="container flex-sa">
            <nav>
              <ul className="flex">
                <NavLink
                  className="link"
                  to="/"
                  activeClassName="active-link"
                  exact
                >
                  <li>Popular</li>
                </NavLink>

                <NavLink
                  className="link"
                  to="/battle"
                  activeClassName="active-link"
                >
                  <li>Battle</li>
                </NavLink>
              </ul>
            </nav>

            <div className="lighting">
              <div>
                {1 ? (
                  <i className="fas fa-sun"></i>
                ) : (
                  <i className="fas fa-moon"></i>
                )}
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
