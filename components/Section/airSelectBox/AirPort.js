import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import styled from 'styled-components';
import './AirPort.css';

const SERVER_URL = 'https://apis.data.go.kr/1613000/DmstcFlightNvgInfoService/getFlightOpratInfoList?serviceKey=M3yFi4ozuF4H5WJAGbgaJjz3%2FzHRpnwlyn8mdZ6E2jylTCoH2gs%2Fom%2F8Bn3gaOUdsTe0Dv4vxITngnQ54gOPAA%3D%3D&pageNo=1&numOfRows=10&_type=json&depAirportId=NAARKJJ&arrAirportId=NAARKPC&airlineId=AAR&JJA&KAL&KAL'

// 오늘 항공데이터 추출

const AirPort = (val) => {
    const [valu, setVale] = useState('');
    const [iuVal, setinputVal] = useState([
    ]);

    useEffect(() => {
        // fetchData()
        console.log(iuVal)
    }, [])

    const fetchData = async () => {
        // 오늘 떠날수있는 항공사 정보 가져오기(공항 데이터)
        var today = new Date();
        var year = today.getFullYear();
        var month = ('0' + (today.getMonth() + 1)).slice(-2);
        var day = ('0' + today.getDate()).slice(-2);
        var dateString = year + month + day;
        const dataPlus = SERVER_URL + "&depPlandTime=" + val.val.title;
        let response = await axios.get(dataPlus);
    }
    const addCreep = (event) => {
        event.preventDefault();
        setinputVal([
            ...iuVal,
            {
                title: valu,
            }])
    }
    return (
        <div>
            <form onSubmit={addCreep}>
                <div className="spot_search">
                    <label htmlFor="cityArea">여행지 입력</label>
                    <input type="text" className="" id="cityArea" placeholder="" autoComplete="off" value={valu} onChange={(e) => setVale(e.target.value)}></input>

                </div>
                <button type="submit" className="btn_cof cfrm" nlogger="city" id="citySearch" >검색하기</button>
            </form>
        </div>

    )
}

export default AirPort

const StyledSelect = styled(Select)`
position:absolute;
margin: 0;
width: 300px;
display: inline-block;
padding: 8px 8px;
font-size: inherit;
line-height: inherit;
border-radius: 4px;
color: inherit;
background-color: transparent;
&:focus {
    border-color: red;
}
`
const StyledSelect2 = styled(Select)`
position:absolute;
margin: 0;
width: 300px;
display: inline-block;
padding: 8px 8px;
font-size: inherit;
line-height: inherit;
border-radius: 4px;
color: inherit;
background-color: transparent;
&:focus {
    border-color: red;
}
`
