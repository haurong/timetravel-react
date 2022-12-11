import { QRCodeSVG } from 'qrcode.react';

import './Qrcode.scss';
import React from 'react';

export default function Qrcode() {
  return (
    <div className="QrcodeStyle">
      <div
        style={{
          width: '300px',
          height: '100px',
          zIndex: '-1',
        }}
        className=" circleGroupTop"
      >
        <div className="d-flex circleGroup">
          <div className="circleLeft"></div>
          <div className="circleRight"></div>
        </div>
        <div className="useTime">
          <p className="useTimeDeadLine">請向店家出示Qrcode</p>
        </div>
      </div>
      <div className="qrcode d-flex">
        <QRCodeSVG
          value={'http://localhost:3001/uploads/1(1).jpg'}
          size="216"
          level="M"
          style={{ padding: '10px' }}
        />
      </div>
    </div>
  );
}
