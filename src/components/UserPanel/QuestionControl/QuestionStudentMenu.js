import { Link } from 'react-router-dom';
import { ListGroup } from 'reactstrap';

const QuestionStudentMenu=()=>{


    return(
        <div>
            <ListGroup horizontal>
                <Link className="list-group-item list-group-item-action" tag="a" to="/general" action>General</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/aptitude" action>Aptitude</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/psycological" action>Psycological</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/numericalability" action>Numerical Ability</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/sports" action>Sports</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/computerscience" action>Computer Science</Link>
            </ListGroup>
        </div>
    );
}

export default QuestionStudentMenu;