import { Cell, Pie, PieChart, Tooltip } from "recharts";

const CustomPieChart = ({ totalscore: score = 5 }) => {
  const data = [{ name: "Score", value: score }];

  // Blue for score, Light blue for remaining
  const COLORS = ["#2c78ff", "#d4e9ff"];

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

      {/* Pie Chart with Icon Inside */}
      <div className="flex justify-center items-center mt-5">
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            innerRadius={70} // Creates a thick border effect
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
          >
            {/* Assign colors to slices (Score is blue, Remaining is light blue) */}
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index] || 0} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default CustomPieChart;
