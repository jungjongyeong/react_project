import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlane } from "@fortawesome/free-solid-svg-icons";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SectionModal from "../Modal/SectionModal";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Section.css";
import "./rwdSection.css";
import SectionProduct from "./SectionProduct";
import ProductModal from "../Modal/ProductModal";
import ReviewFeed from "../../Review/ReviewFeed";
import Nav from "../Nav/Nav";
import Search from "../Nav/Search";




function Section() {
  /* 화면 리셋 하기 */
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  /* click이벤트 */
  const [val, setVal] = useState("");
  const [iuVal, setinputVal] = useState([]);
  const [isClickActive, setIsClickActive] = useState(false);
  const swiperStyle = {
    position: "relative",
    height: "452px",
  };
  const swiperStyle2 = {
    position: "relative",
    height: "452px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const addCreep = (event) => {
    event.preventDefault();
    setinputVal([
      ...iuVal,
      {
        title: val,
      },
    ]);
  };

  /* 장바구니 이벤트 */
  const basketClickEvent = () => {
    let button = document.getElementById("addtocart");
    let cart = document.getElementById("cart");

    button.classList.add("sendtocart");
    setTimeout(function () {
      button.classList.remove("sendtocart");
      cart.classList.add("shake");
      setTimeout(function () {
        cart.classList.remove("shake");
      }, 1000);
    }, 200);
    console.log(123123);
  };

  /* 모달 */
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);
  const [modalOpen4, setModalOpen4] = useState(false);
  const [modalOpen5, setModalOpen5] = useState(false);
  const [productmodal, setProductmodal] = useState(false);

  const proModalOpen = () => {
    setProductmodal(true);
  };
  const openModal1 = () => {
    setModalOpen1(true);
  };

  const openModal2 = () => {
    setModalOpen2(true);
  };

  const openModal3 = () => {
    setModalOpen3(true);
  };
  const openModal4 = () => {
    setModalOpen4(true);
  };
  const openModal5 = () => {
    setModalOpen5(true);
  };
  const closeModal = () => {
    setModalOpen1(false);
    setModalOpen2(false);
    setModalOpen3(false);
    setModalOpen4(false);
    setModalOpen5(false);
    setProductmodal(false);
  };


  return (
    <div>
      <section className={isClickActive ? "section active" : "section"}>
        <form onSubmit={addCreep}>
          {/* {renderInVal} */}
          <div id="quickTab">
            <p className="stit_con_title">어디로 떠나고 싶으세요?</p>
            <Link to="Airppp">
              <button
                type="submit"
                className="btn_cof cfrm"
                nlogger="city"
                id="citySearch"
              >
                항공 검색하기
                <FontAwesomeIcon icon={faPlane} />
              </button>
            </Link>
          </div>
        </form>
        <article className="article1">
          <div className="slide-group">
            <Swiper
              style={swiperStyle}
              direction={"vertical"} // 슬라이드의 방향을 수직으로 설정합니다.
              spaceBetween={50}
              slidesPerView={1}
              modules={[Navigation, Pagination, Autoplay]}
              autoplay={{ delay: 3000 }}
              loop={true}
            >
              <SwiperSlide>
                <span href="" className="slide slide1"></span>
              </SwiperSlide>
              <SwiperSlide>
                <span href="" className="slide slide2"></span>
              </SwiperSlide>
              <SwiperSlide>
                <span href="" className="slide slide3"></span>
              </SwiperSlide>
              <SwiperSlide>
                <span href="" className="slide slide4"></span>
              </SwiperSlide>
            </Swiper>
          </div>
        </article>

        <article className="article2">
          <div className="tit">
            <div className="row cf">
              <h3>2023 우리를 위해, 우리 여행 갈까 🛫</h3>
            </div>
            <div className="titimg">
              <div className="slide-group2">
                <Swiper
                  style={swiperStyle2}
                  slidesPerView={5}
                  modules={[Navigation, Pagination, Autoplay]}
                  autoplay={{ delay: 2000 }}
                  breakpoints={{
                    200: {
                      slidesOffsetBefore: 0,
                      slidesPerView: 1,
                      spaceBetween: 8,
                      centeredSlides: false,
                    },
                    500: {
                      slidesOffsetBefore: 0,
                      slidesPerView: 2,
                      spaceBetween: 8,
                      centeredSlides: false,
                    },
                    800: {
                      slidesOffsetBefore: 16,
                      slidesPerView: 3,
                      spaceBetween: 8,
                      centeredSlides: false,
                    },
                    1280: {
                      slidesOffsetBefore: 16,
                      slidesPerView: 5,
                      spaceBetween: 8,
                      centeredSlides: false,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="slide slide1">
                      <span className="art2_img1">
                        <span className="blind">슬라이드 이미지1</span>
                      </span>
                      <SectionProduct
                        id="slideTxt2"
                        title="내생애 꼭 가봐야할 동해안권 "
                        text="2박3일 #부산 #속초"
                        price={151000}
                        rating={3}
                        date="2023.09.10 ~ 2023.10.30"
                        image="https://dimgcdn.ybtour.co.kr/TN/b0/b030c6bb06c3c8ee12cea9a22dc979fc.tn.410x280.png"
                        basketClickEvent={basketClickEvent}
                      />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="slide slide2">
                      <span className="art2_img2">
                        <span className="blind">슬라이드 이미지1</span>
                      </span>
                      <SectionProduct
                        id="slideTxt3"
                        title="[KTX-1박]호텔 여수밤바다+순천+하동"
                        text="구례 남도 방방곡곡"
                        price={109000}
                        rating={3}
                        date="2023.09.10 ~ 2023.10.30"
                        image="https://dimgcdn.ybtour.co.kr/TN/4a/4acdfd2e4b11786c5f688e28a4afbced.tn.410x280.jpg"
                        basketClickEvent={basketClickEvent}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide slide3">
                      <span className="art2_img3">
                        <span className="blind">슬라이드 이미지1</span>
                      </span>
                      <SectionProduct
                        id="slideTxt4"
                        title="바다와 어우러진 삼척맹방유채꽃축제"
                        text="수로부인헌화공원 당일여행"
                        price={40000}
                        rating={3}
                        date="2023.09.10 ~ 2023.10.30"
                        image="https://dimgcdn.ybtour.co.kr/TN/45/456ca0b1dd8dcd85758162e7f32bfead.tn.410x280.png"
                        basketClickEvent={basketClickEvent}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide slide4">
                      <span className="art2_img4">
                        <span className="blind">슬라이드 이미지1</span>
                      </span>
                      <SectionProduct
                        id="slideTxt4"
                        title="동화속 북유럽~인제 원대리자작나무숲"
                        text="양양 하조대, 속초중앙시장 당일여행"
                        price={79000}
                        rating={3}
                        date="2023.09.10 ~ 2023.10.30"
                        image="https://dimgcdn.ybtour.co.kr/TN/bc/bcf8f836ad2cfe217c1030f470ac31c5.tn.410x280.jpg"
                        basketClickEvent={basketClickEvent}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide slide5">
                      <span className="art2_img5">
                        <span className="blind">슬라이드 이미지1</span>
                      </span>
                      <SectionProduct
                        id="slideTxt4"
                        title="[푸른바다 기차여행] 강릉 해안선열차"
                        text="안목해변, 동해 묵호 당일여행"
                        price={79000}
                        rating={3}
                        date="2023.09.10 ~ 2023.10.30"
                        image="https://dimgcdn.ybtour.co.kr/TN/0c/0c79217939226d3d87daada467c0e1b7.tn.410x280.png"
                        basketClickEvent={basketClickEvent}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide slide6">
                      <span className="art2_img6">
                        <span className="blind">슬라이드 이미지1</span>
                      </span>
                      <SectionProduct
                        id="slideTxt4"
                        title="낭만BIG3! 대관령양떼목장"
                        text="정동진바다, 안목항커피거리여행"
                        price={399000}
                        rating={3}
                        date="2023.09.10 ~ 2023.10.30"
                        image="https://dimgcdn.ybtour.co.kr/TN/fe/fe6a9c346bb72b09a26df1ef6d3fc82e.tn.410x280.png"
                        basketClickEvent={basketClickEvent}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide slide7">
                      <span className="art2_img7">
                        <span className="blind">슬라이드 이미지1</span>
                      </span>
                      <SectionProduct
                        id="slideTxt4"
                        title="[KTX-1박] 호텔 보배섬 진도&슬로시티 "
                        text="증도/목포케이블카여행"
                        price={399000}
                        rating={3}
                        date="2023.09.10 ~ 2023.10.30"
                        image="https://dimgcdn.ybtour.co.kr/TN/28/2845f1570714eb4b14b8efc67f3fbe02.tn.410x280.jpg"
                        basketClickEvent={basketClickEvent}
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </article>

        <article className="article5">
          <div className="slide-group5">
            <div className="slide slide1">
              <div className="part1">
                <img src="./img/article5_img1.jpg" alt="" />
              </div>
              <div className="part2">
                <h3 className="part2_h3">꿈을 담은 특별한 여행</h3>
                <p className="part2_p">Original</p>
                <ul>
                  <li>특별한 키워드를 담은 만국 Original 상품을 만나보세요.</li>
                  <li>#머무름 - 머무는 공간이 특별하게 기억되는 여행</li>
                  <li>#모험 - 이색적인 경험을 즐기는 여행</li>
                  <li>#함께하다 - 취향과 관심사를 공유하는 여행</li>
                  <li>#환경친화적인 - 환경친화적인 일상을 실천하는 여행</li>
                  <li>
                    #제우스월드 특별판 - 투어 최고의 럭셔리 패키지 여행 ZEUS
                  </li>
                </ul>
                <div className="part2_art1 cf">
                  <img src="./img/article5_img2.jpg" alt="" />
                  <div className="part2_info">
                    <p className="info1">
                      [허영호대장 동행] 네팔 에베레스트베이스캠프 일정 포함!!!!
                    </p>
                    <p className="info2">
                      에베레스트 베이스캠프(EBC) 트레킹 및 칼라파타르 일정 포함
                    </p>
                    <strong className="info3">
                      5,636,000<span>원~</span>
                    </strong>
                  </div>
                </div>
                <div className="part2_art2">
                  <img src="./img/article5_img3.jpg" alt="" />
                  <i className="fas fa-search"></i>
                  <div className="part2_info">
                    <p className="info1">
                      치앙마이 5일 #코끼리와의 하루 #5성급호텔 #5대특식
                    </p>
                    <p className="info2">
                      코끼리 방갈로 1박 투숙&코끼리가 직접 깨워주는 모닝콜
                      서비스
                    </p>
                    <strong className="info3">
                      1,579,000<span>원~</span>
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="article6">
          <div>
            <h3>고객님만을 위한 추천여행</h3>
            <ul className="bannerUl cf">
              <li>
                <div className="bannerImg bannerImg1">
                  <img src="./img/main_banner_img1.jpg" alt="" />
                  <div className="zoom">
                    <span>
                      <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        onClick={openModal1}
                      />
                    </span>
                  </div>
                </div>
                <p>그랜드하얏트 제주(5성급)호텔</p>
                <span className="span2">#제주도#인스타그램#5성급</span>
              </li>
              <SectionModal open={modalOpen1} close={closeModal}>
                <img src="./img/main_banner_img1.jpg" alt="" />
                그랜드하얏트 제주(5성급)호텔
              </SectionModal>
              <li>
                <div className="bannerImg bannerImg2">
                  <img src="./img/main_banner_img2.jpg" alt="" />
                  <div className="zoom">
                    <span>
                      <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        onClick={openModal2}
                      />
                    </span>
                  </div>
                </div>
                <p>힐링!힐링! 관광급 OR 특급 OR 그랜드하얏트 호텔</p>
                <span className="span2">#힐링#그랜드호텔#5성급</span>
              </li>
              <SectionModal open={modalOpen2} close={closeModal}>
                <img src="./img/main_banner_img2.jpg" alt="" />
                힐링!힐링! 관광급 OR 특급 OR 그랜드하얏트 호텔
              </SectionModal>
              <li>
                <div className="bannerImg bannerImg3">
                  <img src="./img/main_banner_img3.jpg" alt="" />
                  <div className="zoom">
                    <span>
                      <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        onClick={openModal3}
                      />
                    </span>
                  </div>
                </div>
                <p>코델리아S호텔 에어텔</p>
                <span className="span2">#제주도#바다#5성급호텔</span>
              </li>
              <SectionModal open={modalOpen3} close={closeModal}>
                <img src="./img/main_banner_img3.jpg" alt="" />
                코델리아S호텔 에어텔
              </SectionModal>
              <li>
                <div className="bannerImg bannerImg4">
                  <img src="./img/main_banner_img4.jpg" alt="" />
                  <div className="zoom">
                    <span>
                      <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        onClick={openModal4}
                      />
                    </span>
                  </div>
                </div>
                <p>시리우스제주 호텔 에어카텔</p>
                <span className="span2">#그랜드호텔#바다#5성급</span>
              </li>
              <SectionModal open={modalOpen4} close={closeModal}>
                <img src="./img/main_banner_img4.jpg" alt="" />
                시리우스제주 호텔 에어카텔
              </SectionModal>
              <li>
                <div className="bannerImg bannerImg5">
                  <img src="./img/main_banner_img5.jpg" alt="" />
                  <div className="zoom">
                    <span>
                      <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        onClick={openModal5}
                      />
                    </span>
                  </div>
                </div>
                <p>그랜드 하얏트 제주 에어카텔</p>
                <span className="span2">#제주도#인스타그램#5성급ㄷㄷㄷ</span>
              </li>
              <SectionModal open={modalOpen5} close={closeModal}>
                <img src="./img/main_banner_img5.jpg" alt="" />
                그랜드 하얏트 제주 에어카텔
              </SectionModal>
            </ul>
          </div>
        </article>

        <article className="article7">
          <div className="box">
            <h2>떠나자, 만국만 믿고! 🛫</h2>
            <div>
              <ul>
                <li className="inr left">
                  <p className="box1_p1">동영상</p>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/zPO8TffhG1M?&amp;autoplay=1&mute=1&amp;loop=1;;playlist=zPO8TffhG1M"
                    title="제주도 4K 드론 영상 | Jeju island (Korea) Aerial footage [4K/UHD]"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="box_txt">
                    <strong>떠나자, 모든 여행 만국만 믿고 🗽</strong>
                    <p className="box1_p2">
                      더 프라이빗하게, 더 여유롭게, 더 안전하게 <br />
                      여행의 처음부터 끝까지 개런티 할게 🤝 <br />
                      항공도 ✈ 호텔도 🛌 액티비티도 🎈 <br />
                      모든 여행 만국만 믿고 가면 돼!
                    </p>
                    <b>신년 해외여행 준비도 만국만 믿고</b>
                  </div>
                </li>
                <li className="inr center">
                  <p className="box1_p1">Get About</p>
                  <div className="box_txt">
                    <strong>캐나다 설국 여행의 정석 ⛄</strong>
                    <p className="box1_p2">
                      쉽게 허락되지 않는 오로라 관찰 <br />
                      캐나다 옐로나이프에 머물면서 <br />
                      오로라 여행 떠나는 3가지 방법 <br />
                      <br />
                    </p>
                    <b>지친 몸과 마음이 치유되는 여행</b>
                  </div>
                </li>
                <li className="inr right">
                  <p className="box1_p1">여행정보</p>
                  <img src="./img/article7_img3.png" alt="" />
                  <div className="box_txt">
                    <strong>떠나자, 만국만 믿고!</strong>
                    <p className="box1_p2">
                      여행지는 깊게 일정은 여유롭게,
                      <br />
                      약속한 여행은 100% 보장하고, <br />
                      여행 중 긴급 상황에도 안심! <br />
                      걱정없이 든든하게 만국투어🛫
                    </p>
                    <b>만국만 믿고 떠날 수 있는 이유</b>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Section;
