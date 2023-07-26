import { useQuery } from "react-query";
import People from "../People/People";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";

const Peoples = () => {
    const {user}=useContext(AuthContext);
    const { data: getAllUser = [], isLoading, refetch } = useQuery({
        queryKey: ['getAllUser'],
        queryFn: async () => {
            const res = await fetch(`https://get-social-server.vercel.app/getAllUser`);
            const data = await res.json();
            return data;
        }
    });

    const addFollower = (data) => {
        fetch(`https://get-social-server.vercel.app/follower?id=${data._id}&&email=${user?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
            })
    }

    const unFollow = (data) => {
        fetch(`https://get-social-server.vercel.app/unFollow?id=${data._id}&&email=${user.email}`, {
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
        <div className="mt-10 font sticky">
            <h1>Suggested for you</h1>
        
            {
              getAllUser?.map(DatabaseUser=><People 
                key={DatabaseUser._id}
                DatabaseUser={DatabaseUser}
                addFollower={addFollower}
                unFollow={unFollow}
              ></People>)  
            }
        </div>
    );
};

export default Peoples;