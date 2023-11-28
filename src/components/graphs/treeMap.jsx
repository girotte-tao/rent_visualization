import React from "react";
import ReactEcharts from 'echarts-for-react'
import packageSize from '../../static/package-size.json'
import house_source_nums from '../../static/rent_data_treemap_timeful.json'

import convertRegion from '../../util/convert'

const TreeMap = ({data, onChange}) => {

    

    const children = data.children

      const treemapOption = {
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {c}',
            backgroundColor: "#000"
        },
        legend: {
          show: true,
        },
        series: [
          {
            type: 'treemap',
            id: 'rent_data_treemap',
            animationDurationUpdate: 2000,
            roam: true,
            nodeClick: 'zoomToNode',
            zoomToNodeRatio: 0.8, // Add zoomToNodeRatio property to enable zooming
            data: children,
            universalTransition: true,
            label: {
              show: true
            },
            upperLabel:{
              show: true
            },
            breadcrumb: {
              show: false
            },
            levels: [ // Add levels property to configure zoom levels
              {
                itemStyle: {
                  borderWidth: 0,
                  gapWidth: 5
                },
                upperLabel: {
                  show: false
                }
              },
              {
                itemStyle: {
                  borderWidth: 5,
                  gapWidth: 1
                },
                emphasis: {
                  itemStyle: {
                    borderColor: '#fff'
                  }
                }
              },
              {
                colorSaturation: [0.35, 0.5],
                itemStyle: {
                  borderWidth: 5,
                  gapWidth: 1,
                  borderColorSaturation: 0.6
                }
              }
            ]
          }
        ],
        
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
                  height:'30vh',
                  width:'vw',
                  // margin: '3vh'
                }}
                onEvents={{
                  click: (event)=>{
                      onChange(convertRegion(event.treePathInfo[1].name))

                  }
              }}
            />
        </div>
    )
}

export default React.memo(TreeMap)