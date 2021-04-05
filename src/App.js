import './App.css';
import Header from './components/StaticPages/Header';
import Footer from './components/StaticPages/Footer';
import Home from './components/StaticPages/Home';
import UserApp from './components/UserPanel/UserDashBoard/UserApp';
import About from './components/StaticPages/About'
import ContactUs from './components/StaticPages/ContactUs'
import Logout from './components/UserPanel/UserDashBoard/Logout';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import { useEffect, useState } from 'react';
import QuestionApp from './components/AdminPanel/Questionnaire/QuestionApp'
import Register from './components/UserPanel/UserDashBoard/Register';
import TenthStudent from './components/StaticPages/TenthStudent';
import TwelthStudent from './components/StaticPages/TwelthStudent';
import ToastAlert from './components/StaticPages/ToastAlert';
import { Col, Container, Row } from 'reactstrap';
import {UserStateContext} from './UserContext';
import UserHeader from './components/StaticPages/UserHeader';
import CounsellorDashBoard from './components/CounsellorPanel/CounsellorDashBoard';


function App() {
  const[isLoading,setIsLoading]=useState(true);
  const [userType,setUserType]=useState("");
  const[username,setUsername]=useState(localStorage.getItem('user'));
  useEffect(()=>{
      
    // window.onunload = function() {
    //   localStorage.removeItem('user');
    //   return '';
    // };

    })
  return (
    <Router>
    <UserStateContext.Provider
      value={{
        username,
        setUsername,
        isLoading,
        setIsLoading,
        userType,
        setUserType
      }}
    >
        <Container fluid>
        <Row>
        <Col md={12}>
            <Header user={username}/>
        </Col>
        </Row>
        <Row>
        <Col md={12}>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/userportal" component={UserApp}/>
              <Route exact path="/logout" component={Logout}/>
              <Route exact path="/contactus" component={ContactUs}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/questionapp" component={QuestionApp}/>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/tenthstudents" component={TenthStudent}/>
              <Route exact path="/twelthstudents" component={TwelthStudent}/>
              <Route exact path="/toastalert" component={ToastAlert}/>
              

            </Switch>
        </Col>
        
        </Row>

        <Row>
            <Col md={12}>
              <Footer/>
            </Col>
           
        </Row>
      </Container>   
      </UserStateContext.Provider>     
  </Router>
    
  );
}

export default App;
