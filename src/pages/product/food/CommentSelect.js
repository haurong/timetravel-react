import { React, useRef, useState } from 'react';
import { Select } from 'antd';
import './style/Comment.scss';
//import { ReactComponent as Sort } from '../../../../icon/sort.svg';
import Sort from '../../../icon/sort.svg';

function CommentSelector() {
  const [openSelector, setOpenSelector] = useState(false);
  const handleChange = (e) => {
    console.log(`selected ${e}`);
  };
  return (
    <div className="CommentSelector">
      <Select
        onChange={handleChange}
        className="CommentSelector_Select"
        popupClassName="CommentSelector_Select"
        options={[
          {
            value: 'hot',
            label: '熱門程度',
          },
          {
            value: 'comment_DESC',
            label: '評價：高至低',
          },
          {
            value: 'comment_ASC',
            label: '評價：低至高',
          },
        ]}
        style={{ width: 150 }}
        defaultValue={'hot'}
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
      <div
        className="CommentSelector_svg"
        onClick={() => {
          if (openSelector) {
            setOpenSelector(false);
          } else {
            setOpenSelector(true);
          }
        }}
      />
      <img src={Sort} style={{ width: '40px', height: '35px' }} />
    </div>
  );
}

export default CommentSelector;
