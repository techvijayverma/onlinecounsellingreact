import React from 'react';
import Chart from '../UserPanel/UserDashBoard/Chart';
import GenerateResultTable from '../UserPanel/UserDashBoard/GenerateResultTable';
import SuggestionMaker from '../UserPanel/UserDashBoard/SuggestionMaker';
const StudentReport=(props)=>{
    return(
        <div>
                   
                     {props.name.length>0 && <GenerateResultTable name={props.name}/>}<br/><br/>
                     
        </div>
    );
}

export default StudentReport;