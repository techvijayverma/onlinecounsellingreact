import React, { useState,useEffect } from 'react';
import Question from './Question';
import base_url from '../../../Api/BootApi';
import axios from 'axios';
import {toast} from 'react-toastify' ;

const Questions=()=>{
    useEffect(()=>{ 
        document.title="All Questions||Student Online Counselling System "
    },[])

const getAllQuestionsFromServer=()=>{

    axios.get(`${base_url}/question/allquestions`).then(
        (response)=>{
                console.log(response);
                setQuestions(response.data)
        },
        (error)=>{
                console.log(error);
                toast.error("Something went wrong")
        }
    )
}
useEffect(()=>{
    getAllQuestionsFromServer();
},[])



    const[questions,setQuestions]=useState([]);

    const updateQuestions=(id)=>{
        setQuestions(questions.filter((q)=>q.questNo!==id))
    }
    return(
        <div>
            <h1>List of all questions in the database</h1>
            
            {
                questions.length>0?questions.map((item)=>{return(
                    <Question question={item} update={updateQuestions}/>);
                    
                    })   :"No Question available"
            }
        </div>


);
}

export default Questions;