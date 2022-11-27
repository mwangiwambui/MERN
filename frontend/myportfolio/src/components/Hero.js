import React from 'react'

const Hero = () => {
    return (
      <section className="hero section-padding position-re" data-scroll-index="1">
      <div className="container">
          <div className="row">
              
              <div className="col-lg-5">
                  <div className="hero-img">
                      <img src="assets/img/portfolio2.jpg" alt="" />
                  </div>
              </div>

              <div className="offset-lg-1 col-lg-6">
                  <div className="content">
                      <h6>Who am i</h6>
                      <h4>Wambui Mwangi.</h4>
                      <h5>Backend Software Engineer</h5>
                      <p className="mb-10">Hi There!</p>
                      <p className="mb-40">Join me in my incredible journey as I make beautiful things, try out new technologies, and share my experience collectively by developing with different tools. The web is full of opportunities. Why not explore them!</p>

                      <a href="Naomi%20Mwangi%20-%20System's%20Engineer.pdf" className="butn butn-bord" target="_blank">
                          <span>Download CV</span>
                      </a>
                      <a href="#0" className="butn butn-light" data-scroll-nav="5">
                          <span>Hire Me!</span>
                      </a>
                  </div>
              </div>

          </div>
      </div>

      <svg className="wave" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 81.717" enableBackground="new 0 0 1920 81.717" xmlSpace="preserve"><path 
      d="M1920,0c0,0-109.246,46.107-316.333,67.334C1343.5,94,1137.095,77.238,999.167,67.5C854,57.25,637.662,24.697,541.709,18.834C375.334,8.666,147,11,0,37.875V0H1920L1920,0z"></path></svg>
  </section>
    )
}

export default Hero