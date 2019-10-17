import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';

class SimpleSlider extends Component {
    render() {
        return (
            <div style={{marginTop:100}} className="container">
                <Carousel autoPlay>
                    <div style={{borderWidth:5, border:"solid"}}>
                        <img src="https://aisat.ac.in/wp-content/uploads/2019/01/enterance.png"/>
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src="https://images.all-free-download.com/images/graphiclarge/education_background_
                        design_with_educational_elements_6824729.jpg"/>
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="https://thumbs.dreamstime.com/z/test-answer-sheet-pencil-examination-test-
                        education-conce-test-answer-sheet-pencil-examination-test-education-concept-104750520.jpg"/>
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.
                        com%2Fdam%2Fimageserve%2F1040138812%2F960x0.jpg%3Ffit%3Dscale"/>
                        <p className="legend">Legend 4</p>
                    </div>
                </Carousel>

            </div>
        );
    }
}

export default SimpleSlider
