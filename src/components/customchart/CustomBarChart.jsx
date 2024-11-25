const CustomBarChart = ({ totalscore = 30 }) => {
  const Data = [
    { name: "HTML Tools, Forms, History", score: 80 },
    { name: "Tags & References in HTML", score: 60 },
    { name: "Tables & References in HTML", score: 24 },
    { name: "Table & CSS Basics", score: 96 },
  ];

  // Function to determine color based on score
  const getColorForScore = (score) => {
    if (score > 90) return "#00953c";
    if (score >= 80 && score <= 90) return "#2c78ff";
    if (score >= 60 && score < 80) return "#fd961b";
    if (score < 40) return "#C70039"; // Under 40
    return "gray"; // Default color
  };

  const hexToRgba = (hex, alpha) => {
    const [r, g, b] = hex
      .replace(/^#/, "")
      .match(/.{2}/g)
      .map((x) => parseInt(x, 16));
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <div>
      <h2 className="font-bold">Syllabus Wise Analysis</h2>
      <div className="pt-5">
        {Data.map((item, index) => {
          const color = getColorForScore(item.score);
          return (
            <div key={index} className="mb-4">
              {/* Syllabus Name */}
              <div className="mb-2 text-sm font-medium">{item.name}</div>
              <div className="gap-4 flex items-center">
                {/* Background Bar */}
                <div
                  style={{
                    backgroundColor: hexToRgba(color, 0.1),
                  }}
                  className="w-full h-2 rounded-full relative"
                >
                  {/* Filled Bar */}
                  <div
                    style={{
                      width: `${item.score}%`,
                      backgroundColor: color,
                    }}
                    className="h-2 rounded-full"
                  ></div>
                </div>
                {/* Score Display */}
                <div className="ml-3 text-sm font-semibold" style={{ color }}>
                  {item.score}%
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomBarChart;
