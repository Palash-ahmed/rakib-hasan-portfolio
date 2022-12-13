import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import Header from '../Pages/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='lg:w-10/12  w-11/12 mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;