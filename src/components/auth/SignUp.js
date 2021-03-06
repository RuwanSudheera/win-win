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
        if (auth.uid) return <Redirect to='/'/>
        return (
            <div className="container">
                <form className="white container z-depth-4" onSubmit={this.handleSubmit} style={{border:10, borderRadius: '35px'}}>
                    <div className="section">
                        <h5 className="grey-text text-darken-3" style={{textAlign: 'center', fontWeight: '600'}}>Sign Up</h5>
                    </div>
                    <div className="divider"></div>
                    <div className="container">
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
                        <div className="input-field">
                            <div><label><h6>Select the user type</h6></label></div>
                            <span style={{marginLeft: 70}}>
                            <label>
                                <input className="with-gap"
                                       name="group1"
                                       type="radio"
                                       id='userType'
                                       value='student'
                                       checked={this.state.userType === "student"}
                                       onChange={this.handleChange}/>
                                <span>Student</span>
                            </label>
                        </span>
                            <span style={{marginLeft: 80}}>
                            <label>
                                <input className="with-gap"
                                       name="group1"
                                       type="radio"
                                       id='userType'
                                       value='teacher'
                                       checked={this.state.userType === "teacher"}
                                       onChange={this.handleChange}/>
                                <span>Teacher</span>
                            </label>
                        </span>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div style={{marginTop: '15px', textAlign: 'center'}} className="container">
                        <button className="btn pink lighten-1 z-depth-4" style={{width: '100%',
                            color: 'white',
                            fontSize: '17px',
                            border: 'none',
                            borderRadius: 4,
                            cursor: 'pointer'}}>Sign Up</button>
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
