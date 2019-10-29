import React, {Component} from "react";

class StopWatch extends Component {
    constructor() {
        super();
        this.state = {
            isRunning: false,
            minute: 0,
            second: 0
        };
    }

    styleBtn = {
        backgroundColor: "#4d94ff",
        alignItems: "center"
    };
    styleTime ={
        textAlign: "center"
    };
    time;
    handleStartRestartClick = () => {
        if(this.state.isRunning){
            this.setState({
                minute: 0,
                second: 0,
                isRunning: false
            })
        }else {
            this.time = setInterval(() => {
                return this.setState((state) => {
                    return {
                        isRunning: true,
                        second: state.second === 59 ? 0 : state.second + 1,
                        minute: state.second === 59 ? state.minute + 1 : state.minute
                    }
                })
            }, 1000);
        }
    };
    handlePauseResumeClick = () => {
        if (this.state.isRunning){
            clearInterval(this.time);
            this.setState({
                isRunning: false
            })
        }else {
            this.handleStartRestartClick();
        }
    };
    render() {
        return (
            <div>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title" style={this.styleTime}>Stop Watch</span>
                        <h4 style={this.styleTime}>{this.state.minute} : {this.state.second }</h4>
                    </div>
                    <div className="card-action">
                        <button className="waves-effect waves-light btn" onClick={this.handlePauseResumeClick} style={this.styleBtn}>{this.state.isRunning?"Pause":"Resume"}</button>
                        &nbsp;
                        <button className="waves-effect waves-light btn" onClick={this.handleStartRestartClick} style={this.styleBtn}>{this.state.isRunning?"Re-start":"Start"}</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default StopWatch;
