import React, { Component } from 'react';
import Slider from 'react-slick';
import './BannerSlider.scss';

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
            <h4>1</h4>
          </div>
          <div className="banner-card">
            <h4>2</h4>
          </div>
          <div className="banner-card">
            <h4>3</h4>
          </div>
          <div className="banner-card">
            <h4>4</h4>
          </div>
          <div className="banner-card">
            <h4>5</h4>
          </div>
          <div className="banner-card">
            <h4>6</h4>
          </div>
          <div className="banner-card">
            <h4>7</h4>
          </div>
          <div className="banner-card">
            <h4>8</h4>
          </div>
          <div className="banner-card">
            <h4>9</h4>
          </div>
          <div className="banner-card">
            <h4>10</h4>
          </div>
          <div className="banner-card">
            <h4>11</h4>
          </div>
          <div className="banner-card">
            <h4>12</h4>
          </div>
        </Slider>
      </div>
    );
  }
}
