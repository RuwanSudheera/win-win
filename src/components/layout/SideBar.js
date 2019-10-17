import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import logo from './win-win_logo.png';
import './Sidebar.css'

const SideBar = (props) => {
    const { auth, profile } = props;

    //console.log(auth);
    const response = fetch("http://localhost:3000/questionPaper/users/rjgffFzhkORjuFczGuPYjNHzInC2")
        .then((response) => {response.json()})
        .then(console.log(response));

    // const userType = JSON.stringify(response);
    console.log(response);

    if (auth.uid){
        return (
            <div className="sidebar">
                <a href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        )
    }

};

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
};

export default connect(mapStateToProps)(SideBar)
