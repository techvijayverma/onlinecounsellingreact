import axios from 'axios';
import React from 'react'
import base_url from '../../../Api/BootApi';
import {
    Card, CardText, CardBody, CardSubtitle, Form, FormGroup, Input, Label
  } from 'reactstrap';
  

const QuestionStudent=({question,update})=>{
    console.log(question);
    
    return(
        <div>
        <Card className="text-center">
            <CardBody>
            <Form>
                <CardSubtitle className="font-weight-bold">Question: {question.questNo}</CardSubtitle>
                <CardText>{question.questDesc}</CardText>
                <CardText>
                    <FormGroup check>
                            <Input id="radio1-option1" type="radio" name="radio1" />
                            <Label check for="radio1-option1"> (a) {question.questOption1} </Label>
                    </FormGroup>
                </CardText>
                <CardText>
                    <FormGroup check>
                            <Input id="radio1-option1" type="radio" name="radio1" />
                            <Label check for="radio1-option1"> (b) {question.questOption2}</Label>
                    </FormGroup>
                </CardText>
                <CardText>
                    <FormGroup check>
                            <Input id="radio1-option1" type="radio" name="radio1" />
                            <Label check for="radio1-option1"> (c) {question.questOption3}</Label>
                    </FormGroup>
                </CardText>
                <CardText>
                    <FormGroup check>
                            <Input id="radio1-option1" type="radio" name="radio1" />
                            <Label check for="radio1-option1"> (d) {question.questOption4}</Label>
                    </FormGroup>
                </CardText>
            </Form>
            </CardBody>
        </Card>
        </div>
    )
}

export default QuestionStudent;