import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import defaultImage from "../assets/defaultImage.png";

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
  const thumbnail = imageLinks ? imageLinks.thumbnail : defaultImage;
  const des = description.replace(/<[^>]*>?/gm, "");
  return (
    <div>
      <div className="bookdetail">
        <div>
          <Link to="/">
            <button className="btn">Back</button>
          </Link>
        </div>
        <img src={thumbnail} alt={title} className="detailImg" />
        <h2 className="title">{title}</h2>
        <h3 className="authors">Author : {authors || "None"}</h3>
        <h3 className="publisher">Publisher :{publisher || "None"}</h3>
        <h3 className="subtitle"> Subtitle : {subtitle || "None"}</h3>
        <p className="description">
          Description:
          <br /> {des || "None"}
        </p>
      </div>
    </div>
  );
};

export default Book;
