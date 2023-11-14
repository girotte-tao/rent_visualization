import React, {Component, useState} from "react";
import GraphContainer from "../../components/graphContainer/graphContainer";
import Page1 from "./page1/page1";
import Page2 from "./page2/page2";
import Page3 from "./page3/page3";
import { Affix, Button, Space } from 'antd';

const MainPage = () => {
    // this page is to show all the graphs
    // you may comment them out, and only display the one you want  to see

    const [page, setPage] = useState(1)
    const totalPages = 3

    const handlePageChange = (e) => {
        console.log(e)
        const page = e.target.innerText
        setPage(Number(page))
    }

    return (
        <>
            <Affix offsetTop={10} style={{marginLeft:'90%', position:'absolute'}}>
            
                <Space>
                    <Button type="primary" id='1' onClick={handlePageChange}>1</Button>

                    <Button type="primary" id='2' onClick={handlePageChange}>2</Button>

                    <Button type="primary" id='3' onClick={handlePageChange}>3</Button>
                </Space>
              
            </Affix>
            <div>
                <GraphContainer>
                    {/* <Map></Map> */}
                    {page===1 && <Page1></Page1>}
                    {page===2 && <Page2></Page2>}
                    {page===3 && <Page3></Page3>}
                </GraphContainer>
            </div>
        </>
    )
}

export default MainPage