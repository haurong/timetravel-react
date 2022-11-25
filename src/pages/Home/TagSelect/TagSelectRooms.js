import React from 'react';
import './TagSelectRooms.scss';
function TagSelect() {
  return (
    <>
      <select className="homeTagStaysRooms" name="homeTagStaysRooms">
        <option value="1">1間</option>
        <option value="2">2間</option>
        <option value="3">3間</option>
        <option value="4">4間</option>
        <option value="5">5間</option>
      </select>
    </>
  );
}

export default TagSelect;
