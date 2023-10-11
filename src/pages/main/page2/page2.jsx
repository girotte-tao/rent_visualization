import React from "react";
import BarChart from "../../../components/graphs/barChart"
import ScatterChart from "../../../components/graphs/scatterChart"
import HeatMap from "../../../components/graphs/heatMap";
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
                            <BarChart> </BarChart>
                        </Col>
                    </Row>
                </Col>

                <Col span={8}>
                    <Row gutter={[16, 16]} style={{height: '30vh'}}>
                        <Col span={24}>
                            <ScatterChart> </ScatterChart>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]} style={{height: '30vh'}}>
                        <Col span={24}>
                            <ScatterChart> </ScatterChart>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]} style={{height: '30vh'}}>
                        <Col span={24}>
                            <ScatterChart> </ScatterChart>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Page2