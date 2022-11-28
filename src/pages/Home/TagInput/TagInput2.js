import React from 'react';
import './TagInput.scss';
function TagInput() {
  return (
    <>
      <input
        className="homeTagInput search-border  me-4"
        type="search"
        placeholder="請輸入關鍵字"
      ></input>
    </>
  );
}

export default TagInput;
