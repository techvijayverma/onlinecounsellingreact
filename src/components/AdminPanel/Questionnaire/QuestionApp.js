import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap';
import AddQuestion from './AddQuestion'
import Questions from './Questions'
import MenuQuestion from './MenuQuestion';
import ListCounsellor from '../../UserPanel/UserDashBoard/ListCounsellor';
import ListStudents from '../../CounsellorPanel/ListStudents';
const QuestionApp=()=>{
    return(
        <div>
                <Router>
                    <div>
                            <MenuQuestion/>
                    </div>
                        <Route path="/addquestion" component={AddQuestion} />
                        <Route path="/questionnaire" component={Questions} exact/>
                        <Route path="/liststudents" component={ListStudents} exact/>
                        <Route path="/listcounsellors" component={ListCounsellor} exact/>
                               
                </Router>
        </div>
    );
}

export default QuestionApp;