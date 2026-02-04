import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { setToLocalStorage } from './LocalStorage';

const BooksDetails = () => {
    const idstr = useParams();
    const id = parseInt(idstr.id)
    const books = useLoaderData();



    const clickBook = books.find(book => book.bookId === id);
    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = clickBook;


// localStorage setUp

const handleLocalStorageSetUp=(id)=>{
    setToLocalStorage(id);
}


    return (
        <div className='w-11/12 mx-auto flex justify-between m-10'>
            <div className='w-1/2'>
                <img
                    className='w-80 h-110 rounded-xl bg-gray-600 p-22 shadow-2xl'
                    src={image} alt="" />
            </div>
            <div className='w-1/2'>
                <div>
                    <h1 className='text-4xl'>{bookName}</h1>
                    <p className='text-xl'>By : {author}</p>
                </div>
                <h1 className='border-y-2 my-4 py-4 text-2xl'>{category}</h1>

                <p> <span className='font-bold'>Review</span> : {review}</p>
                <p className='border-b-2  py-4 '><span className='font-bold'>Tag</span> : {
                    tags.map((tag,index) => <span key={index} className='m-2 bg-green-200 text-black rounded-2xl p-2' >#{tag}</span>)
                }</p>

                <div className='my-3'>
                    <h1>Number Of Pages :     {totalPages}</h1>
                    <p>Publisher :            {publisher}</p>
                    <p>Year Of Publishing :   {yearOfPublishing}</p>
                    <p>Rating :               {rating}</p>
                </div>

                <div className='flex gap-2'>
                    <button onClick={()=>handleLocalStorageSetUp(id)} className='btn btn-success'>Read</button>
                    <button className='btn btn-accent'>Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BooksDetails;