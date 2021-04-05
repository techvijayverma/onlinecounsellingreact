import axios from 'axios';

import React, { Fragment, useEffect, useState } from 'react';
import { Button,Container, Form, FormGroup, Input, Table } from 'reactstrap';
import base_url from '../../Api/BootApi'
import StudentReport from './StudentReport';


const FetchReport=()=>{

    const[student,setStudent]=useState([]);
    const[selectedStudent,setSelectedStudent]=useState({
        username:"deepak"
    });
    var [userResult,setUserResult]=useState([]);

    const handleClick= async()=>{
        var response= await axios.get(`${base_url}/answeredquestion/getUserReport/${selectedStudent.username}`);
        console.log(selectedStudent);
        setUserResult(response.data);
        console.log(userResult);
                     
    }

    useEffect(()=>{
        getStudentsFromServer();
   },[])
    const getStudentsFromServer=()=>{
        axios.get(`${base_url}/user/allusers?userType=student`).then(
            (response)=>{
                console.log(response)
                setStudent(response.data)
                console.log(student)
            },
            (error)=>{
                console.log(error)
            })
    }

return(
        <div>
            <Fragment>
        <h1 className="text-center my-3"> Select username of the student </h1>
           <Form>
                <FormGroup>
                    <Input type="select" onChange={(e)=>{setSelectedStudent({...selectedStudent,username:e.target.value})}}>
                        {
                            student.map(item=>(<option value={item.username}>{item.username}</option>))
                        }
                    </Input>
                </FormGroup>
                <Container className="text-center">
                    <Button color="primary" onClick={handleClick}>Display Result</Button>
                </Container>
           </Form>
     
        </Fragment>


        <hr/>
                        <StudentReport name={userResult}/>
        </div>
    );

}

export default FetchReport;