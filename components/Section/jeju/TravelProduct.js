import React, { useState } from 'react';
import db from '../../../firebase';
import { useSelector } from 'react-redux'

import { selectUser } from '../../../features/counter/userSlice';

function TravelProduct({ id, title, image, price, rating, date }) {

    const user = useSelector(selectUser);

    /* 장바구니에 담기 기능 */
    const handleBasket = (e) => { // firebase 로 데이터를 저장한다.
        if (user) {
            db.collection(user.email)
                .add({
                    id: id,
                    title: title,
                    image: image,
                    price: price,
                    rating: rating,
                    date: date,
                })
        }
    }


    return (
        <div className="travelproduct">
            <h2>
                {title}
            </h2>
            <div className="text_p">
                <p className="text_p_1">출발기간 <span>{date}</span></p>
            </div>
            <p className='text_p_right'> <span className='travelPrice'>{price}</span>원</p>
            <div className="text_p_bottom">
                <span>이용교통</span><span className="bottom_bus">버스</span>
            </div>
            <div className='product_rating'>
                {
                    Array(rating)
                        .fill()
                        .map((element, index) => (
                            <p key={index} style={{ display: "inline-block", color: "#f2c130" }}>★</p>
                        ))
                }
                <img src={image} style={{ display: 'none' }} />
            </div>
            <button onClick={() => { handleBasket() }} className="basket_btn">장바구니에 담기</button>
        </div>
    );
}

export default TravelProduct;