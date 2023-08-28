import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { useQuery } from "react-query";
import { CiLocationOn ,CiFacebook,CiLinkedin} from "react-icons/ci";
import { BsPencilSquare } from "react-icons/bs";
import UserInfoModal from "../Posts/UserInfoModal/UserInfoModal";
import { Link } from "react-router-dom";
const UserProfile = () => {

    const { user } = useContext(AuthContext);

    const { data: userData, isLoading, refetch } = useQuery({
        queryKey: ['userData'],
        queryFn: async () => {
            const res = await fetch(`https://get-social-server.vercel.app/userProfile?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });
    console.log(userData)
    return (
        <div className="w-[300px] fixed bg-white p-4 rounded-xl">
            <div className="flex items-center">
                <div className="avatar">
                    <div className="w-14 rounded-full">
                        <img src={userData?.photo} className="w-8 h-12 rounded-full" />
                    </div>
                </div>
                <div className="ml-3">
                    <p className="font-semibold text-[20px]">{userData?.name}</p>
                    <p className="text-gray-500">Followers :{userData?.follower.length}</p>
                </div>
            </div>
            <div className="my-4 flex justify-between">
                <div className="flex items-center">
                    <CiLocationOn></CiLocationOn>
                    <p className="text-[10px] ml-2">{userData?.location ? userData.location : 'No location found'}</p>
                </div>
               <Link to='/addUserInfo'>
                 <BsPencilSquare></BsPencilSquare>
               </Link>
            </div>
            <div className="my-4 flex justify-between">
                <div className="flex items-center">
                    <CiFacebook></CiFacebook>
                    <p className="text-[10px] ml-2">{userData?.facebook ? <a href={userData.facebook} target="_blank" className="text-blue-500">{userData?.facebook}</a> : 'Add Facebook Profile'}</p>
                </div>
               <Link to='/addUserInfo'>
                 <BsPencilSquare></BsPencilSquare>
               </Link>
                
            </div>
            <div className="my-4 flex justify-between">
                <div className="flex items-center">
                    <CiLinkedin></CiLinkedin>
                    <p className="text-[10px] ml-2">{userData?.linkedin ? <a href={userData.linkedin} target="_blank" className="text-blue-500">{userData?.linkedin}</a> : 'Add LinkeDin Profile'}</p>
                </div>
               <Link to='/addUserInfo'>
                 <BsPencilSquare></BsPencilSquare>
               </Link>
            </div>
           
        </div>
    );
};

export default UserProfile;