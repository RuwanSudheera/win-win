import React, {Component} from 'react'


class TeacherDeatails extends Component {
    render() {
        return (
            <div className="container" style={{backgroundColor: "white"}}>
                <div>
                    <h2>We have powerful teacher panel</h2>
                </div>
                <div className="row">
                    <div className="col s3">
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src={require('./images/teacherW.jpg')} alt=""/>
                            </div>
                            <h1>tacher 1</h1>
                        </div>
                    </div>
                    <div className="col s3">
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src={require('./images/teacherM.jpg')} alt=""/>
                            </div>
                            <h1>tacher 2</h1>
                        </div>
                    </div>
                    <div className="col s3">
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src={require('./images/teacherM.jpg')} alt=""/>
                            </div>
                            <h1>tacher 3</h1>
                        </div>
                    </div>
                    <div className="col s3">
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src={require('./images/teacherW.jpg')} alt=""/>
                            </div>
                            <h1>tacher 4</h1>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default TeacherDeatails
