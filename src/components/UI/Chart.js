import react, { useState } from "react";
import ChartBars from "./ChartBar";
import "./styles/Chart.css";

const Chart = (props) => {
    const arrayVals = props.chartArray.map(dataPoint => dataPoint.val);
    const totalMax = Math.max(...arrayVals);

  return (
    <div className="chart">
      {props.chartArray.map((chartBar) => (
        <ChartBars
          key={chartBar.label}
          value={chartBar.val}
          maxVal={totalMax}
          label={chartBar.label}
        />
      ))}
    </div>
  );
};

export default Chart;
