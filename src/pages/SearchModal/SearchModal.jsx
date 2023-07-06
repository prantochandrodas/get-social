import { FaSistrix } from "react-icons/fa";
const SearchModal = () => {
    return (
        <div>
            {/* Open the modal using ID.showModal() method */}
            {/* <button className="btn" onClick={() => window.my_modal_2.showModal()}>open modal</button> */}
            {/* <dialog id="my_modal_2" className="modal">
                <form method="dialog" className="modal-box w-[500px] h-[400px]">
                    <div className="flex items-center">
                        <div className="text-[20px] mr-2">
                            <FaSistrix></FaSistrix>
                        </div>
                        <input type="text" name="search" placeholder="Search" className="w-full py-4 border-b-[1px] outline-none" />
                    </div>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog> */}
        </div>
    );
};

export default SearchModal;