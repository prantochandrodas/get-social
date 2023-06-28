import { FcGallery } from "react-icons/fc";
import { BiSmile, BiSolidVideoPlus } from "react-icons/bi";
import CreatePostModal from "../CreatePostModal/CreatePostModal";
const CreatePost = () => {
    return (
        <div className="p-4 bg-white m-4 lg:w-[500px]">
            <div className="flex justify-start items-center mb-4 cursor-pointer">
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/335146382_710410637450794_8864775828143533008_n.jpg?stp=dst-jpg_p843x403&_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHTOhNWyyQJYyhZuU27G5VZhFO4icq5aM-EU7iJyrloz4oYBPcHItErqPOAueejuZ2Gfgcc0G00podwpv79wxso&_nc_ohc=ZrGlYjJ9JZEAX-ksAsy&_nc_ht=scontent.fdac5-2.fna&oh=00_AfC6cgxczmPNJgIQNQh7ToxMOO5ZFPtXvLgsu5ftI1Q1vQ&oe=649DB69A" />
                    </div>
                </div>
                <label
                    htmlFor="UserEmail"
                    className="relative px-3 bg-[rgba(240,242,245,255)] rounded-[40px] mx-4 block overflow-hidden shadow-sm"
                >
                    <input
                      onClick={() => window.my_modal_1.showModal()}
                        type="email"
                        id="UserEmail"
                        placeholder="Email"
                        className="peer  bg-[rgba(240,242,245,255)] h-12 w-full lg:w-[500px] border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />

                    <span
                        className="absolute ml-2 start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                    >
                        Whats on your mind
                    </span>
                </label>
            </div>
            <hr />
            <div className="flex justify-center items-center cursor-pointer">
                <div className="flex items-center py-4" onClick={() => window.my_modal_1.showModal()}>
                    <div className="text-[30px] mr-2 ">
                        <FcGallery></FcGallery>
                    </div>
                    <p className="font-semibold text-sm">Photos/Videos</p>
                </div>
                <div className="flex items-center py-4 mx-4" onClick={() => window.my_modal_1.showModal()}>
                    <div className="text-[30px] mr-2 text-[#f7b928] font-semibold">
                        <BiSmile></BiSmile>
                    </div>
                    <p className="font-semibold text-sm">Feeling/activity</p>
                </div>
                <div className="flex items-center py-4 mx-4" onClick={() => window.my_modal_1.showModal()}>
                    <div className="text-[30px] mr-2 text-[#f7b928] font-semibold">
                        <BiSolidVideoPlus></BiSolidVideoPlus>
                    </div>
                    <p className="font-semibold text-sm">Live Video</p>
                </div>
            </div>
            <CreatePostModal></CreatePostModal>
        </div>
    );
};

export default CreatePost;