import React, { Component } from 'react'

const Services = () => {
    return (
      <section className="services section-padding bg-dark position-re" data-scroll-index="2">
        <div className="container">
          <div className="row">

            <div className="section-head text-center col-md-12">
              <h4>Services</h4>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="item mb-md50">
                <i className="icon icofont icofont-code-alt"></i>
                <h6>Fullstack Development</h6>
                <p>Development of APIs and microservices using NodeJs, Python, PHP.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="item mb-md50">
                <i className="icon icofont icofont-edit"></i>
                <h6>Technical Writing</h6>
                <p>Publishing and documenting software, code and APIs.</p>
              </div>
            </div>

            

            <div className="col-lg-3 col-md-6">
              <div className="item mb-sm50">
                <i className="icon icofont icofont-database"></i>
                <h6>Database Administration</h6>
                <p>Perfoming various data operations using SQL and NoSQL databases</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="item">
                <i className="icon icofont icofont-server"></i>
                <h6>DevOps</h6>
                <p>Service Reliability Engineering using tools such as ansible, python scripts and bash</p>
              </div>
            </div>

          </div>
        </div>

        <svg className="wave" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 81.717" enable-background="new 0 0 1920 81.717" xmlSpace="preserve"><path d="M1920,0c0,0-109.246,46.107-316.333,67.334C1343.5,94,1137.095,77.238,999.167,67.5C854,57.25,637.662,24.697,541.709,18.834C375.334,8.666,147,11,0,37.875V0H1920L1920,0z"></path></svg>
      </section>
    )
}

export default Services