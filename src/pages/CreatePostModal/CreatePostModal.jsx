import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { BiSolidImage } from "react-icons/bi";
import Loading from "../Loading/Loading";
import { useQuery } from "react-query";
import userlogo from '../../assets/logo/images.png'
import { AuthContext } from "../Contexts/AuthProvider";
import './CreatePostModal.css';
import { useNavigate } from "react-router-dom";
const CreatePostModal = ({ setOpen ,setLoading}) => {
    const navigate=useNavigate();
    const { user } = useContext(AuthContext);
    const [view, setView] = useState(false);
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
                    console.log(imgData)
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
                                date: new Date(Date.now()).toLocaleString().split(',')[0],
                                userImage: user?.photoURL,
                                userName: user?.displayName
                            }
                            console.log(postInfo)

                            fetch('http://localhost:5000/post', {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(postInfo)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    console.log(data)
                                    setLoading(false);
                                    setOpen(null);
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
                                date: new Date().toJSON(),
                                userImage: user?.photoURL,
                                userName: user?.displayName
                            }
                            console.log(postInfo)

                            fetch('http://localhost:5000/post', {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(postInfo)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    setOpen(null);
                                    setLoading(false);
                                })
                                .catch(error => {
                                    console.log(error);
                                    setLoading(false);
                                })
                        }

                    }
                })
        } else if (data.files == undefined && data.about) {
            setLoading(true)
            const postInfo = {
                about: data.about,
                email: user.email,
                likeCount: 0,
                likeStatus: false,
                liked: [],
                comment: [],
                date: new Date(Date.now()).toLocaleString().split(',')[0],
                userImage: user?.photoURL,
                userName: user?.displayName
            }


            fetch('http://localhost:5000/post', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(postInfo)
            })
                .then(res => res.json())
                .then(data => {
                    navigate('/')
                    setOpen(null);
                    setLoading(false);
                })
                .catch(error => {
                    navigate('/')
                    setOpen(null);
                    setLoading(false);
                })
        } else {
            setOpen(null);
            setLoading(false);
        }
    }

 
    return (
        <div>
            <div id="demo-modal" className="modal">
                <div className="modal__content">
                <form onSubmit={handleSubmit(handelPostForm)} className="bg-white p-8">
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
                             <textarea {...register("about")} className="mt-4 text-xl border-none outline-none" name="about" placeholder="Whats on your mind?" id="" cols="40" rows="5"></textarea>
                             {/* picture uplode  */}
                             {
                                 view ?
                                    //  photo add field 
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
                    <a href="#" className="modal__close">×</a>
                </div>
            </div>
        </div>

    );
};

export default CreatePostModal;