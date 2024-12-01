import Divider from "@/component/main/Divider";
import MainLayout from "@/component/main/MainLayout";
import DetailedReport from "@/component/report/DetailedReport";
import GeneralDetails from "@/component/report/GeneralDetails";
import ResponseSection from "@/component/report/ResponseSection";
import exampleImg from "../../../public/images/example_image.png"
import Image from "next/image";

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
                    paddingBottom: 20,
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)"
                }}>
                <GeneralDetails />
                <Divider />
                <DetailedReport />
                <div style={{ marginTop: "30px", marginBottom: "30px" }}>
                    <h2 style={{ fontSize: "24px" }}>Scammer&apos;s Details/Description: </h2>

                    <ul style={{ listStyleType: "disc", paddingLeft: "20px", lineHeight: 1.5, marginTop: 20 }}>
                        <li><p style={{ fontSize: "24px" }}>Name Used: John Doe</p></li>
                        <li><p style={{ fontSize: "24px" }}>Phone Number: +65 9876 5432</p></li>
                        <li><p style={{ fontSize: "24px" }}>Email: shopxx.support@fakeemail.com</p></li>
                        <li><p style={{ fontSize: "24px" }}>Profile: &quot;ShopDiscount_Official&quot; on WhatsApp & Instagram</p></li>
                    </ul>

                    <p style={{ fontSize: "24px", marginTop: 40 }}>
                        The scammer posed as Shopxx&apos;s support team, offering fake prizes and discounts. They sent messages with Shopxx’s logo, directing victims to a fake site (shopxx-prizes.com) to steal personal and bank details. Unauthorized transactions were made from victims’ accounts.
                        Note: Verify with Shopxx&apos;s official support before sharing sensitive information.
                    </p>
                </div>

                <div style={{ display: "flex", flexDirection: "row", alignItems: "end" }}>
                    <Image src={exampleImg.src} width={165} height={355} alt="image" />
                    <p style={{marginLeft: 20}}>exampleonly.png</p>
                </div>
            </div>
        </MainLayout>
    );
}

export default ReportView;