import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'reactstrap';

const MenuUser=()=>{
    return(
        <div>
            <ListGroup>
                <Link className="list-group-item list-group-item-action" tag="a" to="/login" action>Login</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="changepassword" action>Change Password</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/editprofile" action>Edit Profile</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/profile" action>View Profile</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/reports" action>Reports</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/faq" action>FAQ</Link>
            </ListGroup>
        </div>
    );
}

export default MenuUser;