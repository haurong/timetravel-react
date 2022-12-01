// import { useRef, useState, forwardRef } from 'react';

// function InputIME(props, ref) {
//   const { onChange, value, ...otherProps } = props;

//   // log if on composition
//   const onComposition = useRef(false);
//   // temp input
//   const [inputValue, setInputValue] = useState('');

//   const _onChange = (event) => {
//     setInputValue(event.target.value);

//     // IME method start
//     if (event.type === 'compositionstart') {
//       onComposition.current = true;
//       return;
//     }

//     // IME method end
//     if (event.type === 'compositionend') {
//       onComposition.current = false;
//     }

//     // handle parent onChange
//     if (!onComposition.current) {
//       onChange(event);
//     }
//   };

//   return (
//     <input
//       {...otherProps}
//       ref={ref}
//       value={inputValue}
//       onChange={_onChange}
//       onCompositionEnd={_onChange}
//       onCompositionStart={_onChange}
//     />
//   );
// }

// export default forwardRef(InputIME);
import React from 'react'

function SearchBar(props) {
  const { searchWord, setSearchWord } = props
  return (
    <>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="以商品名稱搜尋"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
      </div>
    </>
  )
}

export default SearchBar
