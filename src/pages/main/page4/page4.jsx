import React, { useEffect, useRef, useState, useContext, useCallback} from "react";

import { Col, Row, Slider, Image } from 'antd';
import TreeMap from "../../../components/graphs/treeMap"
import qrcode from "../../../static/qrcode.jpg"
import CorelationChart from "../../../components/graphs/CorelationChart2"

import HighlightBlocks from "../../../components/HighlightBlocks"

import RelationGraphByArea from "../../../components/graphs/relationGraphByRegion"
import house_source_nums from '../../../static/rent_data_treemap_timeful.json'

import PieChartByArea from "../../../components/graphs/pieChartByArea";
import SelectedTable from "../../../components/graphs/selectedTable"
import {SharedStateContext, SharedStateProvider} from "../../../components/context/pageContext"
import TableAndQR from "../../../components/graphs/tableAndQR"

const Page4 = () => {

    // const defaultProp = {
    //     price: {},
    //     region: "",
    //     subway: "",
    //     area: {},
    //     floor: {},
    //     method: "",
    //     orientation: "",
    //     blockNum: 0
    // }

    const defaultProp = {
        price: {
            min: 0,
            max: 100000000
        },
        region: "luohuqu",
        subway: "1",
        area: {
            min: 0,
            max: 100000000
        },
        floor: {
            min: 0,
            max: 100000000
        },
        method: "Whole lease",
        orientation: "",
    }
    const [props, setProps] = useState(defaultProp)

    const [sharedState, setSharedState] = useState(props);

    const [t, setT] = useState({y: 2019, m: 5})

    const [data, setData] = useState(house_source_nums[t.y][t.m])

    const onDateChange = (year, month) => {
        console.log(year, month)
        setT({
            y: year, m: month
        })
        setData(house_source_nums[year][month])
    }
    // const [sharedValue, setSharedValue] = useState({ blockNum: 1, orientation: 'S' });

    const valueRef = useRef(defaultProp)

    const [blockChoice, setBlockChoice] = useState(null)
    const blockChoices = ['0 - 2000', '2000 - 4000', '4000 - 8000', '8000+']
    const onBlockChange = (num) =>{
        console.log(num)
        setBlockChoice(num)
        onDateChange(t.y, num+1)
        setProps({...props, price:getPriceRange(num)})
    } 

    const [region, setRegion] = useState('shenzhen')
    // const region = 'shenzhen'
    const onRegionChange = useCallback((region) =>{
        setRegion(region)
        setProps({...props, region:region})
        // valueRef.current.region=region
    }, [blockChoice])


    const [area, setArea] = useState('X')
    const onAreaChange = useCallback((area) =>{
        console.log(area)
        setArea(area)
        setProps({...props, area:getArea(area)})
        console.log(props)
        // valueRef.current.area=area
        // setTableProp(getTableProp(valueRef))
        // setArea(area)
    },[blockChoice])

    const [floor, setFloor] = useState('')
    const onFloorChange = useCallback((floor) =>{
        // setFloor(floor)
        setFloor(floor)
        setProps({...props, floor:getFloorRange(floor)})

    },[blockChoice])

    const [method, setMethod] = useState('')
    const onMethodChange = useCallback((method) =>{
        // setMethod(method)
        // valueRef.current.method=method
        setMethod(method)
        setProps({...props, method:method})

    },[blockChoice])

    const [orientation, setOrientation] = useState('')
    const onOrientationChange = useCallback((orientation) =>{
        // setOrientation(orientation)
        // valueRef.current.orientation=orientation
        setOrientation(orientation)
        setProps({...props, orientation:orientation})

    },[blockChoice])

    const [subway, setSubway] = useState('')
    const onSubwayChange = useCallback((subway) =>{
        setSubway(subway)
        setProps({...props, subway:subway})

        // valueRef.current.subway=subway
    }, [blockChoice])

    // useEffect(() =>{setTableProp(getTableProp(valueRef)); console.log('adasd')},[valueRef])

    const getArea = (area) =>{
        let area_range = {min: 0, max:0}
        if (area==='XS'){
            area_range = {min: 0, max:30}
        }else if (area==='S'){
            area_range = {min: 30, max:60}
        }else if (area==='M'){
            area_range = {min: 60, max:90}
        }else if (area==='L'){
            area_range = {min: 90, max:120}
        }else if (area==='Xl'){
            area_range = {min: 120, max:150}
        }else if (area==='XXL'){
            area_range = {min: 150, max:100000000}
        }
        return area_range
    }

    const getPriceRange = (blockNum) =>{
        let price_range = {min: 0, max:0}

        if (blockNum===1){
            price_range = {min: 0, max:2000}
        }else if(blockNum===2){
            price_range = {min: 2000, max:4000}
        }else if(blockNum===3){
            price_range = {min: 4000, max:8000}
        }else if(blockNum===4){
            price_range = {min: 8000, max:100000000}
        }
        return price_range
    }

    const getFloorRange = (floor) =>{
        let floor_range = {min: 0, max:0}
        if (floor==='Low'){
            floor_range = {min: 0, max:10}
        }else if (floor==='Mid'){
            floor_range = {min: 10, max:20}
        }else if (floor==='High'){
            floor_range = {min: 20, max:30}
        }else if (floor==='Extremely High'){
            floor_range = {min: 30, max:100000000}
        }
        return floor_range
    }

    const getTableProp = (value_ref) =>{

        const blockNum = value_ref.current.blockNum
        const region = value_ref.current.region 
        const subway = value_ref.current.subway
        const area = value_ref.current.area
        const floor = value_ref.current.floor
        const method = value_ref.current.method
        const orientation =  value_ref.current.orientation
        

        console.log('valueRef', valueRef)

        let price_range = {min: 0, max:0}

        if (blockNum===1){
            price_range = {min: 0, max:5000}
        }else if(blockNum===2){
            price_range = {min: 5000, max:10000}
        }else if(blockNum===3){
            price_range = {min: 10000, max:15000}
        }else if(blockNum===4){
            price_range = {min: 15000, max:20000}
        }

        let area_range = {min: 0, max:0}
        if (area==='XS'){
            area_range = {min: 0, max:30}
        }else if (area==='S'){
            area_range = {min: 30, max:60}
        }else if (area==='M'){
            area_range = {min: 60, max:90}
        }else if (area==='L'){
            area_range = {min: 90, max:120}
        }else if (area==='Xl'){
            area_range = {min: 120, max:150}
        }else if (area==='XXL'){
            area_range = {min: 150, max:100000000}
        }

        let floor_range = {min: 0, max:0}
        if (floor==='Low'){
            floor_range = {min: 0, max:10}
        }else if (floor==='Mid'){
            floor_range = {min: 150, max:100000000}
        }else if (floor==='High'){
            floor_range = {min: 150, max:100000000}
        }else if (floor==='Extremely High'){
            floor_range = {min: 150, max:100000000}
        }


        let props = {
            price: price_range,
            region: region,
            subway: subway,
            area: area_range,
            floor: floor_range,
            method: method,
            orientation: orientation,
        }

        return props
    }

    return (
        <>
<SharedStateContext.Provider value={{ sharedState, setSharedState }}>
            <Row gutter={[16, 16]} style={{height: '100vh'}}>

                <Col span={2}>
                    <HighlightBlocks onChange={onBlockChange} data={blockChoices} selectedBlock={blockChoice} ></HighlightBlocks>
                </Col>

                <Col span={22}>
                    <Row gutter={[16, 16]} style={{height: '30vh', marginTop:'1vh'}}>

                        <Col span={18}>
                            <TreeMap data={data} onChange={onRegionChange}> </TreeMap>
                        </Col>

                        <Col span={6}>

                            <CorelationChart> </CorelationChart>
                        </Col>

                    </Row>

                    <Row gutter={[16, 16]} style={{height: '65vh', marginTop:'1vh'}}>

                        <Col span={18}>

                            <Row style={{height: '65vh', marginTop:'1vh'}}>
                                <Col span={10}>
                                    
                                    <RelationGraphByArea region={region} onChange={onSubwayChange}></RelationGraphByArea>
                                    {/* <RelationGraph region={region} style={{marginLeft:'10vw'}}></RelationGraph> */}
                                    </Col>

                                <Col span={14}>
                                    <Row style={{height: '34vh', marginTop:'1vh'}}>
                                        <Col span={12}><PieChartByArea type='area' area={region} 
                                        onChange={onAreaChange} 
                                        ></PieChartByArea></Col>
                                        <Col span={12}><PieChartByArea type='floor' area={region} onChange={onFloorChange}></PieChartByArea></Col>
                                    </Row>
                                    <Row style={{height: '34vh', marginTop:'1vh'}}>
                                        <Col span={12}><PieChartByArea type='method' area={region} onChange={onMethodChange}></PieChartByArea></Col>
                                        <Col span={12}>
                                            <PieChartByArea type='orientation' area={region} onChange={onOrientationChange}></PieChartByArea>
                                        </Col>
                                    </Row>
                                    
                                </Col>
                            </Row>

                        </Col>

                        <Col span={6}>
                            {/* <Row style={{height: '34vh', marginTop:'1vh'}}>
                                <SelectedTable  
                                // ref={valueRef}
                                props={props}
                                ></SelectedTable>
                            </Row>

                            <Row style={{height: '34vh', marginTop:'1vh'}}>
                                <div>
                                    <Image src={qrcode} style={{height:'30vh', marginLeft:'2vh'}}></Image>
                                </div>
                            </Row> */}
                            <TableAndQR props={props}></TableAndQR>
                        </Col>

                    </Row>
                    
                </Col>
            </Row>
            </SharedStateContext.Provider>

        </>
    )
}

export default Page4