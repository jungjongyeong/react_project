import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Item from "../Section/Gangwon/Item";
import { TravelItems } from "./TravelItems";


const SearchPage = () => {
    const location = useLocation();
    const [dataInput, setDataInput] = useState([]);
    const stateArea = location.state.area;
    let totalArr = [];
    let searchtitle = [];
    let searchareaNm = [];

    useEffect(() => {
        setDataInput(totalArr.length)

    }, [location]);


    /* 상품 검색 기능 (검색한 title, areaNm을 묶고 중복된 배열은 제거했음)*/
    const areaSearching = () => {

        if (stateArea === '') {
            totalArr = [];
        } else {
            searchtitle = TravelItems.filter((area) => {

                return area.title.includes(stateArea.toUpperCase());
            });
            searchareaNm = TravelItems.filter((area) => {

                return area.areaNm.includes(stateArea.toUpperCase());
            });
            const newArr = [
                ...searchtitle,
                ...searchareaNm
            ];

            totalArr = [...new Set(newArr)];
        }

        return totalArr
    };


    const itemsMapping = (items) => {
        return (
            <Item
                id={items.id}
                title={items.title}
                price={items.price}
                rating={items.rating}
                date={items.date}
                image={items.image}
                classNm={items.classNm}
            />
        );
    };


    return (
        <div className="Gyuk">
            <h1>'{stateArea}' 검색결과 <small>상품 <span>{dataInput}</span> 개</small> </h1>
            <article className="GW_article2">
                <div className="art_main">
                    <div className="art_main_category">
                        <ul>
                        </ul>
                    </div>
                    <ul className="category">
                        {areaSearching().map((items, index) => <div key={index}>{itemsMapping(items)}</div>)}

                    </ul>
                </div>
            </article>
        </div>)

}
export default SearchPage