import { useState } from "react";
import Car from "./Car";
import useModelList from "../hooks/useModelList";
import useCarList from "../hooks/useCarList.jsx";

const brands = ["Skoda", "Opel", "Volkswagen", "Toyota", "Fiat"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [models] = useModelList(brand);

  const { cars, requestCars, isLoading } = useCarList({
    location,
    brand,
    model,
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestCars();
        }}
        className="flex flex-col rounded-md bg-blue-600 px-10 py-5 shadow-sm shadow-gray-400"
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
      <div className={isLoading ? "opacity-45" : ""}>
        {cars?.map((car) => (
          <Car
            key={car.id}
            brand={car.brand}
            model={car.model}
            price={car.price}
            color={car.color}
            image={car.image}
            location={car.location}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchParams;
