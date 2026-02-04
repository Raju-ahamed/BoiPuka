import React from 'react';
import BooksImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 p-10 h-120 m-5 ">
            <div className=" md:flex">
                <div className='w-150 h-50'>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
                <img
                    src={BooksImage}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
            </div>
        </div>
    );
};

export default Banner;