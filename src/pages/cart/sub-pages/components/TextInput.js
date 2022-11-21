import React from 'react';

function TextInput({ text, placehoder }) {
  return (
    <div>
      <p>{text}</p>
      <input className="input" type={'text'} placeholder={placehoder} />
    </div>
  );
}

export default TextInput;
