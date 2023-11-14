import React from "react";
import ReactEcharts from 'echarts-for-react'
import packageSize from '../../static/package-size.json'
import house_source_nums from '../../static/rent_data_treemap.json'
const TreeMap = () => {

  console.log(house_source_nums)
    // const treemapOption = {
    //     series: [
    //       {
    //         type: 'treemap',
    //         id: 'rent_data_treemap',
    //         animationDurationUpdate: 2000,
    //         roam: false,
    //         nodeClick: undefined,
    //          data: house_source_nums.children,
    //         //data: packageSize.children,
    //         universalTransition: true,
    //         label: {
    //           show: true
    //         },
    //         breadcrumb: {
    //           show: false
    //         }
    //       }
    //     ]
    // };
    const treemapOption = {
      tooltip: {
          trigger: 'item',
          formatter: '{b}: {c}'
      },
      series: [
        {
          type: 'treemap',
          id: 'rent_data_treemap',
          animationDurationUpdate: 2000,
          roam: false,
          nodeClick: 'zoomToNode',
          data: house_source_nums.children,
          universalTransition: true,
          label: {
            show: true
          },
          breadcrumb: {
            show: false
          }
        }
      ]
  };

    const sunburstOption = {
        series: [
            {
                type: 'sunburst',
                id: 'echarts-package-size',
                radius: ['20%', '90%'],
                animationDurationUpdate: 2000,
                nodeClick: undefined,
                data: packageSize.children,
                universalTransition: true,
                itemStyle: {
                    borderWidth: 1,
                    borderColor: 'rgba(255,255,255,.5)'
                },
                label: {
                    show: false
                }
            }
        ]
    };
 
    const [currentOption, setCurrentOption] = React.useState(treemapOption);
    const [type, setType] = React.useState('treemap');
    // setInterval(function () {
    //     if (type == 'treemap'){
    //         setType('sunburst')
    //         setCurrentOption(sunburstOption)
    //     }else {
    //         setType('treemap')
    //         setCurrentOption(treemapOption)
    //     }
    //     // setCurrentOption(treemapOption ? sunburstOption : treemapOption)
    // }, 5000);


    return (
        <div>
            <ReactEcharts
                option={currentOption}
                style={{
                  height:'25vh',
                  width:'100%'
                }}
            />
        </div>
    )
}

export default TreeMap