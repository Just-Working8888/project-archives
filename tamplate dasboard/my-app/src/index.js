import React from "react";
import ReactDOM, { createRoot } from "react-dom";

import App from "./App";
import "./index.css";

const root = document.getElementById("root");
const rootElement = <App />;

// Create a root and render the app inside it
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(rootElement);
