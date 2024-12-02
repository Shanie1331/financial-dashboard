import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

interface PolarData {
  label: string;
  value: number;
  color: string;
}

const ExpenseStatisticsChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = [
      { label: "Entertainment", value: 30, color: "#3A497F" },
      { label: "Bill Expense", value: 15, color: "#FF7F11" },
      { label: "Investment", value: 20, color: "#4F8FF0" },
      { label: "Others", value: 35, color: "#c1c1c1" },
    ];

    const width = 300;
    const height = 300;
    const radius = Math.min(width, height) / 2;

    d3.select(chartRef.current).select("svg").remove();

    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const radiusScale = d3.scaleLinear().domain([0, d3.max(data, (d) => d.value) as number]).range([0, radius]);

    const arc = d3
      .arc<d3.PieArcDatum<PolarData>>()
      .innerRadius(0)
      .outerRadius((d) => radiusScale(d.data.value)); // Use the radius scale for outerRadius

    const pie = d3
      .pie<PolarData>()
      .value((d) => d.value)
      .sort(null);

    const arcs = svg
      .selectAll("arc")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "arc");

    arcs
      .append("path")
      .attr("d", arc)
      .attr("stroke", "white")
      .style("stroke-width", "5px")
      .attr("fill", (d) => d.data.color);

    // Add percentage text in the center of the polar area
    arcs
      .append("text")
      .attr("transform", (d) => `translate(${arc.centroid(d)})`)
      .attr("font-size", "10px")
      .attr("text-anchor", "middle")
      .attr("fill", "black")
      .text((d) => `${d.data.value}%`);

    arcs
      .append("text")
      .attr("transform", (d) => {
        const [x, y] = arc.centroid(d);
        const offset = 40;
        return `translate(${x * 1.6}, ${y * 1.6})`;
      })
      .attr("font-size", "10px")
      .attr("text-anchor", "middle")
      .attr("fill", "black")
      .text((d) => d.data.label);
  }, []);

  return (
    <div className="p-4 bg-white rounded-3xl h-[380px] content-center justify-items-center ">
      <div ref={chartRef}></div>
    </div>
  );
};

export default ExpenseStatisticsChart;
