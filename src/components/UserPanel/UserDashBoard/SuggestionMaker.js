import axios from 'axios';
import React, { useEffect, useState } from 'react';
import base_url from '../../../Api/BootApi'


const SuggestionMaker=(props)=>{
    const[suggestion,setSuggestion]=useState("");
    var[scoreData,setScoreData]=useState({
        aptitude:"",
        computerScience:"",
        general:"",
        numericalAbility:"",
        psycological:"",
        sports:""

    });
    useEffect(()=>{ 
        console.log(props.name);
        var apt=0;
        var comp=0;
        var gen=0;
        var num=0;
        var psyco=0;
        var spor=0;
        
       
        var score=props.name.map((item)=>
        {
                switch(item.questType)
                {
                    case "Aptitude":
                                    if(item.score>=0 && item.score<5)
                                    apt=0;
                                    else if(item.score>=5 && item.score<10)
                                    apt=5;
                                    else if(item.score>=10 && item.score<15)
                                    apt=10;
                                    else if(item.score>=15 && item.score<20)
                                    apt=15;
                                    break;
                    case "Computer Science":
                                    if(item.score>=0 && item.score<5)
                                    comp=0;
                                    else if(item.score>=5 && item.score<10)
                                    comp=5;
                                    else if(item.score>=10 && item.score<15)
                                    comp=10;
                                    else if(item.score>=15 && item.score<20)
                                    comp=15;
                                    break;
                    case "General":
                                    if(item.score>=0 && item.score<5)
                                    gen=0;
                                    else if(item.score>=5 && item.score<10)
                                    gen=5;
                                    else if(item.score>=10 && item.score<15)
                                    gen=10;
                                    else if(item.score>=15 && item.score<20)
                                    gen=15;
                                    break;
                    case "Numerical Ability":
                                    if(item.score>=0 && item.score<5)
                                    num=0;
                                    else if(item.score>=5 && item.score<10)
                                    num=5;
                                    else if(item.score>=10 && item.score<15)
                                    num=10;
                                    else if(item.score>=15 && item.score<20)
                                    num=15;
                                    break;
                    case "Psycological":
                                    if(item.score>=0 && item.score<5)
                                    psyco=0;
                                    else if(item.score>=5 && item.score<10)
                                    psyco=5;
                                    else if(item.score>=10 && item.score<15)
                                    psyco=10;
                                    else if(item.score>=15 && item.score<20)
                                    psyco=15;
                                    break;
                    case "Sports":
                                    if(item.score>=0 && item.score<5)
                                    spor=0;
                                    else if(item.score>=5 && item.score<10)
                                    spor=5;
                                    else if(item.score>=10 && item.score<15)
                                    spor=10;
                                    else if(item.score>=15 && item.score<20)
                                    spor=15;
                                    break;

                }
          
               console.log(item);     
                
        });

        setScoreData(scoreData={
            aptitude:apt,
            computerScience:comp,
            general:gen,
            numericalAbility:num,
            psycological:psyco,
            sports:spor
    
        })
        console.log(apt);
        console.log(scoreData);
        fetchSuggestionFromServer(scoreData);
        },[]); 


    const fetchSuggestionFromServer =(scoreData)=>{
        axios.post(`${base_url}/dataset/fetchsuggestion`,scoreData)
        .then((response)=>{console.log("Suggestions fetch");
        console.log(response.data)
        setSuggestion(response.data);
            
        },error=>{
            console.log("Something went wrong"+error);
        }
        )
    }
    
    return(<>
    
        <b>Suggestion:-</b>{suggestion}
    </>
    );
}


export default SuggestionMaker;