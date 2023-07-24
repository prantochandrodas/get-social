import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Contexts/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import logo from '../../assets/logo/logo.png';
const Signup = () => {
    const { createUser, userUpdata } = useContext(AuthContext);
    const navigate = useNavigate();
    const [loading, SetLoading] = useState(false);
    const [signUpError, setSignUpError] = useState('');
    const imgHostKey = import.meta.env.VITE_imgbb_key;
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handelSignUp = (data) => {
        setSignUpError('')
        SetLoading(true);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                if (user?.uid) {
                    const image = data.photo[0];
                    const formData = new FormData();
                    formData.append("image", image);
                    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
                    fetch(url, {
                        method: 'POST',
                        body: formData
                    })
                        .then(res => res.json())
                        .then(imageData => {
                            console.log(imageData.url);
                            
                            const info = {
                                displayName: data.name,
                                photoURL: imageData.data.url,
                            }
                            console.log(info);
                            userUpdata(info)
                                .then(() => { })
                                .catch(error => console.log(error))

                            if (imageData.success) {
                                const userInfo = {
                                    password: data.password,
                                    name: data.name,
                                    photoURL: imageData.data.url,
                                    email: data.email
                                }
                                saveUser(userInfo)
                            }
                        })
                }
                SetLoading(false);
            })
            .catch(err => {
                setSignUpError(err);
                SetLoading(false);
            })
    }
    const saveUser = (userInfo) => {
        const user = {
            name: userInfo.name,
            email: userInfo?.email,
            photo: userInfo?.photoURL
        }
        fetch('http://localhost:5000/addUser', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(result => {
                if (result == false) {
                    setSignUpError('User name or email already exist')
                    SetLoading(false);
                } else {
                    const currentUser = {
                        email: userInfo.email
                    }
                    console.log(currentUser)
                    fetch('https://house-hunter-server-eta.vercel.app/jwt', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(currentUser)
                    })
                    .then(res => res.json())
                    .then(newData=>{
                        localStorage.setItem('token', newData.token)
                        SetLoading(false);
                        navigate('/')
                    })
                    navigate('/');
                }
            })
    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <main className="w-full h-full flex flex-col items-center justify-center bg-gray-50 sm:px-4">
                <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
                    <div className="text-center">
                        <img src={logo} width={150} className="mx-auto" />
                        <div className="mt-5 space-y-2">
                            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">SignUp your account</h3>
                            <p className="">Do you have an account? <Link to='/login' className="font-medium text-indigo-600 hover:text-indigo-500">Login</Link></p>
                        </div>
                    </div>
                    <div className="bg-white shadow p-4 py-6 space-y-8 sm:p-6 sm:rounded-lg">

                        <form
                            onSubmit={handleSubmit(handelSignUp)}
                            className="space-y-5"
                        >
                            <div>
                                {signUpError && <p className='text-red-600 my-4 text-xl'>{signUpError}</p>}
                            </div>
                            <div>
                                <label className="font-medium">
                                    Name
                                </label>
                                <input
                                    {...register("name", { required: "Name is required" })}
                                    type="text"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                                {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
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
                            <div>
                                <label className="font-medium">
                                    Photo
                                </label>
                                <input
                                    {...register("photo", { required: "photo is required" })}
                                    type="file"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                                {errors.photo && <p className='text-red-600'>{errors.photo?.message}</p>}
                            </div>
                            <button
                                className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                            >
                                Sign up
                            </button>

                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Signup;