import ReactEcharts from 'echarts-for-react';
import React from "react";

const monthAbbreviations = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  const monthAbbreviationsToNumber = {
    "Jan": 1,
    "Feb": 2,
    "Mar": 3,
    "Apr": 4,
    "May": 5,
    "Jun": 6,
    "Jul": 7,
    "Aug": 8,
    "Sep": 9,
    "Oct": 10,
    "Nov": 11,
    "Dec": 12
  };

const LineChart = (params) => { 
    const option = {
        title: {
          text: 'Stacked Line'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['2018', '2019', '2020', '2021', '2022']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: monthAbbreviations
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '2018',
            type: 'line',
            stack: 'Total',
            data: [7507, 3484, 6460, 6792, 7803, 7028, 7954, 8054, 5588, 4625, 4962, 4467]
          },
          {
            name: '2019',
            type: 'line',
            stack: 'Total',
            data: [4587, 2221, 5105, 8448, 8187, 6510, 7526, 7426, 7939, 7905, 8787, 10858]
          },
          {
            name: '2020',
            type: 'line',
            stack: 'Total',
            data: [8090, 1778, 8581, 8484, 9208, 11415, 14309, 12122, 9635, 5579, 6517, 7656]
          },
          {
            name: '2021',
            type: 'line',
            stack: 'Total',
            data: [7786, 4556, 7416, 5512, 3692, 3110, 3154, 2422, 2082, 1975, 2704, 1984]
          },
          {
            name: '2022',
            type: 'line',
            stack: 'Total',
            data: [1204, 495, 586, 1075, 2337, 2274, 1570, 2035, 1755, 1754, 2201, 2101]
          },
        ]
      };

    const onClick = (e) => {
      console.log(e)
    }

    return <ReactEcharts style={{height: '100%'}} option={option} 
              onEvents={{
                  click: (event)=>{
                    params.onChange(event.seriesName, monthAbbreviationsToNumber[event.name])
                  }
              }}  
            />; 
};

export default LineChart;