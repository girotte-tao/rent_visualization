import React from "react";
import ReactEcharts from 'echarts-for-react'
import packageSize from '../../static/package-size.json'
import house_source_nums from '../../static/rent_data_treemap_timeful.json'
const TreeMap = ({data}) => {

    const children = data.children

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
          data: children,
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
 
    return (
        <div>
            <ReactEcharts
                option={treemapOption}
                style={{
                  height:'55vh',
                  width:'100%'
                }}
            />
        </div>
    )
}

export default TreeMap