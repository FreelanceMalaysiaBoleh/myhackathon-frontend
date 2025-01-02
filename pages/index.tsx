import MainLayout from "@/component/main/MainLayout";
import CaseTrendChart from "@/component/dashboard/CaseTrendChart";
import TypeOfScamBreakdowChart from "@/component/dashboard/TypeOfScamBreakdownChart";
import RiskAssessment from "@/component/dashboard/RiskAssessment";
import MapComponent from "@/component/dashboard/MapComponent";
import DatePickerComponent from "@/component/main/DatePicker";
import { useState } from "react";
import SmallButton from "@/component/main/SmallButton";
import Divider from "@/component/main/Divider";
import { useDashboardStats } from "@/hooks/dashboard/useDashboardStats";

export default function Home() {

  const { data, isLoading } = useDashboardStats();
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);


  return (
    <>
      <MainLayout>
        <div style={{ display: "flex", flexDirection: "row", width: "100%", alignItems: "center" }}>
          <p style={{ fontWeight: "bold", fontSize: "24px", marginRight: 20 }}>Filter:</p>
          <DatePickerComponent selectedDate={startDate} onDateChange={setStartDate} />
          <div style={{ border: "1px solid black", width: "10px", marginLeft: 10, marginRight: 10 }}></div>
          <DatePickerComponent selectedDate={endDate} onDateChange={setEndDate} />

          <div style={{ marginLeft: "auto" }}>
            <SmallButton text="AI Report Generator" onClick={() => { }} />
          </div>
        </div>

        <Divider />

        <h1>2024 Scam Dashboard: Insights and Analysis</h1>

        <div style={{ display: "flex", flexDirection: "row", width: "100%", marginTop: "30px" }}>
          <MapComponent />
          <div style={{ minWidth: "300px", width: "auto", textAlign: "center", backgroundColor: "#0e1626", marginLeft: "5px", flex: 1, display: "flex", flexDirection: "column", padding: 40, alignItems: "center" }}>
            <h2 style={{ color: "white", fontSize: "13px" }}>Malaysian Scam Cases Heatmap 2024</h2>
            <div style={{ border: "1px solid white", width: "80%", marginTop: 20, marginBottom: 20 }}></div>

            <StateRow name="Penang" number="1200" />
            <StateRow name="Selangor" number="800" />
            <StateRow name="Johor" number="500" />
            <StateRow name="Kuala Lumpur" number="300" />
            <StateRow name="Sabah" number="200" />
            <StateRow name="Sarawak" number="100" />
          </div>
        </div>

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

        <div style={{ width: "100%", padding: 20, border: "1px solid gray", marginTop: 30, borderRadius: "5px  " }}>
          <h1 style={{ marginBottom: 20, fontSize: "24px" }}>Scam Cases Trend in 2024</h1>
          <CaseTrendChart />
        </div>

        <div style={{ width: "100%", padding: 20, border: "1px solid gray", marginTop: 30, borderRadius: "5px  " }}>
          <h1 style={{ marginBottom: 20, fontSize: "24px" }}>Types of Scams in 2024</h1>
          <TypeOfScamBreakdowChart />
        </div>

        <div style={{ width: "100%", marginTop: 30 }}>
          <h1 style={{ marginBottom: 20, fontSize: "24px" }}>Risk Assessment Statistics in 2024</h1>
          <RiskAssessment />
        </div>
      </MainLayout>
    </>
  );
}


const StateRow = ({ name, number }: { name: string, number: string }) => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", width: "75%" }}>
        <p style={{ fontSize: "13px", color: "white", margin: 0 }}>{name}</p>
        <p style={{ fontSize: "13px", color: "white", margin: 0 }}>{number}</p>
      </div>
      <div
        style={{
          backgroundColor: "white",
          width: "80%",
          height: "0.1px", // Thin line
          marginTop: 10,
          marginBottom: 10,
        }}
      ></div>
    </>
  )
}

export const StatsBox = ({ text, number, color }: { text: string, number: number, color: string }) => {
  return (
    <div style={{
      border: "0.5px solid gray",
      height: "154px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      flex: 1,
      borderRadius: "5px",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      textAlign: "center"
    }}>
      <p style={{ fontFamily: "Roboto", fontSize: "48px", color: color }}>{number.toLocaleString()}</p>
      <p style={{ fontFamily: "Roboto", fontSize: "24px" }}>{text}</p>
    </div>
  )
}