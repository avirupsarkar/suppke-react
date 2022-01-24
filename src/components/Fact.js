import React from 'react'

function Fact() {
    return (
        <section className="fact-area fact-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title white-title text-center mb-55">
                <h2>Awesome supplement for your <br /> body we have <span>15 years of experience</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quasi ut minus labore voluptate natus fuga voluptatum, id architecto velit eum magni nostrum sit mollitia, autem dignissimos, optio officiis? Nesciunt. consectetur adipisicing elit. Sint quasi ut minus labore voluptate natus fuga</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-fact text-center mb-50">
                <div className="fact-icon mb-25">
                  <img src="img/icon/fact_icon01.png" alt="icon" />
                </div>
                <div className="fact-content">
                  <h5><span className="count">3,560</span> km</h5>
                  <p>Package Delivered</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-fact text-center mb-50">
                <div className="fact-icon mb-25">
                  <img src="img/icon/fact_icon02.png" alt="icon" />
                </div>
                <div className="fact-content">
                  <h5><span className="count">195</span></h5>
                  <p>Countries Covered</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-fact text-center mb-50">
                <div className="fact-icon mb-25">
                  <img src="img/icon/fact_icon03.png" alt="icon" />
                </div>
                <div className="fact-content">
                  <h5><span className="count">4,56</span> k</h5>
                  <p>Happy Customer</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-fact text-center mb-50">
                <div className="fact-icon mb-25">
                  <img src="img/icon/fact_icon04.png" alt="icon" />
                </div>
                <div className="fact-content">
                  <h5><span className="count">99</span> Yr</h5>
                  <p>Year Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Fact
