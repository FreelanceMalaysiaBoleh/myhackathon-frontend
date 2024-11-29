import Image from "next/image"
import DefaultButton from "./Button"
import logo from "../../public/images/royal_logo.png"
import bell from "../../public/images/notification-bell.png"

const Header = () => {
    return (
        <div style={{ height: "155px" }}>
            <div style={{ width: "100%", height: "91px", display: "flex", flexDirection: "row", alignItems: "center", paddingLeft: 20, paddingRight: 20 }}>
                <Image src={logo.src} width={117} height={52} alt="logo" />

                <div style={{ marginLeft: 20 }}>
                    <p style={{ fontWeight: "bold", fontSize: "16px" }}>National Anti-Financial Crime Centre (NFCC)</p>
                    <p style={{ fontSize: "16px" }}>Anti-Scam Management Website</p>
                </div>

                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginLeft: "auto" }}>
                    <div style={{
                        cursor: "pointer"
                    }}>
                        <Image src={bell.src} width={39} height={39} alt="notification bell" />
                    </div>

                    <div style={{ marginLeft: 30 }}></div>
                    <DefaultButton text="Login" onClick={() => console.log("login")} />
                </div>
            </div>
            <div style={{
                width: "100%",
                height: "61px",
                backgroundColor: "#000065",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "60px"
            }}>
                <HeaderButtons text="HOME" onClick={() => { }} />
                <HeaderButtons text="REPORT MANAGEMENT" onClick={() => { }} />
                <HeaderButtons text="COMMUNITY" onClick={() => { }} />
                <HeaderButtons text="ACTIVITY LOG" onClick={() => { }} />
            </div>
        </div >
    )
}

interface HeaderButtonProps {
    text: string,
    onClick: () => void,
}

const HeaderButtons = ({ text, onClick }: HeaderButtonProps) => {
    return (
        <div
            onClick={onClick}
            style={{ height: "100%", display: "flex", alignItems: "center", cursor: "pointer", fontSize: "20px", color: "white" }}
            onMouseEnter={(e) => (e.currentTarget.style.fontWeight = "bold")}
            onMouseLeave={(e) => (e.currentTarget.style.fontWeight = "normal")}
        >
            {text}
        </div>
    )
}

export default Header;