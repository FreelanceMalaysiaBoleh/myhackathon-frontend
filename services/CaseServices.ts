import axios from "axios"

const ResolveCase = async (caseId: string): Promise<{ status: number, data: string }> => {
    try {

        const payload = {
            CaseID: caseId
        }
        const response = await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/resolve-case`, payload);
        console.log(response.data);
        return {
            status: 200,
            data: response.data
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(error);
            // console.error("Axios Error:", error.response?.data || error.message);
            return {
                status: error.response?.status || 500,
                data: error.response?.data || error.message || "Unknown Axios error",
            };
        } else {
            // Non-Axios error handling
            console.error("Unexpected Error:", error);
            return {
                status: 500,
                data: "An unexpected error occurred.",
            };
        }
    }
}

export {
    ResolveCase
}