import React from 'react';
import './CheckoutProduct.css'
import db from '../../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/counter/userSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const user = useSelector(selectUser)
    let baskets = db.collection(user.email);

    const removeFromBasket = () => {
        baskets.doc(id).delete();

    };
    return (
        <div className="checkoutProduct">
            <img className='checkoutProduct_image' src={image} />

            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>{title}</p>

                <div className='checkoutProduct_rating'>
                    {Array(rating)
                        .fill()
                        .map((_, index) => (
                            <p key={index}>★</p>
                        ))}
                </div>
                <p className='checkoutProduct_price'>
                    <small>₩</small>
                    <strong>{price}</strong>

                </p>


                {!hideButton && (<button onClick={removeFromBasket}><FontAwesomeIcon icon={faTrashCan} /></button>)}
            </div>
        </div>
    );
}

export default CheckoutProduct;