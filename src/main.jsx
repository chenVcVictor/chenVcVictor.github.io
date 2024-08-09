import React from "react";
import ReactDOM from "react-dom/client";
import ReactGA from "react-ga";
import App from "./App.jsx";

ReactGA.initialize("G-505M6Y73CE");
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
