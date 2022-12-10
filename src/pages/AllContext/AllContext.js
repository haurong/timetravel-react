import React, { useState, useContext, createContext, useEffect } from 'react';

const AllContext = createContext(null);

export const AllContextProvider = ({ children }) => {
  //搜尋關鍵字
  const [searchWord, setSearchWord] = useState('');
  const [pageSearchWord, setPageSearchWord] = useState('');
  const [collect, setCollect] = useState([]);
  //商品列表頁顯示資料
  const [productData, setProductData] = useState([]);
  return (
    <AllContext.Provider
      value={{
        searchWord,
        setSearchWord,
        collect,
        setCollect,
        pageSearchWord,
        setPageSearchWord,
        productData,
        setProductData,
      }}
    >
      {children}
    </AllContext.Provider>
  );
};

export const useAllContext = () => useContext(AllContext);
