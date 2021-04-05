import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'reactstrap';

const MenuQuestion=()=>{
    return(
        <div>
            <ListGroup horizontal>
                <Link className="list-group-item list-group-item-action" tag="a" to="/questionnaire" action>Questionnaire</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/addquestion" action>Add Question</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/liststudents" action>Students List</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/listcounsellors" action>Counsellors List</Link>
            </ListGroup>
        </div>
    );
}

export default MenuQuestion;