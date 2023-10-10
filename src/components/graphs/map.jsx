import React, {Component, useEffect, useState} from "react";
import ReactEcharts from 'echarts-for-react'
import hangzhouTrack from '../../static/hangzhou-track.json'

import 'echarts/extension/bmap/bmap'; 

const Map = () => {

    var points = [].concat.apply(
      [],
      hangzhouTrack.map(function (track) {
        return track.map(function (seg) {
          return seg.coord.concat([1]);
        });
      })
    );

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
          // center: [114.064552, 22.548457],
          center: [120.13066322374, 30.240018034923],
          zoom: 12,
          roam: true
        },
        visualMap: {
          show: false,
          top: 'top',
          min: 0,
          max: 5,
          seriesIndex: 0,
          calculable: true,
          inRange: {
            color: ['blue', 'blue', 'green', 'yellow', 'red']
          }
        },
        series: [
          {
            name: 'main_city',
            type: 'heatmap',
            coordinateSystem: 'bmap',
            data: points,
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
            },
            pointSize: 5,
            blurSize: 6
          }
        ]
      }


    return (
        <div>
            <ReactEcharts
                option={option}
                style={{
                  height:'53vh',
                  marginTop: '5vh',
                  marginLeft: '5vh',
                }}
            />
        </div>
    )
}

export default Map