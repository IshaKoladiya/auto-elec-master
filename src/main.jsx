import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthContext from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<h1>Loading.....</h1>}>
      <AuthContext>
        <App />
      </AuthContext>
    </Suspense>
  </React.StrictMode>
);
