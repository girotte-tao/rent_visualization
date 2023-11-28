import React, { useEffect, useState, useContext } from 'react';
//antd table
import { Table, Image ,Row} from 'antd';
import dataset from '../../static/table.json';

import SelectedTable from './selectedTable'
import qrcode from "../../static/qrcode.jpg"


const TableAndQR = ({props}) => {

    const [showQr, setShowQR] = useState(false)

    return (
            <>
            
            <Row style={{height: '34vh', marginTop:'1vh'}} onClick={() =>{console.log('show');
                                setShowQR(true)}}>
                                <SelectedTable  
                                // ref={valueRef}
                                props={props}
                                
                                ></SelectedTable>
                            </Row>

                            <Row style={{height: '34vh', marginTop:'1vh'}}>
                                <div>
                                    {showQr && <Image src={qrcode} style={{height:'30vh', marginLeft:'2vh'}}></Image>}
                                </div>
                            </Row>
            </>
    );
}

export default TableAndQR;