import { FcGallery } from "react-icons/fc";
import { BiSmile, BiSolidVideoPlus } from "react-icons/bi";
import CreatePostModal from "../CreatePostModal/CreatePostModal";
import userlogo from '../../assets/logo/images.png'
import { useContext, useState } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../Contexts/AuthProvider";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";
const CreatePost = () => {
    const [open, setOpen] = useState(null);
    console.log(open);
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className="bg-white p-4 lg:w-[450px] ">
            <div className="flex lg:justify-start justify-center items-center mb-4 cursor-pointer">
                <Link to={`/myProfile/${user?.email}`} className="avatar">
                    <div className="w-8 rounded-full">
                        <img src={user?.photoURL} className="w-12 h-12 rounded-full" />
                    </div>
                </Link>
                <Link to='/createPost'
                    onClick={() => setOpen('open')}
                    className="cursor-pointer hover:bg-[#e4e6e9]  px-3 w-full h-[35px] flex items-center  bg-[rgba(240,242,245,255)] rounded-[40px] mx-4 block overflow-hidden shadow-sm"
                >
                    whats on your mind
                </Link>
            </div>
            <hr />
            <div className="flex justify-between items-center cursor-pointer">
                <Link to='/createPost' onClick={() => setOpen('open')} className="flex items-center py-4" >
                    <div className="text-[20px] mr-2 ">
                        <FcGallery></FcGallery>
                    </div>
                    <p className="font-semibold text-[12px]">Photos/ <div className="inline lg:hidden"><br /></div> Videos</p>
                </Link>
                <Link to='/createPost' onClick={() => setOpen('open')} className="flex items-center py-4 mx-4">
                    <div className="text-[20px] mr-2 text-[#f7b928] font-semibold">
                        <BiSmile></BiSmile>
                    </div>
                    <p className="font-semibold text-[12px]">Feeling/<div className="inline lg:hidden"><br /></div>activity</p>
                </Link>
                <Link to='/createPost' onClick={() => setOpen('open')} className="flex items-center py-4 mx-4">
                    <div className="text-[20px] mr-2 text-[#f7b928] font-semibold">
                        <BiSolidVideoPlus></BiSolidVideoPlus>
                    </div>
                    <p className="font-semibold text-[12px]">Live<div className="inline lg:hidden"><br /></div> Video</p>
                </Link>
            </div>
        </div>
    );
};

export default CreatePost;