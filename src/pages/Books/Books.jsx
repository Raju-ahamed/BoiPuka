import React from 'react';
import Book from './Book/Book';

const Books = ({ allData }) => {
    return (
        <div className='w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 m-10  gap-3'>
            {
                allData.map(book=><Book 
                    key={book.bookId}
                    book={book}
                ></Book>)
            }
        </div>
    );
};

export default Books;