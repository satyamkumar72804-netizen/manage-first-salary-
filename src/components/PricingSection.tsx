"use client";

import { Check, X, Zap, Crown, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "Free",
    desc: "For beginners starting their first job.",
    features: [
      { text: "Salary Planner (50/30/20)", included: true },
      { text: "Basic SIP Calculator", included: true },
      { text: "Expense Tracker (5 categories)", included: true },
      { text: "Emergency Fund Calculator", included: true },
      { text: "AI Finance Assistant", included: false },
      { text: "Tax Optimization", included: false },
      { text: "Salary Roadmap", included: false },
    ],
    btnText: "Get Started Free",
    icon: <Zap className="w-6 h-6 text-blue-500" />,
    popular: false,
  },
  {
    name: "Pro",
    price: "₹199",
    period: "/ month",
    desc: "Advanced tools for smart wealth builders.",
    features: [
      { text: "Everything in Free", included: true },
      { text: "AI Finance Assistant (Hinglish)", included: true },
      { text: "Advanced Tax Calculator", included: true },
      { text: "5-Year Salary Roadmap", included: true },
      { text: "Goal Planner (Unlimited)", included: true },
      { text: "Smart Reminders", included: true },
      { text: "Export Reports (PDF)", included: true },
    ],
    btnText: "Start Pro Trial",
    icon: <Crown className="w-6 h-6 text-yellow-500" />,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "₹499",
    period: "/ month",
    desc: "Full-service financial management.",
    features: [
      { text: "Everything in Pro", included: true },
      { text: "1-on-1 Finance Consultation", included: true },
      { text: "Portfolio Management", included: true },
      { text: "Dedicated Account Manager", included: true },
      { text: "Corporate Finance Workshops", included: true },
      { text: "Custom Roadmap Generation", included: true },
      { text: "White-glove Onboarding", included: true },
    ],
    btnText: "Contact Sales",
    icon: <Building2 className="w-6 h-6 text-emerald-500" />,
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-4">
            💎 Subscription Plans
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Choose Your Financial <br />
            <span className="text-[#2563EB]">Growth Plan</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            Invest in your future with tools that pay for themselves.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-[2.5rem] p-8 border-2 transition-all duration-300 ${
                plan.popular
                  ? "border-[#2563EB] shadow-[0_32px_64px_-16px_rgba(37,99,235,0.15)] scale-105 z-10"
                  : "border-slate-100 hover:border-slate-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg">
                  Most Popular ⚡
                </div>
              )}

              <div className="flex items-center justify-between mb-8">
                <div className="p-3 bg-slate-50 rounded-2xl">{plan.icon}</div>
                <div className="text-right">
                  <p className="text-slate-900 font-black text-3xl">{plan.price}</p>
                  <p className="text-slate-400 text-xs font-bold">{plan.period || "forever"}</p>
                </div>
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-2">{plan.name}</h3>
              <p className="text-slate-500 text-sm mb-8 font-medium">{plan.desc}</p>

              <div className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    ) : (
                      <X className="w-4 h-4 text-slate-300 shrink-0" />
                    )}
                    <span
                      className={`text-sm font-medium ${
                        feature.included ? "text-slate-700" : "text-slate-400"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href={plan.name === "Enterprise" ? "/contact" : "/auth"}
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-black transition-all ${
                  plan.popular
                    ? "bg-[#2563EB] text-white hover:bg-blue-700"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                {plan.btnText}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
