import React from 'react'

function Pricing() {
    return (
        <section id="price" className="pricing-area pt-110 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-10">
              <div className="section-title text-center mb-55">
                <h2>Choose Your Packages</h2>
                <div className="bar" />
                <p>There are many variations of passages of Lorem Ipsum that available, but the majority have fered
                  alteration in some form, by injected humour.</p>
              </div>
            </div>
          </div>
          <div className="pricing-wrap pl-80 pr-80">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-pricing text-center mb-30">
                  <div className="pricing-head mb-30">
                    <div className="pricing-icon mb-15">
                      <img src="img/icon/pricing_icon01.png" alt="img" />
                    </div>
                    <h5>Basic <span>Limited</span></h5>
                    <span>monthly</span>
                    <p>Subscribe Best Plans</p>
                    <div className="price-count">
                      <h4>1 Person User <span>- $59</span></h4>
                    </div>
                  </div>
                  <div className="pricing-list mb-30">
                    <ul>
                      <li>1 Person User vidmate</li>
                      <li>40 MG Per Capsule</li>
                      <li>50 Capsules Per Bottle</li>
                      <li>20% Future Purchases</li>
                    </ul>
                  </div>
                  <div className="pricing-btn">
                    <a href="/#" className="btn">Buy Now<i className="fas fa-shopping-cart" /></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-pricing active text-center mb-30">
                  <div className="pricing-head mb-30">
                    <div className="pricing-icon mb-15">
                      <img src="img/icon/pricing_icon02.png" alt="img" />
                    </div>
                    <h5>Family <span>Limited</span></h5>
                    <span>monthly</span>
                    <p>Subscribe Best Plans</p>
                    <div className="price-count">
                      <h4>5 Person User <span>- $119</span></h4>
                    </div>
                  </div>
                  <div className="pricing-list mb-30">
                    <ul>
                      <li>1 Person User vidmate</li>
                      <li>40 MG Per Capsule</li>
                      <li>50 Capsules Per Bottle</li>
                      <li>20% Future Purchases</li>
                    </ul>
                  </div>
                  <div className="pricing-btn">
                    <a href="/#" className="btn">Buy Now<i className="fas fa-shopping-cart" /></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-pricing text-center mb-30">
                  <div className="pricing-head mb-30">
                    <div className="pricing-icon mb-15">
                      <img src="img/icon/pricing_icon03.png" alt="img" />
                    </div>
                    <h5>Professonal <span>Limited</span></h5>
                    <span>monthly</span>
                    <p>Subscribe Best Plans</p>
                    <div className="price-count">
                      <h4>7 Person User <span>- $219</span></h4>
                    </div>
                  </div>
                  <div className="pricing-list mb-30">
                    <ul>
                      <li>1 Person User vidmate</li>
                      <li>40 MG Per Capsule</li>
                      <li>50 Capsules Per Bottle</li>
                      <li>20% Future Purchases</li>
                    </ul>
                  </div>
                  <div className="pricing-btn">
                    <a href="/#" className="btn">Buy Now<i className="fas fa-shopping-cart" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Pricing
