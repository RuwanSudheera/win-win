import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';

class SimpleSlider extends Component {
    render() {
        return (
            <div style={{marginTop:100}} className="container">
                <Carousel autoPlay>
                    <div style={{borderWidth:5, border:"solid"}}>
                        <img src={require('./images/img1.webp')}/>
                        <p className="legend">Care like a teacher</p>
                    </div>
                    <div>
                        <img src={require('./images/img2.png')}/>
                        <p className="legend">Self learning process</p>
                    </div>
                    <div>
                        <img src={require('./images/img3.png')}/>
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src={require('./images/img4.1.jpg')}/>
                        <p className="legend">Legend 4</p>
                    </div>
                    <div>
                        <img src={require('./images/img4.3.png')}/>
                        <p className="legend">Legend 4</p>
                    </div>
                    <div>
                        <img src={require('./images/img5.jpg')}/>
                        <p className="legend">Legend 4</p>
                    </div>
                    <div>
                        <img src={require('./images/img6.png')}/>
                        <p className="legend">Legend 4</p>
                    </div>
                    <div>
                        <img src={require('./images/img7.jpg')}/>
                        <p className="legend">Legend 4</p>
                    </div>
                    <div>
                        <img src={require('./images/img8.jpg')}/>
                        <p className="legend">Legend 4</p>
                    </div>
                    <div>
                        <img src={require('./images/img9.jpg')}/>
                        <p className="legend">Legend 4</p>
                    </div>
                    <div>
                        <img src={require('./images/img10.jpg')}/>
                        <p className="legend">Legend 4</p>
                    </div>
                    <div>
                        <img src={require('./images/img11.jpg')}/>
                        <p className="legend">Legend 4</p>
                    </div>
                    <div>
                        <img src={require('./images/img12.jpg')}/>
                        <p className="legend">Legend 4</p>
                    </div>
                    <div>
                        <img src={require('./images/img13.jpg')}/>
                        <p className="legend">Legend 4</p>
                    </div>
                    <div>
                        <img src={require('./images/img14.jpg')}/>
                        <p className="legend">Legend 4</p>
                    </div>
                </Carousel>

            </div>
        );
    }
}

export default SimpleSlider
