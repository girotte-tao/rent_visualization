import React, {Component} from "react";


const GraphContainer = (props) => {

    return (
        <>
            <div style={{height: '100%' }}>
                    {props.children}
            </div>
        </>
    )

}

export default GraphContainer