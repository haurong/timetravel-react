import React, { useState, useContext, createContext } from 'react';

const SlideOutContext = createContext(null);

export const SlideOutProvider = ({ children }) => {
  const [slideOut, setSlideOut] = useState(false);

  return (
    <SlideOutContext.Provider
      value={{
        slideOut,
        setSlideOut,
      }}
    >
      {children}
    </SlideOutContext.Provider>
  );
};

export const useSlideOut = () => useContext(SlideOutContext);
