import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import { useQuery } from 'react-query';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import './MyProfile.css'
import Loading from '../Loading/Loading';
import { Link, useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';
const MyProfile = () => {
    const { user } = useContext(AuthContext);
    const myPost = useLoaderData();
    console.log(myPost[0]);
    return (
        <div className='h-full min-h-screen lg:w-[50%] mx-auto '>
            <div className='p-4 flex items-center bg-white lg:w-[450px] lg:ml-4 rounded-xl'>
                <div className='flex flex-col items-center'>
                    <div className="avatar">
                        <div className="w-[100px] rounded-full">
                            <img src={myPost[1]?.photo} className="w-12 h-12 rounded-full" />
                        </div>
                    </div>
                    <p className='font-semibold text-xl '>{myPost[1]?.name}</p>
                </div>
                <div className='px-8 flex flex-col items-center'>
                    <span className='font-bold text-[20px]'>{myPost[0]?.length}</span>
                    <p className='font-semibold text-[15px]'>Posts </p>
                </div>
                <div className='px-8 flex flex-col items-center'>
                    <span className='font-bold text-[20px]'>{myPost[1]?.follower?.length}</span>
                    <p className='font-semibold text-[15px]'>Followers </p>
                </div>

            </div>
            <div className='lg:p-4 '>
                {
                    myPost[0]?.map(data => <Post
                        key={data._id}
                        post={data}
                    ></Post>)
                }

              
            </div>
        </div>
    );
};

export default MyProfile;