import React from 'react';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router';

const Book = ({ book }) => {
    const { bookId, bookName, image, rating, category, tags, publisher, yearOfPublishing } = book;
    return (
       <Link to={`/bookDetails/${bookId}`}>
            <div className="card border-1 border-cyan-900 p-6 shadow-sm">
                <figure className='bg-gray-800 w-2/3 mx-auto rounded p-4'>
                    <img className='h-[166px] shadow-2xl'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex'>
                        {
                            tags.map((tag, index) => <p key={index}
                                className='text-[#0def42]'
                            >{tag}</p>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">{yearOfPublishing}</div>
                    </h2>

                    <div className=''>
                        <p className='w-5/6'>by: {publisher}</p>
                    </div>

                    <div className="card-actions justify-between border-t-2 border-dashed p-2">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{rating} <CiStar /> </div>


                    </div>
                </div>
            </div>
       </Link>
    );
};

export default Book;