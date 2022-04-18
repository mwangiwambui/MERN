import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
export class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg">
          <div className="container">

            <a className="logo" href="#">
              <img src="assets/img/logo-light.png" alt="logo"/>
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="icon-bar"><i className="fas fa-bars"></i></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="#" data-scroll-nav="0">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" data-scroll-nav="1">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" data-scroll-nav="2">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" data-scroll-nav="3">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" data-scroll-nav="4">Blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" data-scroll-nav="5">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header className="header valign bg-img position-re" data-scroll-index="0" data-overlay-dark="4" data-background="assets/img/bg.jpg" data-stellar-background-ratio="0.5">

          <div className="container">
            <div className="row">
              <div className="full-width text-center caption mt-50">
                <h2>Welcome!</h2>
                <h1 className="cd-headline push">
                  <span className="blc">I am</span>
                  <span className="cd-words-wrapper">
                    <b className="is-visible">Zain Butler</b>
                    <b>Web Designer</b>
                    <b>Photography</b>
                  </span>
                </h1>

                <div className="social mt-30">
                  <a href="#0"><i className="icofont icofont-social-facebook"></i></a>
                  <a href="#0"><i className="icofont icofont-social-twitter"></i></a>
                  <a href="#0"><i className="icofont icofont-social-instagram"></i></a>
                  <a href="#0"><i className="icofont icofont-brand-linkedin"></i></a>
                  <a href="#0"><i className="icofont icofont-social-behance"></i></a>
                </div>

              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}