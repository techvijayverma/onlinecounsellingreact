import axios from 'axios';
import React, { Fragment, useState,} from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Container, Form, FormGroup, Input, Label,Button } from 'reactstrap';
import base_url from '../../../Api/BootApi';
import 'react-toastify/dist/ReactToastify.css';

const Register=()=>{
    const[user,setUser]=useState({
        userType:"student"
    });
    const[isSubmitted,setIsSubmitted]=useState(false);
    const handleSubmit=(e)=>{
        if(user.password!==user.cpassword){
            toast.warning("Confirm password doesn't match");
        }
        else
        {
            console.log(user);
            postDataToServer(user);
            toast.success("Registered successfully");
            alert("Registered successfully");
            localStorage.clear();
            e.preventDefault();
        }
       
    }

    const postDataToServer=(data)=>{
        axios.post(`${base_url}/user/register`,data)
        .then((response)=>{console.log("User added");
        console.log(response.data)
        setIsSubmitted(response.data);
        },error=>{
            console.log("Something went wrong"+error);
        }
        )
    }
    
    if(isSubmitted){
            return (<div><Redirect to="/login" /> 
            <ToastContainer position="top-center"/></div>);
         }

    return(
        <Fragment>
                <h4 className="text-center my-3">Please fill the information to get started</h4>
                <Form className="register">
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input type="text" placeholder="Enter your username here" name="username" id="username" onChange={(e)=>{setUser({...user,username:e.target.value})}} required/>
                  
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" placeholder="Enter your password here" name="password" id="password" onChange={(e)=>{setUser({...user,password:e.target.value})}} required/>
                   
                </FormGroup>
                <FormGroup>
                    <Label for="cpassword">Confirm Password</Label>
                    <Input type="password" placeholder="Re-enter your password here" name="cpassword" onChange={(e)=>{setUser({...user,cpassword:e.target.value})}} required />
                   
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" placeholder="Enter your email here" name="email" id="email " onChange={(e)=>{setUser({...user,email:e.target.value})}} required/>
                           
                </FormGroup>

                <FormGroup>
                    <Input className="my-4" type="select" onInvalid="alert('You must fill out the form!');" onChange={(e)=>{setUser({...user,userType:e.target.value})}} required>
                        <option value="student">Student</option>
                        <option value="counsellor">Counsellor</option>
                       
                    </Input>
                </FormGroup>
                <Container className="text-center">
                    <Button color="primary" onClick={handleSubmit} className="registerButton" >Register</Button>                    
                </Container>
                </Form>
                <hr/>
                <div className="alignCenter">
                     <h7>Already Registered? Click here to <Link to="/login">Login</Link></h7>
                </div>
          
          <ToastContainer position="top-center"/>
        </Fragment>
    );
}

export default Register;