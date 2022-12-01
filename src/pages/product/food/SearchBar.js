import React from 'react';
import SearchIcon from '../../../icon/search.svg';
function SearchBar(props) {
  const { searchWord, setSearchWord } = props;
  return (
    <>

      <form className="d-flex" role="search">
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
