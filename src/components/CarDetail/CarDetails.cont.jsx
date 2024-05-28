import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import CarDetailComponent from "./CarDetail.comp";
import fetchCar from "../../apis/fetchCar";

const CarDetails = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["car", id],
    queryFn: fetchCar,
  });

  return <CarDetailComponent car={data} isLoading={isLoading} />;
};
export default CarDetails;
