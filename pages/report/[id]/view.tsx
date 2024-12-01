import Divider from "@/component/main/Divider";
import TextInput from "@/component/main/FormInput";
import MainLayout from "@/component/main/MainLayout";

const ReportView = () => {
    return (
        <MainLayout>
            <div style={{ border: "0.5px solid #a6a6a6", borderRadius: 10, width: "100%", paddingTop: 15, paddingLeft: 30, paddingRight: 30, paddingBottom: 15 }}>
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

            </div>
        </MainLayout>
    );
}

export default ReportView;