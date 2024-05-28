import { useEffect, useState } from "react";

const useCarList = ({ location, brand, model }) => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    requestCars();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestCars() {
    setIsLoading(true);
    const res = await fetch(
      `https://vse-react-basic.vercel.app/api/cars?location=${location}&brand=${brand}&model=${model}`,
    );
    const cars = await res.json();
    setIsLoading(false);
    setCars(cars);
  }

  return { cars, requestCars, isLoading };
};

export default useCarList;
