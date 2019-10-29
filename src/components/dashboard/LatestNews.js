import React, {Component} from 'react';

class LatestNews extends Component {
    render() {
        return (
            <div className="container" style={{backgroundColor:"white"}}>
                <div style={{marginTop:110, textAlign:"center"}}>
                    <br/>
                    <br/>
                    <h4>Latest news</h4>
                    <br/>
                    <br/>
                    <div className="row">
                        <div className="col s8">
                            <img src={require('./images/img4.jpg')} alt="" style={{width:"95%", boxShadow: "2px 6px 8px #9E9E9E"}}/>
                        </div>
                        <div className="col s4">
                            <h6>The news</h6>
                            <p style={{textAlign:'justify'}}>
                                The Department of Examination said private candidates who have not received their G.C.E
                                Advanced Level Examination admission card yet can download it via https://www.doenets.lk/exam/.
                                The Commissioner General of Examinations Sanath Poojitha, said that all the admission cards
                                for school candidates have been sent to the relevant schools.
                            </p>
                        </div>
                    </div>
                    <br/>
                    <br/>
                </div>
            </div>
        );
    }
}

export default LatestNews
