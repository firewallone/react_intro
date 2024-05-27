import React from "react";
import ReactDOM from "react-dom";
import CarList from "./components/CarList";

const contrainer = document.getElementById("root");

const App = () => {
 return <CarList />
};

const root = ReactDOM.createRoot(contrainer);
root.render(React.createElement(App));
