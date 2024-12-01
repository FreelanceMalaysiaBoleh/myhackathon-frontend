import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerProps {
    selectedDate: Date | null;
    onDateChange: (date: Date | null) => void;
}

const DatePickerComponent = ({ selectedDate, onDateChange }: DatePickerProps) => {
    return (
        <div>
            <DatePicker
                selected={selectedDate}
                onChange={onDateChange}
                dateFormat="yyyy-MM-dd"
                placeholderText="Select a date"
                className="custom-datepicker"
            />
        </div>
    );
};

export default DatePickerComponent;