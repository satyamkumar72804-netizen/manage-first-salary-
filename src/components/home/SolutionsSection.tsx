import Link from "next/link";
import {
  CheckCircle,
  Calculator,
  PieChart,
  TrendingUp,
  Shield,
  FileText,
  Target,
  CreditCard,
  ArrowRight,
  Brain,
  Briefcase,
} from "lucide-react";

const solutions = [
  {
    icon: PieChart,
    title: "Salary Planner",
    desc: "50/30/20 rule — automatically split your salary into Needs, Wants, and Savings.",
    href: "/tools/salary-planner",
    color: "from-blue-500 to-blue-600",
    badge: "Most Popular",
    badgeColor: "bg-blue-100 text-blue-700",
    features: ["Auto split", "Visual breakdown", "Monthly tracking"],
  },
  {
    icon: Calculator,
    title: "Expense Tracker",
    desc: "Track food, travel, rent, EMI, and shopping in one dashboard view.",
    href: "/tools/expense-tracker",
    color: "from-emerald-500 to-emerald-600",
    badge: "Essential",
    badgeColor: "bg-emerald-100 text-emerald-700",
    features: ["Category wise", "Monthly report", "Overspend alerts"],
  },
  {
    icon: TrendingUp,
    title: "SIP Calculator",
    desc: "See how small monthly investments grow into crores with the power of compounding.",
    href: "/tools/sip-calculator",
    color: "from-purple-500 to-purple-600",
    badge: "Wealth Builder",
    badgeColor: "bg-purple-100 text-purple-700",
    features: ["Compounding chart", "Goal alignment", "Fund comparison"],
  },
  {
    icon: Shield,
    title: "Emergency Fund Tool",
    desc: "Calculate exactly how much you need for 3–6 months of financial safety net.",
    href: "/tools/emergency-fund",
    color: "from-orange-500 to-orange-600",
    badge: "Safety First",
    badgeColor: "bg-orange-100 text-orange-700",
    features: ["3-6 month calc", "Progress meter", "Priority guide"],
  },
  {
    icon: FileText,
    title: "Tax Calculator",
    desc: "Compare Old vs New Tax Regime and find which one saves you more money.",
    href: "/tools/tax-calculator",
    color: "from-cyan-500 to-cyan-600",
    badge: "Save ₹1.5L+",
    badgeColor: "bg-cyan-100 text-cyan-700",
    features: ["Old vs New", "80C deductions", "HRA benefits"],
  },
  {
    icon: Target,
    title: "Goal Planner",
    desc: "Plan for Bike, House, Travel, Marriage, Retirement — with monthly saving targets.",
    href: "/tools/goal-planner",
    color: "from-pink-500 to-rose-600",
    badge: "Dream Builder",
    badgeColor: "bg-pink-100 text-pink-700",
    features: ["5 goal types", "Timeline view", "Investment route"],
  },
  {
    icon: CreditCard,
    title: "Debt Manager",
    desc: "Get out of credit card debt and loans faster with smart payoff strategies.",
    href: "/solutions",
    color: "from-red-500 to-red-600",
    badge: "Debt Free",
    badgeColor: "bg-red-100 text-red-700",
    features: ["Snowball method", "Avalanche calc", "Payoff timeline"],
  },
];

export default function SolutionsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-badge">
            <CheckCircle className="w-4 h-4" />
            Our Solutions
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            SmartSalary Hub Solves
            <span className="text-gradient block">Every Financial Problem</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            7 powerful tools designed specifically for freshers and first-job
            employees in India. Free, simple, and life-changing.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <Link
                key={solution.title}
                href={solution.href}
                className="feature-card group block hover:no-underline"
              >
                {/* Icon and Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${solution.badgeColor}`}
                  >
                    {solution.badge}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {solution.desc}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mb-4">
                  {solution.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-xs text-slate-600"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center text-blue-600 text-sm font-semibold group-hover:gap-2 transition-all duration-200">
                  <span>Try Now</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}

          {/* Functional Expansion cards */}
          <div className="grid grid-cols-1 gap-4 lg:col-span-1">
            <Link href="/tools/ai-budget-coach" className="feature-card bg-indigo-50 border-indigo-100 flex items-center gap-4 py-4 group">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shrink-0">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-indigo-900 text-sm">AI Budget Coach</h3>
                <p className="text-indigo-600 text-[10px] font-bold">Try Now →</p>
              </div>
            </Link>
            <Link href="/tools/salary-hike-planner" className="feature-card bg-emerald-50 border-emerald-100 flex items-center gap-4 py-4 group">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-emerald-900 text-sm">Salary Hike Planner</h3>
                <p className="text-emerald-600 text-[10px] font-bold">Try Now →</p>
              </div>
            </Link>
            <Link href="/tools/portfolio-tracker" className="feature-card bg-blue-50 border-blue-100 flex items-center gap-4 py-4 group">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-blue-900 text-sm">Portfolio Tracker</h3>
                <p className="text-blue-600 text-[10px] font-bold">Try Now →</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
