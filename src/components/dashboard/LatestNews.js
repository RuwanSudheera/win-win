import React, {Component} from 'react';

class LatestNews extends Component {
    render() {
        return (
            <div className="container" style={{backgroundColor:"white"}}>
                <div style={{marginTop:150, textAlign:"center"}}>
                    <h4>Latest news</h4>
                    <div className="row">
                        <div className="col s8">
                            <img src={require('./images/img4.jpg')} alt="" style={{width:"95%"}}/>
                        </div>
                        <div className="col s4">
                            <h6>The news</h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LatestNews
