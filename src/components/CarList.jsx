import Car from "./Car";

const CarList = (props) => {
  return (
    <div>
      {props.cars.map((car) => (
        <Car brand={car.brand} model={car.model} color={car.color} />
      ))}
    </div>
  );
};

export default CarList;
