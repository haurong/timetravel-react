import React, { Component } from 'react';
import Slider from 'react-slick';
import './BannerSliderHot.scss';
import Card from '../../../../../src/Component/Card_List/Card.js';

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
    };
    return (
      <div>
        <Slider {...settings} className="banner-slider">
          <div className="banner-card">
            <Card />
          </div>
          <div className="banner-card">
            <Card />
          </div>
          <div className="banner-card">
            <Card />
          </div>
          <div className="banner-card">
          <Card />
          </div>
          <div className="banner-card">
          <Card />
          </div>
          <div className="banner-card">
            <Card />
          </div>
          <div className="banner-card">
            <Card />
          </div>
          <div className="banner-card">
            <Card />
          </div>
          <div className="banner-card">
            <Card />
          </div>
          <div className="banner-card">
            <Card />
          </div>
          <div className="banner-card">
            <Card />
          </div>
          <div className="banner-card">
            <Card />
          </div>
        </Slider>
      </div>
    );
  }
}
