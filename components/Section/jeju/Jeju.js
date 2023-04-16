import React, { useState } from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import './jeju.css';
import '../Gangwon/rwdGyuk.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
function Jeju() {
    const [jejusiActive, setJejusiActive] = useState(true)
    const [jungmooonActive, setJungmooonActive] = useState(false)
    const [seoguipoActive, setSeoguipoActive] = useState(false)
    const [aewoulActive, setAewoulActive] = useState(false)
    const [sungsanActive, setSungsanActive] = useState(false)
    const jejuActive = () => {
        setJejusiActive(true)
        setJungmooonActive(false)
        setSeoguipoActive(false)
        setAewoulActive(false)
        setSungsanActive(false)
    }
    const jmActive = () => {
        setJejusiActive(false)
        setJungmooonActive(true)
        setSeoguipoActive(false)
        setAewoulActive(false)
        setSungsanActive(false)
    }
    const sgpActive = () => {
        setJejusiActive(false)
        setJungmooonActive(false)
        setSeoguipoActive(true)
        setAewoulActive(false)
        setSungsanActive(false)
    }
    const awActive = () => {
        setJejusiActive(false)
        setJungmooonActive(false)
        setSeoguipoActive(false)
        setAewoulActive(true)
        setSungsanActive(false)
    }
    const sungsActive = () => {
        setJejusiActive(false)
        setJungmooonActive(false)
        setSeoguipoActive(false)
        setAewoulActive(false)
        setSungsanActive(true)
    }

    const [isClickActive, setIsClickActive] = useState(false)

    const swiperStyle = {
        height: "500px",
        width: "100%",
    }
    const swiperStyle2 = {
        position: "relative",
        height: "300px",
        width: "60%",
        left: "50%",
        transform: "translateX(-50%)"
    }
    return (
        <div>
            <div className='jeju_insert'>
                <div className='jeju_insert_center'>
                    <h2>제주도 지역 바로가기</h2>
                    <ul className='insert_link'>
                        <Link to="/Jejusi"><li><span>제주시</span></li></Link>
                        <Link to="/Jungmoon"><li><span>중문</span></li></Link>
                        <Link to="/Seoguipo"><li><span>서귀포</span></li></Link>
                        <Link to="/Aewoul"><li><span>애월</span></li></Link>
                        <Link to="/Sungsan"><li><span>성산</span></li></Link>
                    </ul>
                    <div className='jeju_MAP'>
                        <div className='Map_left'>
                            <div className='jeju_img'>
                                <i className={jungmooonActive ? 'jeju_jungmoon active' : 'jeju_jungmoon'} onClick={jmActive}>중문</i>
                                <i className={seoguipoActive ? 'jeju_seoguipo active' : 'jeju_seoguipo'} onClick={sgpActive}>서귀포</i>
                                <i className={aewoulActive ? 'jeju_aewoul active' : 'jeju_aewoul'} onClick={awActive}>애월</i>
                                <i className={jejusiActive ? 'jeju_jejusi active' : 'jeju_jejusi'} onClick={jejuActive}>제주시</i>
                                <i className={sungsanActive ? 'jeju_sungsan active' : 'jeju_sungsan'} onClick={sungsActive}>성산</i>

                            </div>
                        </div>
                        <div className='jejuSection'>
                            <div className={jungmooonActive ? "jungmoon active" : "jungmoon"}>
                                <ul className='bannerUl'>
                                    <li>
                                        <div className="bannerImg">
                                            <Link to="/Jungmoon">
                                                <div className="zoom">
                                                    <span>페이지 바로가기 <FontAwesomeIcon icon={faArrowRightToBracket} /></span>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="bannerImg">
                                            <Link to="/Jungmoon">
                                                <div className="zoom">
                                                    <span>페이지 바로가기 <FontAwesomeIcon icon={faArrowRightToBracket} /></span>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="bannerImg">
                                            <Link to="/Jungmoon">
                                                <div className="zoom">
                                                    <span>페이지 바로가기 <FontAwesomeIcon icon={faArrowRightToBracket} /></span>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className={seoguipoActive ? "seoguipo active" : "seoguipo"}>
                                <ul className='bannerUl'>
                                    <li>
                                        <div className="bannerImg">
                                            <Link to="/Seoguipo">
                                                <div className="zoom">
                                                    <span>페이지 바로가기 <FontAwesomeIcon icon={faArrowRightToBracket} /></span>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="bannerImg">
                                            <Link to="/Seoguipo">
                                                <div className="zoom">
                                                    <span>페이지 바로가기 <FontAwesomeIcon icon={faArrowRightToBracket} /></span>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="bannerImg">
                                            <Link to="/Seoguipo">
                                                <div className="zoom">
                                                    <span>페이지 바로가기 <FontAwesomeIcon icon={faArrowRightToBracket} /></span>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className={aewoulActive ? "aewoul active" : "aewoul"}>
                                <ul className='bannerUl'>
                                    <li>
                                        <div className="bannerImg">
                                            <Link to="/Aewoul">
                                                <div className="zoom">
                                                    <span>페이지 바로가기 <FontAwesomeIcon icon={faArrowRightToBracket} /></span>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="bannerImg">
                                            <Link to="/Aewoul">
                                                <div className="zoom">
                                                    <span>페이지 바로가기 <FontAwesomeIcon icon={faArrowRightToBracket} /></span>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="bannerImg">
                                            <Link to="/Aewoul">
                                                <div className="zoom">
                                                    <span>페이지 바로가기 <FontAwesomeIcon icon={faArrowRightToBracket} /></span>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className={jejusiActive ? "jejusi active" : "jejusi"}>
                                <ul className='bannerUl'>
                                    <li>
                                        <div className="bannerImg">
                                            <Link to="/Jejusi">
                                                <div className="zoom">
                                                    <span>페이지 바로가기 <FontAwesomeIcon icon={faArrowRightToBracket} /></span>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="bannerImg">
                                            <Link to="/Jejusi">
                                                <div className="zoom">
                                                    <span>페이지 바로가기 <FontAwesomeIcon icon={faArrowRightToBracket} /></span>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="bannerImg">
                                            <Link to="/Jejusi">
                                                <div className="zoom">
                                                    <span>페이지 바로가기 <FontAwesomeIcon icon={faArrowRightToBracket} /></span>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className={sungsanActive ? "sungsan active" : "sungsan"}>
                                <ul className='bannerUl'>
                                    <li>
                                        <div className="bannerImg">
                                            <Link to="/Sungsan">
                                                <div className="zoom">
                                                    <span>페이지 바로가기 <FontAwesomeIcon icon={faArrowRightToBracket} /></span>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="bannerImg">
                                            <Link to="/Sungsan">
                                                <div className="zoom">
                                                    <span>페이지 바로가기 <FontAwesomeIcon icon={faArrowRightToBracket} /></span>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="bannerImg">
                                            <Link to="/Sungsan">
                                                <div className="zoom">
                                                    <span>페이지 바로가기 <FontAwesomeIcon icon={faArrowRightToBracket} /></span>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='clickActive'>
                <h2>국내 제주 베스트셀러</h2>
                <ul>
                    <li className={isClickActive ? "clickActiveLi" : "clickActiveLi active"}
                        onClick={() => { setIsClickActive(false) }}>가성비 끝판왕
                    </li>
                    <li className={isClickActive ? "clickActiveLi active" : "clickActiveLi"}
                        onClick={() => { setIsClickActive(true) }}>휴식, 그리고 힐링
                    </li>

                </ul>
                <div className={isClickActive ? "section1" : "section1 active"}>
                    <article className="article22">
                        <div className="slide-group">
                            <Swiper
                                style={swiperStyle2}
                                slidesPerView={3}
                                spaceBetween={50}
                                pagination={{ clickable: true }}
                                modules={[Navigation, Pagination]}
                                navigation
                                breakpoints={{
                                    200: {
                                        slidesOffsetBefore: 0,
                                        slidesPerView: 1,
                                        spaceBetween: 8,
                                        centeredSlides: false,
                                    },
                                    500: {
                                        slidesOffsetBefore: 0,
                                        slidesPerView: 1,
                                        spaceBetween: 8,
                                        centeredSlides: false,
                                    },
                                    800: {
                                        slidesOffsetBefore: 16,
                                        slidesPerView: 1,
                                        spaceBetween: 8,
                                        centeredSlides: false,
                                    },
                                    1280: {
                                        slidesOffsetBefore: 16,
                                        slidesPerView: 3,
                                        spaceBetween: 8,
                                        centeredSlides: false,
                                    },
                                }}

                            >

                                <SwiperSlide><span className="slide slide1">

                                </span></SwiperSlide>
                                <SwiperSlide><span className="slide slide2">

                                </span></SwiperSlide>
                                <SwiperSlide><span className="slide slide3">

                                </span></SwiperSlide>
                                <SwiperSlide><span className="slide slide4">

                                </span></SwiperSlide>
                                <SwiperSlide>
                                    <span className="slide slide5"></span>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <span className="slide slide6"></span>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </article >
                </div>
                <div className={isClickActive ? "section1 active" : "section1"}>
                    <article className="article22">
                        <div className="slide-group">
                            <Swiper
                                style={swiperStyle2}
                                slidesPerView={3}
                                spaceBetween={50}
                                pagination={{ clickable: true }}
                                modules={[Navigation, Pagination]}
                                navigation
                                breakpoints={{
                                    200: {
                                        slidesOffsetBefore: 0,
                                        slidesPerView: 1,
                                        spaceBetween: 8,
                                        centeredSlides: false,
                                    },
                                    500: {
                                        slidesOffsetBefore: 0,
                                        slidesPerView: 1,
                                        spaceBetween: 8,
                                        centeredSlides: false,
                                    },
                                    800: {
                                        slidesOffsetBefore: 16,
                                        slidesPerView: 1,
                                        spaceBetween: 8,
                                        centeredSlides: false,
                                    },
                                    1280: {
                                        slidesOffsetBefore: 16,
                                        slidesPerView: 3,
                                        spaceBetween: 8,
                                        centeredSlides: false,
                                    },
                                }}

                            >
                                <SwiperSlide><span className="slide slide7">

                                </span></SwiperSlide>
                                <SwiperSlide><span className="slide slide8">

                                </span></SwiperSlide>
                                <SwiperSlide><span className="slide slide9">

                                </span></SwiperSlide>
                                <SwiperSlide><span className="slide slide10">

                                </span></SwiperSlide>
                                <SwiperSlide>
                                    <span className="slide slide11"></span>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <span className="slide slide12"></span>
                                </SwiperSlide>
                            </Swiper>
                        </div>

                    </article >

                </div>
            </div>
        </div >
    );
}

export default Jeju;

