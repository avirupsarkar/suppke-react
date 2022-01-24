import React from 'react'

function Slider() {
    return (
        <section id="home" className="slider-area slider-bg d-flex align-items-center">
        <div className="container">
          <div className="slider-overflow">
            <div className="row">
              <div className="col-lg-6 order-0 order-lg-2">
                <div className="slider-img text-center text-lg-right text-xl-center position-relative">
                  <img src="img/slider/slider_img.png" alt="img" className="wow fadeInRight" data-wow-delay="0.6s" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="slider-content">
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s">Super <span>Convenient</span> Quality Protein</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur seddo eiumod tempor incididunt labore adipiscing seddo eiumod</p>
                  <div className="slider-btn">
                    <a href="/#" className="btn wow fadeInLeft" data-wow-delay="0.6s">purchase</a>
                    <a href="/#" className="btn transparent-btn wow fadeInRight" data-wow-delay="0.6s">contact us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Slider
