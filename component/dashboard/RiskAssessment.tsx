

const RiskAssessment = () => {

    const data = [
        ["Type of Scam", "Scam Detail/ Characteristics", "Number of Similar Cases", "Risk Level", "Suggested Solution"],

        ["Phishing Scam", ["Fake emails pretending to be from banks", "Links to fake login pages"], "5,000", "**High**", ["Educate users about phishing", "Implement email filters"]],

        ["Online Shopping Scam", ["Fake e-commerce websites", "Non-delivery of goods", "Unusually low prices"], "3,200", "**High**", ["Verify seller credibility", "Encourage secure payment methods"]],

        ["Investment Scam", ["Promises of high returns", "Pressure to invest quickly", "Lack of registration or licensing"], "1,800", "Medium", ["Verify investment platforms", "Raise awareness about scam indicators"]],

        ["Tech Support Scam", ["Fake calls claiming to fix devices", "Requests for remote access", "Demand for immediate payment"], "1,200", "Medium", ["Educate users about legitimate support", "Block scammer numbers"]],

        ["Identity Theft", ["Use of stolen personal data", "Unauthorized account openings", "Fake identification documents"], "900", "Low", ["Encourage strong password practices", "Secure personal data storage"]],

        ["Lottery/ Prize Scam", ["Claims of winning prizes", "Requests for advance payment or fees", "Emails or calls from unknown sources"], "700", "Low", ["Raise awareness about legitimate prize processes", "Block/report suspicious sources"]],
    ];

    return (
        <div style={{ width: "100%", border: "1px solid black" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr style={{ backgroundColor: "#f0f0f0" }}>
                        {data[0].map((header, index) => (
                            <th
                                key={index}
                                style={{
                                    border: "1px solid black",
                                    padding: "25px",
                                    textAlign: "left",
                                }}
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.slice(1).map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td
                                    key={cellIndex}
                                    style={{
                                        border: "1px solid black",
                                        padding: "25px",
                                        textAlign: "left",
                                        fontWeight: cell == "**High**" ? "bold" : "normal"
                                    }}
                                >
                                    {/* Check if the cell contains a list and render it */}
                                    {Array.isArray(cell) ? (
                                        <ul>
                                            {cell.map((item, index) => (
                                                <li style={{marginBottom: "5px"}} key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        cell // If not a list, just render the text
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default RiskAssessment;