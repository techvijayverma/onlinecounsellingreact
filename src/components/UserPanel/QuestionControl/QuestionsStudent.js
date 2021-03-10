import React, { useState,useEffect } from 'react';
import base_url from '../../../Api/BootApi'
import axios from 'axios';
import {toast} from 'react-toastify' ;
import QuestionForGuest from './QuestionStudent';

const QuestionsStudent=(props)=>{
    const[questions,setQuestions]=useState([]);
    useEffect(()=>{ 
        document.title="Attempt all Questions||Student Online Counselling System "
    },[])
    useEffect(()=>{
        getAllQuestionsFromServer();
    },[])

    const getAllQuestionsFromServer=()=>{

        axios.get(`${base_url}/question/allquestions`).then(
            (response)=>{
                    console.log(response);
                    toast.success("All Questions are loaded")
                    setQuestions(response.data)
            },
            (error)=>{
                    console.log(error);
                    toast.error("Something went wrong")
            }
        )
    }
    const updateQuestions=(id)=>{
        setQuestions(questions.filter((q)=>q.questNo!==id))
    }
    return(
        <div>
                <div>
            <h1>Attempt all Questions</h1>
            <p>Let help us to help you</p>
            {
                questions.length>0?questions.map((item)=>{return(
                    <QuestionForGuest question={item} update={updateQuestions}/>);
                    
                    })   :"No Question available"
            }
        </div>
        </div>
    );

}

export default QuestionsStudent;