import { React, useRef, useState } from 'react';
import { Select } from 'antd';
import './Comment.scss';
import { ReactComponent as Sort } from '../../../../icon/sort.svg';
import SortImg from '../../../../icon/sort.svg';
import { useHotelContext } from '../Context/HotelContext';

function CommentSelector() {
  const [openSelector, setOpenSelector] = useState(false);
  const { commentSort, setCommentSort } = useHotelContext();
  const handleChange = (e) => {
    // console.log(`selected ${e}`);
    setCommentSort(e);
  };
  return (
    <div className="CommentSelector">
      <Select
        onChange={handleChange}
        className="CommentSelector_Select"
        popupClassName="CommentSelector_Select"
        options={[
          {
            value: 'time_ASC',
            label: '評價時間：舊到新',
          },
          {
            value: 'time_DESC',
            label: '評價時間：新到舊',
          },
          {
            value: 'score_DESC',
            label: '評價：高至低',
          },
          {
            value: 'score_ASC',
            label: '評價：低至高',
          },
        ]}
        style={{ width: 150 }}
        defaultValue={commentSort}
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
