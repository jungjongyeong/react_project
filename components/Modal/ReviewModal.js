import React from 'react';
import './modal.css';


const ReviewModal = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header } = props;
    const closeModal = () => {
        close()
    };
    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section className="reviewModal">
                    <header>
                        {header}
                        <button className="close" onClick={closeModal}>
                            &times;
                        </button>
                    </header>
                    <main className='reviewMain'>{props.children}</main>
                    <footer>
                    </footer>
                </section>
            ) : null}
        </div>
    );
};
export default ReviewModal;