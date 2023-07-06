import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiSolidImage } from "react-icons/bi";
import Loading from "../Loading/Loading";
const CreatePostModal = ({ setOpen }) => {

    const [view, setView] = useState(false);
    const [loading, setLoading] = useState(false);
    console.log(loading);
    const imgHostKey = import.meta.env.VITE_imgbb_key;
    console.log(imgHostKey)
    const { register, handleSubmit } = useForm();
    const handelPostForm = data => {
        // console.log(data);
        // setLoading(true);
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
                                email:'pranto@gmail.com',
                                likeCount:0,
                                likeStatus:false,
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
                            .then(data=>console.log(data))


                            setOpen(null);
                            setLoading(false);
                        } else {
                            //if about has not found 
                            const postInfo = {
                                photoURL: imgData.data.url,
                                email:'pranto@gmail.com',
                                likeCount:0,
                                likeStatus:false,
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
                            .then(data=>console.log(data))
                            setOpen(null);
                            setLoading(false);
                        }

                    }
                })
        } else if (data.files == undefined && data.about) {
            const postInfo = {
                about: data.about,
                email:'pranto@gmail.com',
                likeCount:0,
                likeStatus:false,
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
            .then(data=>console.log(data))


            setOpen(null);
            setLoading(false);
        } else {
            setOpen(null);
            setLoading(false);
        }



    }

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div>
                <input type="checkbox" id="booking-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        {/* post form  */}
                        <form onSubmit={handleSubmit(handelPostForm)} className="bg-white p-8">
                            <div className="flex justify-between items-center mb-4">
                                <h1 className="text-2xl font-bold">Create Post</h1>
                            </div>
                            <hr />
                            <div className="mt-2 flex justify-start">
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img src="https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/336661600_1216684852376202_341076738624413469_n.jpg?stp=dst-jpg_p843x403&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFS2Kjdatg9UhTyH1A4OmYznybJ17l_DOqfJsnXuX8M6jJE_pIceqZJ74nNpXmx5pkot53LwBEXgywgvbhFN17O&_nc_ohc=durDZVA6JusAX_cLULJ&_nc_ht=scontent.fdac5-1.fna&oh=00_AfCxVavDbHM5rkppn2wfi6aR8Psa4UbRQ_uQRX1L_uDUWg&oe=64A67B3B" />
                                    </div>
                                </div>
                                <p className="text-lg font-semibold ml-2">Pranto das</p>
                            </div>
                            {/* about input fild  */}
                            <textarea {...register("about")} className="mt-4 text-xl border-none outline-none" name="about" placeholder="Whats on your mind?" id="" cols="40" rows="5"></textarea>
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
                </div>
            </div>
        </div>
    );
};

export default CreatePostModal;