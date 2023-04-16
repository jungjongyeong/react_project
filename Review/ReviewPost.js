import React, { useState } from 'react'
import './productreview.css'
import ReviewModal from '../components/Modal/ReviewModal';
function ReviewPost({ Id, image, review, timestemp, quaraUser, title, area }) {

    const [openReview, setOpenReview] = useState(false);

    const closeModal = () => {
        setOpenReview(false)
    };

    return (
        <>
            <div className='review' onClick={() => { setOpenReview(true) }} >
                <div className='review_body'>
                    <div className='review_answer'>
                        <table className='review_table'>
                            <colgroup>
                                <col width='10%' />
                                <col width='50%' />
                                <col width='20%' />
                                <col width='20%' />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>{area}</th>
                                    <th>{title}</th>
                                    <th>{quaraUser}</th>
                                    <th>{new Date(timestemp?.toDate()).toLocaleString()}</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div>
                <ReviewModal open={openReview} close={closeModal}>
                    <div className='reviewFlex'>
                        <p>{review}</p>
                    </div>
                </ReviewModal>
            </div>
        </>
    )
}


export default ReviewPost
