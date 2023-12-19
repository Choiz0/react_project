import { useSearchParams } from "react-router-dom";
import axios from "axios";
import BookList from "../components/BookList";
import SearchForm from "../components/SearchForm";
import { useQuery } from "@tanstack/react-query";

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

  if (isLoading) return <div>Loading..</div>;

  if (isError) return <div>Error: {error.message}</div>;
  if (books.length === 0) return <div>No books found</div>;
  return (
    <div>
      <SearchForm searchTerm={searchTerm} />
      <BookList books={books} />
    </div>
  );
};

export default Landing;
