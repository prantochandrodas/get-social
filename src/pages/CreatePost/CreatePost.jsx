import { FcGallery } from "react-icons/fc";
import { BiSmile, BiSolidVideoPlus } from "react-icons/bi";
import CreatePostModal from "../CreatePostModal/CreatePostModal";
import { useState } from "react";
const CreatePost = () => {
    const [open, setOpen] = useState(null);
    return (
        <div className="p-4 bg-white m-4 lg:w-[500px]">
            <div className="flex justify-start items-center mb-4 cursor-pointer">
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img src="https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/336661600_1216684852376202_341076738624413469_n.jpg?stp=dst-jpg_p843x403&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFS2Kjdatg9UhTyH1A4OmYznybJ17l_DOqfJsnXuX8M6jJE_pIceqZJ74nNpXmx5pkot53LwBEXgywgvbhFN17O&_nc_ohc=durDZVA6JusAX_cLULJ&_nc_ht=scontent.fdac5-1.fna&oh=00_AfCxVavDbHM5rkppn2wfi6aR8Psa4UbRQ_uQRX1L_uDUWg&oe=64A67B3B" />
                    </div>
                </div>
                <label
                    onClick={() => setOpen('open')}
                    htmlFor="booking-modal"
                    className="cursor-pointer relative px-3 bg-[rgba(240,242,245,255)] rounded-[40px] mx-4 block overflow-hidden shadow-sm"
                >
                    <input

                        type="email"
                        id="UserEmail"
                        placeholder="Email"
                        readOnly
                        disabled
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

                <label onClick={() => setOpen('open')} className="flex items-center py-4" htmlFor="booking-modal">

                    <div className="text-[30px] mr-2 ">
                        <FcGallery></FcGallery>
                    </div>
                    <p className="font-semibold text-sm">Photos/Videos</p>
                </label>
                <label onClick={() => setOpen('open')} htmlFor="booking-modal" className="flex items-center py-4 mx-4">
                    <div className="text-[30px] mr-2 text-[#f7b928] font-semibold">
                        <BiSmile></BiSmile>
                    </div>
                    <p className="font-semibold text-sm">Feeling/activity</p>
                </label>
                <label onClick={() => setOpen('open')} htmlFor="booking-modal" className="flex items-center py-4 mx-4">
                    <div className="text-[30px] mr-2 text-[#f7b928] font-semibold">
                        <BiSolidVideoPlus></BiSolidVideoPlus>
                    </div>
                    <p className="font-semibold text-sm">Live Video</p>
                </label>
            </div>
            {
                open &&
                <CreatePostModal
                setOpen={setOpen}
                ></CreatePostModal>
            }

        </div>
    );
};

export default CreatePost;