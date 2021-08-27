import React, { useState } from 'react';
import Slider from 'react-slick';


export default function SyncSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

    return (
    <>
      <div className="container">
      <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} className="mainSlider"
     fade ={true} dots ={true}

      >
     
              <div className="slide__item">
                 
                  <img src="https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/91F89859AE004153A24E7852F8666F0F/10093625_r.jpg?fit=inside|540:540" alt="" />
                  <div className="item__content">
                      <div className="content__title">Cowhide Standard Crew</div>
                      <div className="content__text">White coloured, short-sleeved, printed T-shirt for men by Levi's. This crew-neck T-shirt is made of organic cotton and comes in a regular fit. </div>
                      <a className="btn" href="#">shop now</a>
                  </div>
              </div>
              
            
            <div>
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
              <img src="http://placekitten.com/g/400/200" />
            </div>        

      </Slider>
      <h4>Second Slider</h4>
      <Slider
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
        arrows={false}
        
      >
         <div className="slide__item">
                 
                 <img src="https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/91F89859AE004153A24E7852F8666F0F/10093625_r.jpg?fit=inside|540:540" alt="" />
                 <div className="item__content">
                     <div className="content__title">Cowhide Standard Crew</div>
                     <div className="content__text">White coloured, short-sleeved, printed T-shirt for men by Levi's. This crew-neck T-shirt is made of organic cotton and comes in a regular fit. </div>
                     <a className="btn" href="#">shop now</a>
                 </div>
             </div>
             
           
           <div>
             <img src="http://placekitten.com/g/400/200" />
           </div>
           <div>
             <img src="http://placekitten.com/g/400/200" />
           </div>
           <div>
             <img src="http://placekitten.com/g/400/200" />
           </div>
      </Slider>
      </div>  
    </>
  );
}

   
        
          
     
  