import { useContext, useEffect, useState } from "react";
import Post from "../Post/Post";
import './Post.css'
import { useQuery } from "react-query";
import CommentModal from "../CommentModal/CommentModal";
import { AuthContext } from "../Contexts/AuthProvider";
import Loading from "../Loading/Loading";
// import PostLike from "../PostLike/PostLike";
const Posts = () => {
    const {user}=useContext(AuthContext);
    const [postData, setPostData] = useState(null);
    const { data: Postdata = [], isLoading, refetch } = useQuery({
        queryKey: ['Postdata'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/post`);
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
            commentId:id,
            comment,
            email: user?.email,
            name:user?.displayName,
            image:image,
        }
        // form.reset();
        fetch(`http://localhost:5000/comment?id=${id}`, {
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
        fetch(`http://localhost:5000/like?id=${id}&&email=${user?.email}`, {
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

    const disLike = (id) => {
        fetch(`http://localhost:5000/dislike?id=${id}&&email=${user?.email}`, {
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
        <div className="mt-4 px-4 lg:px-0 font">
            {
                Postdata?.map(post => <Post
                    key={post._id}
                    post={post}
                    disLike={disLike}
                    addLike={addLike}
                    addComment={addComment}
                    setPostData={setPostData}
                ></Post>)
            }
            <CommentModal

                setPostData={setPostData}
                postData={postData}
            ></CommentModal>

        </div>
    );
};

export default Posts;