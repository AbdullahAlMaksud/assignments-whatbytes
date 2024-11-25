import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const CustomPieChart = ({ totalscore: score }) => {
  const data = [
    { name: "Score", value: (score = 5) },
    { name: "Remaining", value: 15 - score },
  ];

  return (
    <div className="pt-5">
      <div className="flex justify-between items-center pb-5">
        <h2 className="font-bold">Question Analysis</h2>
        <span className="text-blue-800 font-black">{score || 0}/15</span>
      </div>
      <div className="flex justify-between items-start gap-3">
        <div className="text-gray-600">
          <span className="font-bold text-gray-700">
            You scored {score || "0"} questions correctly out of 15.
          </span>{" "}
          However, there is still room for improvement.
        </div>
      </div>

      {/* Pie Chart */}
      <div
        className="flex justify-center items-center mt-5"
        style={{ width: "100%", height: 400 }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              dataKey="value"
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              isAnimationActive={true}
            >
              <Cell fill="#2c78ff" />
              <Cell fill="#d4e9ff" />
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CustomPieChart;
