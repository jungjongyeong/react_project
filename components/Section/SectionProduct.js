import React, { useState } from 'react';
import db from '../../firebase';
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/counter/userSlice';
function SectionProduct({ id, title, image, price, rating, date, text, modal, basketClickEvent }) {
    const user = useSelector(selectUser);

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
        } else { alert("로그인을 해주세요!") }
    }
    return (
        <div className="SectionProduct">
            <div className="slideTxt">
                <p>{title}</p>
                <b>{text}</b>
                <p>{price}원</p>
            </div>

            <button onClick={() => { handleBasket(); basketClickEvent(); }} className="basket_btn" id="addtocart" >장바구니에 담기</button>
        </div>
    );
}

export default SectionProduct;