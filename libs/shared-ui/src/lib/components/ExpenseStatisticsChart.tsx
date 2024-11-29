import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

interface PieData {
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
      { label: "Others", value: 35, color: "#1D1D1D" },
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

    const pie = d3
      .pie<PieData>()
      .value((d) => d.value)
      .sort(null);

    const arc = d3
      .arc<d3.PieArcDatum<PieData>>()
      .innerRadius(0)
      .outerRadius(radius);

    const arcs = svg
      .selectAll("arc")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "arc");

    arcs
      .append("path")
      .attr("d", arc)
      .attr("fill", (d) => d.data.color);

    arcs
      .append("text")
      .attr("transform", (d) => `translate(${arc.centroid(d)})`)
      .attr("text-anchor", "middle")
      .attr("font-size", "14px")
      .attr("fill", "white")
      .text((d) => `${d.data.value}%`);

    arcs
      .append("text")
      .attr("transform", (d) => {
        const [x, y] = arc.centroid(d);
        const offset = 40;
        return `translate(${x * 1.6}, ${y * 1.6})`;
      })
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("fill", "gray")
      .text((d) => d.data.label);
  }, []);

  return (
    <div className="p-4 bg-white rounded-3xl h-full">
      <div ref={chartRef}></div>
    </div>
  );
};

export default ExpenseStatisticsChart;