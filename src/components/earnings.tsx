
import { PolarAngleAxis, RadialBar, RadialBarChart } from "recharts";


const data = [
  {
    name: "earnings",
    value: 80,
    fill: "#BFF1E8",
  },
];


function Earnings(){
    return (
        <div className="w-full h-full flex flex-col justify-between rounded-xl bg-accent py-8">
            <div className="flex flex-col px-5">
                <h1 className="text-3xl font-bold">Earnings</h1>
                <h3 className="text-gray">Total Expense</h3>
                <h1 className="text-4xl font-bold text-primary pt-5">$6078.76</h1>
                <h3 className="text-gray">Profit is 48% more than last month</h3>
            </div>
            <div className="w-full">
              <RadialBarChart
                style={{ width: '100%', maxWidth: '800px', aspectRatio: 2 }}
                  responsive
                  data={data}
                  startAngle={180}
                  endAngle={0}
                  innerRadius="100%"
                  outerRadius="200%"
                  cx="50%"
                  cy="80%"
                  >
                    <PolarAngleAxis
                        type="number"
                        domain={[0, 100]}
                        tick={false}
                    />

                    {/* Background arc */}
                    <RadialBar
                      background={{ fill: "#2A2F3A" }}
                      dataKey="value"
                      isAnimationActive={true}
                    />

                    {/* Progress arc */}
                    <RadialBar
                      dataKey="value"
                    />

                    {/* Center label */}
                    <text
                      x="50%"
                      y="70%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="#ffffff"
                      fontSize={28}
                      fontWeight={600}
                    >
                      80%
                    </text>
              </RadialBarChart>
            </div>
        </div>
    )
}

export default Earnings;