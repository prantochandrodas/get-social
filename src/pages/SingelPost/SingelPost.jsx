import { Navigate, useLoaderData } from "react-router-dom";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import CommentModal from "../CommentModal/CommentModal";
import Headerr from "../Header/Headerr";
import { useQuery } from "react-query";

const SingelPost = () => {
    const data = useLoaderData();
    const { user } = useContext(AuthContext);
    const [postData, setPostData] = useState(null);
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://get-social-server.vercel.app/user`);
            const data = await res.json();
            return data;
        }
    });
    const addComment = (event) => {
        event.preventDefault();
        const form = event.target;
        const comment = form.comment.value;
        const id = form.id.value;
        const image = user?.photoURL;

        const data = {
            commentId: id,
            comment,
            email: user?.email,
            name: user?.displayName,
            image: image,
        }
        // form.reset();
        fetch(`https://get-social-server.vercel.app/comment?id=${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                form.reset();
                refetch();
            })
    }

    const addLike = (id) => {
        fetch(`https://get-social-server.vercel.app/like?id=${id}&&email=${user?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },

        })
            .then(res => res.json())
            .then(data => {
                refetch();
                <Navigate to={`myProfile/${id}`}></Navigate>
            })
    }

    const disLike = (id) => {
        fetch(`https://get-social-server.vercel.app/dislike?id=${id}&&email=${user?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                refetch();

            })
    }
    return (
        <div>
            <div className="w-[320px] ">
                <Headerr></Headerr>
            </div>
            <div className="pb-8 px-10 lg:w-[500px]  mx-auto">
                <div className="flex items-center mb-4">
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src={data?.userImage} />
                        </div>
                    </div>
                    <h1 className="font-semibold text-md ml-4">{data?.userName}</h1>
                </div>
                <div className="ml-2">
                    {
                        data?.about ? <p className="text-[14px] my-4">{data.about}</p> : <></>
                    }
                </div>
                {
                    data?.photoURL ? <img className="mb-4 lg:w-[400px] lg:h-[400px] w-full" src={data?.photoURL} alt="" /> : <></>
                }
                {
                    data?.liked?.length > 0 ? <p>{data?.liked?.length} peopel liked this post</p> : <></>
                }
                {/* <div className="flex items-center mb-4">
                    {
                        data?.liked.includes(user?.email) ? <div onClick={() => disLike(data?._id)} className="text-[25px]">
                            <FcLike></FcLike>
                        </div> : <div onClick={() => addLike(data?._id)} className="text-[25px]">
                            <AiOutlineHeart></AiOutlineHeart>
                        </div>
                    }
                    <div className="text-[25px] ml-4">
                        <FaRegComment></FaRegComment>
                    </div>
                </div> */}
                {
                    data?.comment?.length > 0 ? <p>There {data?.comment?.length} is comments </p> : <></>
                }
                <label htmlFor="comment-modal" onClick={() => setPostData(data)} className="font-bold text-md cursor-pointer">View Comments</label>
                <hr />
            </div>
            <CommentModal

                setPostData={setPostData}
                postData={postData}
            ></CommentModal>
        </div>
    );
};

export default SingelPost;