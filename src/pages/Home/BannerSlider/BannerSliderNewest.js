import React, { Component } from 'react';
import Slider from 'react-slick';
import './BannerSliderNewest.scss';

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
    };
    return (
      <div>
        <Slider {...settings} className="banner-slider">
          <div className="banner_card_item">
            <div className="banner_card_newest1"></div>
          </div>
          <div className="banner_card_item">
            <div className="banner_card_newest2"></div>
          </div>
          <div className="banner_card_item">
            <div className="banner_card_newest3"></div>
          </div>
          <div className="banner_card_item">
            <div className="banner_card_newest4"></div>
          </div>
          <div className="banner_card_item">
            <div className="banner_card_newest5"></div>
          </div>
          <div className="banner_card_item">
            <div className="banner_card_newest6"></div>
          </div>
        </Slider>
      </div>
    );
  }
}
