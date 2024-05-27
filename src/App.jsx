import React from "react";
import ReactDOM from "react-dom/client";
import CarList from "./components/CarList";
import SearchParams from "./components/SearchParams";
import "./index.css";

const contrainer = document.getElementById("root");

const App = () => {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="mx-auto max-w-3xl">
        <h2 className="py-5 text-3xl font-bold tracking-tight text-gray-900">
          First React Car App
        </h2>
        <SearchParams />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(contrainer);
root.render(React.createElement(App));
