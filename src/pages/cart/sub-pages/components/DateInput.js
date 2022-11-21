import React from 'react';

function DateInput({ text, date }) {
  return (
    <div>
      <p>{text}</p>
      <input className="input" type={'date'} value={date}></input>
    </div>
  );
}

export default DateInput;
