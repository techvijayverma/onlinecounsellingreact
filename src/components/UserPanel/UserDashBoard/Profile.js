import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import {Form, FormGroup, Input, Label } from 'reactstrap';
import base_url from '../../../Api/BootApi'
import { UserStateContext } from '../../../UserContext';

const Profile=()=>{
    const [userDetails,setUserDetails]=useState({});
    const { userType,setUserType,username,setUsername,isLoading,setIsLoading } = useContext(UserStateContext);
    useEffect(()=>{
        getAllQuestionsFromServer();
        },[])

    const getAllQuestionsFromServer= ()=>{
        
       axios.get(`${base_url}/user/${username}`).then(
            (response)=>{
                    console.log(response);  
                    setUserDetails(response.data)
                    },
            (error)=>{
                    console.log(error);
                    
            }
        )
    }

    if(isLoading){
        return <div>Please Login...</div>
    }



    return(
        <div>
            
            <div className="alignCenter"><u><b>{username} Profile Page</b></u> </div>  

            <Form>
        
      <FormGroup>
        <Label for="fullName">Full Name :</Label>
        <Input type="text" name="fullName" id="fullName" placeholder={userDetails.fullname} disabled/>
      </FormGroup>

      <FormGroup>
        <Label for="gender">Gender</Label>
        <Input type="text" name="gender" id="gender" placeholder={userDetails.gender} disabled/>
      </FormGroup>

      <FormGroup>
        <Label for="dateofbirth">Date of Birth</Label>
        <Input type="text" name="dateofbirth" id="dateofbirth" placeholder={userDetails.dateOfBirth} disabled />
      </FormGroup>

      <FormGroup>
        <Label for="phone">Phone</Label>
        <Input type="text" name="phone" id="phone" placeholder={userDetails.phone} disabled />
      </FormGroup>

      <FormGroup>
        <Label for="qualification">Qualification</Label>
        <Input type="text" name="qualification" id="qualification" placeholder={userDetails.qualification} disabled />
      </FormGroup>

      { userType==="student"?

        <FormGroup>
        <Label for="careergoal">Career Goal</Label>
        <Input type="text" name="careergoal" id="careergoal" placeholder={userDetails.careergoal} disabled />
      </FormGroup>:""

      }
      

      <FormGroup>
        <Label for="interestedin">Interested in</Label>
        <Input type="text" name="interestedin" id="interestedin" placeholder={userDetails.interestedIn} disabled/>
      </FormGroup>

      <FormGroup>
        <Label for="stream">Stream</Label>
        <Input type="text" name="stream" id="stream" placeholder={userDetails.stream} disabled />
      </FormGroup>
{ userType==="counsellor"?
  <FormGroup>
        <Label for="experience">Experience</Label>
        <Input type="text" name="experience" id="experience" placeholder={userDetails.experience} disabled/>
      </FormGroup>:""

}
      
      
      
</Form>

        </div>
    );

}
export default Profile;