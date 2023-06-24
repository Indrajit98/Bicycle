
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer';
import Navbar from '../Components/Shared/Navbar';
import { AuthContext } from '../Contexts/AuthProvider';
import { useAdmin } from '../Hook/useAdmin';
import { useSeller } from '../Hook/useSeller';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile container mx-auto mt-12">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side md:mr-8 shadow-xl" data-aos="fade-up" >
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content md:text-xl">

                        <li><Link to='/dashboard'>My Order</Link></li>
                        {
                            isSeller && <>
                                <li className='mt-2'><Link to='/dashboard/seller'>Product Sell list</Link></li>
                                <li className='mt-2'><Link to='/dashboard/postProduct'>Post Product</Link></li>
                            </>
                        }

                        {
                            isAdmin &&
                            <>
                                <li className='mt-2'><Link to='/dashboard/allseller'>All Seller</Link></li>
                                <li className='mt-2'><Link to='/dashboard/alluser'>All User</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;