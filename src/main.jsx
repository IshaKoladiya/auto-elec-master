import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthContext from "./context/AuthContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<h1>Loading.....</h1>}>
      <AuthContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthContext>
    </Suspense>
  </React.StrictMode>
);
