import { useState } from "react";
import CarList from "./CarList";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import fetchModelList from "../apis/fetchModelList";
import fetchCarList from "../apis/fetchCarList";
import SelectedCar from "./SelectedCar";

const brands = ["Skoda", "Opel", "Volkswagen", "Toyota", "Fiat"];

const SearchParams = () => {
  const [brand, setBrand] = useState("");
  const [searchParams, setSearchParams] = useState({
    location: "",
    model: "",
    brand: "",
  });

  const models = useQuery({
    queryKey: ["models", brand],
    queryFn: fetchModelList,
    enabled: !!brand,
  });

  const cars = useQuery({
    queryKey: ["cars", searchParams],
    queryFn: fetchCarList,
    placeholderData: keepPreviousData,
  });

  return (
    <div>
      <SelectedCar />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            location: formData.get("location") ?? "",
            brand: formData.get("brand") ?? "",
            model: formData.get("model") ?? "",
          };
          setSearchParams(obj);
        }}
        className="flex flex-col rounded-md bg-lime-300 px-10 py-5 shadow-sm shadow-gray-400"
      >
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          className="form-field"
        />
        <label htmlFor="brand">Brand</label>
        <select
          className="form-field"
          name="brand"
          id="brand"
          value={brand}
          onChange={(e) => {
            setBrand(e.target.value);
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
          name="model"
          id="model"
          disabled={!models?.data?.length}
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
