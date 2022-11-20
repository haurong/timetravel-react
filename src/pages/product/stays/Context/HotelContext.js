import React, { useState, useContext, createContext } from 'react';

const HotelContext = createContext(null);

export const HotelContextProvider = ({ children }) => {
  const [slideOut, setSlideOut] = useState(false);
  const [bookingBarOpen, setBookingBarOpen] = useState(false);

  return (
    <HotelContext.Provider
      value={{
        slideOut,
        setSlideOut,
        bookingBarOpen,
        setBookingBarOpen,
      }}
    >
      {children}
    </HotelContext.Provider>
  );
};

export const useHotelContext = () => useContext(HotelContext);
