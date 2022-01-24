import React, { useState, useEffect } from 'react'
import Slider from 'react-slick';



function Perched() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [val, setVal] = useState(1);
  
  const increase = ()=>{
    setVal(val+1);
    
  }
  const decrease = ()=>{
    setVal(val-1);
    
  }

  let slider1 = '';
  let slider2 = '';

  useEffect(() =>{
    setNav1(slider1)
    setNav2(slider2)
  },[slider1, slider2, val])
 
  const settings1 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: '.product-nav-active'
  }
  const settings2 = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.product-active',
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
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
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        }
      },
    ]
  }
 
    return (

        <section id="order" className="perched-area pt-110 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-10">
              <div className="section-title text-center mb-55">
                <h2>perched vidmate Suppke</h2>
                <div className="bar" />
                <p>There are many variations of passages of Lorem Ipsum that available, but the majority have fered
                  alteration in some form, by injected humour.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="product-wrap">
                <Slider className="product-active" {...settings1} asNavFor={nav2}
          ref={slider => (slider1 = slider)}>
                  <div className="single-product">
                    <img src="img/images/product_thumb.jpg" alt="img" />
                  </div>
                  <div className="single-product">
                    <img src="img/images/product_thumb02.jpg" alt="img" />
                  </div>
                  <div className="single-product">
                    <img src="img/images/product_thumb03.jpg" alt="img" />
                  </div>
                  <div className="single-product">
                    <img src="img/images/product_thumb04.jpg" alt="img" />
                  </div>
                  <div className="single-product">
                    <img src="img/images/product_thumb02.jpg" alt="img" />
                  </div>
                </Slider>
                <Slider className="product-nav-active" {...settings2} asNavFor={nav1}
          ref={slider => (slider2 = slider)}>
                  <div className="single-product-nav">
                    <img src="img/images/product_bottom01.jpg" alt="img" />
                  </div>
                  <div className="single-product-nav">
                    <img src="img/images/product_bottom02.jpg" alt="img" />
                  </div>
                  <div className="single-product-nav">
                    <img src="img/images/product_bottom03.jpg" alt="img" />
                  </div>
                  <div className="single-product-nav">
                    <img src="img/images/product_bottom04.jpg" alt="img" />
                  </div>
                  <div className="single-product-nav">
                    <img src="img/images/product_bottom02.jpg" alt="img" />
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="product-details-content">
                <h3>Vidmate Capsule</h3>
                <h6>€120.00</h6>
                <div className="product-rating mb-35">
                  <ul>
                    <li><i className="fas fa-star" /></li>
                    <li><i className="fas fa-star" /></li>
                    <li><i className="fas fa-star" /></li>
                    <li><i className="far fa-star" /></li>
                    <li><i className="far fa-star" /></li>
                  </ul>
                  <span>(2 Customer Review)</span>
                </div>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                  by injected humour, or randomised words which even slightly believable.</p>
                <div className="perched-info">
                  <div className="cart-plus">
                    <form action="#">
                      <div className="cart-plus-minus">
                        <input type="text" value={val} readOnly/>
                        <div className="dec qtybutton" onClick={()=>decrease()}>-</div>
                        <div className="inc qtybutton" onClick={()=>increase()}>+</div>
                      </div>
                    </form>
                  </div>
                  <a href="/#" className="btn add-card-btn">ADD TO CART</a>
                </div>
                <div className="product-info mb-50">
                  <h5>Product info</h5>
                  <ul>
                    <li><span>SID :</span> WK4685R</li>
                    <li><span>CATEGORY :</span> Vidmeate Cap</li>
                    <li><span>vidmate mg : </span> 500mg</li>
                  </ul>
                </div>
                <div className="product-desc-wrap">
                  <ul className="nav nav-tabs mb-25" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link" id="desc-tab" data-toggle="tab" href="/#desc" role="tab" aria-controls="desc" aria-selected="true">Description</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="info-tab" data-toggle="tab" href="/#info" role="tab" aria-controls="info" aria-selected="false">additional information</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" id="review-tab" data-toggle="tab" href="/#review" role="tab" aria-controls="review" aria-selected="false">reviews (1)</a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade" id="desc" role="tabpanel" aria-labelledby="desc-tab">
                      <p className="desc-content">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which even slightly believable.</p>
                      <p className="desc-content">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which even slightly believable.</p>
                    </div>
                    <div className="tab-pane fade" id="info" role="tabpanel" aria-labelledby="info-tab">
                      <p className="desc-content">There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words which even slightly believable.</p>
                      <p className="desc-content">There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words which even slightly believable.</p>
                    </div>
                    <div className="tab-pane fade show active" id="review" role="tabpanel" aria-labelledby="review-tab">
                      <div className="product-review-wrap">
                        <h5>1 Revirew for Jacket</h5>
                        <div className="single-review">
                          <div className="review-avatar">
                            <img src="img/images/review_thumb.jpg" alt="img" />
                          </div>
                          <div className="review-content">
                            <div className="review-rating">
                              <ul>
                                <li><i className="fas fa-star" /></li>
                                <li><i className="fas fa-star" /></li>
                                <li><i className="fas fa-star" /></li>
                                <li><i className="far fa-star" /></li>
                                <li><i className="far fa-star" /></li>
                              </ul>
                            </div>
                            <div className="review-meta">
                              <h6>Michael Elliott – <span>September 3, 2019</span></h6>
                            </div>
                            <p>Shere are many vriations of pasgs of Lorem Ipsum that availabl but the majorty have fered</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Perched
