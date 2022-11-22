import React, { Component } from 'react'

const Portfolio = () => {
    return (
      <section className="portfolio section-padding position-re" data-scroll-index="3">
        <div className="container">
          <div className="row">

            <div className="section-head text-center col-lg-8 offset-lg-2 col-md-10 offset-md-1">
              <h4>Portfolio</h4>
            </div>

            {/* <!-- filter links --> */}
            <div className="filtering text-center col-sm-12">
              <span data-filter='*' className="active">All</span>
              <span data-filter='.brand'>Brand</span>
              <span data-filter='.web'>Web</span>
              <span data-filter='.code'>Code</span>
            </div>

            <div className="clearfix"></div>

            {/* <!-- gallery --> */}
            <div className="gallery text-center full-width">

              {/* <!-- gallery item --> */}
              <div className="items code">
                <div className="item-img">
                  <img src="assets/img/portfolio/spotify.png" alt="spotify" />
                    <div className="item-img-overlay valign">
                      <div className="overlay-info full-width vertical-center">
                        <h6>YouTube2Spotify</h6>
                        <p>Worked on a python script that adds all the liked songs on youtube to spotify.</p>
                      </div>
                      <a href="https://github.com/mwangiwambui/MPESA_PUSH" target="_blank" className="popimg">
                        <i className="icofont icofont-image"></i>
                      </a>
                    </div>
                </div>
              </div>

              {/* <!-- gallery item --> */}
              <div className="items web">
                <div className="item-img">
                  <img src="assets/img/portfolio/todoapp.png" alt="todoapp" />
                    <div className="item-img-overlay valign">
                      <div className="overlay-info full-width vertical-center">
                        <h6>TODOAPP</h6>
                        <p>A react todoapp that introduced me to react js, react hooks and react router.</p>
                      </div>
                      <a href="https://mwangiwambui.github.io/todoapp/" target="_blank" className="todoapp">
                        <i className="icofont icofont-image"></i>
                      </a>
                    </div>
                </div>
              </div>

              {/* <!-- gallery item --> */}
              <div className="items width2 code">
                <div className="item-img">
                  <img src="assets/img/portfolio/push.png" alt="image" />
                    <div className="item-img-overlay valign">
                      <div className="overlay-info full-width vertical-center">
                        <h6>MPESA_PUSH</h6>
                        <p>A small php project that enables a user to push an M-PESA stk push using the M-PESA APIs.</p>
                      </div>
                      <a href="https://github.com/mwangiwambui/MPESA_PUSH" target="_blank" className="popimg">
                        <i className="icofont icofont-image"></i>
                      </a>
                    </div>
                </div>
              </div>

              {/* <!-- gallery item --> */}
              <div className="items width2 code">
                <div className="item-img">
                  <img src="assets/img/portfolio/model.png" alt="image"/>
                    <div className="item-img-overlay valign">
                      <div className="overlay-info full-width vertical-center">
                        <h6>PAYLOANS</h6>
                        <p>A machine learning project that calculates the risk score of a lender targeting micro-finance
                        institutions such as saccos.</p>
                      </div>
                      <a href="https://github.com/mwangiwambui/payloans_v2" target="_blank" className="popimg">
                        <i className="icofont icofont-image"></i>
                      </a>
                    </div>
                </div>
              </div>

              {/* <!-- gallery item --> */}
              <div className="items brand">
                <div className="item-img">
                  <img src="assets/img/portfolio/5.jpg" alt="image" />
                    <div className="item-img-overlay valign">
                      <div className="overlay-info full-width vertical-center">
                        <h6>Crearive Design</h6>
                        <p>Work description here</p>
                      </div>
                      <a href="assets/img/portfolio/5.jpg" className="popimg">
                        <i className="icofont icofont-image"></i>
                      </a>
                    </div>
                </div>
              </div>

              {/* <!-- gallery item --> */}
              <div className="items web">
                <div className="item-img">
                  <img src="assets/img/portfolio/6.jpg" alt="image" />
                    <div className="item-img-overlay valign">
                      <div className="overlay-info full-width vertical-center">
                        <h6>Crearive Design</h6>
                        <p>Work description here</p>
                      </div>
                      <a href="assets/img/portfolio/6.jpg" className="popimg">
                        <i className="icofont icofont-image"></i>
                      </a>
                    </div>
                </div>
              </div>

              {/* <!-- gallery item --> */}
              <div className="items brand">
                <div className="item-img">
                  <img src="assets/img/portfolio/7.jpg" alt="image" />
                    <div className="item-img-overlay valign">
                      <div className="overlay-info full-width vertical-center">
                        <h6>Crearive Design</h6>
                        <p>Work description here</p>
                      </div>
                      <a href="assets/img/portfolio/7.jpg" className="popimg">
                        <i className="icofont icofont-image"></i>
                      </a>
                    </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        <svg className="wave dark" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 81.717" enable-background="new 0 0 1920 81.717" xmlSpace="preserve"><path d="M1920,0c0,0-109.246,46.107-316.333,67.334C1343.5,94,1137.095,77.238,999.167,67.5C854,57.25,637.662,24.697,541.709,18.834C375.334,8.666,147,11,0,37.875V0H1920L1920,0z"></path></svg>
      </section>
    )

}

export default Portfolio