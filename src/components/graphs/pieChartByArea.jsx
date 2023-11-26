import ReactEcharts from 'echarts-for-react';
import React ,{useContext, useEffect, useCallback} from "react";
import PieChart from './pieChart';

import areaByRegion from '../../static/page3pie/areaByRegion.json'
import floorByRegion from '../../static/page3pie/floorByRegion.json'
import methodByRegion from '../../static/page3pie/methodByRegion.json'
import orientationByRegion from '../../static/page3pie/orientationByRegion.json'

import {SharedStateContext} from "../context/pageContext"

const PieChartByArea = ({type, area, onChange}) => {
    
    const getDataset = (type) =>{
        if (type ==='area'){
            return areaByRegion
        }else if (type === 'floor'){
            return floorByRegion
        }else if (type === 'method'){
            return methodByRegion
        }else if (type === 'orientation'){
            return orientationByRegion
        }
    }

    const dataset = getDataset(type)

    const data = dataset[area]

    const modifyData = (data) => {
        return Object.keys(data).map(key => ({
            name: key,
            value: data[key]
        }));
    }

    const modifyiedData = modifyData(data)

    const getTitle = (type) =>{
        if (type ==='area'){
            return "Area"
        }else if (type === 'floor'){
            return "Floor"
        }else if (type === 'method'){
            return "Method"
        }else if (type === 'orientation'){
            return "Orientation"
        }
    }

    const title = getTitle(type)



    return (
        <>
            <PieChart data={modifyiedData} title={title} onChange={onChange} ></PieChart>
        </>
    )
}

export default React.memo(PieChartByArea)