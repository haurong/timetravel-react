import React from 'react';
import { Select } from 'antd';
import './Comment.scss';

function CommentSelector() {
  const handleChange = (e) => {
    console.log(`selected ${e}`);
  };
  return (
    <div className="CommentSelector">
      <Select
        onChange={handleChange}
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
      ></Select>
    </div>
  );
}

export default CommentSelector;
