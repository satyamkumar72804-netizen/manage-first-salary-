import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  CheckCircle,
  TrendingUp,
  Shield,
  Target,
  BookOpen,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Solutions – Why SmartSalary Hub? | SmartSalary Hub",
  description: "Discover how SmartSalary Hub solves every financial challenge for first-job employees.",
};

const benefits = [
  {
    icon: TrendingUp,
    title: "Improves Financial Discipline",
    desc: "Regular tracking and reminders build strong money habits within 90 days. 87% of users report improved financial discipline.",
    stat: "87%",
    statLabel: "Improved discipline",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Shield,
    title: "Reduces Financial Stress",
    desc: "Having a plan reduces money anxiety significantly. When you know where every rupee goes, life feels more in control.",
    stat: "73%",
    statLabel: "Stress reduction",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Target,
    title: "Accelerates Wealth Creation",
    desc: "Users who follow our budget plan accumulate 3x more wealth in 5 years compared to those without a plan.",
    stat: "3x",
    statLabel: "Wealth in 5 years",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: BarChart3,
    title: "Builds Savings Habit",
    desc: "Our savings-first philosophy ensures you pay yourself before spending. Average user saves 24% of salary within 3 months.",
    stat: "24%",
    statLabel: "Average savings rate",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: BookOpen,
    title: "Financial Literacy Education",
    desc: "Free courses on SIP, PPF, NPS, tax planning, and more. Learn in Hindi or English at your own pace.",
    stat: "50+",
    statLabel: "Free courses",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: CheckCircle,
    title: "Smart Tax Savings",
    desc: "Our tax calculator helps you save ₹15,000–₹1.5L per year by choosing the right tax regime and 80C investments.",
    stat: "₹1.5L",
    statLabel: "Average tax saved",
    color: "from-pink-500 to-pink-600",
  },
];

const comparisons = [
  { aspect: "Monthly Budget", without: "Spend randomly", with: "50/30/20 smart split" },
  { aspect: "Savings", without: "₹0 – 2K/month", with: "₹5K–20K/month" },
  { aspect: "Emergency Ready", without: "No safety net", with: "3-6 months fund" },
  { aspect: "Investments", without: "Starts at 30+", with: "Starts at 22-24" },
  { aspect: "Tax Planning", without: "Pays excess tax", with: "Saves ₹15K–₹1.5L" },
  { aspect: "Goals", without: "Vague dreams", with: "Specific, funded plan" },
  { aspect: "Debt", without: "Credit card trap", with: "Debt-free strategy" },
  { aspect: "Wealth at 40", without: "₹5–15 Lakh", with: "₹50 Lakh – 2 Crore" },
];

export default function SolutionsPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        {/* Hero */}
        <div className="gradient-primary py-20 px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="section-badge bg-white/20 text-white border-white/30 border mb-4">
              <CheckCircle className="w-4 h-4" />
              Why SmartSalary Hub?
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              Complete Financial Solutions
              <span className="block opacity-80">for First Job Employees</span>
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              We don&apos;t just give you calculators. We give you a complete
              financial transformation framework — from day 1 of your job.
            </p>
          </div>
        </div>

        {/* Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
                Benefits of Financial Planning
              </h2>
              <p className="text-slate-600 text-lg">Real impact on real lives</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <div key={b.title} className="feature-card group">
                    <div className={`w-12 h-12 bg-gradient-to-br ${b.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-xl mb-2">{b.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{b.desc}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-slate-900">{b.stat}</span>
                      <span className="text-slate-500 text-sm">{b.statLabel}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* With vs Without Comparison */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
                With vs Without Financial Planning
              </h2>
              <p className="text-slate-600">The difference is life-changing</p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="grid grid-cols-3 bg-slate-50 px-6 py-4">
                <span className="font-semibold text-slate-600">Aspect</span>
                <span className="font-bold text-red-600 text-center">❌ Without Plan</span>
                <span className="font-bold text-emerald-600 text-center">✅ With SmartSalary Hub</span>
              </div>
              {comparisons.map((row, i) => (
                <div key={row.aspect} className={`grid grid-cols-3 px-6 py-4 items-center ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"} border-t border-slate-100`}>
                  <span className="font-medium text-slate-800">{row.aspect}</span>
                  <span className="text-red-600 text-sm text-center">{row.without}</span>
                  <span className="text-emerald-700 text-sm text-center font-semibold">{row.with}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 gradient-dark px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Ready to Transform Your Finances?
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Start with any tool — it&apos;s 100% free, no login required.
            </p>
            <Link href="/tools/salary-planner" className="btn-green inline-flex">
              Start with Salary Planner <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
