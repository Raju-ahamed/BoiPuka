import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getFromLocalStorage } from '../../Component/BookDetals/LocalStorage';
import Book from '../Books/Book/Book';
import { wishGetFromLocal } from '../../Component/BookDetals/WishlistLoacls';

const About = () => {
    const [Books, setBooks] = useState([]);
    const [WishBooks, setWishBooks] = useState([]);
    const allBooks = useLoaderData();
    useEffect(() => {
        const selectedBooks = getFromLocalStorage();
        const selectId = selectedBooks.map(id => id)
        const myReadList = allBooks.filter(b => selectId.includes(b.bookId));
        setBooks(myReadList);


    }, []);
    useEffect(()=>{
        const selectedBooks = wishGetFromLocal();
        const selectId = selectedBooks.map(id => id)
        const myReadList = allBooks.filter(b => selectId.includes(b.bookId));
        setWishBooks(myReadList);
    },[])
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <div className='w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 m-10  gap-3'>
                    {
                        Books.map(book => <Book
                        key={book.bookId}
                            book={book}
                        ></Book>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 m-10  gap-3'>
                        {
                            WishBooks.map(book => <Book
                                key={book.bookId}
                                book={book}
                            ></Book>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default About;