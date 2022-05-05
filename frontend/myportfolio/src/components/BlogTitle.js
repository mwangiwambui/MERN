import React from 'react';

const BlogTitle = (props) => {
  const { title, link, thumbnail, content, pubDate } = props.blogData;

  function cleanTitle(checkTitle){
    checkTitle = checkTitle.replace("amp;", "");
    return checkTitle
  }
  function truncateText(text, start, len){
    return text.length > len ? text.slice(start, len) : text;
  }

  //to take html content and parse it as HTML
  function toText(block) {
    let tag = document.createElement('div');
    tag.innerHTML = block;
    block = tag.innerText;
    return block
  }

  //format date and return it a friendly way
  function convertDate(date){
    let dateArray = date.slice(0,10).split("-")
    let year = dateArray.shift();
    dateArray.push(year)
    console.log(date)
    return `Published : ${dateArray.join("/")}`
  }
  // function blogPost(){
  //   return <a target="_blank" rel="noopener noreferrer" href={`${link}`}/>

  // }
  return (
    <div className="col-lg-4">
      <div className="item mb-md50">
        <div className="post-img position-re o-hidden">
          <img className="imageContainer" src={`${thumbnail}`} alt="" />
        </div>
        <div className="content">
          <span className="data">
            <a target="_blank" rel="noopener noreferrer" href={`${link}`} className="undecro">{truncateText(cleanTitle(title), 0, 60)}</a>
            <a target="_blank" rel="noopener noreferrer" href={`${link}`} className="undecro">{convertDate(pubDate)}</a>
          </span>
          <h5><a target="_blank" rel="noopener noreferrer" href={`${link}`} className="undecro">{truncateText(toText(content), 0, 100) + "..."}</a></h5>

          <a target="_blank" rel="noopener noreferrer" href={`${link}`} className="more mt-30">
            <span>Read More</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default BlogTitle;