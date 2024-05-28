import { FC, PropsWithChildren, createContext, useState } from "react";
import { CarDetailResponse } from "../types/APIResponseTypes";

export const SelectedCarContext = createContext<
  [CarDetailResponse | null, (car: CarDetailResponse | null) => void]
>([null, () => {}]);

const SelectedCarProvider: FC<PropsWithChildren> = ({ children }) => {
  const selectedCar = useState<CarDetailResponse | null>(null);

  return (
    <SelectedCarContext.Provider value={selectedCar}>
      {children}
    </SelectedCarContext.Provider>
  );
};

export default SelectedCarProvider;
