import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'


function Header(){
    const scrollTo = (navId) => {
      $('html, body').animate({
        scrollTop: $(navId).offset().top
      }, 1000);
    }

    useEffect(()=>{
      // menu toggle
      $(".navbar-toggle").on('click', function () {
        $(".navbar-nav").addClass("mobile_menu");
      });
      $(".navbar-nav li a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
      });
    },[])
    return (
        <header>
        <div id="header-sticky" className="main-header">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="main-menu">
                  <nav className="navbar navbar-expand-lg">
                    <Link to="/" className="navbar-brand">
                      <img src="img/logo/logo.png" alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                      <span className="navbar-icon" />
                      <span className="navbar-icon" />
                      <span className="navbar-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item active"><a onClick={() => scrollTo('html') }className="nav-link"  href="/#">Home</a></li>
                        <li className="nav-item"><a onClick={() => scrollTo('#supplement') } className="nav-link" href="/#supplement">Supplement</a></li>
                        <li className="nav-item"><a onClick={() => scrollTo('#order') } className="nav-link" href="/#order">Order</a></li>
                        <li className="nav-item"><a onClick={() => scrollTo('#blogs') }  className="nav-link" href="/#blogs">Blogs</a></li>
                        <li className="nav-item"><a onClick={() => scrollTo('#contact') }  className="nav-link" href="/#contact">Contact</a></li>
                      </ul>
                    </div>
                    <div className="header-action">
                      <ul>
                        <li className="search-icon"><a href="/#"><i className="fas fa-search" /></a></li>
                        <li className="shop-cart"><a href="/#"><i className="fas fa-shopping-basket" /><span className="cart-count" /></a></li>
                      </ul>
                    </div>
                    <div className="header-btn d-none d-xl-block">
                      <a href="/#" className="btn">order now</a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header
