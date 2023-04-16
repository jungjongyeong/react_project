import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import Item from "../Section/Gangwon/Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SearchPage from "./SearchPage";
import { TravelItems } from "./TravelItems";

const Search = ({ setSearching, setPriceFilter }) => {

  const movePage = useNavigate();
  const [userInput, setUserInput] = useState("");
  const [userSearch, setUserSearch] = useState(false);

  const getValue = (e) => {
    setUserInput(e.target.value);
  };


  const SearchForm = (e) => {
    e.preventDefault();

    console.log(userInput)
    setUserSearch(true)
    move();
    if(userInput === ''){
      alert("검색어를 입력해주세요.")
    }
  };

  /* 페이지로 값을 이동시키고 그페이지로 이동하는 기능 */
  const move = () => {
    // 두번재 인자의 state 속성에 원하는 파라미터를 넣어준다. (id, job을 넣어봤다)
    movePage('/SearchPage', {
      state: {
        area: userInput,
      }
    });
  };

  return (
    <div>
      <form onSubmit={SearchForm} className="SearchForm">
        <input onChange={getValue} className="searchInput" />
        <button type="submit" className="SearchBtn"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
      </form>
      <div>
      </div>
    </div>
  );
};

export default Search;
