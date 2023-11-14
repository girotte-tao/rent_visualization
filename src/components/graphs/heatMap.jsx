import React from "react";
import ReactEcharts from 'echarts-for-react'
import ShenzhenTrack from '../../static/Ave_Price.json'

import h from '../../static/hangzhou-track.json'

import 'echarts/extension/bmap/bmap'; 

console.log((ShenzhenTrack.length))
console.log((h.length))


const HeatMap = () => {


    var points = [].concat.apply(
      [],
      ShenzhenTrack.map(function (track) {
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
          center: [114.064552, 22.548457],
          // center: [120.13066322374, 30.240018034923],
          zoom: 12,
          roam: true,
          mapStyle: {
            // style:'light'
            styleJson: [
              {
                featureType: 'water',
                elementType: 'all',
                stylers: {
                  color: '#d1d1d1'
                }
              },
              {
                featureType: 'land',
                elementType: 'all',
                stylers: {
                  color: '#f3f3f3'
                }
              },
              {
                featureType: 'railway',
                elementType: 'all',
                stylers: {
                  visibility: 'off'
                }
              },
              {
                featureType: 'highway',
                elementType: 'all',
                stylers: {
                  color: '#fdfdfd'
                }
              },
              {
                featureType: 'highway',
                elementType: 'labels',
                stylers: {
                  visibility: 'off'
                }
              },
              {
                featureType: 'arterial',
                elementType: 'geometry',
                stylers: {
                  color: '#fefefe'
                }
              },
              {
                featureType: 'arterial',
                elementType: 'geometry.fill',
                stylers: {
                  color: '#fefefe'
                }
              },
              {
                featureType: 'poi',
                elementType: 'all',
                stylers: {
                  visibility: 'off'
                }
              },
              {
                featureType: 'green',
                elementType: 'all',
                stylers: {
                  visibility: 'off'
                }
              },
              {
                featureType: 'subway',
                elementType: 'all',
                stylers: {
                  visibility: 'off'
                }
              },
              {
                featureType: 'manmade',
                elementType: 'all',
                stylers: {
                  color: '#d1d1d1'
                }
              },
              {
                featureType: 'local',
                elementType: 'all',
                stylers: {
                  color: '#d1d1d1'
                }
              },
              {
                featureType: 'arterial',
                elementType: 'labels',
                stylers: {
                  visibility: 'off'
                }
              },
              {
                featureType: 'boundary',
                elementType: 'all',
                stylers: {
                  color: '#fefefe'
                }
              },
              {
                featureType: 'building',
                elementType: 'all',
                stylers: {
                  color: '#d1d1d1'
                }
              },
              {
                featureType: 'label',
                elementType: 'labels.text.fill',
                stylers: {
                  color: '#999999'
                }
              }
            ]
          }
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
            // color: ['orange']
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

export default HeatMap