// import { ReactComponent as Site } from '../../icon/itinerary.svg';
// import { ReactComponent as Food } from '../../icon/food.svg';
// import { ReactComponent as Stay } from '../../icon/stay.svg';
// import { ReactComponent as Ticket } from '../../icon/ticket.svg';
import { Menu } from 'antd';
import { Checkbox } from 'antd';
import React, { useState } from 'react';
import { useHotelContext } from '../../pages/product/stays/Context/HotelContext';
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
  getItem('全部', 'likeAll'),
  getItem('0-100', 'like100'),
  getItem('101-200', 'like200'),
  getItem('201-300', 'like300'),
  getItem('301-400', 'like400'),
  getItem('401-500', 'like500'),
];

const items1 = [
  getItem('全部', 'area_All'),
  getItem('台北市', 'area_Taipei'),
  getItem('新北市', 'area_NewTaipei'),
  getItem('基隆市', 'area_Keelung'),
];
const items2 = [
  getItem('全部', 'cate_All'),
  getItem(
    '景點',
    'cate_Site',
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
    'cate_Food',
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
    'cate_Hotel',
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
    'cate_Ticket',
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
  'area_All',
  'area_Taipei',
  'area_NewTaipei',
  'area_Keelung',
  'cate_All',
  'cate_Site',
  'cate_Food',
  'cate_Hotel',
  'cate_Ticket',
  'likeAll',
  'like100',
  'like200',
  'like300',
  'like400',
  'like500',
];
//const rootSubmenuKeys2 = ['sub4', 'sub5', 'sub6', 'sub7'];

export default function Sidebar1() {
  const [openKeys, setOpenKeys] = useState([]);
  const { hotelSort, setHotelSort } = useHotelContext();
  // console.log(hotelAllData.rows);
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
          defaultSelectedKeys={'area_All'}
          onSelect={(e) => {
            setHotelSort({
              area: e.key,
              cate: hotelSort.cate,
              like: hotelSort.like,
            });
          }}
        />
      </div>
      <div className="allproduct">
        <h2 className="sidebarMarginTop">所有商品類別</h2>
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          defaultSelectedKeys={'cate_All'}
          items={items2}
          onSelect={(e) => {
            // console.log(e.key);
            // console.log(openKeys);
            if (e.key === 'cate_All') {
              setOpenKeys('');
            }
          }}
        />
      </div>
      <div className="selectScore">
        <h2 className="sidebarMarginTop">收藏數量</h2>
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          items={items3}
          onSelect={(e) => {
            setHotelSort({
              area: hotelSort.area,
              cate: hotelSort.cate,
              like: e.key,
            });
          }}
          defaultSelectedKeys={'likeAll'}
        />
      </div>
    </div>
  );
}

// const onChange = (checkedValues) => {
//   console.log('checked = ', checkedValues);
// };
