import React from 'react'
import "./NewsCard.css"

const NewsCard = ({news}) => {
  return (
    <div className="cardContainer">
    <div className="imageContainer">
      <img
        src={news.image}
        alt={news.title}
        width={200}
        height={200}
      />
    </div>
    <div className="textContainer">
      <p style={{fontSize: "22px"}}>{news.title}</p>
      <p style={{fontSize: "16px", color: "#ddd"}}>
        {news.fullText.length > 30 ? news.fullText.slice(0, 30) + "..." : news + "..."}
        {"... "}
        <a href="#" className="readMore">
          Read More
        </a>
      </p>
    </div>
  </div>
  )
}

export default NewsCard