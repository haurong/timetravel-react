import React from 'react';
import SortIcon from './../../../../icon/sort.svg';
import Accordion from 'react-bootstrap/Accordion';
function OrdersAccordionUndone() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <img alt="sort-img" className="sort-img" src={SortIcon} />
          <div className="w-100 m-0 ">
            <ul className="orders-accordion-ul p-0 m-0">
              <li className="col-lg-3 text-center">
                <p>2022/10/18</p>
              </li>
              <li className="col-lg-3 text-center">
                <p>12938909049</p>
              </li>
              <li className="col-lg-3 text-center">
                <p>TWD$9831</p>
              </li>
              <li className="col-lg-3 text-center">
                <button type="button" className="btn btn-danger">
                  尚未付款
                </button>
              </li>
            </ul>
          </div>
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
            <ul className="orders-accordion-ul p-0 m-0 pb-2 d-flex align-items-center">
              <li className="col text-center">
                <p>JR東日本大飯店</p>
              </li>
              <li className="col text-center">
                <p>TWD$599</p>
              </li>
              <li className="col text-center">
                <p>1</p>
              </li>
              <li className="col text-center">
                <p>TWD$599</p>
              </li>
            </ul>
            <ul className="orders-accordion-ul p-0 m-0 pb-2 d-flex align-items-center">
              <li className="col text-center">
                <p>JR東日本大飯店</p>
              </li>
              <li className="col text-center">
                <p>TWD$599</p>
              </li>
              <li className="col text-center">
                <p>1</p>
              </li>
              <li className="col text-center">
                <p>TWD$599</p>
              </li>
            </ul>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default OrdersAccordionUndone;
