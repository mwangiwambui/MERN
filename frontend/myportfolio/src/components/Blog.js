import React, { useState, useEffect } from 'react'
import BlogTitle from './BlogTitle'

const Blog = () => {
  // To handle the svg element
  const rss2json = process.env.REACT_APP_MEDIUMLINK;
  console.log(rss2json)
  const [myBlog, setMyBlog ] = useState([]);

  useEffect(() => {
    fetch(rss2json)
    .then(res => res.json())
    .then(data => {
      setMyBlog(data)
      console.log(data)
    })
  }, [rss2json]);

  function displayBlogs(){
    return myBlog.items && myBlog.items.map(blog => {
      return blog.categories.length > 0 && <BlogTitle key={blog.puDate} blogData={blog} />
    })
  }
    return (
      <section className="blog section-padding bg-dark position-re" data-scroll-index="4">
            <div className="container">
                <div className="row">
                    
                    <div className="section-head text-center col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                        <h4>Our Blog</h4>
                    </div>
                    <div className="clearfix full-width"></div>
                <section className='posts section-padding'>
                  {/* <div className="container"> */}
                  <div className="row">
                      {displayBlogs()}
                  </div>
                  {/* </div> */}
                </section>   
                </div>
                <div className="offset-lg-5 col-md-12 text-center">
                        <button type="submit" className="butn butn-bg"><span>Read More</span></button>
                </div>
            </div>
            
            <svg className="wave" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 81.717" enable-background="new 0 0 1920 81.717" xmlSpace="preserve"><path d="M1920,0c0,0-109.246,46.107-316.333,67.334C1343.5,94,1137.095,77.238,999.167,67.5C854,57.25,637.662,24.697,541.709,18.834C375.334,8.666,147,11,0,37.875V0H1920L1920,0z"></path></svg>
        </section>
    )
  
}

export default Blog