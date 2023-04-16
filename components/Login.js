import React, { useState } from 'react'
import { auth, provider } from '../firebase'
import './Login.css'

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    /* 로그인 */
    const signIn = () => { //구글로 로그인
        auth.signInWithPopup(provider).catch((e) => {
            alert(e.message)
        })

        console.log(auth)
    }

    const handleLogin = (e) => { // 일반 로그인
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then(
            (auth) => {
                console.log(auth);
            }).catch((e) => alert(e.message))

        setEmail("");
        setPassword("");
    }

    /* 회원가입 */
    const handleRegister = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            if (auth) {
                console.log(auth)
            }

        }).catch((e) => alert(e.message))
        setEmail("");
        setPassword("");
    };
    return (
        <div className='login'>
            <div className='login_container'>
                <div className='login_logo'>
                    <img src="https://qph.fs.quoracdn.net/main-qimg-d049946241e53481209a8938b70321e0" alt="" />
                </div>
                <div className='login_desc'>
                    <p>리액트 깎는 백수를 시청해주셔서 감사합니다.</p>
                    <h3>리액트 깍는 백수 올림</h3>
                </div>
                <div className="login_auth">
                    <div className="login_authOptions">

                        <div className="login_authOption">
                            <img className="login_gooogleAuth"
                                src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                                alt="" />
                            <p onClick={signIn}> 구글 아이디로 로그인 </p>
                        </div>

                        <div className="login_authDesc">
                            <p>
                                <span style={{ color: "blue", cursor: "pointer" }}>
                                    이메일로 회원가입
                                </span>
                                시 본사의
                                <p>
                                    <span style={{ color: "blue", cursor: "pointer" }}>
                                        개인정보정책{" "}
                                    </span>
                                </p>
                                과 {" "}
                                <span style={{ color: "blue", cursor: "pointer" }}>
                                    서비스 제공 정책
                                </span>
                                에 동의하는 것으로 간주합니다
                            </p>
                        </div>
                    </div>

                    <div className="login_emailPass">
                        <div className="login_label">
                            <h4> 로그인 </h4>
                        </div>
                        <div className="login_inputFields">
                            <div className="login_inputField">
                                <input type="text" placeholder="이메일"
                                    value={email || ''} onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className="login_inputField">
                                <input type="password" placeholder="비밀번호"
                                    value={password || ''} onChange={e => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className="login_forgButt">
                            <small> 비밀번호 찾기</small>
                            <button type="submit" onClick={handleLogin}>로그인</button>
                        </div>
                        <button onClick={handleRegister}>회원가입</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
