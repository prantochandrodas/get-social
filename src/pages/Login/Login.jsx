import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Contexts/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { GoogleAuthProvider } from 'firebase/auth';
import logo from '../../assets/logo/logo.png'
const Login = () => {
    const {loginUser,createUserWithGoogle}=useContext(AuthContext);
    const navigate=useNavigate();
    const provider = new GoogleAuthProvider();
    const [LoginError,setLoginError]=useState('')
    const [loading,setLoding]=useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handelLogin=data=>{
        setLoding(true);
        setLoginError('')
        loginUser(data.email,data.password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            navigate('/');
            setLoding(false);
        })
        .catch(error=>{
            setLoding(false);
            setLoginError(error.message);
        });
    }

    const handelGoogleSignUp=()=>{
        setLoding(true);
        createUserWithGoogle(provider)
        .then(result=>{
            const user=result.user;
            console.log(user);
            navigate('/');
            setLoding(false);
        })
        .catch(error=>{
            setLoginError(error.message);
            setLoding(false);
        })
    }

    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
            <main className="w-full h-full flex flex-col items-center justify-center bg-gray-50 sm:px-4">
                <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
                    <div className="text-center">
                        <img src={logo} width={150} className="mx-auto" />
                        <div className="mt-5 space-y-2">
                            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Login your account</h3>
                            <p className="">Do you have an account? <Link to="/signUp" className="font-medium text-indigo-600 hover:text-indigo-500">Sign Up</Link></p>
                        </div>
                    </div>
                    <div className="bg-white shadow p-4 py-6 space-y-8 sm:p-6 sm:rounded-lg">

                        <form
                            onSubmit={handleSubmit(handelLogin)}
                            className="space-y-5"
                        >
                            <div>
                                {LoginError && <p className='text-red-600 my-4 text-xl'>{LoginError}</p>}
                            </div>
                            <div>
                                <label className="font-medium">
                                    Email
                                </label>
                                <input
                                    {...register("email", { required: "email Address is required" })}
                                    type="email"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                                {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                            </div>
                            <div>
                                <label className="font-medium">
                                    Password
                                </label>
                                <input
                                    {...register("password", { required: "password is required" })}
                                    type="password"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                                {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                            </div>
                            <button
                                className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                            >
                                Login up
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Login;