import React from 'react';

function TextInput({ text, placehoder, style }) {
  return (
    <div>
      <p>{text}</p>
      <input
        className="input"
        type={'text'}
        placeholder={placehoder}
        style={style}
      />
    </div>
  );
}

export default TextInput;
