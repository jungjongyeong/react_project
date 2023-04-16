import React, { useEffect, useState } from "react";
import "./Gyuk.css";
import "./rwdGyuk.css";
import { Link } from "react-router-dom";
import { TravelItems } from "../../Nav/TravelItems";
import { itemsMapping } from "./Item";
import { sortByHighRating } from "./Item";
import { sortByLowPrice } from "./Item";
import { sortByHighPrice } from "./Item";

function Seoul() {
  const [priceFilter, setPriceFilter] = useState("noPriceFilter");
  const [productLength, setProductLength] = useState('');

  /* 서울만 추출하기 */
  let searchArea = TravelItems.filter((area) => {
    return area.areaNm.includes("서울");
  });
  useEffect(() => {

    setProductLength(searchArea.length)
  })

  return (
    <div className="Gyuk">
      <Link to="/Seoul">
        <h1 onClick={() => setPriceFilter("noPriceFilter")}>서울 <small>상품 <span>{productLength}</span> 개</small></h1>
      </Link>
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

export default Seoul;
