import React, { useState } from "react";
import db from "../../../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/counter/userSlice";

/* 상품들 뿌려주는 함수 */
export const itemsMapping = (items) => {
  return (
    <Item
      id={items.id}
      title={items.title}
      price={items.price}
      rating={items.rating}
      date={items.date}
      image={items.image}
      classNm={items.classNm}
      areaNm={items.areaNm}
    />
  );
};
/* 인기순으로 정렬하는 함수 */
export const sortByHighRating = (arr) => {
  const sortedArr = arr.slice();
  for (let i = 0; i < sortedArr.length; i++) {
    let swap;
    for (let j = 0; j < sortedArr.length - 1 - i; j++) {
      if (sortedArr[j].rating < sortedArr[j + 1].rating) {
        swap = sortedArr[j];
        sortedArr[j] = sortedArr[j + 1];
        sortedArr[j + 1] = swap;
      }
    }
    if (!swap) {
      break;
    }
  }
  return sortedArr;
};

/* 가격이 낮은 순으로 정렬하는 함수 */
export const sortByLowPrice = (arr) => {
  const sortedArr = arr.slice();
  for (let i = 0; i < sortedArr.length; i++) {
    let swap;
    for (let j = 0; j < sortedArr.length - 1 - i; j++) {
      if (sortedArr[j].price > sortedArr[j + 1].price) {
        swap = sortedArr[j];
        sortedArr[j] = sortedArr[j + 1];
        sortedArr[j + 1] = swap;
      }
    }
    if (!swap) {
      break;
    }
  }
  return sortedArr;
};

/* 장바구니 이벤트 */
const basketClickEvent2 = () => {
  let button2 = document.getElementById("addtocart2");
  let cart = document.getElementById("cart");

  button2.classList.add("sendtocart");
  setTimeout(function () {
    button2.classList.remove("sendtocart");
    cart.classList.add("shake");
    setTimeout(function () {
      cart.classList.remove("shake");
    }, 1000);
  }, 200);
  console.log(123123);
};

/* 가격이 높은 순으로 정렬하는 함수 */
export const sortByHighPrice = (arr) => {
  const sortedArr = arr.slice();
  for (let i = 0; i < sortedArr.length; i++) {
    let swap;
    for (let j = 0; j < sortedArr.length - 1 - i; j++) {
      if (sortedArr[j].price < sortedArr[j + 1].price) {
        swap = sortedArr[j];
        sortedArr[j] = sortedArr[j + 1];
        sortedArr[j + 1] = swap;
      }
    }
    if (!swap) {
      break;
    }
  }
  return sortedArr;
};

function Item({ id, title, image, price, rating, date, classNm }) {
  const user = useSelector(selectUser);

  /* 장바구니에 담기 기능 */
  const handleBasket = (e) => {
    // firebase 로 데이터를 저장한다.
    if (user) {
      db.collection(user.email).add({
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        date: date,
      });
    } else { alert("로그인을 해주세요!") }

  };

  return (
    <li>
      <div className="item_img"><div className={classNm}></div></div>

      <div className="travelproduct">
        <div className="category_text">
          <div className="category_span">
            <span className="category_span_L">
              <span className="category_span_left">KIP1263</span>
              <span className="category_span_right">국내여행</span>
            </span>
            <span className="category_span_R"></span>
          </div>
          <h2>{title}</h2>
          <div className="text_p">
            <p className="text_p_1">
              출발기간 <span>{date}</span>
            </p>
          </div>
          <p className="text_p_right">
            {" "}
            <span className="travelPrice">{price}</span>원
          </p>
          <div className="text_p_bottom">
            <span>이용교통</span>
            <span className="bottom_bus">버스</span>
          </div>
          <div className="product_rating">
            {Array(rating)
              .fill()
              .map((element, index) => (
                <p
                  key={index}
                  style={{ display: "inline-block", color: "#f2c130" }}
                >
                  ★
                </p>
              ))}
          </div>
          <button
            onClick={() => {
              handleBasket(); basketClickEvent2();
            }}
            className="basket_btn" id="addtocart2"
          >
            장바구니에 담기
          </button>
        </div>
      </div>
    </li>
  );
}

export default Item;
