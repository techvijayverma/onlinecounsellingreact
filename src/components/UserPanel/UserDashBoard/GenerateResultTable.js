import React from 'react';
import { Table } from 'reactstrap';

const GenerateResultTable=(props)=>{

    return(
        <div 
        style={{ 

            display:'flex',
            justifyContent: 'center'
        }}
        
        
        >
                    <Table bordered>
                        <thead>
                                <tr>
                                    <th>PAPER</th>
                                    <th>SCORE</th>
                                </tr>
                        </thead>
                        <tbody>
                                 {
                                    props.name.map((item)=>(
                                    <tr>
                                        <td>{item.questType}</td>
                                        <td>{item.score}</td>
                                        {console.log(item.score)}
                                    </tr>
                                 ))
                                 } 
                               
                        </tbody>
                    </Table>
        </div>
    );
}

export default GenerateResultTable;