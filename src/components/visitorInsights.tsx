
import { useState } from "react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ReferenceLine, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  { month: "Jan", value: 80 },
  { month: "Feb", value: 90 },
  { month: "Mar", value: 420 },
  { month: "Apr", value: 210 },
  { month: "May", value: 500 },
  { month: "Jun", value: 460 },
  { month: "Jul", value: 260 },
  { month: "Aug", value: 430 },
  { month: "Sep", value: 390 },
  { month: "Oct", value: 440 },
  { month: "Nov", value: 200 },
  { month: "Dec", value: 300 },
];

function VisitorInsights(){
  const [activeMonth, setActiveMonth] = useState<string | null>(null);;
    return (
        <div className="w-full h-full flex flex-col rounded-xl bg-accent py-8 px-6 ">
            <div className="flex flex-row justify-between">
              <h1 className="text-3xl font-bold mb-3">Visitor Insights</h1>
              <div className="h-fit flex flex-row gap-2 items-center bg-secondary py-2 px-2 rounded-lg text-xs">
                <div className="h-2 w-2 bg-yellow rounded-full"></div>
                <p>New Visitors</p>
              </div>
            </div>
            <div className="w-full h-full">
                <AreaChart data={data} margin={{
                    top: 20,
                    right: 0,
                    left: -20,
                    bottom: 0,
                  }}
                  onMouseMove={(state) => {
                    if (state?.isTooltipActive && typeof state.activeLabel === "string") {
                      setActiveMonth(state.activeLabel);
                    }
                  }}
                  onMouseLeave={() => setActiveMonth(null)}
                  style={{ width: '100%', maxWidth: '800px', aspectRatio: 2 }}
                  >
                  {/* Gradient */}
                  <defs>
                    <linearGradient id="visitorFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#BFF1E8" stopOpacity={0.5} />
                      <stop offset="100%" stopColor="#BFF1E8" stopOpacity={0} />
                    </linearGradient>
                  </defs>

                  {/* Grid */}
                  <CartesianGrid
                    stroke="#2a2f3a"
                    vertical={false}
                    strokeDasharray="3 3"
                  />

                  {/* Axes */}
                  <XAxis
                    dataKey="month"
                    tick={{ fill: "#9ca3af", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "#9ca3af", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  {activeMonth && (
                    <ReferenceLine
                      x={activeMonth}
                      stroke="#FBBF24"
                      strokeDasharray="3 4"
                    />
                  )}
                  {/* Highlighted month (June) */}
                  

                  {/* Area */}
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#BFF1E8"
                    strokeWidth={2}
                    fill="url(#visitorFill)"
                    dot={false}
                    activeDot={{ r: 6, fill: "#FBBF24" }}
                  />
                </AreaChart>
            </div>
            
        </div>
    )
}

export default VisitorInsights;