import React from "react";

import { Col, Row, Slider } from 'antd';

import TreeMap from "../../../components/graphs/treeMap"

const Page4 = () => {
        
        return (
            <>
                <Row gutter={[16, 16]} style={{height: '100vh'}}>
                    <Col span={24}>
                        <TreeMap> </TreeMap>
                    </Col>
                </Row>
            </>
        )
    }

export default Page4