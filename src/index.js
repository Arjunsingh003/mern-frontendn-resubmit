// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { Provider } from "react-redux";

// import store from "./store";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
  
  
//     <Provider store={store}>
//       <App />
//     </Provider>
 
// );


// reportWebVitals();







import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import store from "./store";


const auth0Config = {
  domain: "yoursincerely.us.auth0.com",
  clientId: "lbYRFXSYcxPyUGzTzWOjcij3cnXSy9yg",
  redirectUri: window.location.origin,
};


ReactDOM.render(
  <Auth0Provider {...auth0Config}>
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
