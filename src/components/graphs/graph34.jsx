import ReactEcharts from 'echarts-for-react';
import React from "react";

const areas = ['Guangming', 'Nanshan', 'Pingshan', 'Dapeng', 'Bao\'an', 'Yantian', 'Futian', 'Luohu', 'Longhua', 'Longgang']

const data_num_arr  = [81, 4678, 66, 11, 2042, 126, 4472, 1504, 1799, 3831]

const avg_rent_arr = [4324.691358, 10245.262719, 3039.848485, 4290.909091, 4712.938786, 6135.238095, 7222.098166, 6149.697473, 4659.203446, 3571.751501]

const avg_rent_per_squere_arr = [45.42, 141.66, 37.7, 49.79, 87.0, 69.49, 134.68, 101.21, 79.04, 57.72]

const BarChart23 = () => { 
    const option = { 
        tooltip: { 
            trigger: 'axis', 
            axisPointer: { 
                type: 'cross', 
                crossStyle: { 
                    color: '#999' }
                 }
        }, 
        toolbox: { 
            feature: { 
                dataView: { 
                    show: true, 
                    readOnly: false 
                }, 
                magicType: { 
                    show: true, 
                    type: ['line', 'bar'] 
                }, 
                restore: { 
                    show: true 
                }, 
                saveAsImage: { 
                    show: true 
                } 
            } 
        }, 
        legend: { 
            data: ['Amount', 'Average Rent'] 
        }, 
        xAxis: [ 
            { 
                type: 'category', 
                data: areas, 
                axisPointer: { type: 'shadow' } } ], 
                yAxis: [ 
                    { 
                        type: 'value', 
                        name: 'Amount', 
                        min: 0, 
                        max: 5000, 
                        interval: 1000, 
                        axisLabel: { 
                            // formatter: '{value} ml' 
                        } 
                    }, 
                    { 
                        type: 'value', 
                        name: 'Average Rent', 
                        min: 30, 
                        max: 150, 
                        interval: 30, 
                        axisLabel: { 
                            formatter: '{value} RMB' 
                        } 
                    } ], 
                    series: [ 
                        { 
                            name: 'Amount', 
                            type: 'bar', 
                            tooltip: { 
                                // valueFormatter: function (value) { return value + ''; } 
                            }, 
                            data: data_num_arr 
                        }, 
                        { 
                            name: 'Average Rent', 
                            type: 'line', 
                            tooltip: { 
                                // valueFormatter: function (value) { return value + ' ml'; } 
                            }, 
                            // data: avg_rent_arr,
                            data: avg_rent_per_squere_arr,
                            yAxisIndex: 1
                        }, 
                    ] 
        };

return <ReactEcharts style={{height: '100%'}} option={option} />; };

export default BarChart23;