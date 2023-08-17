import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaHome, FaSistrix, FaRegCompass, FaRegPlusSquare } from "react-icons/fa";
import { BiLogOut, BiUserCircle } from "react-icons/bi";
import logo from '../../assets/logo/logo.png'
import userlogo from '../../assets/logo/images.png'
import './Header.css'
import { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { useQuery } from "react-query";
import CreatePostModal from "../CreatePostModal/CreatePostModal";
import SearchModal from "../SearchModal/SearchModal";
// import CreatePostModal from "../CreatePostModal/CreatePostModal";
const Headerr = () => {
    const [open, setOpen] = useState(null)
    const { logOut, user } = useContext(AuthContext);
    console.log(user);
    const navigate = useNavigate();
    const handelLogout = () => {
        logOut()
            .then(() => {
                navigate('/signUp')
            })

    }
    return (
        <nav
            className="fixed top-0 left-0 w-full h-full border-r bg-[#ffffff] space-y-8 sm:w-80">
            <div className="flex flex-col h-full">
                <div className='h-20 flex items-center pr-8'>
                    <a href='javascript:void(0)' className='flex-none'>
                        <img src={logo} width={140} className="mx-auto" />
                    </a>
                </div>
                <div className="flex-1 flex flex-col h-full overflow-auto mt-4">

                    <div className="px-4 text-sm font-medium flex-1 mt-4 mb-4">
                        <NavLink to='/' className="flex justify-start items-center">
                            <div className="text-[20px] mr-2">
                                <FaHome></FaHome>
                            </div>
                            <NavLink to='/' className='text-lg cousor-pointer'>Home</NavLink>
                        </NavLink>
                        <label htmlFor="search-modal" className="flex justify-start items-center mt-4 mb-4">
                            <div className="text-[20px] mr-2">
                                <FaSistrix></FaSistrix>
                            </div>
                            <label htmlFor="search-modal" className='text-lg'>Search</label>
                            <SearchModal></SearchModal>

                        </label>
                        <Link to='/' className="flex justify-start items-center mt-4 mb-4">
                            <div className="text-[20px] mr-2">
                                <FaRegCompass></FaRegCompass>
                            </div>
                            <NavLink to='/' className='text-lg'>Explore</NavLink>
                        </Link>
                        <Link to="/createPost" className="flex justify-start items-center mt-4 mb-4" onClick={() => setOpen('open')}>
                            <div className="text-[20px] mr-2">
                                <FaRegPlusSquare></FaRegPlusSquare>
                            </div>
                            <label htmlFor="booking-modal" className='text-lg cursor-pointer'>Create</label>
                           
                        </Link>
                    </div>

                    <div>
                        {/* <ul className="px-4 pb-4 text-sm font-medium">
                            
                        </ul> */}
                        {
                            user?.uid ? <div className="px-4 text-sm font-medium flex-1 mt-4 mb-4">

                                <div onClick={handelLogout} className="cursor-pointer flex justify-start items-center mt-4 mb-4">
                                    <div className="text-[20px] mr-2">
                                        <BiLogOut></BiLogOut>
                                    </div>
                                    <a className='text-lg'>Logout</a>
                                </div>
                            </div> : <div className="px-4 text-sm font-medium flex-1 mt-4 mb-4">
                                <div className="flex justify-start items-center">
                                    <div className="text-[20px] mr-2">
                                        <BiUserCircle></BiUserCircle>
                                    </div>
                                    <NavLink to='/login' className='text-lg cursor-pointer'>Login</NavLink>/<NavLink to='/signUp' className='text-lg cursor-pointer'>Signup</NavLink>
                                </div>
                            </div>
                        }
                        {
                            user?.uid ? <div className="py-4 px-4 border-t">
                                <Link to={`/myProfile/${user?.email}`} className="flex items-center gap-x-4">

                                    <img src={user?.photoURL} className="w-12 h-12 rounded-full" />
                                    <div>
                                        <span className="block text-gray-700 text-sm font-semibold">{
                                            user?.displayName
                                        }</span>
                                        <a
                                            href="javascript:void(0)"
                                            className="block mt-px text-gray-600 hover:text-indigo-600 text-xs"
                                        >
                                            View profile
                                        </a>
                                    </div>
                                </Link>
                            </div> : <></>
                        }

                    </div>
                </div >
            </div>

        </nav>
    );
};

export default Headerr;