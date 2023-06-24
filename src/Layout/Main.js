import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../Components/Home/Banner';
import LeftSideNav from '../Components/Home/LeftSideNav';
import OurAchievement from '../Components/Home/OurAchievement';
import Footer from '../Components/Shared/Footer';
import Navbar from '../Components/Shared/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className='grid md:grid-cols-12 gap-5 grid-cols-1 container mx-auto md:mt-24'>
                <div className='md:col-span-3 col-span-12'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='md:col-span-9 col-span-12'>
                    <Outlet></Outlet>
                </div>
            </div>
            <OurAchievement></OurAchievement>
            <Footer></Footer>

        </div>
    );
};

export default Main;