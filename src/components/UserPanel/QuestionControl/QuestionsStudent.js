import React, { useState,useEffect } from 'react';
import base_url from '../../../Api/BootApi'
import axios from 'axios';
import {GameStateContext} from './Contexts';
import Menu from './Menu';
import Quiz from './Quiz';
import EndScreen from './EndScreen';


const QuestionsStudent=(props)=>{
  
  const[papername,setPaperName]=useState(props.name);
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);
  const[questions,setQuestions]=useState([]);
    useEffect(()=>{ 
        document.title="Attempt all Questions||Student Online Counselling System "
    },[])
    useEffect(()=>{
        getAllQuestionsFromServer();
    },[])

    const getAllQuestionsFromServer=()=>{
        setUserName(localStorage.getItem("user"));
        axios.get(`${base_url}/question/getquestionpaper/${props.name}`).then(
            (response)=>{
                    console.log(response);
                    setQuestions(response.data)
                        },
            (error)=>{
                    console.log(error);
                    
            }
        )
    }
    
    
return(
    <div className="App">
    <h1>Welcome to Questionnaire</h1>
    <GameStateContext.Provider
      value={{
        gameState,
        setGameState,
        userName,
        setUserName,
        score,
        setScore,
        papername
      }}
    >
      {gameState === "menu" && <Menu name={props.name}/>}
      {gameState === "playing" && <Quiz name={questions}/>}
      {gameState === "finished" && <EndScreen name={questions} />}
    </GameStateContext.Provider>
  </div>
    );

}

export default QuestionsStudent;
