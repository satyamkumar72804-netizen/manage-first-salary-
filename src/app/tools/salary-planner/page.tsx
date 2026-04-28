import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SalaryPlannerTool from "@/components/tools/SalaryPlannerTool";

export const metadata = {
  title: "Salary Planner – 50/30/20 Budget Rule | SmartSalary Hub",
  description:
    "Use the 50/30/20 rule to plan your salary perfectly. Split into Needs, Wants, and Savings automatically.",
};

export default function SalaryPlannerPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <SalaryPlannerTool />
      </div>
      <Footer />
    </main>
  );
}
