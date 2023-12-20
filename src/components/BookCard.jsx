import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({
  id,
  title,
  authors,
  description,
  publisher,
  smallThumbnail,
}) => {

  return (
    <div className="card">
      <img src={smallThumbnail} alt={title} />
      <div className="bookinfo">
        <h5 className="title">
          {title.length > 30 ? title.slice(0, 50) + "..." : title}
        </h5>
        <p className="text-small">
          By{" "}
          {authors
            ? authors.join(" ").length > 20
              ? authors.join(" ").slice(0,20) + "..."
              : authors
            : "no authors found"}
        </p>
        <p className="text-small">
          {" "}
          {publisher ? `Published By ${publisher}` : " "}
        </p>
        <Link to={`${id}`} className="btn text-small">
          See the Book
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
