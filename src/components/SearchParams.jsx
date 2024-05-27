import { useState } from "react";

const brands = ["Skoda", "Opel", "Volkswagen", "Toyota", "Fiat"];
const models = [];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  async function fetchCars() {
    const res = await fetch(
      `https://vse-react-basic.vercel.app/api/cars?location=${location}&brand=${brand}&model=${model}`,
    );
    const json = await res.json();
    setCars(json);
  }

  return (
    <div>
      <form className="flex flex-col rounded-md bg-gray-50 px-10 py-5 shadow-sm shadow-gray-400">
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
          onChange={(e) => setBrand(e.target.value)}
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
    </div>
  );
};

export default SearchParams;
