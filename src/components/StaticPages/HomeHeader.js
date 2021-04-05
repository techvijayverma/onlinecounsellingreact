import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import {Jumbotron,Container,Button} from 'reactstrap'
const HomeHeader=()=>{

const [redirect,setRedirect]=useState(false);
if(redirect){
   return <Redirect to="/register"/> 
}
    return(

        <div>
            <Jumbotron className="text-center">
                <h1 className="display-10">Welcome to Automated Career Counselling System (ACCS)</h1>  
                 <p>You are at the right place if you want to pursue right guidance. ACCS take care of your interest and guide you accordingly</p>
                    <Container>
                            <Button color="primary" onClick={()=>setRedirect(true)}>Start Using</Button>
                    </Container>
            </Jumbotron>
        </div>
    );
}

export default HomeHeader;