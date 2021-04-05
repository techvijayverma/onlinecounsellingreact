import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import base_url from '../../../Api/BootApi';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserStateContext } from '../../../UserContext';

const EditProfile=()=>{

const [userDetails,setUserDetails]=useState({});
const [attribute,setAttribute]=useState('');
const { username,setUsername,isLoading,setIsLoading,userType,setUserType} = useContext(UserStateContext);
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

  


  const handleSubmit=()=>{

    axios.post(`${base_url}/user/updateprofile`,userDetails).then(
      (response)=>{
              console.log(response);
              toast.success("Profile updated");
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
      <div className="editProfile">
          <ToastContainer position="top-center"/>
          <div className="alignCenter"><u><b>{username} Edit Profile</b></u></div>  

          <Form>
     
    <FormGroup>
      <Label for="fullName">Full Name :</Label>
      <Input type="text" name="fullName" id="fullName" placeholder={userDetails.fullname} onChange={(e)=>{setUserDetails({...userDetails,fullname:e.target.value})}}/>
    </FormGroup>

    <FormGroup>
      <Label for="gender">Gender</Label>
      <Input type="select" name="gender" id="gender" onChange={(e)=>{setUserDetails({...userDetails,gender:e.target.value})}}>
        <option>Select</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </Input>
    </FormGroup>

    <FormGroup>
      <Label for="dateofbirth">Date of Birth</Label>
      <Input type="text" name="dateofbirth" id="dateofbirth" placeholder={userDetails.dateOfBirth} onChange={(e)=>{setUserDetails({...userDetails,dateOfBirth:e.target.value})}} />
    </FormGroup>

    <FormGroup>
      <Label for="phone">Phone</Label>
      <Input type="text" name="phone" id="phone" placeholder={userDetails.phone} onChange={(e)=>{setUserDetails({...userDetails,phone:e.target.value})}} />
    </FormGroup>

    <FormGroup>
      <Label for="qualification">Qualification</Label>
      <Input type="text" name="qualification" id="qualification" placeholder={userDetails.qualification} onChange={(e)=>{setUserDetails({...userDetails,qualification:e.target.value})}} />
    </FormGroup>
    {
      userType==="student"?
      <FormGroup>
      <Label for="careergoal">Career Goal</Label>
      <Input type="text" name="careergoal" id="careergoal" placeholder={userDetails.careergoal} onChange={(e)=>{setUserDetails({...userDetails,careergoal:e.target.value})}} />
      </FormGroup> :""
    }
    

    <FormGroup>
      <Label for="interestedin">Interested in</Label>
      <Input type="text" name="interestedin" id="interestedin" placeholder={userDetails.interestedIn} onChange={(e)=>{setUserDetails({...userDetails,interestedIn:e.target.value})}} />
    </FormGroup>

    <FormGroup>
      <Label for="stream">Stream</Label>
      <Input type="text" name="stream" id="stream" placeholder={userDetails.stream} onChange={(e)=>{setUserDetails({...userDetails,stream:e.target.value})}}/>
    </FormGroup>
{ userType==="counsellor"?
  <FormGroup>
      <Label for="experience">Experience</Label>
      <Input type="text" name="experience" id="experience" placeholder={userDetails.experience} onChange={(e)=>{setUserDetails({...userDetails,experience:e.target.value})}} />
    </FormGroup> :""
}
    
    
    <div className="alignCenter"><Button onClick={handleSubmit}>Submit</Button></div>
</Form>

      </div>
  );
}

export default EditProfile;