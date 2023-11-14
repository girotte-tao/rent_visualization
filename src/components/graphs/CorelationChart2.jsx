import React,{useRef, useEffect} from "react";
import ReactEcharts from 'echarts-for-react';
import HouseData from '../../static/CompletedData.json'


const CorelationChart = () => { 
    const chartRef = useRef(null);
    //var sizeValue = '57%';
    var symbolSize = 2.5;


    const option = {
        grid3D: {
            viewControl: {
                // 初始化视角控制参数
                autoRotate: true,
                autoRotateSpeed: 10 // 每秒旋转10度
              }
        },
        xAxis3D: {name: 'Area' // 添加 X 轴名称
        },
        yAxis3D: {name: 'First Area',
            type: 'category'},
        zAxis3D: {name: 'Floor'},
        dataset: {
          dimensions: ["Price","Area","Floor","Elevators","First area","Nearest subway distance","Orientation"],
          source: HouseData
        },
        visualMap: {
            min: 0, // 数据的最小值，根据您的数据进行调整
            max: 10000, // 数据的最大值，根据您的数据进行调整
            dimension: 'Price', // 指定 'Price' 列用于颜色映射
            inRange: {
              color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
              // 颜色范围，可以根据需要进行调整
            }
        },
        series: [
          {
            type: 'scatter3D',
            symbolSize: symbolSize,
            encode: {
              x: 'Area',
              y: 'First area',
              z: 'Floor',
              tooltip: [0, 1, 2, 3, 4]
            }
          }
        ]
      };
    
    useEffect(() => {
      // 设置定时器，每秒更新图表
      const interval = setInterval(() => {
        if (chartRef.current) {
          const chart = chartRef.current.getEchartsInstance();
          chart.dispatchAction({
            type: 'rotate',
            delta: 10 // 每次旋转10度
          });
        }
      }, 1000); // 1000毫秒 = 1秒

      // 清理定时器
      return () => clearInterval(interval);
    }, []);

return <ReactEcharts ref={chartRef} style={{height: '100%'}} option={option} />; };

export default CorelationChart;

