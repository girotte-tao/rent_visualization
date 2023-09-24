import React, {Component} from "react";
import GraphContainer from "../../components/graphContainer/graphContainer";
import Map from "../../components/graphs/map";
import MapBarGraph from "../../components/graphs/mapBarGraph";
const MainPage = () => {
    // this page is to show all the graphs
    // you may comment them out, and only display the one you want  to see
    return (
        <div>
            <GraphContainer>
                <Map></Map>
                <MapBarGraph></MapBarGraph>
            </GraphContainer>
        </div>
    )
}

export default MainPage