import React, {Component} from 'react'
import {connect} from 'react-redux'
import {signIn} from '../../store/actions/authActions'
import {Redirect} from 'react-router-dom'
import './auth.css'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
    };

    render() {
        const {authError, auth} = this.props;
        if (auth.uid) return <Redirect to='/'/>;
        return (
            <div className="container">

                <form className="white container z-depth-4" onSubmit={this.handleSubmit} style={{marginTop:150, borderRadius: '35px'}}>
                    <div className="avator">
                        <h5 className="grey-text text-darken-3" style={{textAlign:'center', fontWeight: '600'}}>Login</h5>
                    </div>
                    <div className="divider"></div>
                    <br/>
                    <div className="container">
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id='email' onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" id='password' onChange={this.handleChange}/>
                        </div>
                    </div>
                    <br/>
                    <div className="divider"></div>
                    <div style={{marginTop: '15px', textAlign: 'center'}} className="container">
                        <button className="btn pink lighten-1 z-depth-3" style={{width: '100%',
                            color: 'white',
                            fontSize: '17px',
                            border: 'none',
                            borderRadius: 4,
                            cursor: 'pointer'}}>Login</button>
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
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
