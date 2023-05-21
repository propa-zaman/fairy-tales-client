import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Navbar/Navbar';
import Footer from '../pages/Footer/Footer';
import { Toaster } from 'react-hot-toast';


const Main = () => {
    return (
        <div>
            
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
                <Toaster></Toaster>
           
        </div>
    );
};

export default Main;