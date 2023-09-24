import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
import geoJsonSz from '../../static/geo/shenzhen.json'

const data = [
    { name: '罗湖区', value: 4822023 },
    { name: '福田区', value: 7314490 },
    { name: '南山区', value: 6553255 },
    { name: '宝安区', value: 2949131 },
    { name: '龙岗区', value: 38041430 },
    { name: '盐田区', value: 5187582 },
    { name: '龙华区', value: 3590347 },
    { name: '坪山区', value: 9170920 },
    { name: '光明区', value: 6323230 },
    { name: '大鹏新区', value: 6323230 },
];

echarts.registerMap('shenzhen', geoJsonSz, {});

const MapBarGraph = () => {

    const mapOption = {
        visualMap: {
          left: 'right',
          min: 5000000,
          max: 38000000,    
          inRange: {      
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
          },
          text: ['High', 'Low'],
          calculable: true
        },
        
        series: [
          {
            id: 'population',
            type: 'map',
            roam: true,
            map: 'shenzhen',
            animationDurationUpdate: 1000,
            universalTransition: true,
            data: data
          }
        ]
      };
      
      const barOption = {
          xAxis: {
            type: 'value'
          },
          yAxis: {
            type: 'category',
            axisLabel: {
              rotate: 30
            },
            data: data.map(function (item) {
              return item.name;
            })
          },
          animationDurationUpdate: 1000,
          series: {
            type: 'bar',
            id: 'population',
            data: data.map(function (item) {
              return item.value;
            }),
            universalTransition: true
          }
        };

    const [option, setOption] = useState(mapOption)
    const [type, setType] = useState('map')


    const swicthType = () => {
        console.log('switch')
        console.log(type)
        console.log(option)
        if (type === 'map'){
            setOption(barOption)
            setType('bar')
            console.log('switch to barOption')
        }else{
            // if (option === barOption){
                setOption(mapOption)
                setType('map')
                console.log('switch to mapOption')

            // }
        }
    }
    
    return (
        <>
            <button onClick={swicthType}>switch</button>
          <ReactEcharts option={option} style={{ width: "80vw", height: "80vh" }} />      
        </>
      );
}







export default MapBarGraph