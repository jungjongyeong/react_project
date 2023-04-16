import React, { useEffect, useState } from 'react';
import './Subtotal.css'
import BasketsNum from '../../features/counter/BasketsNum';
import { selectUser } from '../../features/counter/userSlice';
import { useSelector } from 'react-redux';
import db from '../../firebase';

function Subtotal() {
    const user = useSelector(selectUser)
    const [baskets, setBaskets] = useState([]);

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

    let priceTotal = 0;
    let priceArray = baskets.map((bas) => {
        return bas.basket.price
    })
    priceArray.forEach(price => {
        priceTotal += price
    });
    useEffect(() => {

        console.log(priceTotal)
    }, [baskets])

    return (
        <div>
            <div className="subtotal">
                <>
                    <p>
                        <BasketsNum /> 개 : <strong style={{ fontWeight: "bold" }}> 총액 {priceTotal}  원 </strong>
                    </p>
                </>
            </div>
        </div>
    );
}

export default Subtotal;
