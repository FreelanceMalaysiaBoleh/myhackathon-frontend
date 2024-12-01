import Divider from "../main/Divider";
import TextInput from "../main/FormInput";

const ResponseSection = () => {
    return (
        <div style={{ border: "0.5px solid #a6a6a6", borderRadius: 10, width: "100%", paddingTop: 15, paddingLeft: 30, paddingRight: 30, paddingBottom: 15, boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
            <h2 style={{ fontSize: "24px" }}>Response</h2>
            <Divider width="100%" />

            <div style={{ width: "100%", display: "flex", flexDirection: "row", gap: "30px" }}>
                <div style={{ width: "50%" }}>
                    <TextInput label="Status" formkey="status" placeholder="" required={true} />
                </div>
                <h2 style={{ fontSize: "24px", marginLeft: "20px" }}>Risk Level: </h2>

                <div style={{ backgroundColor: "#D70000", height: "32px", paddingLeft: 20, paddingRight: 20, borderRadius: 10 }}>
                    <h2 style={{ fontSize: "24px", color: "white" }}>High Risk</h2>
                </div>

                <p style={{ color: "#073DFF", textDecoration: "underline", fontSize: "24px" }}>Edit</p>
            </div>

            <div style={{ marginBottom: "20px" }}>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "10px" }}>
                    <label
                        htmlFor="fullName"
                        style={{
                            display: "block",
                            fontWeight: "bold",

                            fontSize: "24px"
                        }}
                    >
                        Message
                        <span style={{ color: "black" }}>*</span>
                    </label>
                    <div style={{
                        cursor: "pointer",
                        color: "#073DFF",
                        textDecoration: "underline",
                        fontSize: "24px",
                        marginLeft: "auto"
                    }}>
                        <p>AI Assistance</p>
                    </div>
                </div>
                <input
                    type="text"
                    id={"message"}
                    name={"message"}
                    placeholder={""}
                    required={true}
                    style={{
                        width: "100%",
                        height: "163px",
                        padding: "10px",
                        borderRadius: "20px",
                        border: "1px solid #ccc",
                        fontSize: "16px",
                    }}
                />
            </div>
        </div>
    )
}

export default ResponseSection;