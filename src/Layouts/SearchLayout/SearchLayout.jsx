import React from 'react';
import Headerr from '../../pages/Header/Headerr';
import Search from '../../pages/Search/Search';
import { Outlet, useLoaderData } from 'react-router-dom';
import MobileNav from '../../pages/MobileNav/MobileNav';

const SearchLayout = () => {
    const data = useLoaderData()
    const postSerch = data[1];
    const userDatas = data[0];
    // console.log(postSerch, userDatas)
    return (
        <div>
            <div className='flex jusify-between'>
                <div className='hidden lg:block w-[320px]'>
                    <Headerr></Headerr>
                </div>
                <div className='px-[200px] hidden lg:block'>
                    <Search
                        postSerch={postSerch}
                        userDatas={userDatas}
                    ></Search>
                </div>
            </div>
            <div className="lg:hidden">
                <div className='px-2'>
                    <Search
                        postSerch={postSerch}
                        userDatas={userDatas}
                    ></Search>
                </div>
                <Outlet></Outlet>
                <div className="fixed bottom-0 right-0 left-0">
                    <MobileNav></MobileNav>
                </div>
            </div>
        </div>
    );
};

export default SearchLayout;