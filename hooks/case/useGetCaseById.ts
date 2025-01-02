import { useQuery } from "react-query";
import axios from "axios";
import { DataProps } from "@/pages/report";

// Define the function to fetch data using axios
const fetchScamReport = async (caseID: string) => {
    if (!caseID) {
        throw new Error("CaseID is required");
    }

    const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/get-case-detail?CaseID=${caseID}`
    );

    return response.data;
};

// Define the custom hook to fetch all case details
export const useGetCaseById = (caseID: string) => {
    // Use useQuery to fetch the data and return isLoading, error, and data
    const { data, isLoading, error } = useQuery<DataProps>([
        `getCaseById${caseID}`,
        caseID
    ], () => fetchScamReport(caseID), {
        enabled: !!caseID, // Ensure query runs only if caseID is provided
    });

    return {
        data,
        isLoading,
        error,
    };
};