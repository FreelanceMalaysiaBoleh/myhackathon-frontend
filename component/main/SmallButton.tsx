interface ButtonProps {
    onClick: () => void,
    text?: string
}

const SmallButton = ({ text = "Click Me", onClick }: ButtonProps) => {
    return (
        <div
            style={{
                borderRadius: 5,
                height: "44px",
                backgroundColor: "#0048B4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "226px",
                cursor: "pointer", // Pointer cursor on hover
                transition: "background-color 0.3s", // Smooth transition for hover
            }}
            onClick={onClick} // Default onClick handler
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#3366CC")} // Hover effect
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0048B4")} // Reset on hover out
        >
            <p style={{ color: "white", fontWeight: "bold", fontSize: "16px" }}>{text}</p>
        </div>
    )
}

export default SmallButton