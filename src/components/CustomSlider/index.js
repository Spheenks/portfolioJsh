import React from "react";

import Slider from 'react-slick';
// import "./../../assets/css/slick.css";
// import "./../../assets/css/slick-theme.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './../../App.css';






const CustomSlider = ({ data, size, detailed, countToShow, withLink }) => {

  var settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: countToShow,
    slidesToScroll: countToShow,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (

    <div style={{height:'auto', width:'100%', margin:'auto'}}>
    <Slider
      {...settings}>
      {data &&
        data.map((result) => (
          <>

            <div className={`${size}-slider`}>
              <img src={result.img} alt={result.title} />
            </div>


            {detailed === true &&

              <div className={`${size}-slider-desc`}>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                  <h1>{result.title}</h1>
                  <p>{result.desc}</p>
                </div>
              </div>
            }


            {withLink === true &&

              <div className="small-slider">
                <a>{result.link}</a>
              </div>
            }
          </>



        ))}
    </Slider>
    </div>

  )
}
export default CustomSlider;