import React, { useState } from 'react'
import './productreview.css'

function ReviewText({ review }) {

    const [reviewText, setReviewText] = useState(false);

    return (
        <div className='reviewText'>
            <div>{review}</div>
        </div>
    )
}

export default ReviewText
