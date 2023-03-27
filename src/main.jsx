import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Modal from "react-modal";
import "regenerator-runtime/runtime";

Modal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
