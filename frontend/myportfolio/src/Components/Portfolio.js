import React, { Component } from 'react'

const Portfolio = () => {
    return (
      <section class="portfolio section-padding position-re" data-scroll-index="3">
        <div class="container">
          <div class="row">

            <div class="section-head text-center col-lg-8 offset-lg-2 col-md-10 offset-md-1">
              <h4>Portfolio</h4>
            </div>

            {/* <!-- filter links --> */}
            <div class="filtering text-center col-sm-12">
              <span data-filter='*' class="active">All</span>
              <span data-filter='.brand'>Brand</span>
              <span data-filter='.web'>Design</span>
              <span data-filter='.graphic'>Graphic</span>
            </div>

            <div class="clearfix"></div>

            {/* <!-- gallery --> */}
            <div class="gallery text-center full-width">

              {/* <!-- gallery item --> */}
              <div class="items graphic">
                <div class="item-img">
                  <img src="assets/img/portfolio/1.jpg" alt="image" />
                    <div class="item-img-overlay valign">
                      <div class="overlay-info full-width vertical-center">
                        <h6>Crearive Design</h6>
                        <p>Work description here</p>
                      </div>
                      <a href="assets/img/portfolio/1.jpg" class="popimg">
                        <i class="icofont icofont-image"></i>
                      </a>
                    </div>
                </div>
              </div>

              {/* <!-- gallery item --> */}
              <div class="items web">
                <div class="item-img">
                  <img src="assets/img/portfolio/2.jpg" alt="image" />
                    <div class="item-img-overlay valign">
                      <div class="overlay-info full-width vertical-center">
                        <h6>Crearive Design</h6>
                        <p>Work description here</p>
                      </div>
                      <a href="assets/img/portfolio/2.jpg" class="popimg">
                        <i class="icofont icofont-image"></i>
                      </a>
                    </div>
                </div>
              </div>

              {/* <!-- gallery item --> */}
              <div class="items width2 graphic">
                <div class="item-img">
                  <img src="assets/img/portfolio/3.jpg" alt="image" />
                    <div class="item-img-overlay valign">
                      <div class="overlay-info full-width vertical-center">
                        <h6>Crearive Design</h6>
                        <p>Work description here</p>
                      </div>
                      <a href="assets/img/portfolio/3.jpg" class="popimg">
                        <i class="icofont icofont-image"></i>
                      </a>
                    </div>
                </div>
              </div>

              {/* <!-- gallery item --> */}
              <div class="items width2 brand">
                <div class="item-img">
                  <img src="assets/img/portfolio/4.jpg" alt="image"/>
                    <div class="item-img-overlay valign">
                      <div class="overlay-info full-width vertical-center">
                        <h6>Crearive Design</h6>
                        <p>Work description here</p>
                      </div>
                      <a href="assets/mg/portfolio/4.jpg" class="popimg">
                        <i class="icofont icofont-image"></i>
                      </a>
                    </div>
                </div>
              </div>

              {/* <!-- gallery item --> */}
              <div class="items brand">
                <div class="item-img">
                  <img src="assets/img/portfolio/5.jpg" alt="image" />
                    <div class="item-img-overlay valign">
                      <div class="overlay-info full-width vertical-center">
                        <h6>Crearive Design</h6>
                        <p>Work description here</p>
                      </div>
                      <a href="assets/img/portfolio/5.jpg" class="popimg">
                        <i class="icofont icofont-image"></i>
                      </a>
                    </div>
                </div>
              </div>

              {/* <!-- gallery item --> */}
              <div class="items web">
                <div class="item-img">
                  <img src="assets/img/portfolio/6.jpg" alt="image" />
                    <div class="item-img-overlay valign">
                      <div class="overlay-info full-width vertical-center">
                        <h6>Crearive Design</h6>
                        <p>Work description here</p>
                      </div>
                      <a href="assets/img/portfolio/6.jpg" class="popimg">
                        <i class="icofont icofont-image"></i>
                      </a>
                    </div>
                </div>
              </div>

              {/* <!-- gallery item --> */}
              <div class="items brand">
                <div class="item-img">
                  <img src="assets/img/portfolio/7.jpg" alt="image" />
                    <div class="item-img-overlay valign">
                      <div class="overlay-info full-width vertical-center">
                        <h6>Crearive Design</h6>
                        <p>Work description here</p>
                      </div>
                      <a href="assets/img/portfolio/7.jpg" class="popimg">
                        <i class="icofont icofont-image"></i>
                      </a>
                    </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        <svg class="wave dark" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 81.717" enable-background="new 0 0 1920 81.717" xml:space="preserve"><path style="" d="M1920,0c0,0-109.246,46.107-316.333,67.334C1343.5,94,1137.095,77.238,999.167,67.5C854,57.25,637.662,24.697,541.709,18.834C375.334,8.666,147,11,0,37.875V0H1920L1920,0z"></path></svg>
      </section>
    )

}

export default Portfolio