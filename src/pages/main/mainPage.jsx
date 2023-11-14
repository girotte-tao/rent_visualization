import React, {Component, useState} from "react";
import GraphContainer from "../../components/graphContainer/graphContainer";
import Page1 from "./page1/page1";
import Page2 from "./page2/page2";
import Page3 from "./page3/page3";
import Page4 from "./page4/page4";
import { Affix, Button } from 'antd';

const MainPage = () => {
    // this page is to show all the graphs
    // you may comment them out, and only display the one you want  to see

    const [page, setPage] = useState(4)
    const totalPages = 4

    const handlePageChange = () => {
        if (page === totalPages) {
            setPage(1)
        } else {
            setPage(page+1)
        }
    }

    return (
        <>
            <Affix offsetTop={10} style={{marginLeft:'90%', position:'absolute'}}>
                <Button type="primary" onClick={handlePageChange}>
                    Next Page
                </Button>
            </Affix>
            <div>
                <GraphContainer>
                    {/* <Map></Map> */}
                    {page===1 && <Page1></Page1>}
                    {page===2 && <Page2></Page2>}
                    {page===3 && <Page3></Page3>}
                    {page===4 && <Page4></Page4>}
                </GraphContainer>
            </div>
        </>
    )
}

export default MainPage