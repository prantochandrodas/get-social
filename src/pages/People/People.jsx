import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const People = ({ DatabaseUser, addFollower, unFollow }) => {
    const { user } = useContext(AuthContext);
    
    return (
        <div className='my-6 flex items-center'>
            {
                user?.email == DatabaseUser?.email ? <></> : <>
                    <Link to={`/myProfile/${DatabaseUser?.email}`} className='flex items-center'>
                        <div className="avatar mr-4">
                            <div className="w-12 rounded-full">
                                <img src={`${DatabaseUser?.photo}`} className="w-12 h-12 rounded-full" />
                            </div>
                        </div>
                        <p className='text-lg font-bold'>{DatabaseUser?.name}</p>
                    </Link>
                    {
                        user?.email? <>{
                            DatabaseUser?.follower?.includes(user?.email) ? <p className='text-[#3578E5] font-semibold float-right ml-4 cursor-pointer' onClick={() => unFollow(DatabaseUser)}>UnFollow</p> : <p className='text-[#3578E5] font-semibold float-right ml-4 cursor-pointer' onClick={() => addFollower(DatabaseUser)}>Follow</p>
                        }</>:<></>
                    }
                   
                    </>
            }


        </div>
    );
};

export default People;