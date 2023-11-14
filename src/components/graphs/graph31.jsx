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
          data: ['2018', '2019']
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
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '2019',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
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