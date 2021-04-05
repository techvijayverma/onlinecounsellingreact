
import React, { useEffect, useState } from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2';


const Chart=(props)=>{

var [chartData,setChartData]=useState({
       
            labels:[],
            datasets:[{
                    label:'',
                    data:[],
                    backgroundColor:[]
            }]
       
    })



useEffect(()=>{
    console.log(props.name[1]);
    setChartData(chartData={
    labels:props.name.map((item)=>item.questType),
            datasets:[{
                    label:props.name[0].username,
                    data:props.name.map((item)=>item.score),
                    backgroundColor:[
                        'rgba(255,99,132,0.6)',
                        'rgba(255,162,235,0.6)',
                        'rgba(75,192,192,0.6)',
                        'rgba(255,159,132,0.6)'

                    ]
            }]
})

},[]);
    return(
        
        <div className="chart">
        <Line
            data={chartData}
            options={{ maintainAspectRatio: false }}
        />
         
        
        </div>

    );
}

export default Chart;