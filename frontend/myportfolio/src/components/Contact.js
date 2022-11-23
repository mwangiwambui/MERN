import React, { useState} from 'react'

const Contact = () => {
  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  })
  function handleStateChange(e){
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ mailerState });
    const response = await fetch ("http://localhost:4000/send", {
      method: "POST",
      headers: {
        "Content-type":"application/json",
      },
      body: JSON.stringify({ mailerState }),
    })
    .then((res) => res.json())
    .then(async (res) => {
      const resData = await res;
      console.log(resData);
      if (resData.status === "success"){
        alert("Message Sent");
      }else if (resData.status === "fail"){
        alert("Message failed to send");
      }
    })
    .then(() => {
      setMailerState({
        email : "",
        name: "",
        subject: "",
        message: ""
      })
    })
  }
    return(
      <section className="contact section-padding bg-dark position-re" data-scroll-index="4">
      <div className="container">
          <div className="row">

              <div className="section-head text-center col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                  <h4>Contact Us</h4>
              </div>

              <div className="col-lg-5">
                  <div className="info bg-img mb-md50" data-background="assets/img/map.png">
                      <div className="item">
                          <div className="cont">
                              <h6>Location : </h6>
                              <p>Nairobi, <br/> Kenya</p>
                          </div>
                      </div>
                      <div className="item">
                          <div className="cont">
                              <h6>Email : </h6>
                              <p>wambu54mwangi@gmail.com</p>
                          </div>
                      </div>
                  </div>
              </div>
              
              <div className="col-lg-7">

                  <form className="form" onSubmit={submitEmail}>

                      <div className="messages"></div>

                      <div className="controls">

                          <div className="row">

                              <div className="col-md-6">
                                  <div className="form-group">
                                      <input 
                                      id="form_name" 
                                      type="text" 
                                      name="name" 
                                      placeholder="Name" 
                                      required="required"
                                      onChange={handleStateChange}
                                      value={mailerState.name}
                                      />
                                  </div>
                              </div>
                              <div className="col-md-6">
                                  <div className="form-group">
                                      <input 
                                      id="form_email" 
                                      type="email" 
                                      name="email" 
                                      placeholder="Email" 
                                      onChange={handleStateChange}
                                      value={mailerState.email}
                                      required="required"/>
                                  </div>
                              </div>
                              <div className="col-md-12">
                                  <div className="form-group">
                                      <input 
                                      id="form_subject" 
                                      type="text" 
                                      name="subject" 
                                      onChange={handleStateChange}
                                      value={mailerState.subject}
                                      placeholder="Subject"/>
                                  </div>
                              </div>
                              <div className="col-md-12">
                                  <div className="form-group">
                                      <textarea 
                                      id="form_message" 
                                      name="message" 
                                      placeholder="Message" 
                                      rows="4" 
                                      onChange={handleStateChange}
                                      value={mailerState.message}
                                      required="required"></textarea>
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
      <svg className="wave" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 81.717" enable-background="new 0 0 1920 81.717" xmlSpace="preserve"><path d="M1920,0c0,0-109.246,46.107-316.333,67.334C1343.5,94,1137.095,77.238,999.167,67.5C854,57.25,637.662,24.697,541.709,18.834C375.334,8.666,147,11,0,37.875V0H1920L1920,0z"></path></svg>

      {/* <svg className="wave dark" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 81.717" enableBackground="new 0 0 1920 81.717" xmlSpace="preserve"><path 
      d="M1920,0c0,0-109.246,46.107-316.333,67.334C1343.5,94,1137.095,77.238,999.167,67.5C854,57.25,637.662,24.697,541.709,18.834C375.334,8.666,147,11,0,37.875V0H1920L1920,0z"></path></svg> */}
  </section>
    )
}

export default Contact