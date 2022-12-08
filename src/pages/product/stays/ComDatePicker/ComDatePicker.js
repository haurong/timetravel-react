import React from 'react';
import './ComDatePicker.scss';
import { DatePicker } from 'antd';
import moment from 'moment/moment';
import locale from 'antd/es/date-picker/locale/zh_TW';
import RoomChoose from '../RoomChoose/RoomChoose';
import RoomCounts from '../RoomCounts/RoomCounts';
import BuyButton from '../BuyButton/BuyButton';
import { useHotelContext } from '../Context/HotelContext';
import { Today } from '@mui/icons-material';
const { RangePicker } = DatePicker;

function ComDatePicker(props) {
  const { pickDate, setPickDate, hotelRoomPrice, roomCounts, today } =
    useHotelContext();

  return (
    <>
      <div className="ComDatePicker d-flex">
        <div className="ComDatePicker_Left col-lg-9">
          <div className="ComDatePicker_Left_text">
            <h5>
              開始日:
              <span>{pickDate.startTime}</span>
            </h5>
            <h5>
              結束日:<span>{pickDate.endTime}</span>
            </h5>
            <div className="ComDatePicker_Left_text_tag">
              <div>
                <h5>
                  共<span>{pickDate.days}</span>日
                </h5>
              </div>
            </div>
          </div>
          <div className="hiddenBox RangePicker_relative">
            <RangePicker
              open={true}
              className={'noShow'}
              locale={locale}
              bordered
              format="YYYY-MM-DD"
              onChange={(e) => {
                console.log(e);
                moment.locale('zh-tw');
                let start = moment(e[0]._d).format('YYYY-MM-DD');
                let end = moment(e[1]._d).format('YYYY-MM-DD');
                let howLong = (+new Date(end) - +new Date(start)) / 86400000;
                // console.log(howLong);
                setPickDate({
                  startTime: start,
                  endTime: end,
                  days: howLong,
                });
              }}
              value={[moment(pickDate.startTime), moment(pickDate.endTime)]}
              popupClassName={'popupDatePicker hiddenBox'}
              disabledDate={(current) => {
                return current < moment(today);
              }}
            />
          </div>
        </div>
        <div className="ComDatePicker_Right col-lg-3 MobileHidden">
          <div className="ComDatePicker_Right_text">
            <h5>房型選擇</h5>
          </div>
          <RoomChoose hotelRoomData={props.hotelRoomData} />
          <h5 style={{ marginTop: '50px' }}>房數</h5>
          <RoomCounts />
          <h4
            style={{
              color: '#59d8a1',
              fontSize: '22px',
              marginBottom: '30px',
            }}
          >
            TWD${hotelRoomPrice * roomCounts * pickDate.days}
          </h4>
          <div className="d-flex ComDatePicker_Right_BuyButton ">
            <BuyButton />
          </div>
        </div>
      </div>
    </>
  );
}

export default ComDatePicker;
