import React, { useEffect, useState } from 'react'
import './productfeed.css'
import ReviewPost from './ReviewPost'
import db, { auth, provider } from '../firebase';
import firebase from 'firebase/compat/app';
import { selectUser } from '../features/counter/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProductModal from '../components/Modal/ProductModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import ReviewText from './ReviewText';
import ReviewModal from '../components/Modal/ReviewModal';


function ReviewFeed() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();

    const [review, setReview] = useState([]);
    const [input, setInput] = useState("");
    const [title, setTitle] = useState("");
    const [area, setArea] = useState("");
    const [detailArea, setDetailArea] = useState("");
    const [inputUrl, setInputUrl] = useState("");
    const [productmodal, setProductmodal] = useState(false)

    /* 시간따라 올라온 review 올리는 기능 */
    useEffect(() => {
        db.collection("homeReview1").orderBy('timestemp', 'desc')
            .onSnapshot(snapshot => setReview(snapshot.docs.map(
                (doc) => (({
                    id: doc.id, //데이터베이스의 id
                    review: doc.data() //데이터베이스의 정보들
                }))
            )))
    }, [])

    /* firebase 로 데이터를 저장한다. */
    const handleReview = (e) => {
        e.preventDefault();
        {
            user
                ? proModalOpen()
                : alert('로그인 해주세요!')
        };

    }

    const reviewCheck = (e) => {
        e.preventDefault();
        db.collection("homeReview1").add({
            review: input,
            imageUrl: inputUrl,
            timestemp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user,
            title: title,
            area: area + detailArea,
        })

        closeModal("");

    }
    const proModalOpen = () => {
        setProductmodal(true);

    };

    const closeModal = () => {
        setProductmodal(false)
        setTitle("");
        setDetailArea("");
        setArea("");
        setInputUrl("");
        setInput("");
    };

    return (
        <div className='feed'>
            <div className='feed_center'>
                <button className='review_btn' onClick={handleReview}>나의 여행기 후기 작성하기 click!! <FontAwesomeIcon icon={faPlane} style={{ color: "#4567ad" }} /></button>


                <table className='review_table'>
                    <colgroup>
                        <col width='10' />
                        <col width='50' />
                        <col width='20' />
                        <col width='20' />
                    </colgroup>
                    <thead>
                        <tr className='thead_tr'>
                            <th>지역</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성시간</th>
                        </tr>
                    </thead>
                </table>
                {review.map(({ id, review }) => ( //포스트를 맵핑해서 뿌려주는 기능이다.
                    <ReviewPost
                        key={id}
                        Id={id}
                        image={review.imageUrl}
                        review={review.review}
                        timestemp={review.timestemp}
                        quaraUser={review.user.displayName}
                        title={review.title}
                        area={review.area}
                    />
                ))}

                <ProductModal open={productmodal} close={closeModal}>
                    <div className='post_review'>
                        <div className='area_div'>
                            <div className='review_position'>
                                {area ? <small>* 필수 항목</small> : <small style={{ color: "red" }}>* 필수 항목</small>}
                                <select onChange={(e) => { setArea(e.target.value); }}>
                                    <option value="">다녀온 지역선택</option>
                                    <option value="제주도">제주도</option>
                                    <option value="강원도">강원도</option>
                                    <option value="부산/경상도">부산/경상도</option>
                                    <option value="서울/경기">서울/경기</option>
                                    <option value="전라도">전라도</option>
                                    <option value="충청도">충청도</option>
                                    <option value="섬">섬</option>
                                </select>
                            </div>
                            <div className='title_div review_position'>
                                {title ? <small>* 필수 항목</small> : <small style={{ color: "red" }}>* 필수 항목</small>}
                                <input type='review_title' placeholder='제목을 적어주세요.' value={title}
                                    onChange={(e) => setTitle(e.target.value)} />
                            </div>
                        </div>

                        <div className='review_div review_position'>
                            {input ? <small>* 필수 항목</small> : <small style={{ color: "red" }}>* 필수 항목</small>}
                            <textarea value={input}
                                onChange={(e) => setInput(e.target.value)}></textarea>
                        </div>
                        <div className='check_div'>
                            {area && title && input ? <button className='check_review' onClick={reviewCheck}>확인</button>
                                : <div className='check_area'>내용이 비어 있습니다 확인해주세요.</div>
                            }
                        </div>
                        <div>
                            <input className='urlInput' type="text" value={inputUrl} onChange={(e) => { setInputUrl(e.target.value) }} placeholder="이미지 url을 적어주세요." />
                        </div>
                    </div>
                </ProductModal>
            </div>
        </div>
    )
}

export default ReviewFeed
