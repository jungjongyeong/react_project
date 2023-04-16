import React, { useEffect, useState } from 'react';
import './Checkout.css'
import Subtotal from './Subtotal';
import CheckoutProduct from "./CheckoutProduct";
import { useSelector } from "react-redux"
import { selectUser } from './features/counter/userSlice';

import db from './firebase'

function Checkout() {
    const user = useSelector(selectUser)
    const [baskets, setBaskets] = useState([]);

    /* 시간따라 올라온 post사진들을 올리는 기능 */

    useEffect(() => {
        if (user) {
            db.collection(user.email).orderBy('id', 'desc')
                .onSnapshot(snapshot => setBaskets(snapshot.docs.map(
                    (doc) => (({
                        id: doc.id, //데이터베이스의 id
                        basket: doc.data() //데이터베이스의 정보들
                    }))
                )))
        }
    }, [user])

    return (
        <div className="checkout">
            <div className='checkout_children'>
                <div className='checkout_top'>
                    <h2 className="checkout_title"> 장바구니 </h2>
                    <div className="checkout_subtotal">
                        <Subtotal />
                    </div>
                </div>
                <div className='checkout_proback'>
                    <div className='ckeckout_product'>
                        {user ? baskets.map(({ id, basket }) => (
                            <div key={id}><CheckoutProduct
                                id={id}
                                title={basket?.title}
                                image={basket?.image}
                                price={basket?.price}
                                rating={basket?.rating}
                            />

                            </div>

                        )) : ""}

                    </div>
                </div>
            </div>





        </div>
    );
}

export default Checkout;