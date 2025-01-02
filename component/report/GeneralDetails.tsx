import { DataProps } from "@/pages/report";

const GeneralDetails = ({ data }: { data: DataProps }) => {
    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
            <div style={{ width: "40%", paddingTop: "30px" }}>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "24px" }}>
                    <div style={{ width: "230px" }}>
                        <h2 style={{ fontSize: "24px" }}>Case ID: </h2>
                    </div>
                    <h2 style={{ fontSize: "24px" }}>{data.CaseID}</h2>
                </div>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "24px" }}>
                    <div style={{ width: "230px" }}>
                        <h2 style={{ fontSize: "24px" }}>Area: </h2>
                    </div>
                    <h2 style={{ fontSize: "24px", fontWeight: "normal" }}>{data.Area}</h2>
                </div>
                {/* <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "24px" }}>
                    <div style={{ width: "230px" }}>
                        <h2 style={{ fontSize: "24px" }}>Full Name: </h2>
                    </div>
                    <h2 style={{ fontSize: "24px", fontWeight: "normal" }}>Brayan Wilson</h2>
                </div> */}
                {/* <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "24px" }}>
                    <div style={{ width: "230px" }}>
                        <h2 style={{ fontSize: "24px" }}>Contact Number: </h2>
                    </div>
                    <h2 style={{ fontSize: "24px", fontWeight: "normal" }}>012-345 6789</h2>
                </div> */}

            </div>
            <div style={{ width: "40%", paddingTop: "30px" }}>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "24px" }}>
                    <div style={{ width: "230px" }}>
                        <h2 style={{ fontSize: "24px" }}>Date of Report: </h2>
                    </div>
                    <h2 style={{ fontSize: "24px", fontWeight: "normal" }}>{data.DateOfIncident}</h2>
                </div>
                {/* <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "24px" }}>
                    <div style={{ width: "230px" }}>
                        <h2 style={{ fontSize: "24px" }}>Email Address: </h2>
                    </div>
                    <h2 style={{ fontSize: "24px", color: "#073DFF", textDecoration: "underline" }}>brayan@gmail.com</h2>
                </div> */}
            </div>

            <div style={{ backgroundColor: "#D70000", height: "32px", paddingLeft: 20, paddingRight: 20, borderRadius: 10, marginTop: 25 }}>
                <h2 style={{ fontSize: "24px", color: "white" }}>{data.RiskLevel} Risk</h2>
            </div>
        </div>
    )
}

export default GeneralDetails;