import { createContext, useState } from "react";

export const SelectedCarContext = createContext();

const SelectedCarProvider = ({ children }) => {
  const selectedCar = useState(null);

  return (
    <SelectedCarContext.Provider value={selectedCar}>
      {children}
    </SelectedCarContext.Provider>
  );
};

export default SelectedCarProvider;
