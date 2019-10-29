import React from 'react'
import { connect } from 'react-redux'
import './Sidebar.css'

const SideBar = (props) => {
    const { auth } = props;


    if (auth.uid){
        return (
            <div className="sidebar">
                <a href="#home">Home</a>
                <a href="#examinations">Examinations</a>
                <a href="#news">News</a>
                <a href="#teachers">Teachers</a>
                <a href="#contacts">Contacts</a>
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
