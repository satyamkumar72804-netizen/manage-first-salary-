import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExpenseTrackerTool from "@/components/tools/ExpenseTrackerTool";

export const metadata = {
  title: "Expense Tracker | SmartSalary Hub",
  description: "Track your monthly expenses by category and see where your money goes.",
};

export default function ExpenseTrackerPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <ExpenseTrackerTool />
      </div>
      <Footer />
    </main>
  );
}
