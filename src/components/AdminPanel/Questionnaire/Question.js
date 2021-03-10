import axios from 'axios';
import React from 'react'
import base_url from '../../../Api/BootApi'
import {
    Card, CardText, CardBody, CardSubtitle,Button,Container, Form, FormGroup, Input, Label
  } from 'reactstrap';
  import { toast } from 'react-toastify';

const Question=({question,update})=>{
    console.log(question);
    const deleteQuestion=(questNo)=>{
        axios.get(`${base_url}/question/deletequestion/${questNo}`).then(
            (response)=>{
                    console.log(response);
                    toast.success("Question deleted successfully. ")
                    update(questNo);
            },
            (error)=>{
                    console.log(error);
                    toast.error("Course not deleted. Server problem")
            }

        )

    };


    return(
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
                <Container className="text-center">
                    <Button color="danger" onClick={()=>{deleteQuestion(question.questNo);}}>Delete</Button>
                    <Button color="warning ml-5">Update</Button>
                </Container>
            </Form>
            </CardBody>
        </Card>
    );
}
export default Question;