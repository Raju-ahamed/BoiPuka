import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex font-semibold justify-between bg-cyan-900 mx-auto p-4 rounded-b-2xl'>
            <div className='text-2xl'>Boi<span className='text-[#40f40a]'>Puka</span> </div>
            <div>
                <ul className='pt-1.5 flex gap-2 items-center'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                </ul>
            </div>
            <div className='flex gap-2'>
                <button className='text-[#40f40a] btn btn-ghost'>Log in</button>
                <button className='text-[#40f40a] btn btn-ghost'>Sign Up</button>
            </div>
        </nav>
    );
};

export default Navbar;