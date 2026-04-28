import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoalPlannerTool from "@/components/tools/GoalPlannerTool";

export const metadata = {
  title: "Goal Planner – Plan Your Dreams | SmartSalary Hub",
  description: "Plan and achieve your life goals — Bike, House, Travel, Marriage, Retirement.",
};

export default function GoalPlannerPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <GoalPlannerTool />
      </div>
      <Footer />
    </main>
  );
}
