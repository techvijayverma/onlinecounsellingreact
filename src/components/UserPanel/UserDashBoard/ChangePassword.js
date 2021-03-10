import React, { useState } from 'react'
import {Button,Form,FormGroup,Label,Input} from 'reactstrap'
import axios from 'axios'
import base_url from '../../../Api/BootApi'
import { Redirect} from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

const ChangePassword=()=>{
    const[user,setUser]=useState({});
    
    const   handleForm=(e)=>{
        setUser(...user,{username:localStorage.getItem("user")});
        console.log(user);
        postDataToServer(user);
        e.preventDefault();

    }

    const postDataToServer=(data)=>{
        axios.post(`${base_url}/user/changepassword`,data)
        .then((response)=>{console.log("Password changed");
                console.log(response.data);
                toast.success("Password has been changed");
                <Redirect to="/questionapp" /> 
               },
                (error)=>{console.log("Something went wrong"+error)}
                );
    
    }

 
    

    return(
        <div>
            <ToastContainer/>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label><h5>Hello {localStorage.getItem("user")}!</h5> Please Enter your new password</Label>
                    
                </FormGroup>
                <FormGroup>
                    <Label>New Password</Label>
                    <Input type="password" placeholder="Enter your new password here" id="password" name="password" onChange={(e)=>{setUser({...user,password:e.target.value})}} required/>
                </FormGroup>
                <FormGroup>
                    <Label>Confirm Password</Label>
                    <Input type="password" placeholder="Enter your password here" id="cpassword" name="cpassword" required/>
                </FormGroup>
                     <Button className="btn btn-block" color="success" type ="submit">Change Password</Button>
                    
                               
            </Form>
        </div>
    );
}
export default ChangePassword;