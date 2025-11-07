import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  {id: "heading"},
  "Namaste React🚀"
);
// console.log(heading);
const root = ReactDOM.createRoot(document.getELementById("root"));
root.render(heading);