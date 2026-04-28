import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Sparkles,
  Brain,
  Bell,
  BookOpen,
  BarChart3,
  Smartphone,
  Globe,
  Shield,
  Zap,
  Target,
} from "lucide-react";

export const metadata = {
  title: "Innovation – AI & Smart Features | SmartSalary Hub",
  description: "Discover the innovative AI-powered features that make SmartSalary Hub unique.",
};

const innovations = [
  {
    icon: Brain,
    title: "AI Finance Assistant",
    desc: "Our AI assistant understands your financial situation and gives personalized advice. Ask in Hindi or English — it understands both. Get instant answers to 'How much should I save?' or 'Which mutual fund is best for me?'",
    status: "Beta",
    color: "from-violet-500 to-purple-600",
    features: ["Natural language queries", "Hindi & English support", "Personalized advice", "24/7 availability"],
  },
  {
    icon: BarChart3,
    title: "Salary Growth Roadmap",
    desc: "See a 10-year projection of your wealth based on expected salary hikes (8-15% annually), savings rate, and investment returns. Understand how small changes today compound into huge differences at 35.",
    status: "Live",
    color: "from-blue-500 to-cyan-500",
    features: ["10-year projection", "Salary hike modeling", "Wealth milestones", "Compounding visualization"],
  },
  {
    icon: Bell,
    title: "Smart Reminders & Alerts",
    desc: "Never miss a SIP date, credit card bill, tax filing deadline, or savings goal update. Our smart reminder system keeps you financially disciplined without being annoying.",
    status: "Live",
    color: "from-orange-400 to-red-500",
    features: ["SIP date alerts", "Bill reminders", "Tax deadline nudges", "Goal milestone alerts"],
  },
  {
    icon: BookOpen,
    title: "Financial Education Hub",
    desc: "50+ bite-sized courses on personal finance — SIP, PPF, NPS, HRA, 80C, emergency funds, and more. All in simple language, no finance degree needed. Hindi videos available.",
    status: "Live",
    color: "from-emerald-500 to-teal-500",
    features: ["50+ free courses", "Video + text format", "Hindi content", "Beginner to advanced"],
  },
  {
    icon: Globe,
    title: "Bilingual Platform",
    desc: "India's first financial planning platform available in both Hindi and English. We believe financial literacy should have no language barrier. Switch between languages seamlessly.",
    status: "Live",
    color: "from-yellow-500 to-orange-500",
    features: ["Full Hindi UI", "English toggle", "Regional content", "India-specific examples"],
  },
  {
    icon: Shield,
    title: "Privacy-First Design",
    desc: "Your financial data stays on your device. We don't sell data to banks or insurance companies. No spam calls from salespeople. Your data is yours, always.",
    status: "Core",
    color: "from-slate-600 to-slate-800",
    features: ["No data selling", "Local storage option", "No spam calls", "Full data control"],
  },
  {
    icon: Zap,
    title: "Instant Calculations",
    desc: "All tools give real-time results as you type. No form submissions, no loading states. Move the salary slider and see your entire budget update instantly.",
    status: "Live",
    color: "from-yellow-400 to-yellow-600",
    features: ["Real-time updates", "Interactive sliders", "No page reload", "Smooth animations"],
  },
  {
    icon: Target,
    title: "Gamified Savings Challenges",
    desc: "Turn savings into a game! Complete weekly challenges — 'Skip one Zomato order and save ₹200' or '52-week savings challenge'. Earn badges and track streaks.",
    status: "Coming Soon",
    color: "from-pink-500 to-rose-600",
    features: ["Weekly challenges", "Achievement badges", "Savings streaks", "Peer leaderboard"],
  },
  {
    icon: Smartphone,
    title: "Progressive Web App (PWA)",
    desc: "SmartSalary Hub works as a mobile app without downloading from Play Store. Add to home screen and use offline. Saves storage, works without internet.",
    status: "Coming Soon",
    color: "from-indigo-500 to-blue-600",
    features: ["Offline support", "Add to home screen", "App-like experience", "Fast loading"],
  },
];

const roadmap = [
  { phase: "Phase 1", title: "Core Tools", status: "done", items: ["Salary Planner", "SIP Calculator", "Tax Calculator", "Emergency Fund"] },
  { phase: "Phase 2", title: "Tracking & Goals", status: "done", items: ["Expense Tracker", "Goal Planner", "Monthly Reports", "Debt Manager"] },
  { phase: "Phase 3", title: "AI Features", status: "active", items: ["AI Finance Assistant", "Personalized Budget AI", "Smart Reminders", "Salary Growth Roadmap"] },
  { phase: "Phase 4", title: "Social & App", status: "upcoming", items: ["PWA Mobile App", "Gamification", "Community Forum", "Peer Comparison"] },
];

export default function InnovationPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        {/* Hero */}
        <div className="bg-slate-900 py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
          <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-violet-500/20 border border-violet-500/30 text-violet-300 text-sm font-semibold px-4 py-2 rounded-full mb-5">
              <Sparkles className="w-4 h-4" />
              Innovation & Technology
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              Built for the Future of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                Financial Wellness
              </span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              SmartSalary Hub isn&apos;t just another calculator website. It&apos;s a complete AI-powered
              financial ecosystem designed specifically for India&apos;s new workforce.
            </p>
          </div>
        </div>

        {/* Innovations Grid */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
                9 Innovative Features
              </h2>
              <p className="text-slate-600">That make SmartSalary Hub truly unique</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {innovations.map((item) => {
                const Icon = item.icon;
                const statusColors: Record<string, string> = {
                  "Live": "bg-emerald-100 text-emerald-700",
                  "Beta": "bg-blue-100 text-blue-700",
                  "Core": "bg-slate-100 text-slate-700",
                  "Coming Soon": "bg-orange-100 text-orange-700",
                };
                return (
                  <div key={item.title} className="feature-card group">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusColors[item.status]}`}>
                        {item.status}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-xl mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{item.desc}</p>
                    <div className="space-y-1.5">
                      {item.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs text-slate-600">
                          <span className="text-emerald-500">✓</span>
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Product Roadmap */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
                Product Roadmap 🗺️
              </h2>
              <p className="text-slate-600">Our journey to becoming India&apos;s #1 fintech platform for freshers</p>
            </div>
            <div className="space-y-4">
              {roadmap.map((phase) => (
                <div key={phase.phase} className={`rounded-2xl p-5 border-2 ${
                  phase.status === "done" ? "bg-emerald-50 border-emerald-200" :
                  phase.status === "active" ? "bg-blue-50 border-blue-300" :
                  "bg-slate-50 border-slate-200"
                }`}>
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold ${
                      phase.status === "done" ? "bg-emerald-500" :
                      phase.status === "active" ? "bg-blue-500" :
                      "bg-slate-400"
                    }`}>
                      {phase.status === "done" ? "✓" : phase.status === "active" ? "⚡" : "⏳"}
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-500">{phase.phase}</span>
                      <h3 className="font-bold text-slate-900">{phase.title}</h3>
                    </div>
                    <span className={`ml-auto text-xs font-semibold px-3 py-1 rounded-full ${
                      phase.status === "done" ? "bg-emerald-100 text-emerald-700" :
                      phase.status === "active" ? "bg-blue-100 text-blue-700" :
                      "bg-slate-100 text-slate-600"
                    }`}>
                      {phase.status === "done" ? "Completed" : phase.status === "active" ? "In Progress" : "Planned"}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {phase.items.map((item) => (
                      <span key={item} className="text-sm bg-white border border-slate-200 px-3 py-1 rounded-full text-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
