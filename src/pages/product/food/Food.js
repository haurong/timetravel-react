import React from 'react';
import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
import FoodList from './FoodList'
import { MY_HOST, FOOD_IMG } from '../../../config';
function Food() {
  return (
    <>
      <NavBar />
      <FoodList />
      <Footer />
    </>
  );
}

export default Food;
