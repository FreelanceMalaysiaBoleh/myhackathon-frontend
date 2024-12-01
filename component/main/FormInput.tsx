interface InputProps {
    label: string;
    formkey: string
    placeholder: string;
    required?: boolean;
}

const TextInput: React.FC<InputProps> = ({ label, placeholder, required, formkey }) => {
    return (
        <div style={{ marginBottom: "20px" }}>
            <label
                htmlFor="fullName"
                style={{
                    display: "block",
                    fontWeight: "bold",
                    marginBottom: "10px",
                    fontSize: "24px"
                }}
            >
                {label}
                {required && <span style={{ color: "black" }}>*</span>}
            </label>
            <input
                type="text"
                id={formkey}
                name={formkey}
                placeholder={placeholder}
                required={required}
                style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "20px",
                    border: "1px solid #ccc",
                    fontSize: "16px",
                }}
            />
        </div>
    );
};

export default TextInput;