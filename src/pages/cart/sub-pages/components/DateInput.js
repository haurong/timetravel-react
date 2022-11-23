import React from 'react';

function DateInput({ text, date }) {
  return (
    <div className="me-3">
      <p>{text}</p>
      <input className="input form-control" type={'date'} value={date}></input>
    </div>
  );
}

export default DateInput;
