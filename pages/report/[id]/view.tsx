import Divider from "@/component/main/Divider";
import MainLayout from "@/component/main/MainLayout";
import DetailedReport from "@/component/report/DetailedReport";
import GeneralDetails from "@/component/report/GeneralDetails";
import ResponseSection from "@/component/report/ResponseSection";
// import exampleImg from "../../../public/images/example_image.png"
// import Image from "next/image";
import { useGetCaseById } from "@/hooks/case/useGetCaseById";
import { useRouter } from "next/router";

const ReportView = () => {

    const router = useRouter();
    const { id } = router.query;

    const { data, isLoading } = useGetCaseById(`${id}`);

    return (
        <MainLayout>
            {
                data && !isLoading
                    ?
                    <ResponseSection data={data} />
                    :
                    <></>
            }
            <div
                style={{
                    border: "0.5px solid #a6a6a6",
                    marginTop: "50px",
                    borderRadius: 10,
                    width: "100%",
                    paddingTop: 15,
                    paddingLeft: 30,
                    paddingRight: 30,
                    paddingBottom: 20,
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)"
                }}>
                {
                    data && !isLoading
                        ?
                        <GeneralDetails data={data} />
                        :
                        <></>
                }
                <Divider />
                {
                    data && !isLoading
                        ?
                        <DetailedReport data={data} />
                        :
                        <></>
                }
                <div style={{ marginTop: "30px", marginBottom: "30px" }}>
                    <h2 style={{ fontSize: "24px" }}>Scam Details/Description: </h2>

                    {/* <ul style={{ listStyleType: "disc", paddingLeft: "20px", lineHeight: 1.5, marginTop: 20 }}>
                        <li><p style={{ fontSize: "24px" }}>Name Used: John Doe</p></li>
                        <li><p style={{ fontSize: "24px" }}>Phone Number: +65 9876 5432</p></li>
                        <li><p style={{ fontSize: "24px" }}>Email: shopxx.support@fakeemail.com</p></li>
                        <li><p style={{ fontSize: "24px" }}>Profile: &quot;ShopDiscount_Official&quot; on WhatsApp & Instagram</p></li>
                    </ul> */}

                    <p style={{ fontSize: "24px", marginTop: 20 }}>
                        {data?.Details}
                    </p>
                </div>

                {/* <div style={{ display: "flex", flexDirection: "row", alignItems: "end" }}>
                    <Image src={exampleImg.src} width={165} height={355} alt="image" />
                    <p style={{ marginLeft: 20 }}>exampleonly.png</p>
                </div> */}
            </div>
        </MainLayout>
    );
}

export default ReportView;