import React from 'react';
import '../TagSelect/TagSelectDays.scss';
function TagSelect() {
  return (
    <>
      <select
        className="homeTagStayDays"
        name="homeTagStayDays"
      >
        <option value="1">1天</option>
        <option value="2">2天</option>
        <option value="3">3天</option>
        <option value="4">4天</option>
        <option value="5">5天</option>
      </select>
    </>
  );
}

export default TagSelect;
