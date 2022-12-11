import React, { useEffect, useState } from 'react';
import SortIcon from './../../../../icon/sort.svg';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';
import RePay from './RePay';
import {
  ORDER_DETAILS_FOOD_API,
  ORDER_DETAILS_HOTEL_API,
  ORDER_DETAILS_TICKET_API,
} from '../../../../config';
function OrdersAccordionUndone({ createdTime, uuid, totalPrice }) {
  const [foodOrdersData, setFoodOrdersData] = useState([]);
  const [hotelOrdersData, setHotelOrdersData] = useState([]);
  const [ticketOrdersData, setTicketOrdersData] = useState([]);
  async function getFoodOrders() {
    const response = await axios.get(ORDER_DETAILS_FOOD_API(uuid));
    setFoodOrdersData(response.data);
  }
  async function getHotelOrders() {
    const response = await axios.get(ORDER_DETAILS_HOTEL_API(uuid));
    setHotelOrdersData(response.data);
  }
  async function getTicketOrders() {
    const response = await axios.get(ORDER_DETAILS_TICKET_API(uuid));
    setTicketOrdersData(response.data);
  }
  const [rePayShow, setRePayShow] = useState(false);

  // console.log(hotelOrdersData);
  useEffect(() => {
    getFoodOrders();
    getHotelOrders();
    getTicketOrders();
  }, [uuid]);
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <img alt="sort-img" className="sort-img" src={SortIcon} />
          <div className="w-100 m-0 ">
            <ul className="orders-accordion-ul p-0 m-0">
              <li className="col-lg-3 text-center">
                <p>{createdTime}</p>
              </li>
              <li className="col-lg-3 text-center">
                <p>{uuid}</p>
              </li>
              <li className="col-lg-3 text-center">
                <p>{`TWD$${totalPrice}`}</p>
              </li>
              <li className="col-lg-3 text-center">
                <div
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    setRePayShow(true);
                    // myLinePay();
                  }}
                >
                  尚未付款
                </div>
              </li>
            </ul>
          </div>
          <RePay
            show={rePayShow}
            onHide={() => setRePayShow(false)}
            state="editing"
            uuid={uuid}
          />
        </Accordion.Header>
        <Accordion.Body>
          <div className="w-100 m-0 ">
            <ul className="orders-accordion-ul p-0 m-0 pb-2">
              <li className="col text-center">
                <p>商品名稱</p>
              </li>
              <li className="col text-center">
                <p>商品單價</p>
              </li>
              <li className="col text-center">
                <p>商品數量</p>
              </li>
              <li className="col text-center">
                <p>小計</p>
              </li>
            </ul>
            {foodOrdersData.map((v, i) => {
              return (
                <div key={i}>
                  <ul className="orders-accordion-ul p-0 m-0 pb-2 d-flex align-items-center">
                    <li className="col text-center">
                      <p>{v.product_name}</p>
                    </li>
                    <li className="col text-center">
                      <p>{v.p_selling_price}</p>
                    </li>
                    <li className="col text-center">
                      <p>{v.quantity}</p>
                    </li>
                    <li className="col text-center">
                      <p>{`TWD$${v.total_price}`}</p>
                    </li>
                  </ul>
                </div>
              );
            })}
            {hotelOrdersData.map((v, i) => {
              return (
                <div key={i}>
                  <ul className="orders-accordion-ul p-0 m-0 pb-2 d-flex align-items-center">
                    <li className="col text-center">
                      <p>{v.product_name}</p>
                    </li>
                    <li className="col text-center">
                      <p>{v.room_price}</p>
                    </li>
                    <li className="col text-center">
                      <p>{v.quantity}</p>
                    </li>
                    <li className="col text-center">
                      <p>{`TWD$${v.total_price}`}</p>
                    </li>
                  </ul>
                </div>
              );
            })}
            {ticketOrdersData.map((v, i) => {
              return (
                <div key={i}>
                  <ul className="orders-accordion-ul p-0 m-0 pb-2 d-flex align-items-center">
                    <li className="col text-center">
                      <p>{v.product_name}</p>
                    </li>
                    <li className="col text-center">
                      <p>{v.product_price}</p>
                    </li>
                    <li className="col text-center">
                      <p>{v.quantity}</p>
                    </li>
                    <li className="col text-center">
                      <p>{`TWD$${v.total_price}`}</p>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default OrdersAccordionUndone;
