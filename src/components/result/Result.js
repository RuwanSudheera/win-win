import React from "react"
import {connect} from "react-redux";

const Result = ({score, playAgain}) => (
    <div className="score-board">
        <div>You scored  {score} / 5  correct answers !</div>
        <button className="playBtn" onClick={playAgain}>Play Again</button>
    </div>
);

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
};

export default connect(mapStateToProps)(Result);
