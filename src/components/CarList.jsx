import { classNames } from "../utils";
import Car from "./Car";

const CarList = ({ cars, isLoading }) => {
  return (
    <div
      className={classNames(isLoading ? "opacity-45" : "", "mt-2 grid gap-2")}
    >
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
