import React, { useState } from "react"

const QuestionBox = ({question, options, selected, questionIndex}) => {
    const [answer] = useState(options);
    const [indexes, setIndexes] = useState(options);
    const [color, setColor] = useState("white");
    const styleButton = {
        paddingLeft: '30px'
    };
    const styleQuestion = {
        paddingTop: '20px'
    };
    const stylePage = {
        paddingLeft: '50px',
        paddingRight: '50px'
    };
    const styleBtnClick ={
      backgroundColor:color
    };

    return (
        <div className="questionBox" style={stylePage}>
            <div className="question">{questionIndex+1}{").  "}{question}</div>
            <div  style={styleQuestion}>
                {answer && answer.map((text, index) => (
                    <span style={styleButton}>
                    <span>{index + 1}{". "} </span>
                    <button
                        style={styleBtnClick}
                        key={index}
                        className="answerBtn"
                        onClick={() => {
                            setColor("#C3AFAF");
                            setIndexes([index+1]);
                            selected(text);
                        }}
                    >
                        {text}
                    </button>
                </span>
                ))}
            </div>
        </div>
    )
};

export default (QuestionBox);
