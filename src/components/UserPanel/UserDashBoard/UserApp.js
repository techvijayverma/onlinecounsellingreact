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
import QuestionApp from '../../AdminPanel/Questionnaire/QuestionApp';
import CounsellorDashBoard from '../../CounsellorPanel/CounsellorDashBoard';
import ListCounsellor from './ListCounsellor';

const UserApp=()=>{
    return(
        <div>
                <Router>
                        <Container fluid>
                            <Row>
                                <Col md={3}>
                                    <MenuUser/>
                                </Col>
                                
                                <Col md={9}>
                                        <Route path="/login" component={Login} exact/>
                                        <Route path="/usersection/register" component={Register} />
                                        <Route path="/changepassword" component={ChangePassword} exact/>
                                        <Route path="/editprofile" component={EditProfile} exact/>
                                        <Route path="/profile" component={Profile} exact/>
                                        <Route path="/reports" component={Reports} exact/>
                                        <Route path="/faq" component={FAQ} exact/>
                                        <Route exact path="/questionstudentapp" component={QuestionStudentApp}/>
                                        <Route exact path="/questionapp" component={QuestionApp}/>
                                        <Route exact path="/counsellordashboard" component={CounsellorDashBoard}/>
                                        <Route path="/listcounsellor" component={ListCounsellor} exact/>
                                        
                                </Col>
                            </Row>
                        </Container>
                </Router>
        </div>
    );
}

export default UserApp;