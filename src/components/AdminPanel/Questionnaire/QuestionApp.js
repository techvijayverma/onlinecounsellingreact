import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap';
import AddQuestion from './AddQuestion'
import Questions from './Questions'
import EditQuestion from './EditQuestion';
import DeleteQuestion from './DeleteQuestion';
import MenuQuestion from './MenuQuestion';
const QuestionApp=()=>{
    return(
        <div>
                <Router>
                        <Container>
                            <Row>
                                <Col md={4}>
                                    <MenuQuestion/>
                                </Col>
                                <Col md={8}>
                                        <Route path="/addquestion" component={AddQuestion} />
                                        <Route path="/questionnaire" component={Questions} exact/>
                                        <Route path="/editquestion" component={EditQuestion} exact/>
                                        <Route path="/deletequestion" component={DeleteQuestion} exact/>
                                </Col>
                            </Row>
                        </Container>
                </Router>
        </div>
    );
}

export default QuestionApp;