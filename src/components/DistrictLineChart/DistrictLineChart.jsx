import "./style.scss";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";


const DistrictLineChart = (props) => {
  return (
    <div className="district-line-chart__wrapper">
      <LineChart
        width={1200}
        height={300}
        data={props.districtPopulation}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="ano" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="populacao"
          stroke="#8884d8"
          name="População"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default DistrictLineChart;
