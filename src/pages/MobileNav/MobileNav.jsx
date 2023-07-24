import { AiFillHome } from "react-icons/ai";
import { BiLogOut, BiUserCircle } from "react-icons/bi";
import { FaRegCompass, FaRegPlusSquare } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import SearchModal from "../SearchModal/SearchModal";
import { Link } from "react-router-dom";
const MobileNav = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="bgcolor">
            <nav>
                <div className="flex justify-between p-4">
                    <Link to='/' className="text-[25px]">
                        <AiFillHome></AiFillHome>
                    </Link>
                    <Link to='/mobileSearch' className="text-[25px] font-bold">
                        <BsSearch></BsSearch>
                    </Link>
                   
                    <div className="text-[25px] font-bold">
                        <FaRegCompass></FaRegCompass>
                    </div>
                    <Link to='/create' className="text-[25px] font-bold">
                        <FaRegPlusSquare></FaRegPlusSquare>
                    </Link>
                    {
                        user?.uid ? <div className="text-[25px] font-bold">
                            <BiLogOut></BiLogOut>
                        </div> : <div className="text-[25px] font-bold">
                            <BiUserCircle></BiUserCircle>
                        </div>
                    }
                </div>
            </nav>
        </div>
    );
};

export default MobileNav;