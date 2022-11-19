import React, { useState, useContext, createContext } from 'react';

const SlideOutContext = createContext(null);

export const SlideOutProvider = ({ children }) => {
  const [slideOut, setSlideOut] = useState(false);
  const [bookingBarOpen, setBookingBarOpen] = useState(false);

  return (
    <SlideOutContext.Provider
      value={{
        slideOut,
        setSlideOut,
        bookingBarOpen,
        setBookingBarOpen,
      }}
    >
      {children}
    </SlideOutContext.Provider>
  );
};

export const useSlideOut = () => useContext(SlideOutContext);
