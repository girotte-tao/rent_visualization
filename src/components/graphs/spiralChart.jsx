import React, { useEffect } from "react";
import transactions from "../../static/transaction-days.json";
import Spiral from "../utils/Spiral";
import * as R from "ramda";
const data = [];
for (var i = 0; i < transactions.length; i++) {
    data.push({
        time: transactions.dates[i],
        value: transactions.amounts[i]
    });
}

const SpiralChart = () => {
    console.log(transactions.amounts)
    const simpleData = R.repeat(1, 1500)
simpleData.push(0)
    return (

        
            <Spiral data={
                transactions.amounts
            }>

            </Spiral>



        // <Spiral
        //     data={transactions.amounts}
        //     margin={0} // Margin in pixels
        //     rotations={52}
        //     color={(val) => "red"}
        //     width={600}
        //     height={600}
        //     offset={100}
        //     segment={[15, 2]} // Size of each data point in pixels
        //     opacity={(val) => 0.5}
        //     extent={[0, 360]} // The min and max x values
        // />

    )
}
export default SpiralChart

