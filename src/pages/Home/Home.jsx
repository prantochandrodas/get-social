import { useContext } from "react";
import CreatePost from "../CreatePost/CreatePost";
import Posts from "../Posts/Posts";
import './Home.css'
import { AuthContext } from "../Contexts/AuthProvider";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import Peoples from "../Peoples/Peoples";
import UserProfile from "../UserProfile/UserProfile";
const Home = () => {
    
    return (
        <div className="flex w-[95%] mx-auto">
            <div className="w-full  top-0 right-0 hidden lg:block">
                <UserProfile></UserProfile>
            </div>
            <div className="bgcolor lg:pl-[20px] lg:pr-[20px]">
                <CreatePost></CreatePost>
              <div className="static">
              <Posts></Posts>
              </div>
            </div>
            <div className="w-full  top-0 right-0 hidden lg:block">
                <Peoples></Peoples>
            </div>
        </div>
    );
};

export default Home;