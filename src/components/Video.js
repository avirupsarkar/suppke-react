import React, {useEffect}from 'react';
import $ from "jquery";
import 'magnific-popup';


function Video() {
   useEffect(()=>{
    /* magnificPopup video view */
    $('.popup-video').magnificPopup({
      type: 'iframe'
    });
   },[])
 

    return (
        <section className="video-area video-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="video-play">
                <a href="/https://www.youtube.com/watch?v=iWKu6WNFf9M" className="popup-video"><i className="fas fa-play" /></a>
              </div>
              <div className="video-title text-center">
                <h2>Awesome supplement for your body we have 15 years of experience</h2>
                <p>There are many variations of passages of Lorem Ipsum that available, but the majority have fered alteration in some
                  form, by injected humour that available.</p>
                <a href="/#" className="btn">more services</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Video
