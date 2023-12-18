import React from 'react'
import {Link} from 'react-router-dom'

const BookCard = ({id,
    title,
    authors,
    description,
    smallThumbnail}) => {
  return (
 
        <div className="card">
           
                <img src={smallThumbnail} alt={title}  />
                <div className="bookinfo">
                <h2 className="title">{title}</h2>
                <h3 className="authors">{authors}</h3>
                <Link to={`${id}`} className="btn">Details</Link>
                </div>
              
              
           
        </div>

 
  )
}

export default BookCard