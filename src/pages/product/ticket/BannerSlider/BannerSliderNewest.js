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
          <div className="banner-card-newest">
            <h4>1</h4>
          </div>
          <div className="banner-card-newest">
            <h4>2</h4>
          </div>
          <div className="banner-card-newest">
            <h4>3</h4>
          </div>
          <div className="banner-card-newest">
            <h4>4</h4>
          </div>
          <div className="banner-card-newest">
            <h4>5</h4>
          </div>
          <div className="banner-card-newest">
            <h4>6</h4>
          </div>
          <div className="banner-card-newest">
            <h4>7</h4>
          </div>
          <div className="banner-card-newest">
            <h4>8</h4>
          </div>
          
        </Slider>
      </div>
    );
  }
}
