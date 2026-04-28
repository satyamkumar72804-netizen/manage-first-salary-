"use client";

import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { IndianRupee, PieChartIcon, CheckCircle, ArrowRight, Info } from "lucide-react";
import ToolHeader from "./ToolHeader";

const COLORS = ["#1a56db", "#0ea5e9", "#10b981"];

export default function SalaryPlannerTool() {
  const [salary, setSalary] = useState(45000);
  const [deductions, setDeductions] = useState(6500);
  const [otherIncome, setOtherIncome] = useState(0);

  const takehome = salary - deductions + otherIncome;
  const needs = Math.round(takehome * 0.5);
  const wants = Math.round(takehome * 0.3);
  const savings = Math.round(takehome * 0.2);

  const pieData = [
    { name: "Needs (50%)", value: needs },
    { name: "Wants (30%)", value: wants },
    { name: "Savings (20%)", value: savings },
  ];

  const needsBreakdown = [
    { label: "Rent / PG", value: Math.round(needs * 0.55), emoji: "🏠" },
    { label: "Groceries & Food", value: Math.round(needs * 0.2), emoji: "🍱" },
    { label: "Transport", value: Math.round(needs * 0.1), emoji: "🚌" },
    { label: "Electricity & Utilities", value: Math.round(needs * 0.08), emoji: "💡" },
    { label: "Mobile & Internet", value: Math.round(needs * 0.07), emoji: "📱" },
  ];

  const wantsBreakdown = [
    { label: "Dining Out / Zomato", value: Math.round(wants * 0.3), emoji: "🍕" },
    { label: "Shopping & Clothes", value: Math.round(wants * 0.25), emoji: "👗" },
    { label: "Entertainment & OTT", value: Math.round(wants * 0.15), emoji: "🎬" },
    { label: "Gym & Wellness", value: Math.round(wants * 0.15), emoji: "💪" },
    { label: "Travel & Weekend", value: Math.round(wants * 0.15), emoji: "✈️" },
  ];

  const savingsBreakdown = [
    { label: "Emergency Fund", value: Math.round(savings * 0.35), emoji: "🛡️" },
    { label: "SIP / Mutual Funds", value: Math.round(savings * 0.35), emoji: "📈" },
    { label: "PPF / NPS / 80C", value: Math.round(savings * 0.2), emoji: "🏦" },
    { label: "Short-term Goals", value: Math.round(savings * 0.1), emoji: "🎯" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <ToolHeader 
        title="Salary Planner 💼" 
        category="Budgeting Rule" 
        icon={<PieChartIcon className="w-4 h-4" />} 
        gradient="gradient-blue" 
      />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Input Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm mb-5">
              <h2 className="font-bold text-slate-900 text-xl mb-5 flex items-center gap-2">
                <IndianRupee className="w-5 h-5 text-blue-600" />
                Enter Your Details
              </h2>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Monthly Gross Salary
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-bold">₹</span>
                    <input
                      type="number"
                      value={salary}
                      onChange={(e) => setSalary(Number(e.target.value))}
                      className="input-premium pl-8"
                      placeholder="45000"
                    />
                  </div>
                  <input
                    type="range"
                    min={15000}
                    max={300000}
                    step={1000}
                    value={salary}
                    onChange={(e) => setSalary(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-slate-400 mt-1">
                    <span>₹15K</span>
                    <span>₹3L</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Deductions (PF, Tax, etc.)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-bold">₹</span>
                    <input
                      type="number"
                      value={deductions}
                      onChange={(e) => setDeductions(Number(e.target.value))}
                      className="input-premium pl-8"
                      placeholder="6500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Other Income (Freelance, etc.)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-bold">₹</span>
                    <input
                      type="number"
                      value={otherIncome}
                      onChange={(e) => setOtherIncome(Number(e.target.value))}
                      className="input-premium pl-8"
                      placeholder="0"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Takehome summary */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-5 text-white">
              <p className="text-slate-400 text-sm mb-1">Monthly Take-Home</p>
              <p className="text-4xl font-black text-emerald-400 mb-3">
                ₹{takehome.toLocaleString("en-IN")}
              </p>
              <div className="space-y-2">
                {[
                  { label: "Needs (50%)", value: needs, color: "text-blue-400" },
                  { label: "Wants (30%)", value: wants, color: "text-cyan-400" },
                  { label: "Savings (20%)", value: savings, color: "text-emerald-400" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center">
                    <span className="text-slate-400 text-sm">{item.label}</span>
                    <span className={`font-bold ${item.color}`}>
                      ₹{item.value.toLocaleString("en-IN")}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chart + Breakdown */}
          <div className="lg:col-span-2 space-y-5">
            {/* Pie chart */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
                <PieChartIcon className="w-5 h-5 text-blue-600" />
                Budget Allocation Chart
              </h3>
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={110}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {pieData.map((_entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => [`₹${Number(value).toLocaleString("en-IN")}`, ""]}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Breakdown cards */}
            <div className="grid md:grid-cols-3 gap-4">
              {/* Needs */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-blue-800">🏠 Needs</h4>
                  <span className="bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">50%</span>
                </div>
                <p className="text-2xl font-black text-blue-700 mb-3">₹{needs.toLocaleString("en-IN")}</p>
                <div className="space-y-2">
                  {needsBreakdown.map((item) => (
                    <div key={item.label} className="flex justify-between items-center text-sm">
                      <span className="text-blue-700 text-xs">{item.emoji} {item.label}</span>
                      <span className="font-semibold text-blue-900 text-xs">₹{item.value.toLocaleString("en-IN")}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Wants */}
              <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-cyan-800">🎉 Wants</h4>
                  <span className="bg-cyan-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">30%</span>
                </div>
                <p className="text-2xl font-black text-cyan-700 mb-3">₹{wants.toLocaleString("en-IN")}</p>
                <div className="space-y-2">
                  {wantsBreakdown.map((item) => (
                    <div key={item.label} className="flex justify-between items-center text-sm">
                      <span className="text-cyan-700 text-xs">{item.emoji} {item.label}</span>
                      <span className="font-semibold text-cyan-900 text-xs">₹{item.value.toLocaleString("en-IN")}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Savings */}
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-emerald-800">💰 Savings</h4>
                  <span className="bg-emerald-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">20%</span>
                </div>
                <p className="text-2xl font-black text-emerald-700 mb-3">₹{savings.toLocaleString("en-IN")}</p>
                <div className="space-y-2">
                  {savingsBreakdown.map((item) => (
                    <div key={item.label} className="flex justify-between items-center text-sm">
                      <span className="text-emerald-700 text-xs">{item.emoji} {item.label}</span>
                      <span className="font-semibold text-emerald-900 text-xs">₹{item.value.toLocaleString("en-IN")}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-white rounded-2xl p-5 border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Info className="w-4 h-4 text-blue-600" />
                💡 Smart Tips for You
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { tip: "Always pay yourself first — move savings on salary day", icon: "✅" },
                  { tip: `Your yearly savings potential: ₹${(savings * 12).toLocaleString("en-IN")}`, icon: "📊" },
                  { tip: "Invest savings in SIP to grow wealth over time", icon: "📈" },
                  { tip: "Build 3-month emergency fund before investing", icon: "🛡️" },
                ].map((item) => (
                  <div key={item.tip} className="flex gap-2 items-start bg-slate-50 rounded-xl p-3">
                    <span className="text-base shrink-0">{item.icon}</span>
                    <span className="text-sm text-slate-600">{item.tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Next step */}
            <div className="bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl p-5 text-white flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="font-bold text-lg">Next Step: Calculate your SIP Growth</p>
                <p className="text-white/80 text-sm">See how ₹{savings.toLocaleString("en-IN")}/month grows to crores</p>
              </div>
              <a href="/tools/sip-calculator" className="flex items-center gap-2 bg-white text-blue-600 px-5 py-2.5 rounded-xl font-bold text-sm hover:shadow-lg transition-all hover:-translate-y-0.5">
                SIP Calculator <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* What is 50/30/20 */}
        <div className="mt-8 bg-white rounded-2xl p-8 border border-slate-100">
          <h3 className="font-black text-slate-900 text-2xl mb-3">What is the 50/30/20 Rule? 📚</h3>
          <p className="text-slate-600 mb-5">Created by Senator Elizabeth Warren, this rule is the simplest and most effective budget framework ever. It divides your after-tax income into 3 categories:</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                pct: "50%",
                name: "Needs",
                color: "text-blue-600 bg-blue-50 border-blue-200",
                desc: "Essential expenses you cannot avoid — Rent, Food, Transport, Utilities, EMIs",
              },
              {
                pct: "30%",
                name: "Wants",
                color: "text-cyan-600 bg-cyan-50 border-cyan-200",
                desc: "Lifestyle expenses that improve life quality — Dining, Entertainment, Shopping, Travel",
              },
              {
                pct: "20%",
                name: "Savings",
                color: "text-emerald-600 bg-emerald-50 border-emerald-200",
                desc: "Your future wealth — Emergency Fund, SIP, PPF, Goal savings. Pay yourself first!",
              },
            ].map((item) => (
              <div key={item.name} className={`rounded-xl p-5 border ${item.color}`}>
                <div className={`text-4xl font-black mb-1 ${item.color.split(" ")[0]}`}>{item.pct}</div>
                <div className="font-bold text-slate-900 text-lg mb-2">{item.name}</div>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2 bg-yellow-50 border border-yellow-100 rounded-xl px-4 py-3">
            <CheckCircle className="w-5 h-5 text-yellow-600 shrink-0" />
            <p className="text-yellow-800 text-sm font-medium">
              💡 Pro Tip: If your city is expensive (Mumbai, Delhi, Bangalore), adjust to 60/20/20. But never reduce savings below 15%!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
