import ReactDOM from 'react-dom';
import { QRCodeSVG } from 'qrcode.react';
import './Qrcode.scss'
import React from 'react';

export default function Qrcode() {
  return (
    <div>
      <QRCodeSVG value="https://localhost:3001/uploads/F116-1.jpg" size='216' level='M'/>
    </div>
  )}