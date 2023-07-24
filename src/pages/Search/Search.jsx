import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import { useQuery } from 'react-query';
import Post from '../Post/Post';
import SearchUser from '../SearchUser/SearchUser';
import { useLoaderData } from 'react-router-dom';

const Search = ({userDatas,postSerch}) => {  
    return (
        <div className='min-h-screen'>
            <div className='bgcolor mt-[20px]'>
                {
                    userDatas?.length > 0 ? userDatas?.map(user => <SearchUser
                        key={user._id}
                        user={user}
                    ></SearchUser>) : <p>No user found</p>
                }
            </div>
            <div className='bgcolor mt-[20px]'>
                {
                    postSerch?.length > 0 ? postSerch?.map(post => <Post
                        key={post._id}
                        post={post}
                    ></Post>) : <p>No post found</p>
                }
            </div>
        </div>
    );
};

export default Search;