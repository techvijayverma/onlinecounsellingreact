import "../../../App.css";
import { useState } from "react";

import { useContext } from "react";
import { GameStateContext } from "./Contexts";
import axios from "axios";
import base_url from '../../../Api/BootApi'
import { toast, ToastContainer} from "react-toastify";

function Quiz(props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const[isCorrect,setIsCorrect]=useState("false");
  const { score, setScore, gameState, setGameState,userName,setUserName,papername } = useContext(
    GameStateContext
  );

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const nextQuestion = () => {

    if(optionChosen=="")
    {
      toast.warning("Please choose any option",{position:"top-center"});
    }   
    else
    {
      if (props.name[currentQuestion].questAnswer == optionChosen) {
        setIsCorrect(state=>"true");
        setScore(score + 1);
      }
      setCurrentQuestion(currentQuestion + 1);
      postUserAnswerToServer();
      setOptionChosen("");
    }
    
  };


  
 
  const finishQuiz = () => {

    if(optionChosen=="")
    {
      toast.warning("Please choose any option",{position:"top-center"});
    }   
    else
    {


    if (props.name[currentQuestion].questAnswer == optionChosen) {
      setIsCorrect(state=>"true");
      setScore(score + 1);
    }
    setGameState("finished");
    postUserAnswerToServer();  
    setOptionChosen("");

  }
  };

  


  const postUserAnswerToServer=()=>{
    const  userAnswerData={
                      username:userName,
                      questDesc:props.name[currentQuestion].questDesc,
                      questType:papername,
                      answer:optionChosen,
                      correctAnswer:props.name[currentQuestion].questAnswer,
                      isCorrect:isCorrect
                       };

    console.log(userAnswerData)
    axios.post(`${base_url}/useranswer/adduseranswer`,userAnswerData).then(
      (response)=>{
          console.log(response)
          
      },
      (error)=>{
          console.log(error)
          console.log("Something went wrong")
      })
  }



  return (
       <div className="Quiz">
       <h4>{props.name[currentQuestion].questDesc}</h4>
      <div className="questions">
        <button
          onClick={() => {
            chooseOption(1);
          }}
        >
         (1) {props.name[currentQuestion].questOption1}
        </button>
        <button
          onClick={() => {
            chooseOption(2);
          }}
        >
         (2) {props.name[currentQuestion].questOption2}
        </button>
        <button
          onClick={() => {
            chooseOption(3);
          }}
        >
         (3) {props.name[currentQuestion].questOption3}
        </button>
        <button
          onClick={() => {
            chooseOption(4);
          }}
        >
         (4) {props.name[currentQuestion].questOption4}
        </button>
      </div>
         
      {currentQuestion == props.name.length - 1 ? (
        <button onClick={finishQuiz} id="nextQuestion">
          Submit
        </button>
      ) : (
        <button onClick={nextQuestion} id="nextQuestion">
          Next Question
        </button>
      )}

       <ToastContainer/>   
      <div className="answer"> Your Answer:({optionChosen})</div>
    </div>
  );
}

export default Quiz;
