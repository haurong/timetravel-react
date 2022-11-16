import React, { useState } from 'react';
import './ComDatePicker.scss';
import { DatePicker } from 'antd';
import moment from 'moment/moment';
import locale from 'antd/es/date-picker/locale/zh_TW';
const { RangePicker } = DatePicker;
function ComDatePicker() {
  let today = moment(new Date()).format('YYYY-MM-DD');
  let tomorrow = new Date(today);
  tomorrow = moment(tomorrow.setDate(tomorrow.getDate() + 1)).format(
    'YYYY-MM-DD'
  );
  // console.log(today);
  // console.log(tomorrow);
  const [pickDate, setPickDate] = useState({
    startTime: today,
    endTime: tomorrow,
    days: 1,
  });
  return (
    <>
      <div className="ComDatePicker d-flex">
        <div className="ComDatePicker_Left col-lg-8">
          <div className="ComDatePicker_Left_text">
            <h5>開始日:{pickDate.startTime}</h5>
            <h5>結束日:{pickDate.endTime}</h5>
            <h5>共{pickDate.days}日</h5>
          </div>
          <div className="hiddenBox">
            <RangePicker
              open={true}
              className={'noShow'}
              locale={locale}
              bordered
              format="YYYY-MM-DD"
              onChange={(e) => {
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
            />
          </div>
        </div>
        <div className="ComDatePicker_Right col-lg-4"></div>
      </div>
    </>
  );
}

export default ComDatePicker;
