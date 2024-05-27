import React from "react";
import ReactDOM from "react-dom";

const contrainer = document.getElementById("root");

/* const Car = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.brand),
    React.createElement("h3", {}, props.model),
    React.createElement("h4", {}, props.year)
  ]);
}; */

const Car = (props) => {
  return (
    <div>
      <h2>{props.brand}</h2>
      <h3>{props.model}</h3>
      <h3>{props.price}</h3>
      <h3>{props.color}</h3>
    </div>
  )
}

export default Car


/* const App = () =>
  React.createElement(
    "div",
    {},
    React.createElement(Car, {
      brand: "Ford",
      model: "Corolla",
      year: 2020,
    }),
  );
 */

  const App = () => {
    return (
      <div>
        <h1>Velocity Vault</h1>
        <Car brand="Ford" model="Mustang" price="1000 EUR" color="Red" />
        <Car brand="Ford" model="Fiesta" price="3000 EUR" color="Blue" />
        <Car brand="Ford" model="Focus" price="2000 EUR" color="Black" />
      </div>
    )
  }
  
const root = ReactDOM.createRoot(contrainer);
root.render(React.createElement(App));
