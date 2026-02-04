import React from 'react';
import Navbar from '../../Component/Header/NavBar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Component/Footer/Footer';

const Home = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;