import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const singleBookurl = "https://www.googleapis.com/books/v1/volumes/";

export const loader = async ({ params }) => {
  const { id } = params;
  const data = await axios.get(`${singleBookurl}${id}`);

  return { id, data };
};
const Book = () => {
  const { id, data } = useLoaderData();
  const { volumeInfo } = data.data;
  const { title, authors, description, imageLinks, publisher, subtitle } =
    volumeInfo;
const des = description.replace(/<[^>]*>?/gm, '');
  return (
    <div>
      <header>
        <Link to="/" className="btn">
          Back
        </Link>
      </header>

      <div className="bookdetail">
        <img src={imageLinks.thumbnail} alt={title} />
        <h2 className="title">{title}</h2>
        <h3 className="authors">Author : {authors}</h3>
        <h3 className="publisher">Publisher :{publisher}</h3>
        <h3 className="subtitle"> Subtitle : {subtitle || "None"}</h3>
        <p className="description">Description:<br/> {des}</p>
      </div>
    </div>
  );
};

export default Book;
