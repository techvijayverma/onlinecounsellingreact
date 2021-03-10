import './App.css';
import Header from './components/StaticPages/Header';
import Footer from './components/StaticPages/Footer';
import Home from './components/StaticPages/Home';
import UserApp from './components/UserPanel/UserDashBoard/UserApp';
import Logout from './components/UserPanel/UserDashBoard/Logout';
import Question from './components/AdminPanel/Questionnaire/Question';
import QuestionApp from './components/AdminPanel/Questionnaire/QuestionApp';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import { useEffect, useState } from 'react';
import QuestionStudentMenu from './components/UserPanel/QuestionControl/QuestionStudentMenu';

function App() {
  const[username,setUsername]=useState('');
  useEffect(()=>{
    setUsername(localStorage.getItem('user'))
    })
  return (
    <Router>
        <div>
        <Header user={username}/>
        </div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/usersection/register" component={UserApp}/>
          <Route exact path="/question" component={Question}/>
          <Route exact path="/questionapp" component={QuestionApp}/>
          <Route exact path="/logout" component={Logout}/>
          <Route path="/menuforstudent" component={QuestionStudentMenu} exact/>
        </Switch>
        <Footer/>
  </Router>
    
  );
}

export default App;
