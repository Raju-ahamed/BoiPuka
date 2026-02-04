import React from 'react';

const Book = ({ book }) => {
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing }=book;
    return (
        <div className="card border-1 border-cyan-900 shadow-sm">
            <figure>
                <img className='w-80 h-55 rounded-b-3xl shadow-2xl'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="text-3xl">
                    {bookName}
                </h2>
               
                    <div className='grid grid-cols-2 items-center'>
                    <p className='w-5/6'>{author}</p>
                    <div className="badge bg-[#15bf09] w-15 h-4 p-2">{category}</div>
                    </div>
          
                <div className="card-actions">
                    {
                        tags.map((tag, index) =><div key={index} className="badge badge-outline">{tag}</div>
                    )
                    }
                    <p className="text-sm rounded-2xl">{rating}</p>
                </div>
            </div>
        </div>
    );
};

export default Book;