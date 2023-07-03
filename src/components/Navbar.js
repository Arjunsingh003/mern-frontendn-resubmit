import React from "react";
import { User, useAuth0 } from "@auth0/auth0-react";
import PersonIcon from "@mui/icons-material/Person";

import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const { loginWithRedirect, logout, isAuthenticated , user } = useAuth0();
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <a className="navbar-brand" href="/">
          OvenStory
        </a>
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
          <ul className="navbar-nav ">
            {isAuthenticated ? (
              <li>
                <button
                  className="btn"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </button>
              </li>
            ) : (
              <li>
                {" "}
                <button className="btn" onClick={() => loginWithRedirect()}>
                  Log In
                </button>
              </li>
            )}

            <li className="nav-item ">
              {
                isAuthenticated && 
                <a className="nav-link" href="/cart">
                Cart {cartstate.cartItems.length}
              </a>
              }
            </li>
          </ul>
        </div>
        <li style={{listStyle: 'none'}}>
          {isAuthenticated && 
            <p><PersonIcon />Welcome! {user.email}</p>}
        </li>
      </nav>
    
    </div>
  );
}





