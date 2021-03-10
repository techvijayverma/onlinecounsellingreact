import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap';
import MenuUser from './MenuUser';
import Login from './Login';
import Register from './Register';
import ChangePassword from './ChangePassword';
import EditProfile from './EditProfile';
import Profile from './Profile';
import Reports from './Reports';
import FAQ from './FAQ';
import QuestionStudentApp from '../QuestionControl/QuestionStudentApp';

const UserApp=()=>{
    return(
        <div>
                <Router>
                        <Container>
                            <Row>
                                <Col md={4}>
                                    <MenuUser/>
                                </Col>
                                <Col md={8}>
                                        <Route path="/login" component={Login} exact/>
                                        <Route path="/usersection/register" component={Register} />
                                        <Route path="/changepassword" component={ChangePassword} exact/>
                                        <Route path="/editprofile" component={EditProfile} exact/>
                                        <Route path="/profile" component={Profile} exact/>
                                        <Route path="/reports" component={Reports} exact/>
                                        <Route path="/faq" component={FAQ} exact/>
                                        <Route exact path="/questionstudentapp" component={QuestionStudentApp}/>
                                        
                                        
                                </Col>
                            </Row>
                        </Container>
                </Router>
        </div>
    );
}

export default UserApp;