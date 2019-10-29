import React, {Component} from 'react'
// import QuestionList from '../question/QuestionList'
// import Notifications from './Notifications'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
import SimpleSlider from './SlideView'
import SideBar from '../layout/SideBar'
import ExamTypes from "./ExamTypes";
import LatestNews from "./LatestNews";
import TeacherDeatails from './TeacherDeatails'
import Footer from './Footer'


class Dashboard extends Component {
    render() {
        const {questions, auth, notifications} = this.props;
        //const auth = this.props;
        if (!auth.uid) return <Redirect to='/signin'/>

        return (
            <div>
                <div style={{marginLeft:20}}>
                    <SideBar/>
                </div>
                <div className="row" style={{marginLeft: 200, marginTop: 60}}>
                    <div id="home"><SimpleSlider /></div>
                    <div id="examinations"><ExamTypes /></div>
                    <div id="news"><LatestNews /></div>
                    <div id="teachers"><TeacherDeatails /></div>
                    <div id="contacts"><Footer /></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        questions: state.firestore.ordered.questions,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'questions', orderBy: ['createdAt', 'desc']},
        {collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
    ])
)(Dashboard)
