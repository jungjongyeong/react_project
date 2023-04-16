import React, { useState, useEffect } from 'react'
import './QuaraBox.css'
import Question from './Question';
function QuaraBox() {
    const [modalOpening, setModalOpening] = useState(false);

    const openModal = () => {
        setModalOpening(true);
    };
    useEffect(() => {
        if (modalOpening === false) { console.log(123) }
    })
    return (
        <div>
            <div className="quaraBox" onClick={openModal}>
                <div className="quaraBox_quora">
                    <p> 무엇이 궁금하신가요? </p>
                </div>
            </div>
            <div>
                {modalOpening ?
                    <Question
                        setModalOpening={setModalOpening}
                        modalOpening={modalOpening}
                    /> : null}
            </div>
        </div>
    )
}

export default QuaraBox
