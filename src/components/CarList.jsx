import { keepPreviousData, useSuspenseQuery } from "@tanstack/react-query";
import fetchCarList from "../apis/fetchCarList";
import { classNames } from "../utils";
import Car from "./Car";

const CarList = ({ searchParams }) => {
  const { data: cars } = useSuspenseQuery({
    queryKey: ["cars", searchParams],
    queryFn: fetchCarList,
    placeholderData: keepPreviousData,
  });

  return (
    <div className={classNames("mt-2 grid gap-2")}>
      {!cars?.length ? (
        <h2>No Results</h2>
      ) : (
        cars?.map((car) => (
          <Car
            key={car.id}
            id={car.id}
            brand={car.brand}
            model={car.model}
            price={car.price}
            color={car.color}
            image={car.image}
            location={car.location}
          />
        ))
      )}
    </div>
  );
};

export default CarList;
