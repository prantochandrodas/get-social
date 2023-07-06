import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaHome,FaSistrix,FaRegCompass,FaRegPlusSquare } from "react-icons/fa";
import { BiLogOut,BiUserCircle} from "react-icons/bi";
import logo from '../../assets/logo/logo.png'
import './Header.css'
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
// import CreatePostModal from "../CreatePostModal/CreatePostModal";
const Headerr = () => {
    const {logOut}=useContext(AuthContext);
    const navigate=useNavigate();
        const handelLogout = () => {
        logOut()
            .then(() => {
                // console.log('hi')
                navigate('/signUp')
            })

    }
    return (
        <nav
            className="fixed top-0 left-0 w-full h-full border-r bg-[rgba(255,255,255,255)] space-y-8 sm:w-80">
            <div className="flex flex-col h-full">
                <div className='h-20 flex items-center pr-8'>
                    <a href='javascript:void(0)' className='flex-none'>
                        <img src={logo} width={140} className="mx-auto" />
                    </a>
                </div>
                <div className="flex-1 flex flex-col h-full overflow-auto mt-4">
                    {/* <ul className="px-4 text-sm font-medium flex-1">
                    {
                        navigation.map((item, idx) => (
                            <li key={idx}>
                                <a href={item.href} className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150">
                                    <div className="text-gray-500">{item.icon}</div>
                                    {item.name}
                                </a>
                            </li>
                        ))
                    }
                </ul> */}
                    <div className="px-4 text-sm font-medium flex-1 mt-4 mb-4">
                        <div className="flex justify-start items-center">
                            <div className="text-[20px] mr-2">
                              <FaHome></FaHome>
                            </div>
                            <NavLink className='text-lg'>Home</NavLink>
                        </div>
                        <div className="flex justify-start items-center mt-4 mb-4">
                            <div className="text-[20px] mr-2">
                              <FaSistrix></FaSistrix>
                            </div>
                            <NavLink to='/search' className='text-lg'>Search</NavLink>
                        </div>
                        <div className="flex justify-start items-center mt-4 mb-4">
                            <div className="text-[20px] mr-2">
                              <FaRegCompass></FaRegCompass>
                            </div>
                            <NavLink to='/explore' className='text-lg'>Explore</NavLink>
                        </div>
                        <div  className="flex justify-start items-center mt-4 mb-4"  onClick={() => window.my_modal_1.showModal()}>
                            <div className="text-[20px] mr-2">
                              <FaRegPlusSquare></FaRegPlusSquare>
                            </div>
                            <Link  className='text-lg'>Create</Link>
                        </div>
                    </div>

                    <div>
                        {/* <ul className="px-4 pb-4 text-sm font-medium">
                            
                        </ul> */}
                        <div className="px-4 text-sm font-medium flex-1 mt-4 mb-4">
                        <div className="flex justify-start items-center">
                            <div className="text-[20px] mr-2">
                              <BiUserCircle></BiUserCircle>
                            </div>
                            <NavLink className='text-lg'>Login/Signup</NavLink>
                        </div>
                        <div  onClick={handelLogout} className="cursor-pointer flex justify-start items-center mt-4 mb-4">
                            <div className="text-[20px] mr-2">
                              <BiLogOut></BiLogOut>
                            </div>
                            <a  className='text-lg'>Logout</a>
                        </div>
                    </div>
                        <div className="py-4 px-4 border-t">
                            <div className="flex items-center gap-x-4">
                                <img src="https://randomuser.me/api/portraits/women/79.jpg" className="w-12 h-12 rounded-full" />
                                <div>
                                    <span className="block text-gray-700 text-sm font-semibold">Alivika tony</span>
                                    <a
                                        href="javascript:void(0)"
                                        className="block mt-px text-gray-600 hover:text-indigo-600 text-xs"
                                    >
                                        View profile
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
    
        </nav>
    );
};

export default Headerr;