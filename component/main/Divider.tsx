const Divider = ({ width = "100%" }: { width?: string }) => {
    return <div
        style={{
            border: "0.5px solid #a6a6a6",
            width: width,
            marginTop: 15,
            marginBottom: 25
        }}
    ></div>
}

export default Divider;