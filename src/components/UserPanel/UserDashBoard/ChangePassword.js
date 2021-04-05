import React, { useContext, useState } from 'react'
import {Button,Form,FormGroup,Label,Input} from 'reactstrap'
import axios from 'axios'
import base_url from '../../../Api/BootApi'

import {toast, ToastContainer } from 'react-toastify'
import { UserStateContext } from '../../../UserContext'

const ChangePassword=()=>{
    const[user,setUser]=useState({
        username:localStorage.getItem("user"),
        password:"",
        cpassword:""


    });
    
    const { username,setUsername,isLoading,setIsLoading } = useContext(UserStateContext);
    // if(username!==null)
    // {
    //     setLoading(false);
    // }
   
    const   handleClick=(e)=>{
        if(user.password==="")
        {
            toast.dark("please enter new password");
        }
       else if(user.password!==user.cpassword)
       {
            toast.dark("Your password doesn't match");
       }
        
        else
        {
            console.log("Change password button pressed");
            console.log(user);
            postDataToServer(user);
            toast.success("Password Changed Successfully")
            e.preventDefault();

        }
        

    }

    const postDataToServer=(user)=>{
        axios.post(`${base_url}/user/changepassword`,user)
        .then((response)=>{console.log("Password changed");
                console.log(response.data);
               // <Redirect to="/questionapp" /> 
               },
                (error)=>{console.log("Something went wrong"+error)}
                );
    
    }

    if(isLoading){
        return <div>Please Login...</div>
    }
    

    return(
        <div>
            <ToastContainer position="top-center"/>
            <Form className="change-password">
                <FormGroup>
                    <Label><h5>Hello {localStorage.getItem("user")}!</h5> Please Enter your new password</Label>
                    
                </FormGroup>
                <FormGroup>
                    <Label>New Password</Label>
                    <Input type="password" placeholder="Enter your new password here" id="password" name="password" onChange={(e)=>{setUser({...user,password:e.target.value})}} required />
                </FormGroup>
                <FormGroup>
                    <Label>Confirm Password</Label>
                    <Input type="password" placeholder="Enter your password here" id="cpassword" name="cpassword" onChange={(e)=>{setUser({...user,cpassword:e.target.value})}} required />
                </FormGroup>
                     <Button className="btn btn-block" color="primary" onClick={handleClick}>Change Password</Button>
                    
                               
            </Form>
        </div>
    );
}
export default ChangePassword;