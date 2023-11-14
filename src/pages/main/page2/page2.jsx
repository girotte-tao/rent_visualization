import React from "react";
import BarChart from "../../../components/graphs/barChart"
import BarChart23 from "../../../components/graphs/graph23"
import ScatterChart from "../../../components/graphs/scatterChart"
import HeatMap from "../../../components/graphs/heatMap";
import Table from "../../../components/graphs/table"
import CorelationChart from "../../../components/graphs/CorelationChart2"
import { Col, Row, Slider } from 'antd';

const Page2 = () => {
    
    return (
        <>
            <Row gutter={[10, 10]}>

                <Col span={16}>
                    <Row gutter={[16, 16]} style={{height: '60vh'}}>
                        <Col span={24}>
                            <HeatMap></HeatMap>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]} style={{height: '30vh'}}>
                        <Col span={24}>
                            <BarChart23> </BarChart23>
                        </Col>
                    </Row>
                </Col>

                <Col span={8}>
                    <Row gutter={[16, 16]} style={{height: '30vh'}}>
                        <Col span={24}>
                            <Table> </Table>
                        </Col>
                    </Row>
                   
                    <Row gutter={[25, 25]} style={{height: '55vh'}}>
                        <Col span={24}>
                            <CorelationChart> </CorelationChart>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Page2