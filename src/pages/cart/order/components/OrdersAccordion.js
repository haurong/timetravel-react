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
            <div className="d-flex justify-content-between w-100">
              <span>2022/10/18</span>
              <span>12938909049</span>
              <span>TWD$9831</span>
            </div>
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show "
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <div className="d-flex justify-content-evenly">
              <div className="d-flex flex-column align-items-center">
                <span>商品名稱</span>
                <span>JR東日本大飯店</span>
                <span>JR東日本大飯店</span>
              </div>
              <div className="d-flex flex-column align-items-center">
                <span>商品單價</span>
                <span>TWD$599</span>
                <span>TWD$599</span>
              </div>
              <div className="d-flex flex-column align-items-center">
                <span>商品數量</span>
                <span>1</span>
                <span>1</span>
              </div>
              <div className="d-flex flex-column align-items-center">
                <span>小計</span>
                <span>TWD$599</span>
                <span>TWD$599</span>
              </div>
              <div className="d-flex flex-column align-items-center">
                <span>評價</span>
                <span>TWD$599</span>
                <span>TWD$599</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrdersAccordion;
