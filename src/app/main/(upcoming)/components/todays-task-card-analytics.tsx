"use client";

import Chart from "react-apexcharts";
import Paper from "@/components/ui/paper";

type Props = {
    active?: number;
    completed?: number;
};

export default function TodaysTaskCardAnalytics({
    active = 5,
    completed = 4,
}: Props) {
    return (
        <Paper className="flex gap-2 p-3">
            <div>
                <h3 className="mb-2 font-medium">Today's Task</h3>
                <table className="cell:px-4 cell:py-2 text-secondary-text cell:font-normal cell:text-center w-full">
                    <tr>
                        <th className="border-r-1 border-b-1 border-gray-200">
                            Active
                        </th>
                        <th className="border-r-1 border-b-1 border-gray-200">
                            Completed
                        </th>
                        <th className="border-b-1 border-gray-200">All</th>
                    </tr>
                    <tr>
                        <td className="border-r-1 border-gray-200">{active}</td>
                        <td className="border-r-1 border-gray-200">
                            {completed}
                        </td>
                        <td>{active + completed}</td>
                    </tr>
                </table>
            </div>
            <Chart
                options={{
                    grid: {
                        padding: {
                            top: -20,
                            bottom: -25,
                        },
                    },
                    plotOptions: {
                        radialBar: {
                            hollow: {
                                size: "60%",
                            },
                            dataLabels: {
                                name: {
                                    show: false,
                                },
                                value: {
                                    offsetY: 5,
                                    show: true,
                                },
                            },
                        },
                    },
                    fill: {
                        type: "solid",
                        colors: ["var(--color-primary-main)"],
                    },
                }}
                series={[Math.round((active / (active + completed)) * 100)]}
                type="radialBar"
                width={170}
                height={170}
            />
        </Paper>
    );
}
