import { useEffect, useState } from "react";
import Post from "../Post/Post";

const Posts = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(result=>setData(result));
    },[])
    console.log(data);
    return (
        <div className="p-4">
            {
                data.map(post=><Post
                key={post.id}
                post={post}
                ></Post>)
            }
        </div>
    );
};

export default Posts;