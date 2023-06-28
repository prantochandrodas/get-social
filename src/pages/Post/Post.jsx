
import { FaRegHeart, FaRegComment } from "react-icons/fa";
const Post = ({ post }) => {

    return (
        <div className="mb-8">
            <div className="flex items-center mb-4">
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/335146382_710410637450794_8864775828143533008_n.jpg?stp=dst-jpg_p843x403&_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHTOhNWyyQJYyhZuU27G5VZhFO4icq5aM-EU7iJyrloz4oYBPcHItErqPOAueejuZ2Gfgcc0G00podwpv79wxso&_nc_ohc=ZrGlYjJ9JZEAX-ksAsy&_nc_ht=scontent.fdac5-2.fna&oh=00_AfC6cgxczmPNJgIQNQh7ToxMOO5ZFPtXvLgsu5ftI1Q1vQ&oe=649DB69A" />
                    </div>
                </div>
                <h1 className="font-semibold text-md ml-4">{post?.name}</h1>
            </div>
            <img className="mb-4" src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/356616004_3347686582228363_4882604620201009039_n.jpg?stp=dst-jpg_p843x403&_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFfvP4LcB7gMl6lcCE3ay-IvDyHY_C_Iji8PIdj8L8iOG-pP_j1_PFOgLplQEaus1rSxQMQ3GVE_itQBcwQWX11&_nc_ohc=gYH9pZQ2_d0AX-cNRpS&_nc_ht=scontent.fdac5-2.fna&oh=00_AfBNkxoFIBqE35FIE4DPwltuNbl3b0K-Pjy-6wmSR2PCSg&oe=649F0BF3" width={500} alt="" />
            <div className="flex items-center mb-4">
                <div className="text-[25px]">
                    <FaRegHeart></FaRegHeart>
                </div>
                <div className="text-[25px] ml-4">
                    <FaRegComment></FaRegComment>
                </div>
            </div>
            <label
                htmlFor="UserEmail"
                className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
            >
                <input
                    type="email"
                    id="UserEmail"
                    placeholder="Email"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span
                    className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                >
                    Add a comment
                </span>
            </label>
            <hr />
        </div>
    );
};

export default Post;