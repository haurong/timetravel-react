import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

// 以下為各頁面元件
import Home from './pages/Home';
import ProductList from './pages/product/ProductList';
import Itinerary from './pages/product/itinerary/Itinerary';
import Food from './pages/product/food/Food';
import Stays from './pages/product/stays/Stays';
import Ticket from './pages/product/ticket/Ticket';
import LogIn from './pages/member/LogIn';
import SignIn from './pages/member/SignIn';
import Cart from './pages/cart/Cart';

function App() {
  return (
    <BrowserRouter>
      {/* 路由表 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="productList" element={<ProductList />} />
        <Route path="itinerary" element={<Itinerary />} />
        <Route path="food" element={<Food />} />
        <Route path="stays" element={<Stays />} />
        <Route path="ticket" element={<Ticket />} />
        <Route path="logIn" element={<LogIn />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
