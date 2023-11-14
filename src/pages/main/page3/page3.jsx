import React from "react";

import { Col, Row, Slider } from 'antd';
import BarChart from "../../../components/graphs/barChart"
import LineChart from "../../../components/graphs/lineChart"
import TreeMap from "../../../components/graphs/treeMap"

import LineChart31 from "../../../components/graphs/graph31"
const Page3 = () => {
    
    return (
        <>
            <Row gutter={[16, 16]} style={{height: '45vh'}}>
                <Col span={18}>
                    <LineChart31> </LineChart31>
                </Col>
                <Col span={6}>
                    <BarChart> </BarChart>
                </Col>
            </Row>
            <Row gutter={[16, 16]} style={{height: '55vh'}}>
                <Col span={18}>
                    <Row gutter={[5, 5]} style={{height: '55vh'}}>
                        <Col span={24}>
                            <TreeMap> </TreeMap>
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
                </Col>
            </Row>
        </>
    )
}

export default Page3