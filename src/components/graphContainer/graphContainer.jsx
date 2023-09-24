import React, {Component} from "react";

const style = {
    height: '60vh',
    // width: '100'
    position: ''
}

const GraphContainer = (props) => {

    return <>
    <div style={{height: '100%' }}>
    <div style={style}>
            {props.children}
        </div>
    </div>
    </>
}

export default GraphContainer