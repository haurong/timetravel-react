import React, { useState, useContext, createContext, useEffect } from 'react';

const AllContext = createContext(null);

export const AllContextProvider = ({ children }) => {
  //搜尋關鍵字
  const [searchWord, setSearchWord] = useState('');
  const [pageSearchWord, setPageSearchWord] = useState('');
  const [collect, setCollect] = useState([]);
  return (
    <AllContext.Provider
      value={{
        searchWord,
        setSearchWord,
        collect,
        setCollect,
        pageSearchWord,
        setPageSearchWord
      }}
    >
      {children}
    </AllContext.Provider>
  );
};

export const useAllContext = () => useContext(AllContext);
