import { useState, useEffect } from "react";
import Car from "./Car";
import useModelList from "../hooks/useModelList";

const brands = ["Skoda", "Opel", "Volkswagen", "Toyota", "Fiat"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [models] = useModelList(brand);

  const [cars, setCars] = useState([]);

  useEffect(() => {
    requestCars();
  }, []);

  async function requestCars() {
    const res = await fetch(
      `https://vse-react-basic.vercel.app/api/cars?location=${location}&brand=${brand}&model=${model}`,
    );
    const json = await res.json();
    setCars(json);
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestCars();
        }}
        className="flex flex-col rounded-md bg-lime-300 px-10 py-5 shadow-sm shadow-gray-400"
      >
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="form-field"
        />
        <label htmlFor="brand">Brand</label>
        <select
          className="form-field"
          id="brand"
          value={brand}
          onChange={(e) => {
            setBrand(e.target.value);
            setModel("");
          }}
        >
          <option value={""} />
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
        <label htmlFor="model">Model</label>
        <select
          className="form-field"
          id="model"
          disabled={!models.length}
          value={model}
          onChange={(e) => setModel(e.target.value)}
        >
          <option value={""} />
          {models.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
        <button className="btn mt-4">Search</button>
      </form>
      <div>
        {cars.map((car) => (
          <Car
            key={car.id}
            brand={car.brand}
            model={car.model}
            price={car.price}
            color={car.color}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchParams;
