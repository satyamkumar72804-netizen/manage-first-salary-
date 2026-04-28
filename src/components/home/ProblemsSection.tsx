import {
  AlertTriangle,
  CreditCard,
  PiggyBank,
  BarChart2,
  Clock,
  Wallet,
} from "lucide-react";

const problems = [
  {
    icon: Wallet,
    title: "No Monthly Budget",
    desc: "Most freshers spend without planning. Month ends before salary does, leaving zero savings.",
    hindi: "Budget nahi = savings nahi",
    stat: "73% freshers",
    statLabel: "have no budget plan",
    color: "text-red-500",
    bg: "bg-red-50",
    border: "border-red-100",
  },
  {
    icon: AlertTriangle,
    title: "Overspending Trap",
    desc: "Online shopping, food delivery, subscriptions eat up salary before essentials are covered.",
    hindi: "Zyada kharcha = zyada tension",
    stat: "68% salary",
    statLabel: "gone in impulse buying",
    color: "text-orange-500",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
  {
    icon: PiggyBank,
    title: "No Savings Habit",
    desc: "\"I'll save next month\" — the most expensive lie young professionals tell themselves.",
    hindi: "Aaj nahi toh kab?",
    stat: "Only 12%",
    statLabel: "freshers save regularly",
    color: "text-yellow-500",
    bg: "bg-yellow-50",
    border: "border-yellow-100",
  },
  {
    icon: CreditCard,
    title: "Credit Card Misuse",
    desc: "EMI culture and credit card debt trap young employees in a cycle of financial stress.",
    hindi: "Card swipe = future loan",
    stat: "₹45,000 avg",
    statLabel: "credit card debt at 25",
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-100",
  },
  {
    icon: BarChart2,
    title: "No Tax Planning",
    desc: "Most employees miss out on ₹1.5L+ in tax savings by not planning investments timely.",
    hindi: "Tax planning = free money",
    stat: "₹1.5L+",
    statLabel: "tax savings missed yearly",
    color: "text-purple-500",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
  {
    icon: Clock,
    title: "Late Investment Start",
    desc: "Starting SIP at 30 vs 22 costs you ₹2.3 Crore at retirement. Time is your biggest asset.",
    hindi: "Ek saal ki der = crore ka nuksan",
    stat: "₹2.3 Cr loss",
    statLabel: "for every 8yr delay",
    color: "text-slate-600",
    bg: "bg-slate-50",
    border: "border-slate-100",
  },
];

export default function ProblemsSection() {
  return (
    <section className="py-20 bg-slate-50 dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-badge">
            <AlertTriangle className="w-4 h-4" />
            Common Problems
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            Problems Young Employees
            <span className="text-gradient block">Face Every Month</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            These financial mistakes cost freshers lakhs of rupees each year.
            <strong className="text-slate-800"> SmartSalary Hub</strong> helps
            you avoid all of them.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.title}
                className={`feature-card border-2 ${problem.border} group`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 ${problem.bg} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-6 h-6 ${problem.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 text-lg mb-1">
                      {problem.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-3">
                      {problem.desc}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400 italic bg-slate-50 px-2 py-1 rounded-lg">
                        &ldquo;{problem.hindi}&rdquo;
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className={`mt-4 pt-4 border-t ${problem.border} flex items-center gap-2`}
                >
                  <span className={`text-xl font-black ${problem.color}`}>
                    {problem.stat}
                  </span>
                  <span className="text-slate-500 text-sm">
                    {problem.statLabel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-red-50 border-2 border-red-100 rounded-2xl px-6 py-4">
            <AlertTriangle className="w-6 h-6 text-red-500" />
            <p className="text-slate-700 font-medium">
              <strong className="text-red-600">Shocking Fact:</strong> 9 out of
              10 young professionals have ZERO financial plan. Don&apos;t be one of
              them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
