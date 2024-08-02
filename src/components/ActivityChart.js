// src/components/ActivityChart.js

import React from "react";
import styled from "styled-components";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Legend,
  Bar,
} from "recharts";

// Styled component for the chart container
const ChartContainer = styled.div`
  background-color: #2a2a2a; // Darker background for contrast
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // Deeper shadow for a more pronounced effect
  margin-bottom: 50px;
  height: 320px; // Adjusted height for better alignment with the design
`;

// Styled component for the chart title
const Title = styled.h2`
  font-weight: bold;
  color: #f1f1f1; // Brighter color for better visibility
  margin-bottom: 20px;
`;

// Sample data for the chart
const data = [
  { name: "5", value: 3000 },
  { name: "9", value: 2000 },
  { name: "11", value: 2780 },
  { name: "13", value: 1890 },
  { name: "15", value: 2390 },
  { name: "17", value: 3490 },
  { name: "19", value: 2000 },
  { name: "21", value: 2780 },
  { name: "23", value: 1890 },
];

const ActivityChart = () => {
  return (
    <ChartContainer>
      <Title>Activity</Title>
      <ResponsiveContainer width="100%" height="85%">
        {" "}
        {/* Use 85% height for better fit */}
        <BarChart width={600} height={250} data={data}>
          {" "}
          {/* Adjusted height for balance */}
          <XAxis dataKey="name" stroke="#ddd" />{" "}
          {/* Changed axis color for better readability */}
          <YAxis />
          <Tooltip
            wrapperStyle={{
              width: 120,
              backgroundColor: "#333",
              color: "#fff",
            }}
          />{" "}
          {/* Adjusted tooltip style */}
          <Legend
            iconType="circle"
            align="right"
            layout="horizontal"
            verticalAlign="top"
            height={36}
          />
          <CartesianGrid stroke="#444" strokeDasharray="3 3" />{" "}
          {/* Lighter grid lines for a cleaner look */}
          <Bar dataKey="value" fill="#4a90e2" barSize={20} />{" "}
          {/* Changed bar color to match image */}
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default ActivityChart;
