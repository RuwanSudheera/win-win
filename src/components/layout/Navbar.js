import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import logo from './win-win_logo.png';
import './Navbar.css'

const Navbar = (props) => {
  const { auth, profile } = props;

  //console.log(auth);
    const response = fetch("http://localhost:3000/questionPaper/users/rjgffFzhkORjuFczGuPYjNHzInC2")
        .then((response) => {response.json()})
        .then(console.log(response));

    // const userType = JSON.stringify(response);
    console.log(response);

  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

  return (
    <nav className="nav-wrapper teal lighten-1 navbar">
      <div className="container nav">
      <ul className="left" id="logo">          
        <li ><img src={logo} width="40px" alt={"win-win"} /></li>
        <li><Link to='/' className="brand-logo">Win - Win</Link></li>        
      </ul>
        {links}
      </div>
    </nav>
  )
};

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
};

export default connect(mapStateToProps)(Navbar)
