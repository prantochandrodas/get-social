import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
const SearchModal = () => {
    const { setSearchData, searchData, setSearchModal } = useContext(AuthContext);
    return (
        <div>
            <div>
                <input type="checkbox" id="search-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box absolute h-[200px] w-[]">
                        <label htmlFor="search-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        {/* post form  */}
                        <div className="relative">
                            <label htmlFor="Search" className="sr-only"> Search </label>
                            <input type="text" className="w-full mt-8 outline-none rounded-md border border-black-600 py-2.5 pe-10 shadow-sm sm:text-sm" name="firstName" onChange={e => setSearchData(e.target.value)} />
                            <span className="absolute mt-[30px] inset-y-0 end-0 grid w-10 place-content-center">
                                {
                                    searchData == '' ? <Link to='/' onClick={() => setSearchModal('close')} type="submit" className="text-gray-600 hover:text-gray-700">
                                        <span className="sr-only">Search</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="h-4 w-4"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                            />
                                        </svg>
                                    </Link> : <Link to={`/search/${searchData}`} type="submit" className="text-gray-600 hover:text-gray-700">
                                        <span className="sr-only">Search</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="h-4 w-4"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                            />
                                        </svg>
                                    </Link>
                                }
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchModal;