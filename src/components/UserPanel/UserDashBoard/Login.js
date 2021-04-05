import React, { useContext, useState } from 'react';
import {Button,Form,FormGroup,Label,Input} from 'reactstrap';
import axios from 'axios';
import base_url from '../../../Api/BootApi';
import {Link, Redirect} from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserStateContext } from '../../../UserContext';




const Login=()=>{
const [isAuth,setIsAuth]=useState(false);

const[user,setUser]=useState({
    userType:"student"
});

const { userType,setUserType,username,setUsername,isLoading,setIsLoading } = useContext(UserStateContext);

const   handleForm=(e)=>{
        postDataToServer(user);
        console.log(user);
        e.preventDefault();

    }


const postDataToServer=(user)=>{
    axios.post(`${base_url}/user/authenticate`,user)
    .then((response)=>{
            console.log(response.data);
            setUserType(response.data);
            if(response.data==="admin" || response.data==="student" ||response.data==="counsellor" ) 
            {
                setIsAuth(true);
                localStorage.setItem("user",user.username);
                setUsername(user.username);
                setIsLoading(false);
                toast.success("Login Successfully",{position:"top-center"});
               
            }
            else
            {
                toast.warning("Wrong credentials");
                localStorage.clear();
            }
        },
            (error)=>{console.log("Something went wrong"+error)}
            );

}
    
if(isAuth){
    if(userType==="admin") 
    return (<div>
            <Redirect to="/questionApp" />
            <ToastContainer position="top-center"/>
    </div>);
    
    else if(userType==="counsellor")
    return (<div>
        <Redirect to="/counsellordashboard" />
        <ToastContainer position="top-center"/>
    </div>);
else
   return (<div>

        <Redirect to="/questionstudentapp" />
        <ToastContainer position="top-center"/>
   </div>);
   
      
                 
     }
    return(
        
        <div>
        <ToastContainer position="top-center"/> 
            <Form className="login-form" onSubmit={handleForm}>
                <h1 className="text-center"><span className="text-center">ACCS</span>.com</h1>
                <h2 className="text-center">Welcome</h2>
                <FormGroup>
                    <Label>Username</Label>
                    <Input type="text" placeholder="Enter your username here" id="username" name="username" onChange={(e)=>{setUser({...user,username:e.target.value})}} required/>
                    <Label>Password</Label>
                    <Input type="password" placeholder="Enter your password here" id="password" name="password" onChange={(e)=>{setUser({...user,password:e.target.value})}} required/>
                    <Input className="my-4" type="select" onInvalid="alert('You must fill out the form!');" onChange={(e)=>{setUser({...user,userType:e.target.value})}} required>
                        <option value="student">Student</option>
                        <option value="counsellor">Counsellor</option>
                        <option value="admin">Admin</option>
                    </Input>
                </FormGroup>
                     <Button className="btn btn-block" color="success" type ="submit">Login</Button>
                     
                    
                               
            </Form>
          <hr/>
          <div className="alignCenter">
                <h7>Not Registered yet? Click here to <Link to="/usersection/register">Register</Link></h7> 
          </div>
            
        </div>
    );
}

export default Login;
