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
  const [commentData, setCommentData] = useState([]);
  //liketoggle
  const [like, setLike] = useState(false);
  //Food新增至我行程
  const [add, setAdd] = useState(false);
  //  評價排序
  const [commentSort, setCommentSort] = useState('time_ASC');
  //收藏陣列
  const [collect, setCollect] = useState([]);
  //  Food列表資料篩選條件
  const [foodSort, setFoodSort] = useState({
    cate: 'cate_All',
    like: 'likeAll',
    sortBy: '',
  });
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
        commentData,
        setCommentData,
        like,
        setLike,
        add,
        setAdd,
        commentSort,
        setCommentSort,
        foodSort,
        setFoodSort,
        collect,
        setCollect
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export const useFoodContext = () => useContext(FoodContext);
