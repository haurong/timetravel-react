import React from 'react';
import { createContext, useState, useContext } from 'react';

const ItineraryContext = createContext(null);

export const ItineraryContextProvider = ({ children }) => {
  const [iData, setIData] = useState({});
  const [iTData, setITData] = useState({});

  return (
    <ItineraryContext.Provider value={{ iData, setIData, iTData, setITData }}>
      {children}
    </ItineraryContext.Provider>
  );
};

export const useItineraryContext = () => useContext(ItineraryContext);
