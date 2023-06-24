import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer';
import Navbar from '../Components/Shared/Navbar';

const Account = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>    
        </div>
    );
};

export default Account;