import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserStateContext } from '../../UserContext';




const UserHeader=()=>{
    const { username,setUsername } = useContext(UserStateContext);

    return(<div className="user-header">
            Welcome {username}!
            <Link className="list-group-item list-group-item-action" tag="a" to="/logout" action>Logout</Link>



    </div>);

}

export default UserHeader;