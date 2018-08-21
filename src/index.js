import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import registerServiceWorker from "./registerServiceWorker";

// Import store and Provider
// Wrap our App with the Provider
// Set a property of store with the invocation of our exported store
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store()}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
