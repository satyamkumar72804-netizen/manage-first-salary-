"use client";

import { useState } from "react";
import { Shield, CheckCircle, AlertTriangle, Target, Calendar } from "lucide-react";

export default function EmergencyFundTool() {
  const [rent, setRent] = useState(8000);
  const [food, setFood] = useState(4000);
  const [transport, setTransport] = useState(2000);
  const [utilities, setUtilities] = useState(1500);
  const [emi, setEmi] = useState(0);
  const [others, setOthers] = useState(2000);
  const [months, setMonths] = useState(6);
  const [currentSaved, setCurrentSaved] = useState(15000);
  const [monthlySavings, setMonthlySavings] = useState(3000);

  const monthlyEssentials = rent + food + transport + utilities + emi + others;
  const target = monthlyEssentials * months;
  const remaining = Math.max(0, target - currentSaved);
  const monthsToGoal = remaining > 0 ? Math.ceil(remaining / monthlySavings) : 0;
  const progressPct = Math.min((currentSaved / target) * 100, 100);

  const riskLevel =
    progressPct >= 100
      ? "excellent"
      : progressPct >= 60
      ? "good"
      : progressPct >= 30
      ? "moderate"
      : "poor";

  const riskConfig = {
    excellent: {
      label: "Fully Protected 🛡️",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      bar: "bg-emerald-500",
    },
    good: {
      label: "Getting There 👍",
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200",
      bar: "bg-blue-500",
    },
    moderate: {
      label: "Needs Attention ⚠️",
      color: "text-yellow-600",
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      bar: "bg-yellow-500",
    },
    poor: {
      label: "High Risk ❌",
      color: "text-red-600",
      bg: "bg-red-50",
      border: "border-red-200",
      bar: "bg-red-500",
    },
  };

  const config = riskConfig[riskLevel];

  const expenses = [
    { label: "Rent / PG", value: rent, setter: setRent, emoji: "🏠" },
    { label: "Food & Groceries", value: food, setter: setFood, emoji: "🍱" },
    { label: "Transport", value: transport, setter: setTransport, emoji: "🚌" },
    { label: "Utilities & Internet", value: utilities, setter: setUtilities, emoji: "💡" },
    { label: "EMI / Loan", value: emi, setter: setEmi, emoji: "💳" },
    { label: "Other Essentials", value: others, setter: setOthers, emoji: "📦" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Hero */}
      <div
        style={{ background: "linear-gradient(135deg, #c2410c 0%, #ea580c 50%, #f59e0b 100%)" }}
        className="py-12 px-4"
      >
        <div className="max-w-5xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-sm mb-4">
            <Shield className="w-4 h-4" />
            Financial Safety Net
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-3">Emergency Fund Calculator 🛡️</h1>
          <p className="text-orange-100 text-lg max-w-xl mx-auto">
            Calculate exactly how much you need to be financially safe for 3–6 months. Build your safety net first!
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Input Panel */}
          <div className="space-y-5">
            {/* Monthly Expenses */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-xl mb-5 flex items-center gap-2">
                <Target className="w-5 h-5 text-orange-600" />
                Monthly Essential Expenses
              </h3>
              <div className="space-y-4">
                {expenses.map((exp) => (
                  <div key={exp.label}>
                    <div className="flex justify-between mb-1.5">
                      <label className="text-sm font-medium text-slate-700">
                        {exp.emoji} {exp.label}
                      </label>
                      <span className="text-sm font-bold text-orange-600">
                        ₹{exp.value.toLocaleString()}
                      </span>
                    </div>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">₹</span>
                      <input
                        type="number"
                        value={exp.value}
                        onChange={(e) => exp.setter(Number(e.target.value))}
                        className="input-premium pl-8 text-sm"
                      />
                    </div>
                  </div>
                ))}

                <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center">
                  <span className="font-bold text-slate-900">Total Monthly Essentials</span>
                  <span className="text-xl font-black text-orange-600">
                    ₹{monthlyEssentials.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </div>

            {/* Settings */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-orange-600" />
                Fund Settings
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-semibold text-slate-700">Target Months</label>
                    <span className="font-bold text-orange-600">{months} months</span>
                  </div>
                  <input
                    type="range"
                    min={3}
                    max={12}
                    value={months}
                    onChange={(e) => setMonths(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-slate-400 mt-1">
                    <span>3 mo (Minimum)</span><span>12 mo (Super Safe)</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Current Emergency Savings
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                    <input
                      type="number"
                      value={currentSaved}
                      onChange={(e) => setCurrentSaved(Number(e.target.value))}
                      className="input-premium pl-8"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Monthly Savings Towards Fund
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                    <input
                      type="number"
                      value={monthlySavings}
                      onChange={(e) => setMonthlySavings(Number(e.target.value))}
                      className="input-premium pl-8"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-5">
            {/* Main Result */}
            <div className="bg-gradient-to-br from-slate-900 to-orange-900 rounded-2xl p-7 text-white">
              <p className="text-slate-300 text-sm mb-1">Your Emergency Fund Target</p>
              <p className="text-5xl font-black text-orange-400 mb-1">
                ₹{target.toLocaleString("en-IN")}
              </p>
              <p className="text-slate-400 text-sm mb-5">
                {months} months × ₹{monthlyEssentials.toLocaleString()} essential expenses
              </p>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-400">✅ Currently Saved</span>
                  <span className="text-white font-bold">₹{currentSaved.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">🎯 Still Needed</span>
                  <span className={`font-bold ${remaining === 0 ? "text-emerald-400" : "text-yellow-400"}`}>
                    {remaining === 0 ? "Goal Achieved! 🎉" : `₹${remaining.toLocaleString("en-IN")}`}
                  </span>
                </div>
                {remaining > 0 && (
                  <div className="flex justify-between">
                    <span className="text-slate-400">📅 Time to Goal</span>
                    <span className="text-cyan-400 font-bold">{monthsToGoal} months</span>
                  </div>
                )}
              </div>
            </div>

            {/* Progress */}
            <div className={`${config.bg} ${config.border} border-2 rounded-2xl p-5`}>
              <div className="flex justify-between items-center mb-3">
                <span className={`font-bold ${config.color}`}>{config.label}</span>
                <span className={`text-2xl font-black ${config.color}`}>{progressPct.toFixed(0)}%</span>
              </div>
              <div className="h-4 bg-white/60 rounded-full overflow-hidden mb-3">
                <div
                  className={`h-full ${config.bar} rounded-full transition-all duration-1000`}
                  style={{ width: `${progressPct}%` }}
                />
              </div>
              <p className={`text-sm ${config.color}`}>
                ₹{currentSaved.toLocaleString()} saved out of ₹{target.toLocaleString()} target
              </p>
            </div>

            {/* Month options comparison */}
            <div className="bg-white rounded-2xl p-5 border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-4">📊 Fund Size Options</h3>
              <div className="space-y-3">
                {[3, 4, 6, 9, 12].map((m) => {
                  const amt = monthlyEssentials * m;
                  const isCurrent = m === months;
                  return (
                    <div
                      key={m}
                      onClick={() => setMonths(m)}
                      className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${
                        isCurrent
                          ? "bg-orange-50 border-2 border-orange-300"
                          : "bg-slate-50 hover:bg-orange-50 border border-slate-100"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {m === months ? (
                          <CheckCircle className="w-4 h-4 text-orange-600" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border-2 border-slate-300" />
                        )}
                        <span className={`font-medium text-sm ${isCurrent ? "text-orange-700" : "text-slate-700"}`}>
                          {m} Months {m === 3 ? "(Minimum)" : m === 6 ? "(Recommended)" : m === 12 ? "(Super Safe)" : ""}
                        </span>
                      </div>
                      <span className={`font-bold ${isCurrent ? "text-orange-600" : "text-slate-600"}`}>
                        ₹{amt.toLocaleString("en-IN")}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tips */}
            <div className="bg-white rounded-2xl p-5 border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-600" />
                Why Emergency Fund is Non-Negotiable
              </h4>
              <div className="space-y-2">
                {[
                  "Job loss or sudden layoff — salary stops, bills don't",
                  "Medical emergency — hospital bills can wipe savings",
                  "Urgent travel — family emergencies need instant cash",
                  "Avoid credit card debt in emergencies",
                ].map((tip) => (
                  <div key={tip} className="flex gap-2 items-start">
                    <span className="text-orange-500 font-bold text-sm shrink-0">✓</span>
                    <span className="text-sm text-slate-600">{tip}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-orange-50 border border-orange-100 rounded-xl p-3">
                <p className="text-orange-700 text-sm font-semibold">
                  💡 Keep emergency fund in a separate Savings account or Liquid Mutual Fund — not in your regular account!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
