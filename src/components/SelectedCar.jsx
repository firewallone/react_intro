import { useContext } from "react";
import { SelectedCarContext } from "../contexts/SelectedCarContext";

const SelectedCar = () => {
  const [selectedCar, setSelectedCar] = useContext(SelectedCarContext);

  if (!selectedCar) return null;

  return (
    <div className="mb-3 flex items-center justify-center space-x-4">
      <h2 className="text-xl">{`Your selection is a ${selectedCar.brand.name} - ${selectedCar.model.name} - ${selectedCar.year}`}</h2>
      <button
        className="btn"
        onClick={() => {
          setSelectedCar(null);
        }}
      >
        Clear
      </button>
    </div>
  );
};

export default SelectedCar;
