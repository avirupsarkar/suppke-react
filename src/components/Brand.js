import React from 'react';
import Slider from 'react-slick';

function Brand() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      arrows: false,
      slidesToShow: 5,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        },
      ]
    }

    return (
        <div className="brand-area pt-120 pb-120">
        <div className="container">
          <Slider className="row brand-active" {...settings}>
            <div className="col-12">
              <div className="signle-brand">
                <img src="img/brand/brnad_logo01.png" alt="img" />
              </div>
            </div>
            <div className="col-12">
              <div className="signle-brand">
                <img src="img/brand/brnad_logo02.png" alt="img" />
              </div>
            </div>
            <div className="col-12">
              <div className="signle-brand">
                <img src="img/brand/brnad_logo03.png" alt="img" />
              </div>
            </div>
            <div className="col-12">
              <div className="signle-brand">
                <img src="img/brand/brnad_logo04.png" alt="img" />
              </div>
            </div>
            <div className="col-12">
              <div className="signle-brand">
                <img src="img/brand/brnad_logo05.png" alt="img" />
              </div>
            </div>
            <div className="col-12">
              <div className="signle-brand">
                <img src="img/brand/brnad_logo03.png" alt="img" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    )
}

export default Brand
