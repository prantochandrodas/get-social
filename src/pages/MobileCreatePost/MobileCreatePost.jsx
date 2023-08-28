import { AuthContext } from '../Contexts/AuthProvider';
import { useForm } from 'react-hook-form';
import Loading from '../Loading/Loading';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const MobileCreatePost = () => {
    const navigate = useNavigate();
    const [postError, setPostError] = useState(null);
    const { user } = useContext(AuthContext);
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const imgHostKey = import.meta.env.VITE_imgbb_key;
    const { register, handleSubmit } = useForm();


    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
        console.log(e.target.files[0])
    };

    const handelPostForm = async(data) => {
        setLoading(true)
        const formData = new FormData();
        formData.append('video', selectedFile);
        formData.append('title', data.about);
        formData.append('userImage', user?.photoURL);
        formData.append('userName', user?.displayName);
        formData.append('date', new Date().toJSON());

        try {
            await axios.post('https://get-social-server.vercel.app/upload', formData, {
                headers: {
                    'content-type': 'application/json',
                },
            });

            navigate('/')
            setLoading(false)

        } catch (error) {
            console.error('Error uploading video:', error);
            alert('Error uploading video');
            
        }

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
        <div className='min-h-screen w-full flex items-center justify-center'>
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>
            <form onSubmit={handleSubmit(handelPostForm)}>
                <div>
                    <label htmlFor="Description" className="block text-sm text-gray-500 dark:text-gray-300">Description</label>
                    <textarea {...register("about")} name='about' placeholder="whats in your mind" className="block  mt-2 lg:w-[400px] placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" defaultValue={""} />
                </div>
                <div>
                    <label htmlFor="image" className="block text-sm text-gray-500 dark:text-gray-300">Image</label>
                    <input {...register("files")} name='files' type="file" className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300" />
                </div>
               

                <div className="flex justify-end mt-6">
                    <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                </div>
            </form>
        </section>

    </div>
    );
};

export default MobileCreatePost;