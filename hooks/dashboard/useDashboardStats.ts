import { useQuery } from "react-query";
import axios from "axios";

// Define the function to fetch data using axios
const getStatistic = async () => {
    const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/get-statistic`
    );
    return response.data;
};

export const useDashboardStats = () => {
    // Use useQuery to fetch the data and return isLoading, error, and data
    const { data, isLoading, error } = useQuery<{ total_cases: number, pending_cases: number, resolved_cases: number }>("getStatistics", getStatistic);

    return {
        data,
        isLoading,
        error
    };
};