import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    { month: "Jan", cases: 350, percentage: "5.1%", forecast: null },
    { month: "Feb", cases: 660, percentage: "9.5%", forecast: null },
    { month: "Mar", cases: 960, percentage: "13.9%", forecast: null },
    { month: "Apr", cases: 330, percentage: "4.8%", forecast: null },
    { month: "May", cases: 860, percentage: "12.4%", forecast: null },
    { month: "Jun", cases: 260, percentage: "3.8%", forecast: null },
    { month: "Jul", cases: 720, percentage: "10.4%", forecast: null },
    { month: "Aug", cases: 940, percentage: "13.6%", forecast: null },
    { month: "Sep", cases: 240, percentage: "3.5%", forecast: null },
    { month: "Oct", cases: 700, percentage: "10.1%", forecast: null },
    { month: "Nov", cases: 900, percentage: "13.3%", forecast: 900 }, // Forecast overlaps
    { month: "Dec", cases: null, percentage: null, forecast: 10 }, // Predicted drop
  ];
const CaseTrendChart = () => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />

                {/* Actual Data Line */}
                <Line
                    type="monotone"
                    dataKey="cases"
                    stroke="#0000FF"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                    name="Actual Cases"
                />

                {/* Forecast Line */}
                <Line
                    type="monotone"
                    dataKey="forecast"
                    stroke="#FF00FF"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    strokeDasharray="5 5" // Dashed line for forecast
                    name="AI Forecast"
                />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default CaseTrendChart