import * as echarts from 'echarts';
import { useRef, useEffect } from 'react';

type EChartsOption = echarts.EChartsOption;

const Chart = (weekArr: number[]) => {
    const chartRef = useRef<HTMLDivElement>(null);
    const weekArray = weekArr["weekArr"]
    useEffect(() => {
        if (chartRef.current) {
            const myChart = echarts.init(chartRef.current);
            const option: EChartsOption = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        // data: [120, 200, 150, 80, 70, 110, 130],
                        data: weekArray,
                        type: 'bar'
                    }
                ]
            };

            myChart.setOption(option);
        }
    }, [weekArr]);

    return (
        <div className="pl-2" ref={chartRef} style={{ width: '100%', height: '220px' }} id="main"></div>
    );
};

export default Chart;