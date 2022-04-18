import React, { Component } from 'react'

const Hero = () => {
    return (
      <section class="hero section-padding position-re" data-scroll-index="1">
      <div class="container">
          <div class="row">
              
              <div class="col-lg-5">
                  <div class="hero-img">
                      <img src="assets/img/hero.jpg" alt="" />
                  </div>
              </div>

              <div class="offset-lg-1 col-lg-6">
                  <div class="content">
                      <h6>Who am i</h6>
                      <h4>Zain Butler.</h4>
                      <h5>Professional Web Designer</h5>
                      <p class="mb-10">Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat condimentum velit class aptent taciti sociosqu ad litora torquent metus metus ullamcorper.</p>
                      <p class="mb-40">Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat condimentum velit class aptent taciti sociosqu ad litora torquent metus metus ullamcorper vel tincidunt sed class aptent taciti sociosqu ad litora torquent type setting industry when per conubia nostra.</p>

                      <a href="CV.pdf" class="butn butn-bord" target="_blank">
                          <span>Download CV</span>
                      </a>
                      <a href="#0" class="butn butn-light" data-scroll-nav="5">
                          <span>Hire Me!</span>
                      </a>
                  </div>
              </div>

          </div>
      </div>

      <svg class="wave" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 81.717" enable-background="new 0 0 1920 81.717" xml:space="preserve"><path style="" d="M1920,0c0,0-109.246,46.107-316.333,67.334C1343.5,94,1137.095,77.238,999.167,67.5C854,57.25,637.662,24.697,541.709,18.834C375.334,8.666,147,11,0,37.875V0H1920L1920,0z"></path></svg>
  </section>
    )
}

export default Hero