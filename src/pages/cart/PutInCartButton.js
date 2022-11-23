import { Button } from 'antd';
import React, { useState } from 'react';

function PutInCartButton() {
  //TODO:設置購物車狀態
  const [cart, setCart] = useState([]);
  //TODO:傳入商品的狀態
  // Hotel: id 商品名(name) 圖片(img) 評價(rate) 類型(type) 數量(amount) 單價(price) 入住時間(checkIn) 退房時間(checkOut)
  // Food: id 商品名(name) 圖片(img) 評價(rate) 數量(amount) 單價(price)
  //Ticket: id 商品名(name) 圖片(img) 評價(rate) 類型(type) 數量(amount) 單價(price) 使用時間(checkIn)
  return (
    <div>
      <button type="button" class="btn btn-secondary">
        加入購物車
      </button>
    </div>
  );
}

export default PutInCartButton;
