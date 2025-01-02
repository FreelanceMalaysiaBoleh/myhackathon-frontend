import Link from "next/link";
import SmallButton from "../main/SmallButton";
import ReportHead from "./ReportHead";
import { useRouter } from "next/router";
import { DataProps } from "@/pages/report";

const PendingCaseTable = ({ data, isLoading }: { data: Array<DataProps> | undefined, isLoading: boolean }) => {
    const router = useRouter();
    return (
        <>
            <ReportHead text="Pending Case" />
            <div style={{ width: "100%", borderRadius: 10, marginTop: 35, overflow: "hidden", backgroundColor: "#f0f0f0", paddingBottom: 10 }}>
                <table style={{ width: "100%", borderCollapse: "collapse", borderRadius: 10 }}>
                    <thead>
                        <tr style={{ backgroundColor: "#f0f0f0" }}>
                            {/* Table headers with fixed column width */}
                            <th style={{ padding: "15px", textAlign: "left", width: "5%" }}>
                                Case Id
                            </th>
                            <th style={{ padding: "15px", textAlign: "left", width: "20%" }}>
                                Type of Scam
                            </th>
                            <th style={{ padding: "15px", textAlign: "left", width: "15%" }}>
                                Area
                            </th>
                            <th style={{ padding: "15px", textAlign: "left", width: "15%" }}>
                                Date of Incident
                            </th>
                            <th style={{ padding: "15px", textAlign: "left", width: "30%" }}>
                                Details
                            </th>
                            <th style={{ padding: "15px", textAlign: "left", width: "10%" }}>
                                Risk Level
                            </th>
                            <th style={{ padding: "15px", textAlign: "left", width: "10%" }}>
                                Response
                            </th>
                        </tr>
                    </thead>
                    <tbody style={{ backgroundColor: "white" }}>
                        {/* Loop through the data and display each row */}
                        {data && !isLoading && data?.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                <td
                                    style={{
                                        padding: "15px",
                                        textAlign: "left",
                                        border: "1px solid #ddd",
                                        borderRadius: "0 0 0 10px",
                                        wordWrap: "break-word",
                                    }}
                                >
                                    <Link style={{ color: "#073DFF", textDecoration: "underline" }} href={"/"}>{row.CaseID}</Link>
                                </td>
                                <td
                                    style={{
                                        padding: "15px",
                                        textAlign: "left",
                                        border: "1px solid #ddd",
                                        wordWrap: "break-word", 
                                    }}
                                >
                                    {row.TypeOfScam}
                                </td>
                                <td
                                    style={{
                                        padding: "15px",
                                        textAlign: "left",
                                        border: "1px solid #ddd",
                                        wordWrap: "break-word",  // Ensure text wraps within the cell
                                    }}
                                >
                                    {row.Area}
                                </td>
                                <td
                                    style={{
                                        padding: "15px",
                                        textAlign: "left",
                                        border: "1px solid #ddd",
                                        wordWrap: "break-word",  // Ensure text wraps within the cell
                                    }}
                                >
                                    {row.DateOfIncident}
                                </td>
                                <td
                                    style={{
                                        padding: "15px",
                                        textAlign: "left",
                                        border: "1px solid #ddd",
                                        wordWrap: "break-word",  // Ensure text wraps within the cell
                                    }}
                                >
                                    {row.Details}
                                </td>
                                <td
                                    style={{
                                        padding: "15px",
                                        textAlign: "left",
                                        border: "1px solid #ddd",
                                        fontWeight: "bold",
                                        color: row.RiskLevel === "High" || "Tinggi" ? "#D70000" : row.RiskLevel === "Medium" ? "#E69500" : "#009E1D",
                                        wordWrap: "break-word",  // Ensure text wraps within the cell
                                    }}
                                >
                                    {row.RiskLevel}
                                </td>
                                <td
                                    style={{
                                        padding: "15px",
                                        textAlign: "left",
                                        border: "1px solid #ddd",
                                        wordWrap: "break-word",  // Ensure text wraps within the cell
                                    }}
                                >
                                    <SmallButton text="RESPOND" onClick={() => {
                                        router.push(`/report/${row.CaseID}/view`)
                                    }} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default PendingCaseTable;