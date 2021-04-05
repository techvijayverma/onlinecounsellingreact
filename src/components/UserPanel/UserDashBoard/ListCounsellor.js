import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import base_url from '../../../Api/BootApi'

const ListCounsellor=()=>{

    const [counsellor,setCounsellor]=useState([]);

    useEffect(()=>{
        getCounsellorsFromServer();
   },[])
    const getCounsellorsFromServer=()=>{
        axios.get(`${base_url}/user/allusers?userType=counsellor`).then(
            (response)=>{
                console.log(response)
                setCounsellor(response.data)
                console.log(counsellor)
            },
            (error)=>{
                console.log(error)
            })
    }








    return(

        <div className="counsellorsTable" 
        style={{ 

            display:'flex',
            justifyContent: 'center'
            
        }}
        
        
        ><br/><br/>
                    <Table bordered>
                        <thead>
                                <tr>
                                    <th>COUNSELLOR NAME</th>
                                    <th>STREAM</th>
                                    <th>EMAIL ID</th>
                                    <th>PHONE NO</th>
                                    <th>EXPERIENCE</th>
                                </tr>
                        </thead>
                        <tbody>
                                 {
                                    counsellor.map((item)=>(
                                    <tr>
                                        <td>{item.username}</td>
                                        <td>{item.stream}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.experience}</td>
                                       
                                    </tr>
                                 ))
                                 } 
                               
                        </tbody>
                    </Table>
        </div>





    );

}

export default ListCounsellor;