import BookCard from './BookCard';
import defaultImage from '../assets/defaultImage.png';

const BookList = ({books}) => {
    if(!books){
        return <div className='container'>No matching book found...</div>
    }
    const renderedBooks = books.map(item => {
        const {id, volumeInfo} = item;
        const {title, authors, description, imageLinks} = volumeInfo;
        const smallThumbnail = imageLinks  ?imageLinks.smallThumbnail : defaultImage;
        return {
            id,
            title,
            authors,
            publisher: volumeInfo.publisher,
            description,
            smallThumbnail
        }
    })
        return (
    <div className='cardlist'>
        {
            renderedBooks.map(book => {
                return <BookCard key={book.id} {...book} />
            })
        }
    </div>
  )
}

export default BookList