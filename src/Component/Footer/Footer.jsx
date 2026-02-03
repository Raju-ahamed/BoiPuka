import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-[#000] p-2 h-50 rounded-t-2xl'>
            <div className='m-7 w-11/12 mx-auto flex justify-between'>
                <div className='text-2xl font-bold'>BOI<span className='text-[#40f40a]'>PUKA</span></div>
                <div>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                </div>
            </div>
            <div>All Right Reserve</div>
        </footer>
    );
};

export default Footer;