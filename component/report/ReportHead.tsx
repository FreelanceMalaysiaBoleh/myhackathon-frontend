import SearchInput from "../main/SearchInput";
import filter from "../../public/images/filter.png"
import Image from "next/image";

const ReportHead = ({ text }: { text: string }) => {
    return (
        <div style={{
            width: "100%",
            paddingLeft: 10,
            marginTop: 30,
            display: "flex",
            flexDirection: "row"
        }}>
            <div style={{
                width: "90%",
                display: "flex",
                flexDirection: "row"
            }}>
                <div style={{ width: "15%", marginRight: 20 }}>
                    <h2 style={{ fontSize: "24px" }}>{text}</h2>
                </div>

                <div style={{ width: "75%", marginRight: 20 }}>
                    <SearchInput />
                </div>

                <div style={{
                    cursor: "pointer",
                    marginLeft: "auto"
                }}>
                    <Image src={filter.src} height={32} width={32} alt="filter" />
                </div>
            </div>
        </div>
    )
}

export default ReportHead;