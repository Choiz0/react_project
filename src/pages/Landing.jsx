import { useSearchParams,Link } from "react-router-dom";
import axios from "axios";
import BookList from "../components/BookList";
import SearchForm from "../components/SearchForm";
import { useQuery } from "@tanstack/react-query";
import noResult from "../assets/noResult.png";

const url = "https://www.googleapis.com/books/v1/volumes?q=";

const fetchBooks = async (searchTerm) => {
  try {
    const response = await axios.get(`${url}${encodeURIComponent(searchTerm)}`);

    return response.data.items || [];
  } catch (error) {
    console.error("API 요청 중 오류 발생:", error);
    return [];
  }
};

const Landing = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "javascript";

  const {
    data: books,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["books", searchTerm],
    queryFn: () => fetchBooks(searchTerm),
    keepPreviousData: true,
  });

  if (isLoading) return <div className="loading"></div>;

  if (isError) return <div>Error: {error.message}</div>;
  if (books.length === 0) return <div className="box ">
   <div><Link to="/" className="btn" >Back</Link></div>
    <img src={noResult} alt="noResult" className="noResult " />
    <h2 className="noBooks" > Sorry!!<br/><br/>No books found..</h2>
    </div>;
  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <BookList books={books} />
    </>
  );
};

export default Landing;
