import React from 'react';
import SearchIcon from '../../icon/search.svg';
import {useAllContext}from '../AllContext/AllContext'
function PageSearchBar() {
  const { pageSearchWord, setPageSearchWord } = useAllContext();
  return (
    <>
      <form
        className="d-flex"
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="input-group">
          {/* <span className="icon" id="basic-addon1">
            <img src={SearchIcon} alt="" />
          </span> */}
          <input
            className="form-control"
            type="text"
            placeholder="搜尋"
            aria-label="Search"
            value={pageSearchWord}
            onChange={(e) => setPageSearchWord(e.target.value)}
          />
        </div>
      </form>
    </>
  );
}

export default PageSearchBar;
