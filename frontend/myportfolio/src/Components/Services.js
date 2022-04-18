import React, { Component } from 'react'

const Services = () => {
    return (
      <section class="services section-padding bg-dark position-re" data-scroll-index="2">
        <div class="container">
          <div class="row">

            <div class="section-head text-center col-md-12">
              <h4>Services</h4>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="item mb-md50">
                <i class="icon icofont icofont-paint"></i>
                <h6>Web Design</h6>
                <p>Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="item mb-md50">
                <i class="icon icofont icofont-ui-fire-wall"></i>
                <h6>Development</h6>
                <p>Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="item mb-sm50">
                <i class="icon icofont icofont-instrument"></i>
                <h6>Branding</h6>
                <p>Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="item">
                <i class="icon icofont icofont-chart-histogram-alt"></i>
                <h6>Marketing</h6>
                <p>Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat</p>
              </div>
            </div>

          </div>
        </div>

        <svg class="wave" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 81.717" enable-background="new 0 0 1920 81.717" xml:space="preserve"><path style="" d="M1920,0c0,0-109.246,46.107-316.333,67.334C1343.5,94,1137.095,77.238,999.167,67.5C854,57.25,637.662,24.697,541.709,18.834C375.334,8.666,147,11,0,37.875V0H1920L1920,0z"></path></svg>
      </section>
    )
}

export default Services