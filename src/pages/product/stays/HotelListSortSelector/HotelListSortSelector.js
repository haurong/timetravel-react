import { React, useRef, useState } from 'react';
import { Select } from 'antd';
import '../Comment/Comment.scss';
import { ReactComponent as Sort } from '../../../../icon/sort.svg';
import { useHotelContext } from '../Context/HotelContext';

function CommentSelector() {
  const [openSelector, setOpenSelector] = useState(false);
  const { hotelSort, setHotelSort } = useHotelContext();
  const handleChange = (e) => {
    // console.log(`selected ${e}`);
    setHotelSort({
      area: hotelSort.area,
      cate: hotelSort.cate,
      like: hotelSort.like,
      sortBy: e,
    });
  };
  return (
    <div className="CommentSelector">
      <Select
        onChange={handleChange}
        className="CommentSelector_Select"
        popupClassName="CommentSelector_Select"
        options={[
          {
            value: 'sortByPriceASC',
            label: '價格：低到高',
          },
          {
            value: 'sortByPriceDESC',
            label: '價格：高到低',
          },
          {
            value: 'sortByCollectASC',
            label: '收藏數：低到高',
          },
          {
            value: 'sortByCollectDESC',
            label: '收藏數：高到低',
          },
        ]}
        style={{ width: 150 }}
        defaultValue={'排序條件'}
        autoFocus={false}
        virtual={false}
        suffixIcon={''}
        open={openSelector}
        onClick={() => {
          if (openSelector) {
            setOpenSelector(false);
          } else {
            setOpenSelector(true);
          }
        }}
      ></Select>
      <Sort
        className="CommentSelector_svg"
        onClick={() => {
          if (openSelector) {
            setOpenSelector(false);
          } else {
            setOpenSelector(true);
          }
        }}
      />
    </div>
  );
}

export default CommentSelector;
