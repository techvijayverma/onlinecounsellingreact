import React, { useEffect } from 'react';

const Logout=()=>{
    useEffect(()=>localStorage.clear());
    return(
        <div>
            <h3>You are successfully logged out</h3>
        </div>
    );
}

export default Logout;