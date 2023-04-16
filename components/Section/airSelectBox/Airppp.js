import React, { useState } from 'react'
import axios from 'axios'
import Modal from '../../Modal/Modal';

import './AirPort.css';
import './rwdAirPort.css';

const SERVER_URL = 'https://apis.data.go.kr/1613000/DmstcFlightNvgInfoService/getFlightOpratInfoList?serviceKey=M3yFi4ozuF4H5WJAGbgaJjz3%2FzHRpnwlyn8mdZ6E2jylTCoH2gs%2Fom%2F8Bn3gaOUdsTe0Dv4vxITngnQ54gOPAA%3D%3D&pageNo=1&numOfRows=10&_type=json&JJA&KAL&KAL'


function Airppp(val) {
    const [vaasdasdl, setbaasdasdl] = useState('');
    const [deAirportVal, setDeAirportVal] = useState('');
    const [arrAirportVal, setArrAirportVal] = useState('');
    const [airlineVal, setAirlineVal] = useState('');

    const [depAirportNmVal, setdepAirportNmVal] = useState('');
    const [arrAirportNmVal, setarrAirportNmVal] = useState('');
    const [airlineNmVal, setairlineNmVal] = useState('');
    const [depPlandTimeVal, setdepPlandTimeVal] = useState('');
    const [arrPlandTimeVal, setarrPlandTimeVal] = useState('');

    const [depAirportNmVal2, setdepAirportNmVal2] = useState('');
    const [arrAirportNmVal2, setarrAirportNmVal2] = useState('');
    const [airlineNmVal2, setairlineNmVal2] = useState('');
    const [depPlandTimeVal2, setdepPlandTimeVal2] = useState('');
    const [arrPlandTimeVal2, setarrPlandTimeVal2] = useState('');


    const [depAirportNmVal3, setdepAirportNmVal3] = useState('');
    const [arrAirportNmVal3, setarrAirportNmVal3] = useState('');
    const [airlineNmVal3, setairlineNmVal3] = useState('');
    const [depPlandTimeVal3, setdepPlandTimeVal3] = useState('');
    const [arrPlandTimeVal3, setarrPlandTimeVal3] = useState('');


    //모달창 state
    const [modalOpen1, setModalOpen1] = useState(false)
    const [modalOpen2, setModalOpen2] = useState(false)
    const [modalOpen3, setModalOpen3] = useState(false)
    const openModal1 = () => {
        setModalOpen1(true);
    };

    const openModal2 = () => {
        setModalOpen2(true);
    };

    const openModal3 = () => {
        setModalOpen3(true);
    };
    const closeModal = () => {
        setModalOpen1(false);
        setModalOpen2(false);
        setModalOpen3(false);
    };
    // 
    const [isActive, setisActive] = useState(false);

    let DATA = [];
    const fetchData = async () => {
        // 오늘 떠날수있는 항공사 정보 가져오기(공항 데이터)
        const dataPlus = SERVER_URL + "&depPlandTime=" + vaasdasdl + "&depAirportId=" + deAirportVal + "&arrAirportId=" + arrAirportVal + "&airlineId=" + airlineVal;
        let response = await axios.get(dataPlus);
        // let data = response.data.body.items
        DATA = response.data.response.body.items.item;
        console.log(DATA)
        if (DATA) {
            DataTable(DATA)
        } else {
            alert('검색 결과가 없습니다.')
        }
    }

    const DataTable = (DATA) => {
        setdepAirportNmVal(DATA[0].depAirportNm)
        setarrAirportNmVal(DATA[0].arrAirportNm)
        setairlineNmVal(DATA[0].airlineNm)
        setdepPlandTimeVal(DATA[0].depPlandTime)
        setarrPlandTimeVal(DATA[0].arrPlandTime)

        setdepAirportNmVal2(DATA[1].depAirportNm)
        setarrAirportNmVal2(DATA[1].arrAirportNm)
        setairlineNmVal2(DATA[1].airlineNm)
        setdepPlandTimeVal2(DATA[1].depPlandTime)
        setarrPlandTimeVal2(DATA[1].arrPlandTime)

        setdepAirportNmVal3(DATA[2].depAirportNm)
        setarrAirportNmVal3(DATA[2].arrAirportNm)
        setairlineNmVal3(DATA[2].airlineNm)
        setdepPlandTimeVal3(DATA[2].depPlandTime)
        setarrPlandTimeVal3(DATA[2].arrPlandTime)

    }

    const addCreep = (event) => {
        event.preventDefault();

        fetchData()
    }
    const handleSelect = (e) => {
        setDeAirportVal(e.target.value);
    };
    const handleSelect2 = (e) => {
        setArrAirportVal(e.target.value);
    };
    const handleSelect3 = (e) => {
        setAirlineVal(e.target.value);
    };


    return (
        <div className='airSection'>
            <form onSubmit={addCreep}>
                <div id="inputDiv">
                    <div className='depairport'>
                        <p>출발할 공항</p>
                        <br />
                        <select name="" id='deAirport' onChange={handleSelect}>
                            <option>선택하기</option>
                            <option value="NAARKJB">무안</option>
                            <option value="NAARKJJ">광주</option>
                            <option value="NAARKJK">군산</option>
                            <option value="NAARKJY">여수</option>
                            <option value="NAARKNW">원주</option>
                            <option value="NAARKNY">양양</option>
                            <option value='NAARKPC'>제주</option>
                            <option value="NAARKPK">김해</option>
                            <option value="NAARKPS">사천</option>
                            <option value="NAARKPU">울산</option>
                            <option value="NAARKSI">인천</option>
                            <option value="NAARKSS">김포</option>
                            <option value="NAARKTH">포항</option>
                            <option value="NAARKTN">대구</option>
                            <option value="NAARKTU">청주</option>
                        </select>
                    </div>
                    <div className='arrairport'>
                        <p>도착할 공항</p>
                        <br />
                        <select name="" id='arrAirport' onChange={handleSelect2}>
                            <option>선택하기</option>
                            <option value="NAARKJJ">광주</option>
                            <option value="NAARKJK">군산</option>
                            <option value="NAARKJY">여수</option>
                            <option value="NAARKNW">원주</option>
                            <option value="NAARKNY">양양</option>
                            <option value="NAARKPC">제주</option>
                            <option value="NAARKPK">김해</option>
                            <option value="NAARKPS">사천</option>
                            <option value="NAARKPU">울산</option>
                            <option value="NAARKSI">인천</option>
                            <option value="NAARKSS">김포</option>
                            <option value="NAARKTH">포항</option>
                            <option value="NAARKTN">대구</option>
                            <option value="NAARKTU">청주</option>
                        </select>
                    </div>
                    <div className='depairport'>
                        <p>항공사</p>
                        <br />
                        <select name="" id='arrAirport' onChange={handleSelect3}>
                            <option>선택하기</option>
                            <option value="AAR">아시아나항공</option>
                            <option value="ABL">에어부산</option>
                            <option value="ASV">에어서울</option>
                            <option value="ESR">이스타항공</option>
                            <option value="FGW">플라이강원</option>
                            <option value="HGG">하이에어</option>
                            <option value="JJA">제주항공</option>
                            <option value="JNA">진에어</option>
                            <option value="KAL">대한항공</option>
                            <option value="TWB">티웨이항공</option>
                        </select>
                    </div>
                    <div className="spot_search">
                        <p>출발 날짜</p>
                        <br />
                        <input type="text" className="" id="cityArea" placeholder="ex) 20230223" autoComplete="off" value={vaasdasdl} onChange={(e) => setbaasdasdl(e.target.value)}></input>
                        <br />
                    </div>
                    <div>
                        <br />
                        <button type="submit" className="btn_cof cfrm" nlogger="city" id="citySearch" >검색하기</button>
                    </div>
                </div>
                <div className='tableVal'>
                    <div className='table_head'>
                        <div className='item_summary'>
                            <div>{depAirportNmVal}</div>
                            <div>{arrAirportNmVal}</div>
                            <div>{airlineNmVal}</div>
                            <div>{depPlandTimeVal}</div>
                            <button className='item_summary_btn' onClick={openModal1}>선택하기</button>
                            <Modal open={modalOpen1} close={closeModal}>
                                <div className='airportModal airportDep'>{depAirportNmVal}<div className='modalTime'>{depPlandTimeVal}</div></div>
                                <div className='modalCenterLine'></div>
                                <div className='airportModal'>{arrAirportNmVal}<div className='modalTime'>{arrPlandTimeVal}</div></div>
                            </Modal>
                        </div>
                    </div>
                    <div className='table_head'>
                        <div className='item_summary'>
                            <div>{depAirportNmVal2}</div>
                            <div>{arrAirportNmVal2}</div>
                            <div>{airlineNmVal2}</div>
                            <div>{depPlandTimeVal2}</div>
                            <button className='item_summary_btn' onClick={openModal2}>선택하기</button>
                            <Modal open={modalOpen2} close={closeModal}>
                                <div className='airportModal airportDep'>{depAirportNmVal2}<div className='modalTime'>{depPlandTimeVal2}</div></div>
                                <div className='modalCenterLine'></div>
                                <div className='airportModal'>{arrAirportNmVal2}<div className='modalTime'>{arrPlandTimeVal2}</div></div>
                            </Modal>
                        </div>
                    </div>
                    <div className='table_head'>
                        <div className='item_summary'>
                            <div>{depAirportNmVal3}</div>
                            <div>{arrAirportNmVal3}</div>
                            <div>{airlineNmVal3}</div>
                            <div>{depPlandTimeVal3}</div>
                            <button className='item_summary_btn' onClick={openModal3}>선택하기</button>
                            <Modal open={modalOpen3} close={closeModal}>
                                <div className='airportModal airportDep'>{depAirportNmVal3}<div className='modalTime'>{depPlandTimeVal3}</div></div>
                                <div className='modalCenterLine'></div>
                                <div className='airportModal'>{arrAirportNmVal3}<div className='modalTime'>{arrPlandTimeVal3}</div></div>
                            </Modal>
                        </div>
                    </div>
                </div>
            </form >


        </div>
    );
}

export default Airppp;


