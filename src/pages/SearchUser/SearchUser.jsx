const SearchUser = ({ user }) => {
    return (
        <div className=''>
            <div className='my-6 flex items-center'>
                <div className="avatar mr-4">
                    <div className="w-12 rounded-full">
                        <img src={user?.photo} className="w-12 h-12 rounded-full" />
                    </div>
                </div>
                <p className='text-lg font-bold'>{user?.name}</p>
                <p className='text-[#3578E5] font-semibold float-right ml-4 cursor-pointer'>Follow</p>
            </div>
        </div>
    );
};

export default SearchUser;