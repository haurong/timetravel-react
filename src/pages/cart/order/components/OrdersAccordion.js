import React, { useEffect, useState } from 'react';
import SortIcon from './../../../../icon/sort.svg';
import axios from 'axios';
import { ORDER_DETAILS_FOOD_API } from '../../../../config';
function OrdersAccordion({ createdTime, uuid, totalPrice }) {
  const [show, setShow] = useState(false);
  const [foodOrdersData, setFoodOrdersData] = useState([]);
  async function getFoodOrders() {
    const response = await axios.get(ORDER_DETAILS_FOOD_API(uuid));
    setFoodOrdersData(response.data);
  }
  useEffect(() => {
    getFoodOrders();
  }, [uuid]);
  // console.log(foodOrdersData);
  return (
    <div className="accordion">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
            onClick={() => {
              setShow(!show);
              // console.log(show);
            }}
          >
            <img alt="sort-img" className="sort-img" src={SortIcon} />
            <div className="w-100 m-0 ">
              <ul className="orders-accordion-ul p-0 m-0">
                <li className="col-lg-4 text-center">
                  <p>{createdTime}</p>
                </li>
                <li className="col-lg-4 text-center">
                  <p>{uuid}</p>
                </li>
                <li className="col-lg-4 text-center">
                  <p>{`TWD$${totalPrice}`}</p>
                </li>
              </ul>
            </div>
          </button>
        </h2>
        <div
          id="collapseOne"
          className={
            show
              ? 'accordion-collapse collapse show '
              : 'accordion-collapse collapse '
          }
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body px-0">
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
                <li className="col text-center">
                  <p>評價</p>
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
                      <li className="col text-center">
                        {v.committed === 1 ? (
                          <button type="button" className="btn btn-primary">
                            留下評價
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="btn btn-primary"
                            disabled
                          >
                            已經評價
                          </button>
                        )}
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrdersAccordion;
