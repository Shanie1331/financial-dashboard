import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

// Define the data type
type DataPoint = {
  month: string;
  value: number;
};

const BalanceHistoryChart = () => {
  const chartRef = useRef<SVGSVGElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(400); // Default width

  // Data with explicit type
  const data: DataPoint[] = [
    { month: 'Jul', value: 170 },
    { month: 'Aug', value: 280 },
    { month: 'Sep', value: 220 },
    { month: 'Oct', value: 430 },
    { month: 'Nov', value: 420 },
    { month: 'Dec', value: 800 },
    { month: 'Jan', value: 600 },
    { month: 'Feb', value: 610 },
    { month: 'Mar', value: 500 },
  ];

  const height = 280;
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };

  const resizeChart = () => {
    if (containerRef.current) {
      const newWidth = containerRef.current.getBoundingClientRect().width;
      setWidth(newWidth);
    }
  };

  useEffect(() => {
    resizeChart(); // Set initial width
    window.addEventListener('resize', resizeChart);

    return () => {
      window.removeEventListener('resize', resizeChart);
    };
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      const svg = d3.select(chartRef.current);

      // Calculate inner dimensions
      const innerWidth = width - margin.left - margin.right;
      const innerHeight = height - margin.top - margin.bottom;

      // Clear existing content
      svg.selectAll('*').remove();

      // Create scales
      const xScale = d3
        .scalePoint()
        .domain(data.map((d) => d.month))
        .range([0, innerWidth])
        .padding(0);

      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.value) ?? 800])
        .range([innerHeight, 0]);

      // Create a group for the chart
      const chartGroup = svg
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

      // Add vertical gridlines
      chartGroup
        .selectAll('.vertical-grid-line')
        .data(data.slice(1))
        .enter()
        .append('line')
        .attr('class', 'vertical-grid-line')
        .attr('x1', (d) => xScale(d.month) ?? 0)
        .attr('x2', (d) => xScale(d.month) ?? 0)
        .attr('y1', 0)
        .attr('y2', innerHeight)
        .attr('stroke', '#E5E7EB') // Grey color
        .attr('stroke-width', 1)
        .attr('stroke-dasharray', '2,2'); // Dotted line

      // Add horizontal gridlines
      chartGroup
        .selectAll('.horizontal-grid-line')
        .data(yScale.ticks(5))
        .enter()
        .append('line')
        .attr('class', 'horizontal-grid-line')
        .attr('x1', 0)
        .attr('x2', innerWidth)
        .attr('y1', (d) => yScale(d))
        .attr('y2', (d) => yScale(d))
        .attr('stroke', '#E5E7EB')
        .attr('stroke-width', 1)
        .attr('stroke-dasharray', '2,2');

      // Add x-axis
      const xAxis = d3.axisBottom(xScale).ticks(5);

      chartGroup
        .append('g')
        .attr('transform', `translate(0,${innerHeight})`)
        .call(xAxis)
        .selectAll('path, line')
        .attr('stroke', '#E5E7EB')
        .attr('stroke-dasharray', '2,2');

      // Add y-axis
      const yAxis = d3.axisLeft(yScale).ticks(5);

      chartGroup
        .append('g')
        .call(yAxis)
        .selectAll('path, line')
        .attr('stroke', '#E5E7EB')
        .attr('stroke-dasharray', '2,2');

      // Add tick text styling
      chartGroup
        .selectAll('text')
        .style('fill', '#6B7280')
        .style('font-size', '12px');

      // Add line path
      const lineGenerator = d3
        .line<DataPoint>()
        .x((d) => xScale(d.month) ?? 0)
        .y((d) => yScale(d.value))
        .curve(d3.curveCardinal);

      chartGroup
        .append('path')
        .datum(data)
        .attr('d', lineGenerator)
        .attr('fill', 'none')
        .attr('stroke', '#0052cc')
        .attr('stroke-width', 2);

      // Add gradient for the fill
      const gradient = svg
        .append('defs')
        .append('linearGradient')
        .attr('id', 'line-gradient')
        .attr('x1', '0%')
        .attr('y1', '0%')
        .attr('x2', '0%')
        .attr('y2', '100%');

      gradient
        .append('stop')
        .attr('offset', '0%')
        .attr('stop-color', '#0052cc')
        .attr('stop-opacity', 0.4);
      gradient
        .append('stop')
        .attr('offset', '100%')
        .attr('stop-color', '#0052cc')
        .attr('stop-opacity', 0);

      // Add the area fill
      chartGroup
        .append('path')
        .datum(data)
        .attr(
          'd',
          d3
            .area<DataPoint>()
            .x((d) => xScale(d.month) ?? 0)
            .y0(innerHeight)
            .y1((d) => yScale(d.value))
            .curve(d3.curveCardinal)
        )
        .attr('fill', 'url(#line-gradient)');
    }
  }, [width, data]);

  return (
    <div
      ref={containerRef}
      className="p-4 bg-white rounded-3xl shadow-md w-full"
    >
      <svg ref={chartRef} width={width} height={height} />
    </div>
  );
};

export default BalanceHistoryChart;
