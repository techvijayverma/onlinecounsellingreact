import React, { useContext, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { UserStateContext } from '../../../UserContext';
import Home from '../../StaticPages/Home';


const Logout=()=>{

    const { username,setUsername } = useContext(UserStateContext);
    useEffect(()=>
    {
        
        localStorage.clear();
        
        if(username)
        {
            toast.success("Logged out successfully",{position:"top-center"});
            setUsername("");
        }
        
        
    });

    
    return(
        <div>
            <ToastContainer/>
            <Home/>
            <div className="alignCenter">
                    You are successfully logged out
            </div>
            
        </div>
    );
}

export default Logout;