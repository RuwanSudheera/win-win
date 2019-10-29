import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div className="container">
                <footer className="page-footer" style={{backgroundColor: "teal", zIndex:999}}>
                    <div className="row">
                        <div className="col s3" style={{marginLeft:50}}>
                            <h5 className="white-text">Contact us</h5>
                            <div style={{marginLeft:80}}>
                                <p className="grey-text text-lighten-4">winwin@gmail.com</p>
                                <p className="grey-text text-lighten-4">+94 77777777</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container" style={{textAlign:'center'}}>
                            © The Associated Question paper provider of Ceylon Ltd., 2017–2019. All rights reserved.
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer
