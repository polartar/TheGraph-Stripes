import style from './style.module.scss';
import { useEffect, useRef } from 'react';
import { createChart, IChartApi } from 'lightweight-charts';
import useWindowResize from 'hooks/useWindowResize';
import classes from 'utils/classes';
import { monthData } from './data';

interface Props {
  className?: string;
}

const Chart = ({ className }: Props) => {
  const containerRef = useRef<any>();
  const chartRef = useRef<IChartApi>();

  useEffect(() => {
    const el = containerRef.current as HTMLElement;

    // Create the chart
    const chart = createChart(el, {
      width: el.clientWidth,
      height: el.clientHeight,
    });

    // Set the data
    chart.addLineSeries().setData(monthData);

    chart.applyOptions({
      leftPriceScale: {
        autoScale: true
      },
      rightPriceScale: {

      },
      grid: {
        vertLines: {
            color: 'rgba(70, 130, 180, 0.5)',
            style: 1,
            visible: true,
        },
        horzLines: {
            color: 'rgba(70, 130, 180, 0.5)',
            style: 1,
            visible: true,
        },
      },
      layout: {
        backgroundColor: 'transparent',
        textColor: 'rgba(255, 255, 255, 0.5)',
        fontSize: 12,
        fontFamily: '"Open Sans", sans-serif',
      },
    });

    // Reference it
    chartRef.current = chart;

    return () => {
      chart.remove();
    }
  }, []);

  useWindowResize(() => {
    if (chartRef.current && containerRef.current) {
      const el = containerRef.current as HTMLElement;
      chartRef.current.resize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight,
      );
    }
  });

  return (
    <div
      className={classes(style.container, className)}
      ref={containerRef}
    ></div>
  );
};

export default Chart;
