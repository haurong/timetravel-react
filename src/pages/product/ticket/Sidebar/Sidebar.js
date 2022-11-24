// import {
//   AppstoreOutlined,
//   MailOutlined,
//   SettingOutlined,
// } from '@ant-design/icons';
import { ReactComponent as Itinerary } from '../../../.././icon/itinerary.svg';
import { ReactComponent as Food } from '../../../.././icon/food.svg';
import { ReactComponent as Stay } from '../../../.././icon/stay.svg';
import { ReactComponent as Ticket } from '../../../.././icon/ticket.svg';
import { Menu } from 'antd';
import React, { useState } from 'react';
import './sidebar.scss';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(
    '行程',
    'sub1',
    <Itinerary className="sidebarIcon" style={{ width: '40px' }} />,
    [
      getItem('Option 1', '1'),
      getItem('Option 2', '2'),
      getItem('Option 3', '3'),
      getItem('Option 4', '4'),
    ]
  ),
  getItem(
    '美食',
    'sub2',
    <Food className="sidebarIcon" style={{ width: '40px' }} />,
    [
      getItem('全部', '5'),
      getItem('特色小吃', '6'),
      getItem('飲品', '7'),
      getItem('火鍋', '8'),
      getItem('台式', '9'),
      getItem('日式', '10'),
      getItem('甜點', '11'),
      getItem('咖啡', '12'),
      getItem('泰式', '13'),
    ]
  ),
  getItem(
    '住宿',
    'sub4',
    <Stay className="sidebarIcon" style={{ width: '40px' }} />,
    [
      getItem('Option 11', '14'),
      getItem('Option 12', '15'),
      getItem('Option 13', '16'),
    ]
  ),
  getItem(
    '票券',
    'sub5',
    <Ticket className="sidebarIcon" style={{ width: '40px' }} />,
    [
      getItem('Option 14', '17'),
      getItem('Option 15', '18'),
      getItem('Option 16', '19'),
      getItem('Option 17', '20'),
      getItem('Option 18', '21'),
    ]
  ),
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
const App = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <>
      <h2 className="sidebarMarginTop">所有商品類別</h2>
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        items={items}
      />
    </>
  );
};
export default App;
