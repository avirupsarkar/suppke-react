import React from 'react'

function Newsleter() {
    return (
        <section className="newsletter-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="newsletter-wrap">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="newsletter-content">
                      <h4>Newsletter Sign Up</h4>
                      <span>Notifications our best deals...</span>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="newsletter-form">
                      <form action="#">
                        <input type="email" placeholder="Enter your email..." />
                        <button className="btn">subscribe</button>
                      </form>
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

export default Newsleter
