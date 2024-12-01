import Image from "next/image"
import DefaultButton from "./Button"
import logo from "../../public/images/royal_logo.png"
import bell from "../../public/images/notification-bell.png"
import pinpaper from "../../public/images/pinpaper.png"
import { useRouter } from "next/router"

const Header = () => {

    const router = useRouter();

    return (
        <div style={{ height: "155px" }}>
            <div style={{ width: "100%", height: "91px", display: "flex", flexDirection: "row", alignItems: "center", paddingLeft: 20, paddingRight: 20 }}>
                <Image src={logo.src} width={117} priority height={52} alt="logo" />

                <div style={{ marginLeft: 20 }}>
                    <p style={{ fontWeight: "bold", fontSize: "32px" }}>JagaSentral</p>
                    <p style={{ fontSize: "16px" }}>Anti-Scam Management Website</p>
                </div>

                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginLeft: "auto" }}>
                    <div style={{
                        cursor: "pointer"
                    }}>
                        <Image src={pinpaper.src} width={39} height={39} alt="pinpaper" />
                    </div>
                    <div style={{
                        cursor: "pointer",
                        marginLeft: 30
                    }}>
                        <Image src={bell.src} width={39} height={39} alt="notification bell" />
                    </div>

                    <div style={{ marginLeft: 35 }}></div>
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
                <HeaderButtons
                    text="HOME"
                    selected={router.asPath == "/"}
                    onClick={() => { router.push("/") }}
                />
                <HeaderButtons
                    text="REPORT MANAGEMENT"
                    selected={router.asPath.includes("/report")}
                    onClick={() => { router.push("/report") }}
                />
                <HeaderButtons
                    text="COMMUNITY"
                    selected={router.asPath.includes("/community")}
                    onClick={() => { router.push("/community") }}
                />
                <HeaderButtons
                    text="BLOG"
                    selected={router.asPath.includes("/blog")}
                    onClick={() => { router.push("/blog") }}
                />
                <HeaderButtons
                    text="ACTIVITY LOG"
                    selected={router.asPath.includes("/activity")}
                    onClick={() => { router.push("/activity") }}
                />
            </div>
        </div >
    )
}

interface HeaderButtonProps {
    text: string,
    selected: boolean,
    onClick: () => void,
}

const HeaderButtons = ({ text, selected, onClick }: HeaderButtonProps) => {
    return (
        <div
            onClick={onClick}
            style={{ height: "100%", display: "flex", fontWeight: selected ? "bold" : "normal", alignItems: "center", cursor: "pointer", fontSize: "20px", color: "white" }}
            onMouseEnter={(e) => {
                if (!selected) return e.currentTarget.style.fontWeight = "bold"
            }}
            onMouseLeave={(e) => {
                if (!selected) return e.currentTarget.style.fontWeight = "normal"
            }}
        >
            {text}
        </div >
    )
}

export default Header;