import { useState } from "react";
import CarList from "./CarList";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import fetchModelList from "../apis/fetchModelList";
import fetchCarList from "../apis/fetchCarList";

const brands = ["Skoda", "Opel", "Volkswagen", "Toyota", "Fiat"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

  const models = useQuery({
    queryKey: ["models", brand],
    queryFn: fetchModelList,
    enabled: !!brand,
  });

  const cars = useQuery({
    queryKey: ["cars", { location, model, brand }],
    queryFn: fetchCarList,
    placeholderData: keepPreviousData,
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
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
          disabled={false}
          value={model}
          onChange={(e) => setModel(e.target.value)}
        >
          <option value={""} />
          {models.data?.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
        <button className="btn mt-4">Search</button>
      </form>
      <CarList cars={cars.data} isLoading={cars.isFetching} />
    </div>
  );
};

export default SearchParams;
