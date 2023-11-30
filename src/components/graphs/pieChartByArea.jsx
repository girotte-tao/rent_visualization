import ReactEcharts from 'echarts-for-react';
import React, { useContext, useEffect, useCallback } from "react";
import PieChart from './pieChart';

import areaByRegion from '../../static/page3pie/areaByRegion.json'
import floorByRegion from '../../static/page3pie/floorByRegion.json'
import methodByRegion from '../../static/page3pie/methodByRegion.json'
import orientationByRegion from '../../static/page3pie/orientationByRegion.json'

import { SharedStateContext } from "../context/pageContext"

const PieChartByArea = ({ type, area, onChange }) => {

    const getDataset = (type) => {
        if (type === 'area') {
            return areaByRegion
        } else if (type === 'floor') {
            return floorByRegion
        } else if (type === 'method') {
            return methodByRegion
        } else if (type === 'orientation') {
            return orientationByRegion
        }
    }



    const dataset = getDataset(type)

    

    const data = dataset[area]
    // const colors = ['#123456', '#789abc', '#def012', '#345678'];
    const colors = ['#191970','#4575b4','#74add1','#e0f3f8','#f46d43', '#a50026'];

    const modifyData = (data) => {
        return Object.keys(data).map((key,index )=> ({
            name: key,
            value: data[key],
            itemStyle: {
                color: colors[index % colors.length], // colors 是颜色字符串数组
            },
        }));
    }

    const modifyiedData = modifyData(data)

    const getTitle = (type) => {
        if (type === 'area') {
            return "Area"
        } else if (type === 'floor') {
            return "Floor"
        } else if (type === 'method') {
            return "Method"
        } else if (type === 'orientation') {
            return "Orientation"
        }
    }

    const title = getTitle(type)



    return (
        <>
            <PieChart data={modifyData(getDataset(type)[area])} title={title} onChange={onChange} ></PieChart>
        </>
    )
}

export default React.memo(PieChartByArea)