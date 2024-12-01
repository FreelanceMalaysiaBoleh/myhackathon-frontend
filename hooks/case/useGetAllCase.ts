import { useQuery } from "react-query";
import axios from "axios";

// Define the function to fetch data using axios
const fetchScamReport = async () => {
    const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/get-scam-report`
    );
    return response.data;
};

export const useGetAllCase = () => {
    // Use useQuery to fetch the data and return isLoading, error, and data
    const { data, isLoading, error } = useQuery("getAllCase", fetchScamReport);

    return {
        data,
        isLoading,
        error
    };
};