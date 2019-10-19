import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import QuestionDetails from './components/question/QuestionDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateQuestion from './components/question/CreateQuestion'
import QuestionPaper from './components/examination/QuestionPaper'
import Result from "./components/result/Result"
import PaperStructure from './components/paperStructure/paperStructure'
import UserProfile from './components/userProfile/userProfile'
import RequestExam from './components/examination/RequestExam'
import Chart from './components/result/Chart'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/Question/:id' component={QuestionDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateQuestion} />
            <Route path='/examination' component={QuestionPaper} />
            <Route path='/result' component={Result} />
            <Route path='/paperstructure' component={PaperStructure} />
            <Route path='/userprofie' component={UserProfile} />
            <Route path='/requestexam' component={RequestExam} />
            <Route path='/chart' component={Chart} />
            {/*<Route path='/sidebar' component={sideBar} />*/}
            <Route path='/*' component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
