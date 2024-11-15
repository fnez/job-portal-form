import React, { createContext, useState, ReactNode } from "react";
import { INITIAL_DATA } from "../data/initialFormData.ts";
import { FormData } from "../types/Types.ts";

type DataContextType = {
  data: FormData;
  setData: React.Dispatch<React.SetStateAction<FormData>>;
};

const DataContext = createContext<DataContextType>({
  data: INITIAL_DATA,
  setData: () => {},
});

interface DataProviderProps {
  children: ReactNode;
}

//Using the context API to manage data access across components
//This prevents prop-drilling for passing the data
export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<FormData>(INITIAL_DATA);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
