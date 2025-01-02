import { DataProps } from "@/pages/report";
import DefaultButton from "../main/Button";
import Divider from "../main/Divider";
import TextInput from "../main/FormInput";
import { ResolveCase } from "@/services/CaseServices";
import { useRouter } from "next/router";
import { useState } from "react";

const ResponseSection = ({ data }: { data: DataProps }) => {

    const router = useRouter();

    const [error, setError] = useState("");

    const handleResolveCase = async () => {
        const res = await ResolveCase(data.CaseID);
        if (res.status == 200) {
            router.push("/report")
            return
        }

        setError(res.data);
    }

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", marginBottom: "15px" }}>
                <div style={{ marginLeft: "auto" }}>
                    <DefaultButton text="Resolve Case" onClick={handleResolveCase} />
                </div>
                {
                    error
                        ?
                        <p style={{ color: "red", marginLeft: "auto", marginTop: "10px" }}>
                            {error}
                        </p>
                        :
                        <></>
                }
            </div>

            <div style={{ border: "0.5px solid #a6a6a6", borderRadius: 10, width: "100%", paddingTop: 15, paddingLeft: 30, paddingRight: 30, paddingBottom: 15, boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <h2 style={{ fontSize: "24px" }}>Response</h2>
                    <div style={{ marginLeft: "auto" }}>
                        <DefaultButton text="Send Message" onClick={() => {
                            alert("Message has been sent successfully!");
                        }} />
                    </div>
                </div>
                <Divider width="100%" />

                <div style={{ width: "100%", display: "flex", flexDirection: "row", gap: "30px" }}>
                    <div style={{ width: "50%" }}>
                        <TextInput label="Status" formkey="status" placeholder="" required={true} />
                    </div>
                    <h2 style={{ fontSize: "24px", marginLeft: "20px" }}>Risk Level: </h2>

                    <div style={{ backgroundColor: "#D70000", height: "32px", paddingLeft: 20, paddingRight: 20, borderRadius: 10 }}>
                        <h2 style={{ fontSize: "24px", color: "white" }}>{data.RiskLevel} Risk</h2>
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
        </>
    )
}

export default ResponseSection;