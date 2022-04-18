import React, {Component} from 'react'

const Blog = () => {
  // To handle the svg element
  const attributeElements={

  }
    return (
      <section className="blog section-padding bg-dark position-re" data-scroll-index="4">
            <div className="container">
                <div className="row">
                    
                    <div className="section-head text-center col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                        <h4>Our Blog</h4>
                    </div>
                    <div className="clearfix full-width"></div>

                    <div className="col-lg-4">
                        <div className="item mb-md50">
                            <div className="post-img position-re o-hidden">
                                <img src="assets/img/blog/01.jpg" alt=""/>
                            </div>
                            <div className="content">
                                <span className="data">
                                    <a href="#0" className="undecro">WordPress</a>
                                    <a href="#0" className="undecro">March 21 - 2018</a>
                                </span>
                                <h5><a href="#0" className="undecro">Your ideal WordPress theme is here.</a></h5>

                                <a href="#0" className="more mt-30">
                                    <span>Read More</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="item mb-md50">
                            <div className="post-img position-re o-hidden">
                                <img src="assets/img/blog/03.jpg" alt=""/>
                            </div>
                            <div className="content">
                                <span className="data">
                                    <a href="#0" className="undecro">ThemeForest</a>
                                    <a href="#0" className="undecro">March 21 - 2018</a>
                                </span>
                                <h5><a href="#0" className="undecro">How to improve your business ?</a></h5>

                                <a href="#0" className="more mt-30">
                                    <span>Read More</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="item">
                            <div className="post-img position-re o-hidden">
                                <img src="assets/img/blog/02.jpg" alt=""/>
                            </div>
                            <div className="content">
                                <span className="data">
                                    <a href="#0" className="undecro">Lifestyle</a>
                                    <a href="#0" className="undecro">March 21 - 2018</a>
                                </span>
                                <h5><a href="#0" className="undecro">Style workspaces for your inspiration.</a></h5>

                                <a href="#0" className="more mt-30">
                                    <span>Read More</span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
            <svg className="wave" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 81.717" enable-background="new 0 0 1920 81.717" xmlSpace="preserve"><path d="M1920,0c0,0-109.246,46.107-316.333,67.334C1343.5,94,1137.095,77.238,999.167,67.5C854,57.25,637.662,24.697,541.709,18.834C375.334,8.666,147,11,0,37.875V0H1920L1920,0z"></path></svg>
        </section>
    )
  
}

export default Blog