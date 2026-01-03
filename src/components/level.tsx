
import { Bar, BarChart } from "recharts";

const data = [
  {
    name: 'Sun',
    service: 60,
  },
  {
    name: 'Mon',
    service: 75,
  },
  {
    name: 'Tue',
    service: 45,
  },
  {
    name: 'Wed',
    service: 30,
  },
  {
    name: 'Thu',
    service: 40,
  },
  {
    name: 'Sat',
    service: 55,
  },
];

function Level(){
    return (
        <div className="w-full h-full flex flex-col rounded-xl bg-accent py-8">
            <h1 className="text-3xl font-bold px-6 mb-3">Level</h1>
            <div className="border-b-gray-600/40 border-b mb-3">
              <BarChart
                  style={{ width: '100%', maxWidth: '300px', maxHeight: '70vh', aspectRatio: 1.618 }}
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
                  <Bar dataKey="service" stackId="a" fill="#A9DFD8" radius={[10, 10, 0, 0]} background={{fill: "#2B2B36",radius: 10}} />
              </BarChart>
            </div>
            <div className="flex flex-row justify-evenly items-center gap-3 text-gray">
                  <div className="w-fit flex flex-row items-center">
                    <div className="w-3 h-3 bg-primary rounded-full mr-3 "></div>
                    <p>Volume</p>
                  </div>
                  <div className="h-4 w-px bg-gray-600/40" />
                  <div className="w-fit flex flex-row items-center">
                    <div className="w-3 h-3 bg-bargray rounded-full mr-3 "></div>
                    <p>Service</p>
                  </div>
            </div>
        </div>
    )
}

export default Level;