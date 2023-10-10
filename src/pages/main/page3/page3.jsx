import React from "react";

import { Col, Row, Slider } from 'antd';
import BarChart from "../../../components/graphs/bar"

const Page3 = () => {
    
    return (
        <>
            <Row gutter={[16, 16]} style={{height: '45vh'}}>
                <Col span={18}>
                    <BarChart> </BarChart>
                </Col>
                <Col span={6}>
                    <BarChart> </BarChart>
                </Col>
            </Row>
            <Row gutter={[16, 16]} style={{height: '55vh'}}>
                <Col span={15}>
                    <Row gutter={[5, 5]} style={{height: '25vh'}}>
                        <Col span={12}>
                            <BarChart> </BarChart>
                        </Col>
                        <Col span={12}>
                            <BarChart> </BarChart>
                        </Col>
                    </Row>
                    <Row gutter={[5, 5]} style={{height: '25vh'}}>
                        <Col span={24}>
                            <BarChart> </BarChart>
                        </Col>
                    </Row>
                </Col>

                <Col span={9}>

                </Col>
            </Row>
        </>
    )
}

export default Page3