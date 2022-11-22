import React, { useState } from 'react';
import './CitySelection.scss';
function CityChoose() {
  const City = ['基隆市', '台北市', '新北市'];
  const [cityChoose, setCityChoose] = useState(0);
  return (
    <div className="CityChoose">
      <h2>篩選目的地</h2>
      {City.map((v, i) => {
        return (
          <div
            className="City_button"
            key={i}
            onClick={() => {
              setCityChoose(i);
            }}
          >
            <button className={cityChoose === i ? 'cityChooseActive' : ''}>
              {v}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default CityChoose;
