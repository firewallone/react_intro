import { useSuspenseQuery } from "@tanstack/react-query";
import fetchCarList from "../apis/fetchCarList";
import { classNames } from "../utils";
import Car from "./Car";
import { FC } from "react";

interface Props {
  searchParams: {
    model: string;
    brand: string;
    location: string;
  };
}

const CarList: FC<Props> = ({ searchParams }) => {
  const { data: cars } = useSuspenseQuery({
    queryKey: ["cars", searchParams],
    queryFn: fetchCarList,
  });

  return (
    <div className={classNames("mt-2 grid gap-2")}>
      {!cars?.length ? (
        <h2>No Results</h2>
      ) : (
        cars?.map((car) => <Car key={car.id} car={car} />)
      )}
    </div>
  );
};

export default CarList;
