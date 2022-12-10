import React from 'react';
import { createContext, useState, useContext } from 'react';

const ItineraryContext = createContext(null);

export const ItineraryContextProvider = ({ children }) => {
  const [iData, setIData] = useState({});
  const [iTData, setITData] = useState({});
  const [name, setName] = useState('');
  const [day, setDay] = useState(1);
  const [date, setDate] = useState('');

  return (
    <ItineraryContext.Provider
      value={{
        iData,
        setIData,
        iTData,
        setITData,
        name,
        setName,
        day,
        setDay,
        date,
        setDate,
      }}
    >
      {children}
    </ItineraryContext.Provider>
  );
};

export const useItineraryContext = () => useContext(ItineraryContext);
