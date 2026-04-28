import Link from "next/link";
import {
  Sparkles,
  Brain,
  Bell,
  BookOpen,
  BarChart3,
  Smartphone,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Finance Assistant",
    desc: "Get personalized financial advice powered by AI. Ask questions in Hindi or English and get instant answers.",
    emoji: "🤖",
    color: "from-violet-500 to-purple-600",
    tag: "Powered by AI",
  },
  {
    icon: BarChart3,
    title: "Personalized Budget",
    desc: "Based on your salary, city, and lifestyle, get a custom monthly budget that actually works for you.",
    emoji: "📊",
    color: "from-blue-500 to-cyan-500",
    tag: "Smart Analytics",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    desc: "Never miss a SIP date, bill payment, or tax deadline. Smart notifications keep you financially disciplined.",
    emoji: "🔔",
    color: "from-orange-400 to-red-500",
    tag: "Always On Time",
  },
  {
    icon: BookOpen,
    title: "Finance Education",
    desc: "Beginner-friendly articles, videos, and courses on savings, investments, and tax planning in simple language.",
    emoji: "📚",
    color: "from-emerald-500 to-teal-500",
    tag: "Learn & Grow",
  },
  {
    icon: Sparkles,
    title: "Salary Growth Roadmap",
    desc: "See a 10-year projection of your wealth based on salary hikes, savings, and investment returns.",
    emoji: "🗺️",
    color: "from-yellow-500 to-orange-500",
    tag: "Future Planning",
  },
  {
    icon: Smartphone,
    title: "Mobile First Design",
    desc: "Manage finances on the go. Works perfectly on all devices — mobile, tablet, and desktop.",
    emoji: "📱",
    color: "from-pink-500 to-rose-600",
    tag: "Any Device",
  },
];

const innovations = [
  "Bilingual support (Hindi + English)",
  "Zero jargon — plain language",
  "India-specific tax rules (80C, HRA, NPS)",
  "Works offline — no login required for tools",
  "Gamified savings challenges",
  "Peer comparison (anonymous)",
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-cyan-400 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            Innovation Highlights
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            What Makes SmartSalary Hub
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              Truly Different
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Not just a calculator — a complete financial transformation platform
            built for India&apos;s young workforce.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {features.map((feature) => {
            const Icon = feature.icon;
            const linkMap: Record<string, string> = {
              "AI Finance Assistant": "/tools/ai-budget-coach",
              "Personalized Budget": "/tools/salary-planner",
              "Finance Education": "/education",
              "Salary Growth Roadmap": "/tools/salary-hike-planner",
            };
            const href = linkMap[feature.title];

            const Content = (
              <>
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 shrink-0`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-white text-base">
                        {feature.title}
                      </h3>
                      <span className="text-base">{feature.emoji}</span>
                    </div>
                    <span className="text-xs text-cyan-400 font-medium bg-cyan-400/10 px-2 py-0.5 rounded-full">
                      {feature.tag}
                    </span>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mt-3">
                  {feature.desc}
                </p>
                {href && (
                  <div className="mt-4 flex items-center gap-2 text-xs font-bold text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Access Tool <ArrowRight className="w-3 h-3" />
                  </div>
                )}
              </>
            );

            if (href) {
              return (
                <Link
                  key={feature.title}
                  href={href}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 block"
                >
                  {Content}
                </Link>
              );
            }

            return (
              <div
                key={feature.title}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 block"
              >
                {Content}
              </div>
            );
          })}
        </div>

        {/* Innovation extras */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <h3 className="text-white font-bold text-xl mb-5 text-center">
            ✨ More Reasons to Choose SmartSalary Hub
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {innovations.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3"
              >
                <span className="text-emerald-400 text-lg">✓</span>
                <span className="text-slate-300 text-sm font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
