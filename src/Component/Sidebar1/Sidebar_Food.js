// import { ReactComponent as Site } from '../../icon/itinerary.svg';
// import { ReactComponent as Food } from '../../icon/food.svg';
// import { ReactComponent as Stay } from '../../icon/stay.svg';
// import { ReactComponent as Ticket } from '../../icon/ticket.svg';
import { Menu } from 'antd';
import PageSearchBar from '../../pages/product/PageSearchBar';
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
  getItem('小於100', 'like<100'),
  getItem('101-200', 'like200'),
  getItem('201-300', 'like300'),
  getItem('301-400', 'like400'),
  getItem('401-500', 'like500'),
  getItem('大於500', 'like>500'),
];

const items1 = [
  getItem('全部', 'area_All'),
  getItem('台北市', 'area_Taipei'),
  getItem('新北市', 'area_NewTaipei'),
  getItem('基隆市', 'area_Keelung'),
];
const items2 = [
  getItem('全部', 'cate_Food_All'),
  getItem('特色小吃', 'cate_Food_1'),
  getItem('台式料理', 'cate_Food_2'),
  getItem('泰式料理', 'cate_Food_3'),
  getItem('日式料理', 'cate_Food_4'),
  getItem('火鍋', 'cate_Food_5'),
  getItem('飲品', 'cate_Food_6'),
  getItem('甜點', 'cate_Food_7'),
  getItem('咖啡', 'cate_Food_8'),
];

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
  'like<100',
  'like200',
  'like300',
  'like400',
  'like500',
  'like>500',
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
      <Menu mode="inline">
        <PageSearchBar />
      </Menu>

      <div className="destination">
        <h2 className="sidebarMarginTop">選擇目的地</h2>
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
              sortBy: hotelSort.sortBy,
            });
          }}
        />
      </div>
      <div className="allproduct">
        <h2 className="sidebarMarginTop">美食類型</h2>
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          defaultSelectedKeys={'cate_Food_All'}
          items={items2}
          onSelect={(e) => {
            // console.log(e.key);
            // console.log(openKeys);
            if (e.key === 'cate_All') {
              setOpenKeys('');
            }
            setHotelSort({
              area: hotelSort.area,
              cate: e.key,
              like: hotelSort.like,
              sortBy: hotelSort.sortBy,
            });
          }}
        />
      </div>
      <div className="selectScore">
        <h2 className="sidebarMarginTop">收藏數</h2>
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
              sortBy: hotelSort.sortBy,
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
