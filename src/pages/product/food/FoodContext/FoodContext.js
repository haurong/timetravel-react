import React, { useState, useContext, createContext, useEffect } from 'react';
// import moment from 'moment/moment';

const FoodContext = createContext(null);

export const FoodContextProvider = ({ children }) => {
  //Food資料
  const [foodData, setFoodData] = useState({});
  //hashchange的滑動偵測
  const [slideOut, setSlideOut] = useState(false);
  //Food計數器
  const [count, setCount] = useState(1);
  //Food總價
  const [totalPrice, setTotalPrice] = useState(foodData.p_selling_price);
  //Food評論資料
  const [commitData, setCommitData] = useState([]);
  //liketoggle
  const [like, setLike] = useState(false);
  //Food新增至我行程
  const [add, setAdd] = useState(false);
  return (
    <FoodContext.Provider
      value={{
        slideOut,
        setSlideOut,
        foodData,
        setFoodData,
        count,
        setCount,
        totalPrice,
        setTotalPrice,
        commitData,
        setCommitData,
        like,
        setLike,
        add,
        setAdd
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export const useFoodContext = () => useContext(FoodContext);
