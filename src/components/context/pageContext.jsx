// SharedStateContext.js
import React, { createContext, useState } from 'react';

export const SharedStateContext = createContext();

export const SharedStateProvider = ({ children }) => {

    const defaultProp = {
        price: {},
        region: "",
        subway: "",
        area: {},
        floor: {},
        method: "",
        orientation: "",
        blockNum: 0
    }

    const props = {
        price: {
            min: 0,
            max: 100000000
        },
        region: "luohuqu",
        subway: "1",
        area: {
            min: 0,
            max: 100000000
        },
        floor: {
            min: 0,
            max: 100000000
        },
        method: "Whole lease",
        orientation: "S",
    }

    const [sharedState, setSharedState] = useState(props);
    // ... 其他逻辑

    return (
        <SharedStateContext.Provider value={{ sharedState, setSharedState }}>
            {children}
        </SharedStateContext.Provider>
    );
};
