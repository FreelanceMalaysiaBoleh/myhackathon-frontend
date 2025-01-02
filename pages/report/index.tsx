import Divider from "@/component/main/Divider";
import MainLayout from "@/component/main/MainLayout";
import { StatsBox } from "..";
import PendingCaseTable from "@/component/report/PendingCaseTable";
import ResolveCaseTable from "@/component/report/ResolveCaseTable";
import { useGetCaseByStatus } from "@/hooks/case/useGetCaseByStatus";
import { useDashboardStats } from "@/hooks/dashboard/useDashboardStats";

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

    const { data: pendingCases, isLoading: isLoadingPending } = useGetCaseByStatus("Pending");
    const { data: resolvedCases, isLoading: isLoadingResolved } = useGetCaseByStatus("Resolved");
    const { data, isLoading } = useDashboardStats();

    return (
        <MainLayout>
            <div style={{ width: "100%", paddingLeft: 10 }}>
                <h1 style={{ fontSize: "32px" }}>REPORT MANAGEMENT</h1>
            </div>
            <Divider />

            <div style={{ width: "100%", display: "flex", gap: "50px", marginTop: "30px" }}>
                {
                    data && !isLoading
                        ?
                        <>
                            <StatsBox text="TOTAL SCAM REPORTS" number={data.total_cases} color="#2563EB" />
                            <StatsBox text="RESOLVED CASES" number={data.resolved_cases} color="#16A34A" />
                            <StatsBox text="PENDING CASES" number={data.pending_cases} color="#DC2626" />
                        </>
                        :
                        <></>
                }   
            </div>

            <PendingCaseTable data={pendingCases} isLoading={isLoadingPending} />
            <div style={{ marginTop: 30 }}></div>
            <ResolveCaseTable data={resolvedCases} isLoading={isLoadingResolved} />

        </MainLayout>
    )
}

export default ReportManagement;