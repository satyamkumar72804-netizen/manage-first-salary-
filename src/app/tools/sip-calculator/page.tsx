import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SIPCalculatorTool from "@/components/tools/SIPCalculatorTool";

export const metadata = {
  title: "SIP Calculator – Grow Your Wealth | SmartSalary Hub",
  description:
    "Calculate how your monthly SIP investments grow into crores with the power of compounding.",
};

export default function SIPCalculatorPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <SIPCalculatorTool />
      </div>
      <Footer />
    </main>
  );
}
