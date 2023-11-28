import ReactEcharts from 'echarts-for-react';
import React, { useState , useEffect} from "react";

const PieChart = ({data, onChange}) => { 
  
  console.log(data)


    const [pieData, setPieData] = useState(data)

    const changePieData = (name)=>{

      const newData =data.map((value) => {

        if (value.name === name){
          return {
            ...value,
            selected: true
            }
        }
        else {
          return value
        }
      }
        
    )
    setPieData(newData)

    }


    const option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '',
          left: 'left'
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: pieData
          }
        ]
      };

return <ReactEcharts style={{height: '100%'}} option={option} onEvents={{
    click: (event)=>{
      onChange(event.data.name)
      changePieData(event.data.name)
    }
}}  />; }

export default React.memo(PieChart);