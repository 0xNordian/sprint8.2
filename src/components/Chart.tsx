import * as echarts from 'echarts';
import { useRef, useEffect } from 'react';

type EChartsOption = echarts.EChartsOption;

type ChartProps = {
    weekArr: number[];
};


const Chart = ({weekArr}: ChartProps) => {
    const chartRef = useRef<HTMLDivElement>(null);
    const weekArray = weekArr
    // console.log("weekArray: ", weekArray)
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
        <div className="pl-2 w-32 md:w-52 lg:w-80 xl:w-96" ref={chartRef} style={{ width: '100%', height: '220px' }} id="chartMain" data-testid="chart"></div>
    );
};

export default Chart;