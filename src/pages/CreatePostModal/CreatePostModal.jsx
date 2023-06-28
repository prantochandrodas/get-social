import { BiSolidImage } from "react-icons/bi";
import { FaRegTimesCircle } from "react-icons/fa";
const CreatePostModal = () => {
    return (
        <div>
           
            <dialog id="my_modal_1" className="modal">
                <form method="dialog" className="bg-white lg:w-[600px] lg:h-[450px] p-8 modal-box">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-bold">Create Post</h1>
                        <button className="text-[30px] bg-[rgba(240,242,245,255)] border-none  font-normal text-gray-500 rounded-full"><FaRegTimesCircle></FaRegTimesCircle></button>
                    </div>
                    <hr />
                    <div className="mt-2 flex justify-start">
                        <div className="avatar">
                            <div className="w-12 rounded-full">
                                <img src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/335146382_710410637450794_8864775828143533008_n.jpg?stp=dst-jpg_p843x403&_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHTOhNWyyQJYyhZuU27G5VZhFO4icq5aM-EU7iJyrloz4oYBPcHItErqPOAueejuZ2Gfgcc0G00podwpv79wxso&_nc_ohc=ZrGlYjJ9JZEAX-ksAsy&_nc_ht=scontent.fdac5-2.fna&oh=00_AfC6cgxczmPNJgIQNQh7ToxMOO5ZFPtXvLgsu5ftI1Q1vQ&oe=649DB69A" />
                            </div>
                        </div>
                        <p className="text-lg font-semibold ml-2">Pranto das</p>
                    </div>
                    <textarea className="mt-4 text-xl border-none outline-none" name="about" placeholder="Whats on your mind?" id="" cols="40" rows="5"></textarea>
                    <div className="border border-[1px] p-2 rounded-[5px] flex items-center justify-between">
                        <p className="text-lg font-semibold">Add to your post</p>
                        <div className="text-[#45bd62] text-[30px]">
                            <BiSolidImage></BiSolidImage>
                        </div>
                    </div>
                    <button className="btn btn-primary mt-2 w-full">Post</button>
                </form>
            </dialog>
        </div>
    );
};

export default CreatePostModal;