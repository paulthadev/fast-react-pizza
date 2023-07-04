import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello React!</h1>;
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
<<<<<<< HEAD
//
=======

>>>>>>> ebdb30ea0f54979ffe1ed512962baea8aca09566
//  React Before 18
//  React.render(<Ap />, document.getElementById("root"));
