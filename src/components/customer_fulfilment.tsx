
import { Area, AreaChart, Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { name: "1", lastMonth: 80, thisMonth: 45 },
  { name: "2", lastMonth: 60, thisMonth: 48 },
  { name: "3", lastMonth: 62, thisMonth: 65 },
  { name: "4", lastMonth: 72, thisMonth: 35 },
  { name: "5", lastMonth: 55, thisMonth: 35 },
  { name: "6", lastMonth: 78, thisMonth: 42 },
  { name: "7", lastMonth: 70, thisMonth: 40 },
  { name: "8", lastMonth: 50, thisMonth: 38 },
  { name: "9", lastMonth: 90, thisMonth: 60 },
];

function CustomerFulfilment(){
    return (
        <div className="w-full h-full flex flex-col justify-between rounded-xl bg-accent py-8">
            <h1 className="text-3xl font-bold px-6 mb-3">Customer Fulfilment</h1>
            <div className="border-b-gray-600/40 border-b mb-3">
              <AreaChart
                  style={{ width: '100%', maxWidth: '400px', maxHeight: '70vh', aspectRatio: 1.618 }}
                  responsive
                  data={data}
                  barCategoryGap={13}
                  margin={{
                    top: 20,
                    right: 0,
                    left: 0,
                    bottom: 0,
                  }}
                  className="mx-auto"
                  >
                {/* Gradients */}
                <defs>
                  <linearGradient id="lastMonthFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#9FE7D8" stopOpacity={0.45} />
                    <stop offset="100%" stopColor="#9FE7D8" stopOpacity={0} />
                  </linearGradient>

                  <linearGradient id="thisMonthFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#E9B6E9" stopOpacity={0.45} />
                    <stop offset="100%" stopColor="#E9B6E9" stopOpacity={0} />
                  </linearGradient>
                </defs>

                {/* Clean axes */}
                <XAxis hide />
                <YAxis hide />
                <Tooltip contentStyle={{ display: "none" }} />

                {/* Volume */}
                <Area
                  type="monotone"
                  dataKey="lastMonth"
                  stroke="#9FE7D8"
                  strokeWidth={2}
                  fill="url(#lastMonthFill)"
                  dot={{ r: 4, fill: "#9FE7D8" }}
                  activeDot={{ r: 6 }}
                />

                {/* Service */}
                <Area
                  type="monotone"
                  dataKey="thisMonth"
                  stroke="#E9B6E9"
                  strokeWidth={2}
                  fill="url(#thisMonthFill)"
                  dot={{ r: 4, fill: "#E9B6E9" }}
                  activeDot={{ r: 6 }}
                />
              </AreaChart>
            </div>
            <div className="flex flex-row justify-evenly items-center gap-3 text-gray">
                  <div className="flex flex-col items-center">
                    <div className="w-fit flex flex-row items-center">
                      <div className="w-3 h-3 bg-primary rounded-full mr-3 "></div>
                      <p>Last Month</p>
                    </div>
                    <h3 className="text-white">$4,087</h3>
                  </div>
                  <div className="h-6 md:h-full w-px bg-gray-600/40" />
                  <div className="flex flex-col items-center">
                    <div className="w-fit flex flex-row items-center">
                      <div className="w-3 h-3 bg-pink rounded-full mr-3 "></div>
                      <p>This Month</p>
                    </div>
                    <h3 className="text-white">$5,500</h3>
                  </div>
            </div>
        </div>
    )
}

export default CustomerFulfilment;