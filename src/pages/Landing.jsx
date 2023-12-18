import { useLoaderData } from "react-router-dom"
import axios from 'axios'
import BookList from "../components/BookList";

const url  ="https://www.googleapis.com/books/v1/volumes?q="

export const loader = async () => {
    const searhTerm ='javascript';
    const response = await axios.get(`${url}${searhTerm}`);

    return {
        books:response.data.items, searhTerm
    }
}


const Landing = () => {
    const {books, searhTerm} = useLoaderData();
  
  return (
    <div>
        <BookList books={books} />

    </div>
  )
}

export default Landing