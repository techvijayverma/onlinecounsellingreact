import Chart from './Chart';
import React, { useContext, useEffect, useState } from 'react';
import base_url from '../../../Api/BootApi';
import axios from 'axios';
import ReactToPdf from 'react-to-pdf';
import { Col, Container, Row } from 'reactstrap';
import SuggestionMaker from './SuggestionMaker'
import GenerateResultTable from './GenerateResultTable';
import {Button} from 'reactstrap'
import { UserStateContext } from '../../../UserContext';
import ListCounsellor from './ListCounsellor';
import { Link } from 'react-router-dom';
const ref=React.createRef();

const Reports=()=>{
    var [userResult,setUserResult]=useState([]);
    const options = {
        orientation: 'landscape',
        
    };
    const {username,setUsername,isLoading,setIsLoading,userType } = useContext(UserStateContext);
    
useEffect(()=>{ 
        document.title="Reports||Student Online Counselling System "
    },[]);
    useEffect(()=>{
        getAllUserResult();
       
    },[]);

    


   const getAllUserResult= async()=>{

   var response= await axios.get(`${base_url}/answeredquestion/getUserReport/${username}`);
   //const data=await response.json();
   setUserResult(response.data);
   console.log(userResult);
    }

    if(isLoading===true ||userType==="counsellor"){
        return <div>Please Login as a student...</div>
    }


    return(
        <>
                <div className="pdf" ref={ref}>
                <h2 style={{textAlign:"center"}}><u>Report</u></h2>
                <Container fluid>
                            <Row>
                                <Col md={4}><img src="images/accslogo.jpg" style={{width:"200px", height:"80px"}} alt="logo" /></Col>
                                <Col md={4}><h5 className="alignCenter"><u>Student Name: {username}</u></h5></Col>
                                <Col md={4}>Online Generated</Col>
                            </Row>
                </Container>
                
                
                <hr/>
                     {userResult.length>0 && <Chart name={userResult}/> }<br/><br/>
                     {userResult.length>0 && <GenerateResultTable name={userResult}/>}<br/><br/>
                     {userResult.length>0 && <SuggestionMaker name={userResult} /> }<br/><br/>
                </div>
                <hr/>
                <ReactToPdf  targetRef={ref} options={options} x={.1} y={.3} scale={0.8} filename={`ReportACCS_${username}.pdf`}>
                {
                    ({toPdf})=><div className="reportBtn"><Button className="btnReport" color="primary" onClick={toPdf}>Download Report as PDF</Button></div>
                }
                </ReactToPdf>

                <br/><br/>
                
                <div className="alignCenter">Want to consult a counsellor? Please <Link to="/listcounsellor">click here</Link></div>
        </>
    );
}

export default Reports;