import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'reactstrap';

const MenuCounsellor=()=>{
    return(
        <div>
            <ListGroup horizontal>
                <Link className="list-group-item list-group-item-action" tag="a" to="/listallstudents" action>List All Students</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/fetchreport" action>Fetch Report</Link>
            </ListGroup>
        </div>
    );

}

export default MenuCounsellor;