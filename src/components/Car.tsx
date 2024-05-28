import { FC, Suspense } from "react";
import { Link } from "react-router-dom";
import SuspenseImage from "./SuspenseImage";
import { CarResponse } from "../types/APIResponseTypes";

interface Props {
  car: CarResponse;
}

const Car: FC<Props> = ({ car }) => {
  const { brand, model, location, id, image, price, color } = car;

  return (
    <Link to={`/details/${id}`}>
      <div className="flex w-full rounded-md border p-2 shadow-sm hover:bg-slate-100">
        <div>
          <Suspense
            fallback={
              <div className="size-12 flex-none animate-pulse rounded-full bg-gray-400" />
            }
          >
            <SuspenseImage
              src={image}
              alt={model}
              className="size-12 flex-none rounded-full bg-gray-50"
            />
          </Suspense>
        </div>
        <div className="pl-5 text-base">
          <h1 className="text-xl">
            {brand} {model}
          </h1>
          <h2>{`${color} - ${location} - ${price} CZK`}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Car;
