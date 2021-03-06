import React, {Component} from 'react';

class ExamTypes extends Component {
    render() {
        return (
            <div className="container">
                <div style={{backgroundColor:"white"}}>
                    <div className="heading" style={{marginTop:-190}}>
                        <hr style={{width:"auto", height:9, background:"black", border:"none"}} />
                        <br/>
                        <br/>
                        <h3 style={{textAlign:"center", fontFamily: "Nunito Sans, sans-serif"}}>
                            Welcome to the Win-Win educational Platform
                        </h3>
                        <br/>
                        <div className="container">
                            <h5 style={{textAlign:"justify"}}>“Students do not learn much just sitting in classes listening to teachers, memorizing
                                prepackaged assignments, and spitting out answers. They must talk about what they are
                                learning, write reflectively about it, relate it to past experiences, and apply it to
                                their daily lives. They must make what they learn part of themselves.”
                            </h5>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <hr style={{width:"auto", height:9, background:"black", border:"none"}} />
                    <br/>
                    <br/>
                    <img src="./olexamination.jpg" alt=""/>
                    <div className="row">
                        <div className="col s4">
                            <div className="card" style={{height:100}}>
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src={require('./images/olexamination.jpg')} alt=""/>
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">Ordinary Level<i
                                        className="material-icons right">more_vert</i></span>
                                    <p><a href="http://localhost:3006/examination">Get exam paper</a></p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Card Title<i
                                        className="material-icons right">close</i></span>
                                    <p>Here is some more information about this product that is only revealed once
                                        clicked on.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col s4">
                            <div className="card" style={{height:100}}>
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img src={require('./images/alexamination.jpg')} alt=""/>
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">Advanced Level<i
                                        className="material-icons right">more_vert</i></span>
                                    <p><a href="http://localhost:3006/examination">Get exam paper</a></p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Card Title<i
                                        className="material-icons right">close</i></span>
                                    <p>Here is some more information about this product that is only revealed once
                                        clicked on.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col s4">
                            <div className="card" style={{height:100}}>
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src={require('./images/iqexamination.jpg')} alt=""/>
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">I/Q examinations<i
                                        className="material-icons right">more_vert</i></span>
                                    <p><a href="http://localhost:3006/examination">Get exam paper</a></p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Card Title<i
                                        className="material-icons right">close</i></span>
                                    <p>Here is some more information about this product that is only revealed once
                                        clicked on.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ExamTypes;
