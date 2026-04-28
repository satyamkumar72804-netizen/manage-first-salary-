import Link from "next/link";
import { ArrowRight, Wrench } from "lucide-react";

const tools = [
  {
    emoji: "💼",
    name: "Salary Planner",
    desc: "50-30-20 budget rule",
    href: "/tools/salary-planner",
    color: "bg-blue-500",
  },
  {
    emoji: "📊",
    name: "Expense Tracker",
    desc: "Monthly spend monitor",
    href: "/tools/expense-tracker",
    color: "bg-emerald-500",
  },
  {
    emoji: "📈",
    name: "SIP Calculator",
    desc: "Grow wealth with SIP",
    href: "/tools/sip-calculator",
    color: "bg-purple-500",
  },
  {
    emoji: "🛡️",
    name: "Emergency Fund",
    desc: "3-6 months safety net",
    href: "/tools/emergency-fund",
    color: "bg-orange-500",
  },
  {
    emoji: "🧾",
    name: "Tax Calculator",
    desc: "Old vs New Regime",
    href: "/tools/tax-calculator",
    color: "bg-cyan-500",
  },
  {
    emoji: "🎯",
    name: "Goal Planner",
    desc: "Plan your dreams",
    href: "/tools/goal-planner",
    color: "bg-pink-500",
  },
];

export default function ToolsPreview() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="section-badge">
            <Wrench className="w-4 h-4" />
            Free Financial Tools
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
            Try Our Tools — 100% Free
          </h2>
          <p className="text-slate-600">No signup needed to explore the tools</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {tools.map((tool) => (
            <Link
              key={tool.name}
              href={tool.href}
              className="bg-white rounded-2xl p-4 text-center border border-slate-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div
                className={`w-12 h-12 ${tool.color} rounded-xl flex items-center justify-center mx-auto mb-3 text-2xl group-hover:scale-110 transition-transform duration-300`}
              >
                {tool.emoji}
              </div>
              <div className="font-semibold text-slate-800 text-sm">
                {tool.name}
              </div>
              <div className="text-slate-400 text-xs mt-0.5">{tool.desc}</div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/tools/salary-planner"
            className="btn-primary inline-flex"
          >
            Start Planning Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
