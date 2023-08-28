import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import Loading from "../../Loading/Loading";


const UserInfoModal = () => {
    const [loading,setLoading]=useState(false);
    const {user}=useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate=useNavigate();
    const handelPostForm=(data)=>{
        setLoading(true);
           const info ={
            location:data.location,
            facebook:data.facebook,
            linkedin:data.linkedin,
            email:user?.email
           }
            fetch(`https://get-social-server.vercel.app/updateUser`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(info)
            })
                .then(res => res.json())
                .then(data => {
                    navigate('/')
                    setLoading(false)
                })
        
    }


    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className='min-h-screen w-full flex items-center justify-center'>
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>
            <form onSubmit={handleSubmit(handelPostForm)}>
                <div>
                    <label htmlFor="location" className="block text-sm text-gray-500 dark:text-gray-300">Location</label>
                    <input {...register("location")} name='location' placeholder="Your location" className="block  mt-2 lg:w-[400px] placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4  py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" defaultValue={""} />
                </div>
                <div>
                    <label htmlFor="facebook" className="block text-sm text-gray-500 dark:text-gray-300">Facebook</label>
                    <input {...register("facebook")} name='facebook' placeholder="Facebook Profile link" className="block  mt-2 lg:w-[400px] placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4  py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" defaultValue={""} />
                </div>
                <div>
                    <label htmlFor="linkedin" className="block text-sm text-gray-500 dark:text-gray-300">Linekdin</label>
                    <input {...register("linkedin")} name='linkedin' placeholder="Linkedin Profile link" className="block  mt-2 lg:w-[400px] placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4  py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" defaultValue={""} />
                </div>
                
               

                <div className="flex justify-end mt-6">
                    <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                </div>
            </form>
        </section>

    </div>
    );
};

export default UserInfoModal;