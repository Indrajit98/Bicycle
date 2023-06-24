import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaUserFriends } from "react-icons/fa";

import '../../Style/OurAchievement.css'

const OurAchievement = () => {

    const { data: users = [] } = useQuery({
        queryKey: ['user'],
        queryFn: () => fetch(`https://bicyle-server-side-indrajit98.vercel.app/users`)
            .then(res => res.json())
    });

    const { data: sellers = [] } = useQuery({
        queryKey: ['user'],
        queryFn: () => fetch(`https://bicyle-server-side-indrajit98.vercel.app/allseller/Seller`)
            .then(res => res.json())
    });

    return (
        <div className='container mx-auto relative my-12 '>
            <div className='h-96 image '  >
                <img className='h-full w-full object-cover' src='https://i.ibb.co/W2Nwt1q/atharva-whaval-00-Ft-I1-Ox-MUI-unsplash.jpg' alt="" />

            </div>
            <div className='absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-2/4 text-slate-50'>
                <div>
                    <h3 className='md:text-5xl text-xl uppercase font-bold'>Our Achievement</h3>
                    <div className='flex items-center justify-around'>
                        <p className='md:text-3xl py-4 font-bold'> <FaUserFriends></FaUserFriends>Total User {users.length}</p>
                        <p className='md:text-3xl font-bold'> <FaUserFriends></FaUserFriends>Total Seller {sellers.length}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurAchievement;