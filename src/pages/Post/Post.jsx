
import { useContext, useEffect, useState } from "react";
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
// import PostLike from "../PostLike/PostLike";
const Post = ({ post, addLike, disLike, addComment, setPostData }) => {
    const { user } = useContext(AuthContext);
    return (
        <div className="mb-8 lg:w-[450px] w-full my-4 bg-white">
            <div>
                <Link to={`/myProfile/${post?.email}`} className="flex items-center mb-4 pl-4 pt-4">
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src={post?.userImage} />
                        </div>
                    </div>
                    <h1 className="font-semibold text-md ml-4">{post?.userName}</h1>
                </Link>

            </div>


            <div className="ml-2 pl-4">
                {
                    post?.about ? <p className="text-[14px] my-4">{post.about}</p> : <></>
                }
            </div>
            {
                post?.photoURL ? <img className="mb-4 lg:w-[500px] w-full" src={post?.photoURL} alt="" /> : <></>
            }

            {
                post?.liked?.length > 0 ? <p>{post?.liked?.length} peopel liked this post</p> : <></>
            }

            {/* if user exist  */}
            {
                user?.email ? <div className="flex items-center mb-4 pl-4">
                    {
                        post?.liked?.includes(user?.email) ? <div onClick={() => disLike(post?._id)} className="text-[25px]">
                            <FcLike></FcLike>
                        </div> : <div onClick={() => addLike(post?._id)} className="text-[25px]">
                            <AiOutlineHeart></AiOutlineHeart>
                        </div>
                    }


                    <div className="text-[25px] ml-4">
                        <FaRegComment></FaRegComment>
                    </div>
                </div> : <></>
            }

            {
                post?.comment?.length > 0 ? <p className="pl-4">There {post?.comment.length} is comments </p> : <></>
            }
            <label htmlFor="comment-modal" onClick={() => setPostData(post)} className="pl-4 font-bold text-md cursor-pointer pl-4">View Comments</label>

            {
                user?.email ? <form onSubmit={addComment} className="px-4">
                    <input type="hidden" name="id" value={post?._id} />
                    <input type="hidden" name="image" value={post?.photoURL} />
                    <label
                        htmlFor="UserEmail"
                        className=" relative flex overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
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

                </form> : <></>
            }


            <hr />
        </div>
    );
};

export default Post;