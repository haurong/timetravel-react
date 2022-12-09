import React, { useState } from 'react';

function DateInput({ text, date, id, updateDate, dateProps, min, max }) {
  const [newDate, setNewDate] = useState(date);
  return (
    <div className="me-3">
      <p>{text}</p>
      <input
        className="input form-control"
        min={min}
        max={max}
        type={'date'}
        value={newDate}
        onChange={(e) => {
          // console.log(e.target.value);

          const newDate = e.target.value;
          setNewDate(newDate);
          const item = { [dateProps]: newDate };
          // console.log(item);
          updateDate(id, item);
        }}
      ></input>
    </div>
  );
}

export default DateInput;
