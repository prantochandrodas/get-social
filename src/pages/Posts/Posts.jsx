import { useEffect, useState } from "react";
import Post from "../Post/Post";
import './Post.css'
import { useQuery } from "react-query";
import CommentModal from "../CommentModal/CommentModal";
// import PostLike from "../PostLike/PostLike";
const Posts = () => {
    const [postData, setPostData] = useState(null);

    const { data: data = [], isLoading, refetch } = useQuery({
        queryKey: ['data'],
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
        const image = form.image.value;

        const data = {
            commentId:id,
            comment,
            email: 'prantodas@gmail.com',
            name: 'pranto',
            image:image
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
                console.log(data);
                refetch();
            })
    }

    const addLike = (id) => {
        fetch(`http://localhost:5000/like?id=${id}&&email=prantodas@gmail.com`, {
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
        fetch(`http://localhost:5000/dislike?id=${id}&&email=prantodas@gmail.com`, {
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
        <div className="p-4 font">
            {
                data?.map(post => <Post
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