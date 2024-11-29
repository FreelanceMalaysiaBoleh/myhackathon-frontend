interface ButtonProps {
    onClick: () => void,
    text?: string
}

const DefaultButton = ({ text = "Click Me", onClick }: ButtonProps) => {
    return (
        <div
            style={{
                borderRadius: 5,
                height: "61px",
                backgroundColor: "#000065",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "226px",
                cursor: "pointer", // Pointer cursor on hover
                transition: "background-color 0.3s", // Smooth transition for hover
            }}
            onClick={onClick} // Default onClick handler
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#000080")} // Hover effect
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#000065")} // Reset on hover out
        >
            <p style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}>{text}</p>
        </div>
    )
}

export default DefaultButton