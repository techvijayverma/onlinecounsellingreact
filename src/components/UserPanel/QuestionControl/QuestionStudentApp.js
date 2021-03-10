import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import QuestionsStudent from './QuestionsStudent';
import QuestionStudentMenu from './QuestionStudentMenu';

const QuestionStudentApp=()=>{
    return(
        <div>
            <Container>
                <Row>
                    <QuestionStudentMenu />
                </Row>
                <Row>
                    <Router>
                        <Route path="/questionstudentapp" component={QuestionsStudent} exact/>
                        <Route path='/general'
                                render={(props) => (
                                        <QuestionsStudent {...props} paperType={""} />
                                         )}
                        />
                    </Router>     
                </Row>
                
            </Container>
            
        </div>
    );

}

export default QuestionStudentApp;