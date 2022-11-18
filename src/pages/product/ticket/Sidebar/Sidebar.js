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
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Submenu', 'sub3', null, [
        getItem('Option 7', '7'),
        getItem('Option 8', '8'),
      ]),
    ]
  ),
  getItem(
    '住宿',
    'sub4',
    <Stay className="sidebarIcon" style={{ width: '40px' }} />,
    [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Option 11', '11'),
      getItem('Option 12', '12'),
    ]
  ),
  getItem(
    '票券',
    'sub5',
    <Ticket className="sidebarIcon" style={{ width: '40px' }} />,
    [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Option 11', '11'),
      getItem('Option 12', '12'),
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
    <div className="col-3">
      <h2 className="sidebarMarginTop">所有商品類別</h2>
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        items={items}
      />
    </div>
  );
};
export default App;
