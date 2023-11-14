import React, { useState } from "react";

import { Col, Row, Slider, Image } from 'antd';
import BarChart from "../../../components/graphs/barChart"
import LineChart from "../../../components/graphs/lineChart"
import TreeMap from "../../../components/graphs/treeMap"
import qrcode from "../../../static/qrcode.jpg"
import LineChart31 from "../../../components/graphs/graph31"

import house_source_nums from '../../../static/rent_data_treemap_timeful.json'

const Page3 = () => {

    // console.log(house_source_nums)

    const [t, setT] = useState({y: 2019, m: 5})

    const [data, setData] = useState(house_source_nums[t.y][t.m])

    const onChange = (year, month) => {
        console.log(year, month)
        setT({
            y: year, m: month
        })
        setData(house_source_nums[year][month])
    }


    return (
        <>
            <Row gutter={[16, 16]} style={{height: '45vh'}}>
                <Col span={18}>
                    <LineChart31 onChange={onChange}> </LineChart31>
                </Col>
                <Col span={6}>
                    <BarChart> </BarChart>
                </Col>
            </Row>
            <Row gutter={[16, 16]} style={{height: '50vh', marginTop:'3vh'}}>
                <Col span={17}>
                    <Row gutter={[5, 5]} style={{height: '55vh'}}>
                        <Col span={24}>
                            {/* <TreeMap initialMonth={t.m} initialYear={t.y}> </TreeMap> */}
                            <TreeMap data={data}> </TreeMap>

                        </Col>
                        {/* <Col span={12}>
                            <TreeMap> </TreeMap>
                        </Col> */}
                    </Row>
                    {/* <Row gutter={[5, 5]} style={{height: '25vh'}}>
                        <Col span={24}>
                            <BarChart> </BarChart>
                        </Col>
                    </Row> */}
                </Col>

                <Col span={6}>
                    <div style={{marginTop:'5vh', marginRight:'3vh'}}>
                        <Image src={qrcode}></Image>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Page3