import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'reactstrap';

const MenuQuestion=()=>{
    return(
        <div>
            <ListGroup>
                <Link className="list-group-item list-group-item-action" tag="a" to="/questionnaire" action>Questionnaire</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/addquestion" action>Add Question</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/editQuestion" action>Edit Question</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/deleteQuestion" action>Delete Question</Link>
            </ListGroup>
        </div>
    );
}

export default MenuQuestion;