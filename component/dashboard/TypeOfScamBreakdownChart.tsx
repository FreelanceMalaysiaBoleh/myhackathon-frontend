import {
    PieChart,
    Pie,
    Cell,
    Legend,
    ResponsiveContainer,
    LabelList
} from "recharts";

const data = [
    { name: "Phishing Scams", value: 400 },
    { name: "Online Shopping Scams", value: 300 },
    { name: "Investment Scams", value: 200 },
    { name: "Tech Support Scams", value: 278 },
    { name: "Identity Theft", value: 189 },
    { name: "Lottery Prize Scams", value: 50 },
];

const COLORS = [
    "#8884d8", // Phishing Scams
    "#8dd1e1", // Online Shopping Scams
    "#82ca9d", // Investment Scams
    "#ffc658", // Tech Support Scams
    "#ff8042", // Identity Theft
    "#ffb6c1", // Lottery Prize Scams
];

const TypeOfScamBreakdowChart = () => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    outerRadius="80%"
                    labelLine={false} // Disable default labels
                    label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
                        // Custom labels to place outside the pie
                        const RADIAN = Math.PI / 180;
                        const radius = outerRadius + 10;
                        const x = cx + radius * Math.cos(-midAngle * RADIAN);
                        const y = cy + radius * Math.sin(-midAngle * RADIAN);

                        return (
                            <text
                                x={x}
                                y={y}
                                fill="black"
                                textAnchor={x > cx ? "start" : "end"}
                                dominantBaseline="central"
                            >
                                {data[index].name}: {value}
                            </text>
                        );
                    }}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>

                {/* Custom Legend on the side */}
                <Legend
                    layout="vertical" // This makes the legend vertical
                    verticalAlign="middle" // Centers the legend vertically
                    align="right" // Aligns the legend to the right side
                />
            </PieChart>
        </ResponsiveContainer>
    );
}

export default TypeOfScamBreakdowChart;