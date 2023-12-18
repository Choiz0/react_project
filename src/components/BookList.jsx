import React from 'react'
import BookCard from './BookCard';

const BookList = ({books}) => {
    if(!books){
        return <div>No matching book found...</div>
    }
    const renderedBooks = books.map(item => {
        const {id, volumeInfo} = item;
        const {title, authors, description, imageLinks} = volumeInfo;
        const {smallThumbnail} = imageLinks;
        return {
            id,
            title,
            authors,
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