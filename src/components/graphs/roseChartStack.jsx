/**
 * A recreation of this demo: https://observablehq.com/@d3/radial-stacked-bar-chart
 */
import { Chart } from '@antv/g2';
import React, { useEffect } from 'react';
import data from "../../static/roseChartStack.json";

const RoseChartStack = () => {
    useEffect(() => {
        const chart = new Chart({
            container: 'container',
            width: 400,
            height: 400,
        });

        const colors = [
            '#98abc5',
            '#8a89a6',
            '#7b6888',
            '#6b486b',
            '#a05d56',
            '#d0743c',
            '#ff8c00',
            '#ff5733',
            '#c70039',
            '#900c3f'
        ];

        chart.coordinate({ type: 'polar', innerRadius: 0.4 });

        chart
            .interval()
            .data({
                type: 'inline',
                value: data,
                transform: [
                    {
                        type: 'fold',
                        fields: [
                            //'2012','2013','2014','2015',
                            '2016','2017','2018','2019','2020','2021'
                        ],
                        key: 'Year',
                        value: 'Amount',
                    },
                ],
            })
            .transform({ type: 'stackY' })
            .encode('x', 'month')
            .encode('y', 'Amount')
            .encode('color', 'Year')
            .scale('color', { range: colors })
            .legend('color', { position: 'left', display: 'grid', gridCol: 1 })
            .scale('y', { type: 'sqrt' })
            .axis('y', {
                labelFormatter: '~s',
                tickFilter: (_, i) => i !== 0,
                direction: 'center',
            })
            .axis('x', { position: 'inner' })
            .animate('enter', { type: 'waveIn' });

        chart.render();

        return () => {
            chart.destroy();
        };
    }, []);

    return <div id="container" />;
};

export default RoseChartStack;
