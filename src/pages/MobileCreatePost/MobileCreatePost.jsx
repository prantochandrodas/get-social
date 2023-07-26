import { AuthContext } from '../Contexts/AuthProvider';
import { useQuery } from 'react-query';
import userlogo from '../../assets/logo/images.png'
import { useForm } from 'react-hook-form';
import { BiSolidImage } from "react-icons/bi";
import Loading from '../Loading/Loading';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const MobileCreatePost = () => {
    const navigate = useNavigate();
    const [postError, setPostError] = useState(null);
    const { user } = useContext(AuthContext);
    
    const [view, setView] = useState(false);
    const [loading, setLoading] = useState(false);
    const imgHostKey = import.meta.env.VITE_imgbb_key;
    const { register, handleSubmit } = useForm();
    const handelPostForm = data => {
        if (data.files) {
            setLoading(true)
            const image = data.files[0];
            const formData = new FormData();
            formData.append('image', image);
            const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
            fetch(url, {
                method: "POST",
                body: formData
            })
                .then(res => res.json())
                .then(imgData => {
                    // if img is found 
                    if (imgData.success) {
                        //if about has found 
                        if (data.about) {
                            const postInfo = {
                                about: data.about,
                                photoURL: imgData.data.url,
                                email: user.email,
                                likeCount: 0,
                                likeStatus: false,
                                liked: [],
                                comment: [],
                                date: new Date(Date.now()).toLocaleString().split(',')[0] 
                            }
                            fetch('https://get-social-server.vercel.app/post', {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(postInfo)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    navigate('/')
                                    setLoading(false);
                                })
                                .catch(error => {
                                    setPostError(error);
                                    setLoading(false);
                                })

                        } else {
                            //if about has not found 
                            const postInfo = {
                                photoURL: imgData.data.url,
                                email: user.email,
                                likeCount: 0,
                                likeStatus: false,
                                liked: [],
                                comment: [],
                                date: new Date(Date.now()).toLocaleString().split(',')[0],
                            }

                            fetch('https://get-social-server.vercel.app/post', {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(postInfo)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    navigate('/')
                                    setLoading(false);
                                })
                                .catch(error => {
                                    setPostError(error);
                                    setLoading(false);
                                })
                        }

                    }
                })
        } else if (data.files == undefined && data.about) {
            const postInfo = {
                about: data.about,
                email: user.email,
                likeCount: 0,
                likeStatus: false,
                liked: [],
                comment: [],
                date: new Date(Date.now()).toLocaleString().split(',')[0] 
            }
            fetch('https://get-social-server.vercel.app/post', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(postInfo)
            })
                .then(res => res.json())
                .then(data => {
                    navigate('/')
                    setLoading(false);
                })
                .catch(error => {
                    setPostError(error);
                    setLoading(false);
                })
        } else {
            setLoading(false);
        }



    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='min-h-screen'>
            <form onSubmit={handleSubmit(handelPostForm)} className=" w-[95%] mx-auto p-4">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Create Post</h1>
                </div>
                <hr />
                <div className="mt-2 flex justify-start">
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src={user?.photoURL} className="w-12 h-12 rounded-full" />
                        </div>
                    </div>
                    <p className="text-lg font-semibold ml-2">{
                         user?.displayName
                    }</p>
                </div>
                {/* about input fild  */}
                <textarea {...register("about")} className="mt-4 bgcolor text-lg border-none outline-none" name="about" placeholder="Whats on your mind?" id="" cols="40" rows="5"></textarea>
                {/* picture uplode  */}
                {
                    view ?
                        // photo add field 
                        <fieldset className="w-full space-y-1 dark:text-gray-100">
                            <label htmlFor="files" className="block text-sm font-medium">Add Photo</label>
                            <div className="flex">
                                <input {...register("files")} type="file" name="files" id="files" className="px-8 py-12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" />
                            </div>
                        </fieldset> : <></>
                }

                <div className="border border-[1px] p-2 rounded-[5px] flex items-center justify-between">
                    <p className="text-lg font-semibold">Add to your post</p>
                    <div onClick={() => setView(!view)} className="text-[#45bd62] text-[30px]">
                        <BiSolidImage></BiSolidImage>
                    </div>
                </div>
                <input type="submit" value='Post' className="btn btn-primary mt-2 w-full" />
            </form>
        </div>
    );
};

export default MobileCreatePost;