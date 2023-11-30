import ReactEcharts from 'echarts-for-react';
import React from "react";
import PieChart from './pieChart';
import nodes from '../../static/relationship/nodesByArea.json';
import links from '../../static/relationship/linksByArea.json';
import sznodes from '../../static/relationship/nodes.json';
import szlinks from '../../static/relationship/links.json';
import RelationGraph from './relationshipGragh'

const RelationGraphByArea = ({region, onChange}) => {

    const getData = (region) =>{
        if (region === 'shenzhen'){
            return {'nodes':sznodes, 'links':szlinks}
        }else{
            return {'nodes':nodes[region], 'links':links[region]}
        }
    }

    return (
        <>
            <RelationGraph nodes_data={getData(region)['nodes']} links_data={getData(region)['links']} 
                onChange={onChange}
            ></RelationGraph>
        </>
    )
}

export default React.memo(RelationGraphByArea)