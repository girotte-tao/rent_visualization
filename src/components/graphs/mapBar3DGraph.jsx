import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";
import 'echarts-gl';
import 'echarts/map/js/world'
// import world from "echarts/map/json/world.json"
import geoJsonSz from '../../static/geo/shenzhen.json'

import * as echarts from "echarts";


import population from '../../static/population.json'
echarts.registerMap('shenzhen', geoJsonSz, {});

const MapBar3DGraph = () => {
    const filteredData = population
      .filter(dataItem => dataItem[2] > 0)
      .map(dataItem => [dataItem[0], dataItem[1], Math.sqrt(dataItem[2])]);

    // console.log(filteredData)

    const options = {
      backgroundColor: '#cdcfd5',
      geo3D: {
        // map: 'shenzhen',
        map: 'world',
        shading: 'lambert',
        light: {
          main: {
            intensity: 5,
            shadow: true,
            shadowQuality: 'high',
            alpha: 30
          },
          ambient: {
            intensity: 0
          },
          ambientCubemap: {
            texture: 'data-gl/asset/canyon.hdr',
            exposure: 1,
            diffuseIntensity: 0.5
          }
        },
        viewControl: {
          distance: 20,
          panMouseButton: 'left',
          rotateMouseButton: 'right'
        },
        groundPlane: {
          show: true,
          color: '#999'
        },
        postEffect: {
          enable: true,
          bloom: {
            enable: false
          },
          SSAO: {
            radius: 1,
            intensity: 1,
            enable: true
          },
          depthOfField: {
            enable: false,
            focalRange: 10,
            blurRadius: 10,
            fstop: 1
          }
        },
        temporalSuperSampling: {
          enable: true
        },
        itemStyle: {},
        regionHeight: 2
      },
      visualMap: {
        max: 50,
        calculable: true,
        realtime: false,
        inRange: {
          color: [
            '#313695',
            '#4575b4',
            '#74add1',
            '#abd9e9',
            '#e0f3f8',
            '#ffffbf',
            '#fee090',
            '#fdae61',
            '#f46d43',
            '#d73027',
            '#a50026'
          ]
        },
        outOfRange: {
          colorAlpha: 0
        }
      },
      series: [
        {
          type: 'bar3D',
          coordinateSystem: 'geo3D',
          shading: 'lambert',
          data: filteredData,
          barSize: 0.1,
          minHeight: 0.2,
          silent: true,
          itemStyle: {
            color: 'orange'
            // opacity: 0.8
          }
        }
      ]
    };


  return <ReactEcharts option={options} style={{ height: '100%' }} />;
};

export default MapBar3DGraph;