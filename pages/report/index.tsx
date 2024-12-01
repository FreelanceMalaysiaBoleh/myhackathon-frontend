import Divider from "@/component/main/Divider";
import MainLayout from "@/component/main/MainLayout";
import { StatsBox } from "..";
import PendingCaseTable from "@/component/report/PendingCaseTable";
import ResolveCaseTable from "@/component/report/ResolveCaseTable";
import { useGetAllCase } from "@/hooks/case/useGetAllCase";

// TODO: setup an actual types constant file
export interface DataProps {
    Area: string;
    Details: string;
    DateOfIncident: string;
    RiskLevel: string
    Response: string
    CaseID: string;
    TypeOfScam: string
}

const ReportManagement = () => {

    const { data, isLoading } = useGetAllCase();

    console.log("data", data);
    return (
        <MainLayout>
            <div style={{ width: "100%", paddingLeft: 10 }}>
                <h1 style={{ fontSize: "32px" }}>REPORT MANAGEMENT</h1>
            </div>
            <Divider />

            <div style={{ width: "100%", display: "flex", gap: "50px", marginTop: "30px" }}>
                <StatsBox text="TOTAL SCAM REPORTS" number={1234} color="#2563EB" />
                <StatsBox text="RESOLVED CASES" number={789} color="#16A34A" />
                <StatsBox text="PENDING CASES" number={445} color="#DC2626" />
            </div>

            <PendingCaseTable data={data} isLoading={isLoading} />
            <div style={{marginTop: 30}}></div>
            <ResolveCaseTable data={data} isLoading={isLoading}/>

        </MainLayout>
    )
}

export default ReportManagement;