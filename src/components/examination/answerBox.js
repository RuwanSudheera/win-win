import React from 'react';
import QuestionBox from "./QuestionBox";

const AnswerBox = ({questionIndex, responseIndex}) => {

    const titleStyle = {
        fontSize: "18px",
        textAlign: "center"
    };
    const cir = {
        backgroundColor: "#66FFFF",
        width: "32px",
        height: "32px",
        borderRadius: "32px",
        position: "relative",
        display: "inline-block",
        marginLeft: "2px"
    };
    const tdStyles = {
        paddingLeft: "0px",
        paddingRight: "0px",
        paddingTop: "0px"

    };
    const contCirStyle = {
        position: "absolute",
        width: "inherit",
        height: "auto",
        transform: "translateY(-15%)",
        textAlign: "center"
    };
    const tableRaw = {
        height: "70px"
    };
    return (
        <div>
            <div className="card">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title" style={titleStyle}>Answered questions</span>
                    </div>
                    <div className="card-action" style={tdStyles}>
                        <table>
                            <tbody>
                            <tr style={tableRaw}>
                                <td>
                                    <div style={cir}><h6 style={contCirStyle}>06</h6></div>
                                </td>
                                <td>
                                    <div style={cir}><h6 style={contCirStyle}>06</h6></div>
                                    <div style={cir}><h6 style={contCirStyle}>06</h6></div>
                                    <div style={cir}><h6 style={contCirStyle}>06</h6></div>
                                    <div style={cir}><h6 style={contCirStyle}>06</h6></div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div style={cir}><h6 style={contCirStyle}>06</h6></div>
                                </td>
                                <td>
                                    <div style={cir}><h6 style={contCirStyle}>06</h6></div>
                                    <div style={cir}><h6 style={contCirStyle}>06</h6></div>
                                    <div style={cir}><h6 style={contCirStyle}>06</h6></div>
                                    <div style={cir}><h6 style={contCirStyle}>06</h6></div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="container">
                            <div style={{textAlign:'center', marginTop:20}}>
                                <button className="waves-light btn"> Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

AnswerBox.propTypes = {};

export default AnswerBox;
