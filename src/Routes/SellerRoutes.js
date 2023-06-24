
import React from 'react';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom/dist';
import { AuthContext } from '../Contexts/AuthProvider';
import { useSeller } from '../Hook/useSeller';

const SellerRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const [isSeller, isSellerLoading] = useSeller(user?.email)
    const location = useLocation();
    if (loading || isSellerLoading) {
        return <progress className="progress w-full"></progress>
    }
    if (user && isSeller) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>


};

export default SellerRoutes;