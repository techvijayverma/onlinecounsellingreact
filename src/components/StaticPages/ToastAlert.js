import React from 'react';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastAlert=()=>{

    const handleClick=()=>{
        toast.success("Welcome");
        
    }

    return(
        <div>
                
                This is to check toastify
                <button onClick={handleClick}>Submit</button>
                <ToastContainer/>
                
        </div>
    );
}

export default ToastAlert;