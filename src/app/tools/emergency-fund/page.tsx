import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmergencyFundTool from "@/components/tools/EmergencyFundTool";

export const metadata = {
  title: "Emergency Fund Calculator | SmartSalary Hub",
  description: "Calculate how much emergency fund you need for 3-6 months financial security.",
};

export default function EmergencyFundPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <EmergencyFundTool />
      </div>
      <Footer />
    </main>
  );
}
