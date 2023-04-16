import React from 'react';
import './Product.css'
import db from './firebase'
import { useSelector } from 'react-redux'

import { selectUser } from './features/counter/userSlice';

function Product({ id, title, image, price, rating }) {

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
                })
        }
        console.log(user.id)
    }

    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className='product_price'>
                    <small>가격</small>
                    <strong>{price}</strong>
                    <small>원</small>
                </p>
                <div className='product_rating'>
                    {
                        Array(rating)
                            .fill()
                            .map(() => (
                                <p>★</p>
                            ))
                    }

                </div>
            </div>
            <img src={image} />
            <button onClick={() => { handleBasket() }}>장바구니에 담기</button>
        </div>
    );
}

export default Product;