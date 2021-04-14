import ReactDOM from "react-dom";

import App from "./App";
import AppClass from "./AppClass";
import { ToastProvider } from "./context/ToastContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ToastProvider>
    <App />
    <AppClass />
  </ToastProvider>,
  rootElement
);
