import React, { useEffect, useState } from 'react'
import './Post.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectQuestionId, selectQuestionName, setQuestionInfo } from '../../features/counter/questionSlice'
import { selectUser, login, logout } from '../../features/counter/userSlice';
import firebase from 'firebase/compat/app';
import db, { auth, provider } from '../../firebase'
import SectionModal from "../Modal/SectionModal";
import Nav from './Nav';

function Post({ Id, image, question, timestemp, quaraUser }) {

    const [answer, setAnswer] = useState("");
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const questionId = useSelector(selectQuestionId);
    const questionName = useSelector(selectQuestionName);
    const [getAnswer, setGetAnswer] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    /* 답변하기 */
    const handleAnswer = (e) => {
        e.preventDefault();
        closeModal()
        if (questionId) { //로그인상태일때 실행되는건데, 데이터베이스 'answer'컬렉션에 내 답변과 정보를 저장한다.
            db.collection('questions').doc(questionId).collection('answer')
                .add({
                    questionId: questionId,
                    timestemp: firebase.firestore.FieldValue.serverTimestamp(),
                    answer: answer,
                    user: user,
                })
            console.log(questionId, questionName);
            setAnswer("");
        }

    }
    console.log(questionId)

    useEffect(() => {
        if (questionId) { //답변 올리면 바로 올라가는 기능이다. (시간별로)
            db.collection('questions').doc(questionId).collection('answer').orderBy(
                "timestemp", "desc").onSnapshot(snapshot => setGetAnswer(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        answers: doc.data()
                    }))
                ))
        }

    }, [questionId])

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    const signIn = () => { //구글로 로그인
        auth.signInWithPopup(provider).catch((e) => {
            alert(e.message)
        })

        console.log(auth)
    }
    return (
        <div className='post' onClick={() => dispatch(setQuestionInfo({
            questionId: Id,
            questionName: question,
        }))}>
            <div className="post_info">
                <img src={quaraUser.photo} />
                <h5> {quaraUser.displayName ? quaraUser.displayName : quaraUser.email} </h5>
                <small> {new Date(timestemp?.toDate()).toLocaleString()} </small>

            </div>
            <div className='post_body'>
                <div className='post_question'>
                    <p>{question}</p>

                    <button className='post_btnAnswer' onClick={() => openModal(true)}>답변하기</button>
                    <SectionModal open={modalOpen} close={closeModal} >
                        <div className='modal_question'>
                            <h1>{question}</h1>
                            <p>
                                <span className='name'>{quaraUser.displayName ? quaraUser.displayName : quaraUser.email}</span>
                                로부터의 질문
                                <span className='time'>{new Date(timestemp?.toDate()).toLocaleString()}</span>
                                에 작성됨
                            </p>
                        </div>
                        <div className='modal_answer'>
                            <textarea placeholder='답변을 작성해 주세요' type="text" value={answer} onChange={
                                (e) => setAnswer(e.target.value)}
                            />
                        </div>

                        <div className='modal_buttons'>
                            {
                                user
                                    ? <button type="submit" className='add' onClick={handleAnswer}>답변달기</button>
                                    : <div className="Login" onClick={() => { signIn(); }} >
                                        <img className="login_gooogleAuth postGoogle"
                                            src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                                            alt="" />
                                        구글 아이디로 로그인
                                    </div>

                            }
                            <button onClick={closeModal} className="can">닫기</button>

                        </div>
                    </SectionModal>


                </div>

                <div className='post_answer'>
                    {
                        getAnswer.map(({ id, answers }) =>
                        (
                            <p key={id} style={{ position: "relative", paddingBottom: "5px" }}>
                                {Id === answers.questionId ? (
                                    <span>{answers.answer}
                                        <br />
                                        <span style={{
                                            position: "relative",
                                            color: "yellowgreen",
                                            fontSize: "small",
                                            display: "flex",
                                            right: "0px",
                                        }}>
                                            <span style={{ color: "#b92b27" }}>
                                                {answers.user.displayName ? answers.user.displayName : answers.user.email}
                                            </span>
                                            {" "} {new Date(answers.timestemp?.toDate()).toLocaleString()}
                                            에 작성됨
                                        </span>
                                    </span>
                                ) : ("")}
                            </p>
                        )
                        )
                    }
                </div>
                <img src={image} alt='' />
            </div>

        </div>
    )
}

export default Post
