import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {signUp} from '../../store/actions/authActions'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        userType: ''
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    };

    render() {
        const {auth, authError} = this.props;
        // const userTypes = [
        //     {value: 'student', label: 'Student'},
        //     {value: 'teacher', label: 'Teacher'}
        // ];
        if (auth.uid) return <Redirect to='/'/>
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Sign Up</h5>

                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id='firstName' onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id='lastName' onChange={this.handleChange}/>
                    </div>
                    {/*<div className="input-field">*/}
                    {/*    <label htmlFor="userType">Select the user type</label>*/}
                    {/*    <Select id='userType' options={userTypes}/>*/}
                    {/*</div>*/}
                    <div className="input-field">
                        <div><label><h6>Select the user type</h6 ></label></div>
                        <span>
                            <label>
                                <input className="with-gap" name="group1" type="radio" id='student' />
                                <span>Student</span>
                            </label>
                        </span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>
                            <label>
                                <input className="with-gap" name="group1" type="radio" id='teacher' />
                                <span>Teacher</span>
                            </label>
                        </span>
                    </div>
                    <div>
                        <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                        <div className="center red-text">
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (creds) => dispatch(signUp(creds))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)