import React from 'react';
import './CommentModal.css'
import { useLoaderData } from 'react-router-dom';
import { useQuery } from 'react-query';
const CommentModal = ({ postData }) => {

    return (
        <div>
            <div>
                <input type="checkbox" id="comment-modal" className="modal-toggle" />
                <div id='comment-modal' className="modal">
                    <div className="">
                        <label htmlFor="comment-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        {/* post form  */}
                        <div className='flex '>
                            <img src={postData?.photoURL} className='w-[300px]' alt="" />
                            <div className='bg-white p-4 w-[350px]'>
                                <div className='flex justify-start items-center '>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src="https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/336661600_1216684852376202_341076738624413469_n.jpg?stp=dst-jpg_p843x403&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFS2Kjdatg9UhTyH1A4OmYznybJ17l_DOqfJsnXuX8M6jJE_pIceqZJ74nNpXmx5pkot53LwBEXgywgvbhFN17O&_nc_ohc=durDZVA6JusAX_cLULJ&_nc_ht=scontent.fdac5-1.fna&oh=00_AfCxVavDbHM5rkppn2wfi6aR8Psa4UbRQ_uQRX1L_uDUWg&oe=64A67B3B" />
                                        </div>
                                    </div>
                                    <p className='ml-4 font-semibold text-xl'>Pranto Das</p>
                                    <p className='ml-2'>{postData?.about}</p>
                                </div>
                                {

                                }
                                <div className='block  my-4'>
                                    {
                                        postData?.comment?.map(data =><div key={data._id} className='flex justify-start items-center my-4'>
                                        <div key={data._id} className="avatar">
                                            <div className="w-12 rounded-full">
                                                <img key={data._id} src={data.image} />
                                            </div>
                                        </div><p className='ml-4 font-semibold text-xl'>{data.name} :{data.comment}</p></div> 
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentModal;