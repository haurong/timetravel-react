import React from 'react';
import { DatePicker, Space } from 'antd';
import './TagStayDatePicker.scss';
import { height } from '@mui/system';

const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const App = () => (
  <Space direction="vertical" className="TagStayDatePicker">
    <DatePicker
      onChange={onChange}
      style={{ width: '100%', height: '46px' }}
      className={'noShow'}
      popupClassName={'popupDatePicker '}
    />
  </Space>
);
export default App;
