import React, {Component} from 'react';

class PaperStructure extends Component {
    state = {
        examination: '',
        subject: '',
        numberOfQuestions: '',
        subjectAreas: []
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };
    render() {
        return(
            <div>
                <div className="container">
                    <form className="white" onSubmit={this.handleSubmit}>
                        <div className="input-field">
                            <input type="text" id='examination' onChange={this.handleChange} required/>
                            <label htmlFor="examination">Name of the Examination</label>
                        </div>
                        <div className="input-field">
                            <input type="text" id='subject' onChange={this.handleChange} required/>
                            <label htmlFor="subject">Subject</label>
                        </div>
                        <div className="input-field">
                            <input type="text" id='numberOfQuestions' onChange={this.handleChange} required/>
                            <label htmlFor="numberOfQuestions">Numbers of questions for the paper</label>
                        </div>

                        <div className="input-field">
                            <button className="btn pink lighten-1">Add Structure</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default PaperStructure;
