import React from 'react';
import IItem from './IItem';
import IDayText from './IDayText';
import './Itinerary-detail.scss';

export default function IDay(day) {
  return (
    <>
      <IDayText day="day1" />
      <IItem />
      <IItem />
      <IItem />
    </>
  );
}
