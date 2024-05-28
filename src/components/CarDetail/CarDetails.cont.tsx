import { useSuspenseQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import CarDetailComponent from "./CarDetail.comp";
import fetchCar from "../../apis/fetchCar";
import ErrorBoundary from "../ErrorBoundary";
import ErrorComponent from "../ErrorComponent";

const CarDetails = () => {
  const { id } = useParams();

  const { data } = useSuspenseQuery({
    queryKey: ["car", id as string],
    queryFn: fetchCar,
  });

  return <CarDetailComponent car={data} />;
};

function CarDetailsErrorBoundary() {
  return (
    <ErrorBoundary fallback={<ErrorComponent />}>
      <CarDetails />
    </ErrorBoundary>
  );
}

export default CarDetailsErrorBoundary;
