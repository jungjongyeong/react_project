import React, { useState } from "react";
import db, { auth, provider } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, login, logout } from "../../features/counter/userSlice";
import firebase from "firebase/compat/app";
import "./Nav.css";
import "./rwdNav.css";
import SectionModal from "../Modal/SectionModal";

function Question({ setModalOpening, modalOpening }) {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const [isHovering, setIsHovering] = useState(0);
    const [isClickActive, setIsClickActive] = useState(false);
    const [show, setShow] = useState(false);
    const [loginshow, setLoginShow] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [input, setInput] = useState("");
    const [inputUrl, setInputUrl] = useState("");



    /* 질문하기 기능 */
    const handleQuestion = (e) => {
        // firebase 로 데이터를 저장한다.
        e.preventDefault();
        setModalOpening(false);
        db.collection("questions").add({
            question: input,
            imageUrl: inputUrl,
            timestemp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user,
        });
        setInput("");
        setInputUrl("");
    };

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    const signIn = () => {
        //구글로 로그인
        auth.signInWithPopup(provider).catch((e) => {
            alert(e.message);
        });

        console.log(auth);
    };


    return (
        <div className={modalOpening ? 'openModal modal' : 'modal'}>

            <section className='sectionModal'>
                <header style={{ height: "50px" }}>
                    <button className="close" onClick={() => { setModalOpening(false); }}>
                        &times;
                    </button>
                    <div className="modal_title">
                        <h5> 질문자 </h5>
                        {user ? user.displayName : "로그인 하세요 !"}
                    </div>

                </header>
                <div className="modal_Field">
                    <textarea style={{ height: "200px" }}
                        type="text"
                        placeholder="6하 원칙으로 질문을 작성하세요"
                        required
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />

                    <div className="modal_fieldLink">
                        <input style={{ border: "1px solid #ddd", marginRight: "5px" }}
                            type="text"
                            placeholder="url 링크만을 작성해 주세요"
                            value={inputUrl}
                            onChange={(e) => setInputUrl(e.target.value)}
                        />
                    </div>
                </div>


                <footer>
                    <div className="modal_buttons">
                        {user ? (
                            <button onClick={handleQuestion} className="add">
                                질 문 하 기
                            </button>
                        ) : (
                            <div
                                className="Login"
                                onClick={() => {
                                    signIn();
                                }}
                            >
                                <img
                                    className="login_gooogleAuth postGoogle"
                                    src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                                    alt=""
                                />
                                로그인
                            </div>
                        )}
                    </div>
                </footer>
            </section>

        </div>
    );
}

export default Question;
