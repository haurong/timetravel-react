import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MY_HOST, FOOD_IMG,FOOD_LIST } from '../../../config';
import axios from 'axios'
function FoodList() {
  const [img, setImg] =useState([])

  const location = useLocation()
  const usp = new URLSearchParams(location.search)

  async function getImg() {
    const response = await axios.get(FOOD_IMG + `?` + usp.toString())
    console.log(response)
    setImg(response.data)
  }
  //監聽location,資料更新會re-render
  useEffect(() => {
    getImg()
  }, [location])
  return (
    <>
    
  
    </>
  )
}
export default FoodList