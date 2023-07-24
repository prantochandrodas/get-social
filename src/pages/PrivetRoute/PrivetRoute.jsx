import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';

const PrivetRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>

    }
    if (user) {
        return children;
    }
    toast.error('Please Login First', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    return <div>
        <Navigate to='/login' state={{ from: location }} replace></Navigate>;
    </div>
};

export default PrivetRoute;