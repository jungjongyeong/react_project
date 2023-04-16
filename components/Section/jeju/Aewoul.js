import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TravelItems } from "../../Nav/TravelItems";
import { itemsMapping } from "../Gangwon/Item";
import { sortByHighRating } from "../Gangwon/Item";
import { sortByLowPrice } from "../Gangwon/Item";
import { sortByHighPrice } from "../Gangwon/Item";
import TravelProduct from "../jeju/TravelProduct";

import '../Gangwon/Gyuk.css'
import '../Gangwon/rwdGyuk.css'

function Aewoul() {
  const [priceFilter, setPriceFilter] = useState("noPriceFilter");
  const [productLength, setProductLength] = useState('');

  /* 애월만 추출하기 */
  let searchArea = TravelItems.filter((area) => {
    return area.areaNm.includes("애월");
  });

  useEffect(() => {

    setProductLength(searchArea.length)
  })

  return (
    <div className="Gyuk">
      <div className="Jeju_link">
        <Link to="/Aewoul">
          <h1 onClick={() => setPriceFilter("noPriceFilter")}>애월 <small>상품 <span>{productLength}</span> 개</small></h1>
        </Link>
        <ul className='insert_link pageIn'>
          <Link to="/Jejusi"><li><i>제주시</i></li></Link>
          <Link to="/Jungmoon"><li><i>중문</i></li></Link>
          <Link to="/Seoguipo"><li><i>서귀포</i></li></Link>
          <Link to="/Aewoul"><li><i>애월</i></li></Link>
          <Link to="/Sungsan"><li><i>성산</i></li></Link>
        </ul>
      </div>
      <article className="GW_article2">
        <div className="art_main">
          <div className="art_main_category">
            <ul>
              <li
                onClick={() => {
                  setPriceFilter("noPriceFilter");
                }}
              >
                인기순
              </li>
              <li
                onClick={() => {
                  setPriceFilter("sortByLowPrice");
                }}
              >
                낮은가격순
              </li>
              <li
                onClick={() => {
                  setPriceFilter("sortByHighPrice");
                }}
              >
                높은가격순
              </li>
            </ul>
          </div>
          <ul className="category">
            {priceFilter === "noPriceFilter"
              ? sortByHighRating(searchArea).map((items, index) => (
                <div key={index}>{itemsMapping(items)}</div>
              ))
              : null}
            {priceFilter === "sortByLowPrice"
              ? sortByLowPrice(searchArea).map((items, index) => (
                <div key={index}>{itemsMapping(items)}</div>
              ))
              : null}
            {priceFilter === "sortByHighPrice"
              ? sortByHighPrice(searchArea).map((items, index) => (
                <div key={index}>{itemsMapping(items)}</div>
              ))
              : null}
          </ul>
        </div>
      </article>
    </div>
  );
}

export default Aewoul;
