import React, { Component } from 'react'


class RequestExam extends Component {
    state = {
        grade: '',
        subject: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    render() {
        return (
            <div>
                <div className="container">
                    <form className="white" onSubmit={this.handleSubmit}>

                        <h5 className="grey-text text-darken-3">Request a question paper</h5>

                        <div className="input-field">
                            <select onChange={this.handleChange} id="grade" required={'required'}>
                                <option>Select The Examination</option>
                                <option value="grade5">Grade 5 Scholarship</option>
                                <option value="grade11">Grade 11 Ordinary level</option>
                                <option value="grade13">Grade 13 Advanced level</option>
                                <option value="iq">iq test for adults</option>
                            </select>
                        </div>
                        <div className="input-field">
                            <select value={this.state.subject} onChange={this.handleChange} id="subject" required={'required'}>
                                <option>Select The Examination</option>
                                <option value="grade5">Grade 5 Scholarship</option>
                                <option value="grade11">Grade 11 Ordinary level</option>
                                <option value="grade13">Grade 13 Advanced level</option>
                                <option value="iq">iq test for adults</option>
                            </select>
                        </div>

                        <div className="input-field">
                            <button className="btn pink lighten-1">Add Structure</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default RequestExam
