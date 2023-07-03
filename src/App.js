import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Introscreen from "./screens/Introscreen";
import Cartscreen from "./screens/Cartscreen";
import Homescreen from "./screens/Homescreen";

import { useAuth0 } from "@auth0/auth0-react";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const userstate = useSelector((state) => state.loginUserReducer);
  const cartstate = useSelector((state) => state.cartReducer);

  return (
    <div className="App">
      <Router>
        <div className="App">
          <div className="heading-div">
            <div className="main-div-2">
              {isAuthenticated && (
                <p style={{ textAlign: "start", color: "black" }}>
                  <PersonIcon /> {user.email}
                </p>
              )}
            </div>
            <div className="main-div-1" style={{ marginRight: "10px" }}>
              <ul style={{ listStyle: "none" }}>
                {!isAuthenticated && (
                  <li>
                    <button className="btn" onClick={loginWithRedirect}>
                      Login
                    </button>
                  </li>
                )}
                {isAuthenticated && (
                  <li>
                    <button className="button-3" onClick={logout}>
                      Logout
                    </button>
                  </li>
                )}
              </ul>
            </div>
            <div>
              <li
                className="nav-item "
                style={{ listStyle: "none", marginRight: "10px" }}
              >
                {isAuthenticated && (
                  <a className="nav-link" href="/cart">
                    <button className="button-3">
                      Cart {cartstate.cartItems.length}
                    </button>
                  </a>
                )}
              </li>
            </div>
            <div>
              {isAuthenticated && (
                <a href="/homepage">
                  <button className="button-3">Homepage</button>
                </a>
              )}
            </div>
          </div>
          <Routes>
            <Route
              path="/"
              element={
                isAuthenticated ? <Navigate to="/homepage" /> : <Introscreen />
              }
            />
            <Route path="/intro" element={<Introscreen />} />
            <Route path="/homepage" element={<Homescreen />} />
            <Route path="/cart" element={<Cartscreen />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
