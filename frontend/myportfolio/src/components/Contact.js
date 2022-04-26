import React, {Component} from 'react'

const Contact = () => {
    return(
      <section className="contact section-padding position-re" data-scroll-index="5">
      <div className="container">
          <div className="row">

              <div className="section-head text-center col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                  <h4>Contact Us</h4>
              </div>

              <div className="col-lg-5">
                  <div className="info bg-img mb-md50" data-background="assets/img/map.png">
                      <div className="item">
                          <div className="cont">
                              <h6>Phone : </h6>
                              <p>+20 010 2517 8918</p>
                          </div>
                      </div>
                      <div className="item">
                          <div className="cont">
                              <h6>Address : </h6>
                              <p>3rd Avenue, Upper East Side,<br/> San Francisco</p>
                          </div>
                      </div>
                      <div className="item">
                          <div className="cont">
                              <h6>Email : </h6>
                              <p>email_support@youradress.com</p>
                          </div>
                      </div>
                  </div>
              </div>
              
              <div className="col-lg-7">

                  <form className="form" id="contact-form" method="post" action="contact.php">

                      <div className="messages"></div>

                      <div className="controls">

                          <div className="row">

                              <div className="col-md-6">
                                  <div className="form-group">
                                      <input id="form_name" type="text" name="name" placeholder="Name" required="required"/>
                                  </div>
                              </div>
                              <div className="col-md-6">
                                  <div className="form-group">
                                      <input id="form_email" type="email" name="email" placeholder="Email" required="required"/>
                                  </div>
                              </div>
                              <div className="col-md-12">
                                  <div className="form-group">
                                      <input id="form_subject" type="text" name="subject" placeholder="Subject"/>
                                  </div>
                              </div>
                              <div className="col-md-12">
                                  <div className="form-group">
                                      <textarea id="form_message" name="message" placeholder="Message" rows="4" required="required"></textarea>
                                  </div>
                              </div>

                              <div className="col-md-12 text-center">
                                  <button type="submit" className="butn butn-bg"><span>Send Message</span></button>
                              </div>

                          </div>                             
                      </div>
                  </form>
              </div>

          </div>
      </div>
      {/* TO be honest this is those days */}
      <svg className="wave dark" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 81.717" enable-background="new 0 0 1920 81.717" xmlSpace="preserve"><path 
      d="M1920,0c0,0-109.246,46.107-316.333,67.334C1343.5,94,1137.095,77.238,999.167,67.5C854,57.25,637.662,24.697,541.709,18.834C375.334,8.666,147,11,0,37.875V0H1920L1920,0z"></path></svg>
  </section>
    )
}

export default Contact