import React from 'react';
import SearchIcon from '../../../icon/search.svg';
import { useAllContext } from '../../AllContext/AllContext';
import { NavLink, useNavigate } from 'react-router-dom';
function SearchBar() {
  const { searchWord, setSearchWord } = useAllContext();
  const navigate = useNavigate();
  return (
    <>
      <form
        className="d-flex"
        role="search"
        onSubmit={(e) => {
          e.preventDefault();

          navigate('/productList');
        }}
      >
        <div className="input-group">
          <span className="icon" id="basic-addon1">
            <img src={SearchIcon} alt="" />
          </span>
          <input
            className="form-control search-border me-4"
            type="text"
            placeholder="搜尋"
            aria-label="Search"
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
          />
        </div>
      </form>
    </>
  );
}

export default SearchBar;
