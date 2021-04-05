import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import base_url from '../../Api/BootApi'

const ListStudents=()=>{

    const[student,setStudent]=useState([]);
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
        <div className="studentsTable" 
        style={{ 

            display:'flex',
            justifyContent: 'center'
            
        }}
        
        
        ><br/><br/>
                    <Table bordered>
                        <thead>
                                <tr>
                                    <th>STUDENT NAME</th>
                                    <th>EMAIL ID</th>
                                    <th> PHONE NO </th>
                                </tr>
                        </thead>
                        <tbody>
                                 {
                                    student.map((item)=>(
                                    <tr>
                                        <td>{item.username}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                       
                                    </tr>
                                 ))
                                 } 
                               
                        </tbody>
                    </Table>
        </div>
    );

}

export default ListStudents;