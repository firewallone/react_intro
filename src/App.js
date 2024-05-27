import React from "react";
import ReactDOM from "react-dom";

const contrainer = document.getElementById("root");

const Car = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.brand),
    React.createElement("h3", {}, props.model),
    React.createElement("h4", {}, props.year)
  ]);
};

const App = () =>
  React.createElement(
    "div",
    {},
    React.createElement(Car, {
      brand: "Ford",
      model: "Corolla",
      year: 2020,
    }),
  );

const root = ReactDOM.createRoot(contrainer);
root.render(React.createElement(App));
