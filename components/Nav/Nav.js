import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardQuestion,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import db, { auth, provider } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, login, logout } from "../../features/counter/userSlice";
import BasketsNum from "../../features/counter/BasketsNum";
import "./Nav.css";
import "./rwdNav.css";
import Search from "./Search";
import Question from "./Question";

function Nav() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [isHovering, setIsHovering] = useState(0);
  const [isClickActive, setIsClickActive] = useState(false);
  const [show, setShow] = useState(false);
  const [loginshow, setLoginShow] = useState(false);

  useEffect(() => {
    // 스크롤시 실행되는 것들이다.

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
        setLoginShow(true);
      } else {
        setShow(false);
        setLoginShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => { });
    };
  }, []);

  useEffect(() => {
    // 랜더링시, 로그인한 상태라면 유저의 정보들을 뿌려줄 수 있는 코드이다.

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            // 로그인 하면 유저에게 들어갈 컨텐츠들이다. ( userSlice.js에서 action.payload로 들어간다.)
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);


  const refresh = () => {
    window.location.replace("/");
  };
  const signIn = () => {
    //구글로 로그인
    auth.signInWithPopup(provider).catch((e) => {
      alert(e.message);
    });

    console.log(auth);
  };
  const [modalOpening, setModalOpening] = useState(false);

  const openModal = () => {
    setModalOpening(true);
  };



  return (
    <header id="header">

      <div className="headerFixed">
        <div className="open">
          <span className="cd-nav-trigger">
            Menu
            <span className="cd-nav-icon"></span>
          </span>
        </div>
        <h1 className={show ? "scroll" : ""} onClick={refresh}>
          <span className="homeLogo logo1">
            <img src="img/logo.png" alt="홈 로고" />
          </span>
        </h1>
        <div className="row">
          <nav id="nav" className={show ? "scroll" : ""}>

            <Link to="/Feed">
              <div className="QnA">
                <i>
                  <FontAwesomeIcon
                    icon={faClipboardQuestion}
                    style={{ color: "#6392e3" }}
                  />
                  <span>고객센터</span>
                </i>
              </div>
            </Link>
            <Link to="/Checkout">
              <div className="checkout_box cart" id="cart">
                <div className="checkout_Num">
                  {<BasketsNum /> ? <BasketsNum /> : 0}
                </div>
                <i>
                  <FontAwesomeIcon
                    icon={faBasketShopping}
                    style={{ color: "#6392e3" }}
                  />
                </i>
              </div>
            </Link>
            <div className={loginshow ? "Loginscroll" : "User"}>
              <span className="userLogin">
                {user ? (
                  <i
                    onClick={() => {
                      auth.signOut();
                    }}
                    className="Logout"
                  >
                    {user ? <img src={user.photo} /> : ""}
                    <span>로그아웃</span>
                  </i>
                ) : (
                  <i
                    className="Login"
                    onClick={() => {
                      signIn();
                    }}
                  >
                    <img
                      className="login_gooogleAuth"
                      src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                      alt=""
                    />
                    <span>로그인</span>
                  </i>
                )}
              </span>
            </div>
            <Link to="/Feed"><div className="question" onClick={openModal}>
              질문하기
            </div></Link>
            {modalOpening ?
              <Question
                setModalOpening={setModalOpening}
                modalOpening={modalOpening}
              /> : null}

            <Link to="/ReviewFeed">
              <div className="myTraveled">여행후기</div>
            </Link>
            <div className="Search_Area"><Search /></div>

            <Link to="/">
              <div
                className={isClickActive ? "open2" : "open2 on"}
                onClick={() => {
                  setIsClickActive(!isClickActive);
                }}
              >
                <div
                  className={show ? "cd-nav-trigger scroll" : "cd-nav-trigger"}
                >
                  Menu
                  <span className="cd-nav-icon"></span>
                </div>
              </div>
            </Link>
            <ul
              className={
                isClickActive
                  ? "navUl active"
                  : "navUl" && show
                    ? "navUl scroll"
                    : "navUl"
              }
              onMouseOver={() => setIsHovering(1)}
              onMouseOut={() => setIsHovering(0)}
            >

              <Link to="/Jeju">
                <li className={isHovering ? "menu active" : "menu"}>
                  <div className={show ? "depth1 scroll" : "depth1"}>
                    <span>제주도</span>
                  </div>
                </li>
              </Link>
              <Link to="/gangwon">
                <li className={isHovering ? "menu active" : "menu"}>
                  <div className={show ? "depth1 scroll" : "depth1"}>
                    <span>강원도</span>
                  </div>
                </li>
              </Link>
              <Link to="/busan">
                <li className={isHovering ? "menu active" : "menu"}>
                  <div className={show ? "depth1 scroll" : "depth1"}>
                    <span>부산/경상도</span>
                  </div>
                  <div
                    className={isHovering ? "depth2 active" : "depth2"}
                  ></div>
                </li>
              </Link>
              <Link to="/seoul">
                <li className={isHovering ? "menu active" : "menu"}>
                  <div className={show ? "depth1 scroll" : "depth1"}>
                    <span>서울/경기</span>
                  </div>
                  <div
                    className={isHovering ? "depth2 active" : "depth2"}
                  ></div>
                </li>
              </Link>
              <Link to="/jeonrado">
                <li className={isHovering ? "menu active" : "menu"}>
                  <div className={show ? "depth1 scroll" : "depth1"}>
                    <span>전라도</span>
                  </div>
                  <div
                    className={isHovering ? "depth2 active" : "depth2"}
                  ></div>
                </li>
              </Link>
              <Link to="/choongchung">
                <li className={isHovering ? "menu active" : "menu"}>
                  <div className={show ? "depth1 scroll" : "depth1"}>
                    <span>충청도</span>
                  </div>
                  <div
                    className={isHovering ? "depth2 active" : "depth2"}
                  ></div>
                </li>
              </Link>
              <Link to="/hongdo">
                <li className={isHovering ? "menu active" : "menu"}>
                  <div className={show ? "depth1 scroll" : "depth1"}>
                    <span>섬</span>
                  </div>
                  <div
                    className={isHovering ? "depth2 active" : "depth2"}
                  ></div>
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
      <div className={isClickActive ? "cd active" : "cd"}>
        <div className="cd_full">
          <div className="cd_full_L">
            <div className="all_category_block on">
              <p className="blind">패키지여행</p>
              <div className="tab_wrap">
                <ul className="tab_page_cont">
                  <Link to="/Jeju">
                    <li
                      className={isClickActive ? "cdLi" : "cdLi active"}
                      onClick={() => {
                        setIsClickActive(!isClickActive);
                      }}
                    >
                      제주도
                    </li>
                  </Link>
                  <Link to="/gangwon">
                    <li
                      className={isClickActive ? "cdLi" : "cdLi active"}
                      onClick={() => {
                        setIsClickActive(!isClickActive);
                      }}
                    >
                      강원도
                    </li>
                  </Link>
                  <Link to="/busan">
                    <li
                      className={isClickActive ? "cdLi" : "cdLi active"}
                      onClick={() => {
                        setIsClickActive(!isClickActive);
                      }}
                    >
                      부산/경상도
                    </li>
                  </Link>
                  <Link to="/seoul">
                    <li
                      className={isClickActive ? "cdLi" : "cdLi active"}
                      onClick={() => {
                        setIsClickActive(!isClickActive);
                      }}
                    >
                      서울/경기
                    </li>
                  </Link>
                  <Link to="/jeonrado">
                    <li
                      className={isClickActive ? "cdLi" : "cdLi active"}
                      onClick={() => {
                        setIsClickActive(!isClickActive);
                      }}
                    >
                      전라도
                    </li>
                  </Link>
                  <Link to="/choongchung">
                    <li
                      className={isClickActive ? "cdLi" : "cdLi active"}
                      onClick={() => {
                        setIsClickActive(!isClickActive);
                      }}
                    >
                      충청도
                    </li>
                  </Link>
                  <Link to="/hongdo">
                    <li
                      className={isClickActive ? "cdLi" : "cdLi active"}
                      onClick={() => {
                        setIsClickActive(!isClickActive);
                      }}
                    >
                      섬
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="cd_full_R">
            <div className="cd_menu"></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
