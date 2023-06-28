import CreatePost from "../CreatePost/CreatePost";
import Posts from "../Posts/Posts";
import './Home.css'
const Home = () => {
    return (
        <div className="bgcolor lg:pl-[60px] lg:pr-[20px]">
            <CreatePost></CreatePost>
            <Posts></Posts>
        </div>
    );
};

export default Home;