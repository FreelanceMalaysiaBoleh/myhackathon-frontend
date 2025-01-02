import { useQuery } from "react-query";
import axios from "axios";
import { DataProps } from "@/pages/report";

// Define the function to fetch data using axios
const fetchScamReport = async (status: string) => {
    const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/get-scam-report?status=${status}`
    );
    return response.data;
};

export const useGetCaseByStatus = (status: string) => {
    // Use useQuery to fetch the data and return isLoading, error, and data
    const { data, isLoading, error } = useQuery<Array<DataProps>>([
        `get${status}Case`, status
    ],
        () => fetchScamReport(status), {
        enabled: !!status, // Ensure query runs only if caseID is provided
    });

    return {
        data,
        isLoading,
        error
    };
};