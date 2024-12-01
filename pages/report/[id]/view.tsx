import MainLayout from "@/component/main/MainLayout";
import GeneralDetails from "@/component/report/GeneralDetails";
import ResponseSection from "@/component/report/ResponseSection";

const ReportView = () => {
    return (
        <MainLayout>
            <ResponseSection />
            <div
                style={{
                    border: "0.5px solid #a6a6a6",
                    marginTop: "50px",
                    borderRadius: 10,
                    width: "100%",
                    paddingTop: 15,
                    paddingLeft: 30,
                    paddingRight: 30,
                    paddingBottom: 15,
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)"
                }}>
                    <GeneralDetails />
            </div>
        </MainLayout>
    );
}

export default ReportView;