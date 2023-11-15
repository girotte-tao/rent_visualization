// import { Chart } from "@antv/g2";
// import React from "react";
// import data from "../../static/rosechartdata.json"
// import { type } from "@testing-library/user-event/dist/type";
// const chart = new Chart({
//     container: "container",
//     width: 400,
//     height: 300,
// });

// chart.coordinate({type: 'polar'});

// chart.interval()
// .transform({type:"groupX",y:"sum"})
// .data({
//     type:"inline",
//     value:data

// })

// .encode("x","year_month")
// .encode("y","amount")
// .scale("y",{type:"sqrt"})
// .axis('y', {
//     labelFormatter: '~s',
//     tickCount: 5,
//     tickFilter: (d, i) => i !== 0,
//     direction: 'right',
//   })
//   .animate('enter', { type: 'waveIn' })
//   .tooltip({ channel: 'y', valueFormatter: '~s' });
// chart.render();
import { Chart } from "@antv/g2";
import React, { useEffect, useRef } from "react";
import data from "../../static/rosechartdata.json";

const RoseChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const chart = new Chart({
            container: chartRef.current,
            width: 400,
            height: 300,
        });

        chart.coordinate({ type: "polar" });

        chart
            .interval()
            .transform({ type: "groupX", y: "sum" })
            .data({
                type: "inline",
                value: data,
            })
            .encode("x", "year_month")
            .encode("y", "amount")
            .scale("y", { type: "sqrt" })
            .axis("y", {
                labelFormatter: "~s",
                tickCount: 5,
                tickFilter: (d, i) => i !== 0,
                direction: "right",
            })
            .animate("enter", { type: "waveIn" })
            .tooltip({ channel: "y", valueFormatter: "~s" });
        chart.render();

        return () => {
            chart.destroy();
        };
    }, []);

    return <div ref={chartRef} />;
};

export default RoseChart;
