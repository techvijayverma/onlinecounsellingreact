import React from 'react';
import {Container,Row,Col,Navbar} from 'reactstrap'


const Footer=()=>{
    return(
        <div >
        
        <div>

        <Navbar color="success" light expand="md">
        <Container fluid>
                <Row>
                    <Col md={6}>
                    Head Office<br/>
                    CDAC 
                    New Delhi
                    </Col>
                    <Col md={3}>

                    </Col>
                    <Col md={3}>

                    </Col>

                </Row>
            </Container>



                    

                    </Navbar> 
        
        </div>
        <div className="alignCenter">
             <Container>&copy; {new Date().getFullYear()} Copyright: <a href="https://www.accs.com"> accs.com </a></Container>
        </div>
            
           
        </div>

    );
}

export default Footer;