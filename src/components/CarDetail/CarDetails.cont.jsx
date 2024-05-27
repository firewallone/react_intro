import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchCar from "../../apis/fetchCar";
import CarDetailsComponent from "./CarDetails.comp";

const CarDetailsContainer = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["car", id],
    queryFn: fetchCar,
  });

  return <CarDetailsComponent car={data} isLoading={isLoading} />;
};
export default CarDetailsContainer;
