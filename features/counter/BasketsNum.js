import React, { useEffect, useState } from 'react';
import db from '../../firebase';
import firebase from 'firebase/compat/app';
import { selectUser } from './userSlice';
import { useSelector } from 'react-redux';

/* 장바구니에 담긴 값 개수 세기 */
export const BasketsNum = () => {
    const user = useSelector(selectUser)
    const [baskets, setBaskets] = useState([]);
    let [basketIndex, setbasketIndex] = useState();

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


    useEffect(() => {
        basketIndexMap();
    }, [baskets])


    const basketIndexMap = () => {
        setbasketIndex(baskets.length)
    }
    return (
        <>
            {basketIndex}
        </>
    )
}
export default BasketsNum;
