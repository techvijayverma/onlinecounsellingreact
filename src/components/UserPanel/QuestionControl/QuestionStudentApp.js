import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import QuestionsStudent from './QuestionsStudent';
import QuestionStudentMenu from './QuestionStudentMenu';
import '../../../App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const QuestionStudentApp=()=>{
    return(
        
        <Router>
        <ToastContainer/>
         <div>
            <QuestionStudentMenu />
        </div>
            <Route path="/questionstudentapp" component={()=><QuestionsStudent name="Aptitude"/>} exact/>
            <Route path='/general' component={()=><QuestionsStudent name="General"/>} exact/>
            <Route path='/aptitude' component={()=><QuestionsStudent name="Aptitude"/>} exact />
            <Route path='/psycological' component={()=><QuestionsStudent name="Psycological"/>} exact/>
            <Route path="/computerscience" component={()=><QuestionsStudent name="Computer Science"/>} exact />
            <Route path="/sports" component={()=><QuestionsStudent name="Sports"/>} exact />       
            <Route path="/numericalability" component={()=><QuestionsStudent name="Numerical Ability"/>} exact />               
        </Router>                
            
                
      
            
        
    );

}

export default QuestionStudentApp;