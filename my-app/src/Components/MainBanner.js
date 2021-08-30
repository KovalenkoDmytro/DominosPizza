import React, { useState } from 'react';
import Slider from 'react-slick';
import './Slider.scss';
import products from '../products.json';

export default function SyncSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  return (
    <>
      <div className="container">
        <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} className="bigSlider"
          fade={true} dots={true} adaptiveHeight={true}>
          {products.map(item => (
            <div className="slide__item">
              <img src={item.img} alt={item.title} />
              <div className="item__content">
                <div className="content__title">{item.title}</div>
                <div className="content__text">{item.logdescription}</div>
                <a className="btn outline" href="#">shop now</a>
              </div>
            </div>
          ))}
        </Slider>
        <h4>Second Slider</h4>
        <Slider
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          arrows={false} className="smallSlider" >
          {products.map(item => (
            <div className="slide__item">
              <img src={item.img} alt={item.title} />
              <div className="item__content">
                <div className="content__title">{item.title}</div>
                <a className="btn small" href="#">shop now</a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}





