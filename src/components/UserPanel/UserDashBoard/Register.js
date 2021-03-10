import axios from 'axios';
import React, { Fragment, useState,} from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Container, Form, FormGroup, Input, Label,Button } from 'reactstrap';
import base_url from '../../../Api/BootApi'

const Register=()=>{

    const[isSubmitted,setIsSubmitted]=useState(false);
    const handleForm=(e)=>{
        console.log(user);
        postDataToServer(user);
        toast("Registered successfully");
        alert("Registered successfully");
        e.preventDefault();
    }

    const postDataToServer=(data)=>{
        axios.post(`${base_url}/user/register`,data)
        .then((response)=>{console.log("User added");
        console.log(response.data)
        setIsSubmitted(response.data);
        <Redirect to="/login"/>
        },error=>{
            console.log("Something went wrong"+error);
        }
        )
    }
    const[user,setUser]=useState({});
    if(isSubmitted){
            return <Redirect to="/login" /> 
         }

    return(
        <Fragment>
                <h4 className="text-center my-3">Please fill the information to get started</h4>
                <Form onSubmit={handleForm}>
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
                    <Input type="password" placeholder="Re-enter your password here" name="cpassword" required />
                   
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" placeholder="Enter your email here" name="email" id="email " onChange={(e)=>{setUser({...user,email:e.target.value})}} required/>
                   
                </FormGroup>
                <Container className="text-center">
                    <Button color="primary" type="submit" >Register</Button>
                    <Button color="success ml-3" >Cancel</Button>
                </Container>
                </Form>
                <hr/>
          <h7>Already Registered? Click here to <Link to="/login">Login</Link></h7>
          <ToastContainer/>
        </Fragment>
    );
}

export default Register;