import React from 'react';
import SortIcon from './../../../../icon/sort.svg';
function OrdersAccordion() {
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
          >
            <img alt="sort-img" className="sort-img" src={SortIcon} />
            <div className="w-100 m-0 ">
              <ul className="orders-accordion-ul p-0 m-0">
                <li className="col-lg-4 text-center">
                  <p>2022/10/18</p>
                </li>
                <li className="col-lg-4 text-center">
                  <p>12938909049</p>
                </li>
                <li className="col-lg-4 text-center">
                  <p>TWD$9831</p>
                </li>
              </ul>
            </div>
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show "
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
                <li className="col text-center">
                  <button type="button" class="btn btn-primary">
                    留下評價
                  </button>
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
                <li className="col text-center">
                  <button type="button" class="btn btn-disabled" disabled>
                    已經評價
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrdersAccordion;
