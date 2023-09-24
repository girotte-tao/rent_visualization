import React, {Component, useEffect, useState} from "react";
import ReactEcharts from 'echarts-for-react'

import 'echarts/extension/bmap/bmap'; 

const Map = () => {

    const option = {
        title: {
          text: '',
          left: 'center',
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: function (res) {
            return res.name + ':' + res.value[2]
          }
        },
        bmap: {
          center: [114.064552, 22.548457],
          zoom: 12,
          roam: true
        },

        series: [
          {
            name: 'main_city',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            data: [
              { name: '深圳', value: [114.064552, 22.548457, 10] },
            ],
            symbolSize: function (val) {
              return val[2]
            },
            rippleEffect: {
              brushType: 'stroke'
            },
            itemStyle: {
              normal: {
                color: '#ff0000',
                shadowBlur: 10,
                shadowColor: '#333'
              }
            }
          }
        ]
      }


    return (
        <div>
            <ReactEcharts
                option={option}
                style={{height:'1000px'}}
            />
        </div>
    )
}

export default Map