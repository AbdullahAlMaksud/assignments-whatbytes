import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

const data = [
  {
    score: 0,
    numberOfStudent: 4,
  },
  {
    score: 25,
    numberOfStudent: 6,
  },
  {
    score: 50,
    numberOfStudent: 20,
  },
  {
    score: 75,
    numberOfStudent: 45,
  },
  {
    score: 100,
    numberOfStudent: 3,
  },
];

const CustomLineChart = ({ totalscore = 30 }) => {
  return (
    <div className="pt-5">
      <h2 className="font-bold pb-5">Question Analysis</h2>
      <div className="flex justify-between items-start mb-4">
        <div className="text-gray-600">
          <span className="font-bold text-gray-700">
            You scored {totalscore}% percentile
          </span>{" "}
          which is lower than the average percentile 72% of all the engineers
          who took this assessment.
        </div>
        <span className="bg-gray-100 px-3.5 text-xl py-3.5 inline-block rounded-full">
          📈
        </span>
      </div>

      <div style={{ width: "100%", height: "300px" }}>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="score" stroke="#000000" />
            {/* <YAxis /> */}
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="numberOfStudent"
              stroke="#8884d8"
              //   activeDot={{ r: 8 }}
            />
            {/* <Line type="monotone" dataKey="numberOfStudent" stroke="#82ca9d" /> */}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CustomLineChart;
