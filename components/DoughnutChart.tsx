"use client";

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export default function DoughnutChart({ accounts }: DoughnutChartProps) {
  const accountsNames = accounts.map((account) => account.name);
  const accountsBalances = accounts.map((account) => account.currentBalance);

  const data = {
    datasets: [
      {
        label: "Banks",
        data: accountsBalances,
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
      },
    ],
    labels: accountsNames,
  };
  return (
    <Doughnut
      data={data}
      options={{ cutout: "60%", plugins: { legend: { display: false } } }}
    />
  );
}
