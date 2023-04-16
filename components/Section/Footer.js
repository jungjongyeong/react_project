import React, { useEffect, useState } from 'react'
import "./footer.css";


function Footer() {
    const [isClickActive, setIsClickActive] = useState(false);;

    return (
        <div id="footer">
            <section className={isClickActive ? "section active" : "section"}>
                <footer>
                    <div className="ft_sns">
                        <ul>
                            <li><span><span className="blind">facebook</span></span></li>
                            <li><span><span className="blind">instagram</span></span></li>
                            <li><span><span className="blind">youtube</span></span></li>
                            <li><span><span className="blind">blog</span></span></li>
                            <li><span><span className="blind">kakaotalk</span></span></li>
                            <li><span><span className="blind">navertalktalk</span></span></li>
                        </ul>
                    </div>
                    <div className="ft_link">
                        <ul>
                            <li><span>개인정보처리방침</span></li>
                            <li><span>이메일무단수집거부</span></li>
                        </ul>
                    </div>
                    <div className="ft_address">
                        <ul>
                            <li>주소 : 서울시 중구 태평로 1가 우리빌딩주식회사</li>
                            <li>대표 : 홍길동</li>
                            <li>전화 : 02-123-4567</li>
                            <li>팩스 : 02-123-4567</li>
                            <li>이메일 : phlink@nate.com</li>
                        </ul>
                    </div>
                    <div className="ft_info">
                        <ul>
                            <li>Copyright © 미광디자인. All rights reserved.</li>
                            <li><a href="">Desig by MG</a></li>
                        </ul>
                    </div>
                </footer>
            </section>
        </div>
    );
}

export default Footer;