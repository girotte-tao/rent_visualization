import React, { useEffect, useState, useContext } from 'react';
//antd table
import { Table } from 'antd';
import dataset from '../../static/table.json';
import {SharedStateContext} from "../../components/context/pageContext"

const SelectedTable = ({props}) => {

    const columns = [
        {
            title: "Name",
            dataIndex: "Name",
            ellipsis: true
        },
        {
            title: "Price/¥",
            dataIndex: "Price"
        },
        {
            title: "Floor",
            dataIndex: "Floor"
        },
        {
            title: "Orientation",
            dataIndex: "orientation"
        }

    ];



    const modifyData = (dataset) => {
        var selectedData = [];

        for (let i = 0; i < dataset.length; i++) {
            if (dataset[i].Price >= props.price.min && dataset[i].Price <= props.price.max &&
                dataset[i].region === props.region &&
                dataset[i].subway.includes(props.subway) &&
                dataset[i].area >= props.area.min && dataset[i].area <= props.area.max &&
                dataset[i].Floor >= props.floor.min && dataset[i].Floor <= props.floor.max &&
                dataset[i].method === props.method &&
                dataset[i].orientation.includes(props.orientation) &&
                selectedData.length < 3
            ) {
                selectedData.push(dataset[i]);
            }
        }

        return selectedData

    }

    const selectedData = modifyData(dataset)


    return (
        <div>
            <Table dataSource={selectedData} columns={columns} pagination={{ pageSize: 3, hideOnSinglePage: true }}
            />
        </div>
    );
}

export default SelectedTable;