import React, { useEffect, useState } from "react";
import "../../../App.css";
import { useContext } from "react";
import { GameStateContext } from "./Contexts";
import axios from 'axios';
import base_url from '../../../Api/BootApi';


const EndScreen = (props) => {

  const { score, setScore, setGameState, userName,papername } = useContext(
    GameStateContext
  );
  useEffect(()=>{
      
    const data={
      username:userName,
      questType:papername,
      score:score,
      totalScore:props.name.length 
    };
    console.log(data);
    postDataToServer(data);
    
   
},[]);

  const postDataToServer=(data)=>{
    axios.post(`${base_url}/answeredquestion/addansweredquestion`,data).then(
      (response)=>{
          console.log(response)
          
      },
      (error)=>{
          console.log(error)
          
      })
  }

 return (
    <div className="EndScreen">
      <h1>Thank You</h1>
      <h2>{userName}</h2>
      <h3>You Scored</h3>
      
      <h1>
        {score} / {props.name.length} 
      </h1>
      <h1>in</h1>
      <h1>{papername}</h1>
      </div>
  );
};

export default EndScreen;
