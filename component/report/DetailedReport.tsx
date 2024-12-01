const DetailedReport = () => {
    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
            <div style={{ width: "40%", paddingTop: "30px" }}>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "24px" }}>
                    <div style={{ width: "230px" }}>
                        <h2 style={{ fontSize: "24px" }}>Subject: </h2>
                    </div>
                    <h2 style={{ fontSize: "24px", fontWeight: "normal" }}>Scammed by Shopxx</h2>
                </div>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "24px" }}>
                    <div style={{ width: "230px" }}>
                        <h2 style={{ fontSize: "24px" }}>Date of Incident: </h2>
                    </div>
                    <h2 style={{ fontSize: "24px", fontWeight: "normal" }}>2024-11-28</h2>
                </div>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "24px" }}>
                    <div style={{ width: "230px" }}>
                        <h2 style={{ fontSize: "24px" }}>Amount Loss: </h2>
                    </div>
                    <h2 style={{ fontSize: "24px", fontWeight: "normal" }}>RM 500</h2>
                </div>

            </div>
            <div style={{ width: "40%", paddingTop: "30px" }}>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: "53px" }}>
                    <div style={{ width: "230px" }}>
                        <h2 style={{ fontSize: "24px" }}>Type of Scam: </h2>
                    </div>
                    <h2 style={{ fontSize: "24px", fontWeight: "normal" }}>Online Shopping Fraud</h2>
                </div>
            </div>
        </div>
    )
}

export default DetailedReport;