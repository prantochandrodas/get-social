
import { useEffect, useState } from "react";
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
// import PostLike from "../PostLike/PostLike";
const Post = ({ post, addLike, disLike, addComment, setPostData }) => {

    return (
        <div className="mb-8 w-[500px]">
            <div className="flex items-center mb-4">
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img src="https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/336661600_1216684852376202_341076738624413469_n.jpg?stp=dst-jpg_p843x403&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFS2Kjdatg9UhTyH1A4OmYznybJ17l_DOqfJsnXuX8M6jJE_pIceqZJ74nNpXmx5pkot53LwBEXgywgvbhFN17O&_nc_ohc=durDZVA6JusAX_cLULJ&_nc_ht=scontent.fdac5-1.fna&oh=00_AfCxVavDbHM5rkppn2wfi6aR8Psa4UbRQ_uQRX1L_uDUWg&oe=64A67B3B" />
                    </div>
                </div>
                <h1 className="font-semibold text-md ml-4">Pranto Das</h1>
            </div>
            <div className="ml-2">
                {
                    post?.about ? <p className="text-[14px] my-4">{post.about}</p> : <></>
                }
            </div>
            {
                post?.photoURL ? <img className="mb-4" src={post?.photoURL} width={500} alt="" /> : <></>
            }
            <div className="flex items-center mb-4">
                {
                    post?.liked.includes('prantodas@gmail.com') ? <div onClick={() => disLike(post?._id)} className="text-[25px]">
                        <FcLike></FcLike>
                    </div> : <div onClick={() => addLike(post?._id)} className="text-[25px]">
                        <AiOutlineHeart></AiOutlineHeart>
                    </div>
                }


                <div className="text-[25px] ml-4">
                    <FaRegComment></FaRegComment>
                </div>
            </div>

            <label htmlFor="comment-modal" onClick={() => setPostData(post)} className="text-md cursor-pointer">View Comments</label>

            <form onSubmit={addComment}>
                <input type="hidden" name="id" value={post?._id} />
                <input type="hidden" name="image" value={post?.photoURL} />
                <label
                    htmlFor="UserEmail"
                    className="relative flex overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                >
                    <input
                        type="text"
                        name="comment"
                        id="UserEmail"
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />

                    <span
                        className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                    >
                        Add a comment
                    </span>
                    <input type="Submit" value='Post' className="float-right text-[#3578E5] font-semibold" />
                </label>

            </form>

            <hr />
        </div>
    );
};

export default Post;