import React, { useState } from 'react'
import {Button,Form,FormGroup,Label,Input} from 'reactstrap'
import axios from 'axios'
import base_url from '../../../Api/BootApi'
import {Link, Redirect} from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'


const Login=()=>{
const [isAuth,setIsAuth]=useState(false);
const   handleForm=(e)=>{
        console.log(user);
        postDataToServer(user);
        e.preventDefault();

    }


const postDataToServer=(data)=>{
    axios.post(`${base_url}/user/authenticate`,data)
    .then((response)=>{console.log("user authenticated");
            console.log(response.data);
            setIsAuth(response.data);
            toast.success("You are logged in successfully");
            //<Redirect to="/questionstudentapp" /> 
           },
            (error)=>{console.log("Something went wrong"+error)}
            );

}
    const[user,setUser]=useState({});
if(isAuth){
            alert("Login successfully");
           localStorage.clear();
            localStorage.setItem("user",user.username);
           
        return <Redirect to="/questionstudentapp" /> 
     }
    return(
        
        <div>
        <ToastContainer/>
            <Form className="login-form" onSubmit={handleForm}>
                <h1 className="text-center"><span className="text-center">SOCS</span>.com</h1>
                <h2 className="text-center">Welcome</h2>
                <FormGroup>
                    <Label>Username</Label>
                    <Input type="text" placeholder="Enter your username here" id="username" name="username" onChange={(e)=>{setUser({...user,username:e.target.value})}} required/>
                    <Label>Password</Label>
                    <Input type="password" placeholder="Enter your password here" id="password" name="password" onChange={(e)=>{setUser({...user,password:e.target.value})}} required/>
                    <Input className="my-4" type="select" onInvalid="alert('You must fill out the form!');" onChange={(e)=>{setUser({...user,usertype:e.target.value})}} required>
                        <option>Select any one...</option>
                        <option value="student">Student</option>
                        <option value="counsellor">Counsellor</option>
                        <option value="admin">Admin</option>
                    </Input>
                </FormGroup>
                     <Button className="btn btn-block" color="success" type ="submit">Login</Button>
                    
                               
            </Form>
          <hr/>
          <h7>Not Registered yet? Click here to <Link to="/usersection/register">Register</Link></h7>      
        </div>
    );
}

export default Login;
