import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import Banner from '../Banner/Banner';
import Books from '../Books/Books';

const Home = () => {
    const allData = useLoaderData();
    
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<h1>loading</h1>}>
                <Books
                    allData={allData}
                ></Books>
            </Suspense>
        </div>
    );
};

export default Home;