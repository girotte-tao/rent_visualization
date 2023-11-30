import ReactEcharts from 'echarts-for-react';

const Table = () => {
    const feature = [
        'Area', 'Floor', 'Nearest subway distance', 'Orientation', 'Total floor','Lease method'
    ];
    // prettier-ignore
    const Area = [
        'Luohu', 'Nanshan', 'Bao An',
        'Longgang', 'Dapeng New', 'Guangming', 
        'Pingshan','Yantian', 'Longhua','Fantian'
    ];
    // prettier-ignore
    const data = [[0,0,0.873],[0,1,0.202],[0,2,0.035],[0,3,0.099],[0,4,0.297],[0,5,0.415],
                    [1,0,0.790],[1,1,0.107],[1,2,0.005],[1,3,0.079],[1,4,0.169],[1,5,0.384],
                    [2,0,0.805],[2,1,0.123],[2,2,0.080],[2,3,0.166],[2,4,0.214],[2,5,0.210],
                    [3,0,0.790],[3,1,0.019],[3,2,0.020],[3,3,0.066],[3,4,0.036],[3,5,0.514],
                    [4,0,0.932],[4,1,0.559],[4,2,0.033],[4,3,0.067],[4,4,0.628],[4,5,0.332],
                    [5,0,0.775],[5,1,0.010],[5,2,0.158],[5,3,0.184],[5,4,0.204],[5,5,0.383],
                    [6,0,0.747],[6,1,0.432],[6,2,0.044],[6,3,0.095],[6,4,0.543],[6,5,0.429],
                    [7,0,0.621],[7,1,0.008],[7,2,0.201],[7,3,0.174],[7,4,0.019],[7,5,0.101],
                    [8,0,0.789],[8,1,0.012],[8,2,0.005],[8,3,0.060],[8,4,0.072],[8,5,0.523],
                    [9,0,0.878],[9,1,0.274],[9,2,0.013],[9,3,0.003],[9,4,0.432],[9,5,0.528]

                ]
        .map(function (item) {
        return [item[1], item[0], item[2] || '-'];
    });
    const option = {
        tooltip: {
            position: 'top'
        },
        grid: {
            height: '50%',
            top: '10%'
        },
        xAxis: {
            type: 'category',
            data: feature,
            splitArea: {
            show: true
            },
            axisLabel: {
                interval: 0, // 显示所有标签
                rotate: -20// 旋转标签以节省宽度
            }
        },
        yAxis: {
            type: 'category',
            data: Area,
            splitArea: {
            show: true
            }
        },
        visualMap: {
            min: 0,
            max: 1,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            bottom: '15%'
        },
        series: [
            {
            name: 'Punch Card',
            type: 'heatmap',
            data: data,
            label: {
                show: true
            },
            emphasis: {
                itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
            }
        ]
        };

return <ReactEcharts style={{height: '130%'}} option={option} />; };

export default Table;