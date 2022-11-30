// import { ReactComponent as Site } from '../../icon/itinerary.svg';
// import { ReactComponent as Food } from '../../icon/food.svg';
// import { ReactComponent as Stay } from '../../icon/stay.svg';
// import { ReactComponent as Ticket } from '../../icon/ticket.svg';
import { Menu } from 'antd';
import { Checkbox } from 'antd';
import React, { useState } from 'react';
import './Sidebar1.scss';
function getItem(label, key, children, type) {
  return {
    key,

    children,
    label,
    type,
  };
}
const items3 = [
  getItem('全部', 'score1'),
  getItem('五星', 'score2'),
  getItem('四星', 'score3'),
  getItem('三星', 'score4'),
  getItem('二星', 'score5'),
  getItem('一星', 'score6'),
];
const options = [
  {
    label: '五星',
    value: '5',
  },
  {
    label: '四星',
    value: '4',
  },
  {
    label: '三星',
    value: '3',
  },
  {
    label: '二星',
    value: '2',
  },
  {
    label: '一星',
    value: '1',
  },
];
const items1 = [
  getItem('全部', 'sub0'),
  getItem('台北市', 'sub1'),
  getItem('新北市', 'sub2'),
  getItem('基隆市', 'sub3'),
];
const items2 = [
  getItem(
    '景點',
    'sub4',
    // <Site className="sidebarIcon" style={{ width: '40px' }} />,
    [
      getItem('全部', '1'),
      getItem('蹣山', '2'),
      getItem('望海', '3'),
      getItem('戶外活動', '4'),
      getItem('室內活動', '5'),
      getItem('手作、工坊', '6'),
    ]
  ),
  getItem(
    '美食',
    'sub5',
    // <Food className="sidebarIcon" style={{ width: '40px' }} />,
    [
      getItem('全部', '7'),
      getItem('特色小吃', '8'),
      getItem('飲品', '9'),
      getItem('火鍋', '10'),
      getItem('台式', '11'),
      getItem('日式', '12'),
      getItem('甜點', '13'),
      getItem('咖啡', '14'),
      getItem('泰式', '15'),
    ]
  ),
  getItem(
    '住宿',
    'sub6',
    // <Stay className="sidebarIcon" style={{ width: '40px' }} />,
    [
      getItem('全部', '16'),
      getItem('旅館', '17'),
      getItem('飯店', '18'),
      getItem('民宿', '19'),
    ]
  ),
  getItem(
    '票券',
    'sub7',
    // <Ticket className="sidebarIcon" style={{ width: '40px' }} />,
    [
      getItem('全部', '20'),
      getItem('舒壓、放鬆', '21'),
      getItem('展覽、藝文', '22'),
      getItem('樂園、戶外', '23'),
      getItem('生態、風景', '24'),
      getItem('工坊、手作', '25'),
    ]
  ),
];
// const item3=[
//   getItem('')
// ]

// submenu keys of first level
const rootSubmenuKeys = [
  'sub1',
  'sub2',
  'sub3',
  'sub4',
  'sub5',
  'sub6',
  'sub7',
];
//const rootSubmenuKeys2 = ['sub4', 'sub5', 'sub6', 'sub7'];

export default function Sidebar1() {
  const [openKeys, setOpenKeys] = useState([]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <div className="Eliot_Du_Boss">
      <div className="destination">
        <h2 className="sidebarMarginTop">篩選目的地</h2>
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          items={items1}
        />
      </div>
      <div className="allproduct">
        <h2 className="sidebarMarginTop">所有商品類別</h2>
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          items={items2}
        />
      </div>
      <div className="selectScore">
        <h2 className="sidebarMarginTop">旅客評分</h2>
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          items={items3}
        />
      </div>
    </div>
  );
}

const onChange = (checkedValues) => {
  console.log('checked = ', checkedValues);
};
