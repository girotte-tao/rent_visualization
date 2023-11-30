// import nodes from '../../static/relationship/nodes.json';
// import links from '../../static/relationship/links.json';
import nodes from '../../static/relationship/nodesByArea.json';
import links from '../../static/relationship/linksByArea.json';

import React, { useEffect, useState } from 'react';
import ReactEcharts from 'echarts-for-react';

const RelationGraph = ({nodes_data, links_data, onChange}) => {

    
    const [option, setOption] = useState({});

    useEffect(() => {

        setOption({
            series: [
                {
                    name: 'Les Miserables',
                    type: 'graph',
                    layout: 'force',
                    animation: true,
                    data: nodes_data,
                    links: links_data,
                    // data: nodes,
                    // links: links,
                    roam: true,
                    label: {
                        position: 'right',
                        formatter: '{b}'
                    },
                    scaleLimit: {
                        min: 0.4,
                        max: 2
                    },
                    grid: {
                        left: 1,
                        right: 1,
                        top: 1,
                        bottom: 1
                    },
                    lineStyle: {
                        color: 'source',
                        curveness: 0.3
                    },
                    emphasis: {
                        focus: 'adjacency',
                        lineStyle: {
                            width: 10
                        }
                    },

                    labelLayout: {
                        hideOverlap: true
                    },
                    // force: {
                    //     repulsion: 100,
                    //     // edgeLength: 100
                    // }
                }
            ]
        });
    }, [nodes_data, links_data]);

    return <ReactEcharts option={option} style={{ height: '100%', width: '100%' }} onEvents={{
        click: (event)=>{
    
          onChange(event.name)
        }
    }}/>;
};

export default React.memo(RelationGraph);