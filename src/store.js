import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllPizzasReducer } from "./reducers/pizzaReducers";
import { cartReducer } from "./reducers/cartReducer";
import { registerUserReducer } from "./reducers/userReducer";
import { loginUserReducer } from "./reducers/userReducer";
const finalReducer = combineReducers({
  getAllPizzasReducer: getAllPizzasReducer,
  cartReducer : cartReducer, 
  registerUserReducer: registerUserReducer,
  loginUserReducer : loginUserReducer
});

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : [];
const initialState = {
   cartReducer : {
    cartItems : cartItems

   },
   loginUserReducer : {
     currentUser: currentUser, 
  
  }

};
const composeEnhancers = composeWithDevTools({});
const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;




// import { combineReducers,  applyMiddleware } from "redux";
// import { legacy_createStore as createStore } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { getAllPizzasReducer } from "./reducers/pizzaReducers";
// import { cartReducer } from "./reducers/cartReducer";
// import { registerUserReducer, loginUserReducer } from "./reducers/userReducer";

// const finalReducer = combineReducers({
//   getAllPizzasReducer: getAllPizzasReducer,
//   cartReducer: cartReducer,
//   registerUser: registerUserReducer, // Use a different key here
//   loginUser: loginUserReducer // Use a different key here
// });

// const cartItems = localStorage.getItem("cartItems")
//   ? JSON.parse(localStorage.getItem("cartItems"))
//   : [];
// const currentUser = localStorage.getItem("currentUser")
//   ? JSON.parse(localStorage.getItem("currentUser"))
//   : null;

// const initialState = {
//   cartReducer: {
//     cartItems: cartItems
//   },
//   loginUser: { // Use the correct key here
//     currentUser: currentUser
//   }
// };

// const composeEnhancers = composeWithDevTools({});
// const store = createStore(
//   finalReducer,
//   initialState,
//   composeEnhancers(applyMiddleware(thunk))
// );

// export default store;





