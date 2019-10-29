import React, {Component} from 'react'


class TeacherDeatails extends Component {
    render() {
        return (
            <div className="container" style={{backgroundColor: "white", textAlign:'center', marginTop:110}}>
                <br/>
                <br/>
                <div>
                    <h4>We have grate teacher panel</h4>
                </div>
                <br/>
                <br/>
                <div className="row">
                    <div className="col s3">
                        <div className="card" style={{boxShadow: "2px 6px 8px #9E9E9E"}}>
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src={require('./images/teacherW.jpg')} alt=""/>
                            </div>
                            <h5>tacher 1</h5>
                        </div>
                    </div>
                    <div className="col s3">
                        <div className="card" style={{boxShadow: "2px 6px 8px #9E9E9E"}}>
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src={require('./images/teacherM.jpg')} alt=""/>
                            </div>
                            <h5>tacher 2</h5>
                        </div>
                    </div>
                    <div className="col s3">
                        <div className="card" style={{boxShadow: "2px 6px 8px #9E9E9E"}}>
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src={require('./images/teacherM.jpg')} alt=""/>
                            </div>
                            <h5>tacher 3</h5>
                        </div>
                    </div>
                    <div className="col s3">
                        <div className="card" style={{boxShadow: "2px 6px 8px #9E9E9E"}}>
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src={require('./images/teacherW.jpg')} alt=""/>
                            </div>
                            <h5>tacher 4</h5>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
            </div>
        );
    }
}

export default TeacherDeatails
