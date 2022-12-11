import React from 'react';
import CardTitle from './CardTitle';
import CardBodyTop from './CardBodyTop';
import CountButton from './CountButton';
import { useFoodCart } from '../../utils/useCart';

function FoodCard() {
  const { items, plusOne, minusOne, removeItem } = useFoodCart();
  return (
    <>
      {items.map((v, i) => {
        return (
          <div key={v.name} className="card-wrap pb-5">
            <div className="card-body">
              <CardTitle
                text={'美食購買資訊'}
                id={v.id}
                deleteFun={() => removeItem(v.id)}
              />
              <div className="d-flex justify-content-between">
                <CardBodyTop productName={v.name} img={v.img} rate={v.rate} />
                <CountButton
                  quantity={v.quantity}
                  id={v.id}
                  plusOne={() => {
                    plusOne(v.id);
                  }}
                  minusOne={() => {
                    minusOne(v.id);
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default FoodCard;
