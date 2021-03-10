import React,{Fragment, useEffect,useState} from 'react'
import {Button, Container, Form,FormGroup,Input} from 'reactstrap'
import axios from 'axios'
import base_url from '../../../Api/BootApi'
import { toast } from 'react-toastify'
const AddQuestion=()=>{

    const[questionsType,setQuestionsType]=useState([]);

    useEffect(()=>{
        getAllQuestionsTypeFromServer();
   },[])

    useEffect(()=>{
        document.title="Add Question || Online Counselling Management"
    },[]);
  

    const [question,setQuestion]=useState({});

    
    const handleForm=(e)=>{
       console.log(question);
       postDataToServer(question);
        e.preventDefault();
    }

    const postDataToServer=(data)=>{
        axios.post(`${base_url}/question/addquestion`,data).then(
            (response)=>{
                console.log(response)
                
            },
            (error)=>{
                console.log(error)
                toast.error("Something went wrong")
            })

            

    };

    const getAllQuestionsTypeFromServer=()=>{
        axios.post(`${base_url}/questionpaper/updatequestiontype`).then(
            (response)=>{
                console.log(response)
                setQuestionsType(...questionsType,response.data)
                console.log(questionsType)
            },
            (error)=>{
                console.log(error)
            })
    }

    return(

        <Fragment>
        <h1 className="text-center my-3"> Fill Question details: </h1>
           <Form onSubmit={handleForm}>
                <FormGroup>
                    <Input type="select" onChange={(e)=>{setQuestion({...question,questType:e.target.value})}}>
                        {
                            questionsType.map(item=>(<option value={item.questionType}>{item.questionType}</option>))
                        }
                    </Input>
                </FormGroup>
                <FormGroup>
                <label for="questionId">Question Id</label>
                    <Input type="text" placeholder="Enter Question number here" name="questionId" id="questionId" onChange={(e)=>{setQuestion({...question,questNo:e.target.value})}}/>
                </FormGroup>
                <FormGroup>
                    <label for="questionDesc">Question Description</label>
                    <Input type="text" placeholder="Enter Question Description here" name="questionDesc" id="questionDesc" onChange={(e)=>{setQuestion({...question,questDesc:e.target.value})}}/>                    
                </FormGroup>
                <FormGroup>
                    <label for="title">Enter Option1</label>
                    <Input type="text" placeholder="Enter Question first option here" name="questionOption1" id="questionOption1" onChange={(e)=>{setQuestion({...question,questOption1:e.target.value})}}/>                    
                </FormGroup>
                <FormGroup>
                    <label for="title">Enter Option2</label>
                    <Input type="text" placeholder="Enter Question second option here" name="questionOption2" id="questionOption2" onChange={(e)=>{setQuestion({...question,questOption2:e.target.value})}}/>                    
                </FormGroup>
                <FormGroup>
                    <label for="title">Enter Option3</label>
                    <Input type="text" placeholder="Enter Question third option here" name="questionOption3" id="questionOption3" onChange={(e)=>{setQuestion({...question,questOption3:e.target.value})}}/>                    
                </FormGroup>
                <FormGroup>
                    <label for="title">Enter Option4</label>
                    <Input type="text" placeholder="Enter Question Fourth option here" name="questionOption4" id="questionOption4" onChange={(e)=>{setQuestion({...question,questOption4:e.target.value})}}/>                    
                </FormGroup>
                <FormGroup>
                    <label for="title">Enter correct answer</label>
                    <Input type="text" placeholder="Enter correct answer here" name="questionAns" id="questionAns" onChange={(e)=>{setQuestion({...question,questAnswer:e.target.value})}}/>                    
                </FormGroup>
                <Container className="text-center">
                    <Button color="primary" type="submit">Add Question</Button>
                    <Button color="success ml-3" >Cancel</Button>
                </Container>
           </Form>
        </Fragment>
    );
}

export default AddQuestion;