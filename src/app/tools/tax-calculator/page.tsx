import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TaxCalculatorTool from "@/components/tools/TaxCalculatorTool";

export const metadata = {
  title: "Tax Calculator – Old vs New Regime | SmartSalary Hub",
  description: "Compare Old vs New Tax Regime and find out which saves you more money.",
};

export default function TaxCalculatorPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <TaxCalculatorTool />
      </div>
      <Footer />
    </main>
  );
}
