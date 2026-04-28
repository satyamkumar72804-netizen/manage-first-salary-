"use client";

import { useState, useMemo } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { TrendingUp, IndianRupee, Clock, Target, Info } from "lucide-react";

import ToolHeader from "./ToolHeader";

export default function SIPCalculatorTool() {
  const [monthly, setMonthly] = useState(5000);
  const [years, setYears] = useState(15);
  const [rate, setRate] = useState(12);

  const { totalInvested, totalValue, totalReturns, chartData } = useMemo(() => {
    const months = years * 12;
    const monthlyRate = rate / 100 / 12;
    const fv =
      monthly *
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate);
    const invested = monthly * months;
    const returns = fv - invested;

    const data = [];
    for (let y = 1; y <= years; y++) {
      const m = y * 12;
      const v =
        monthly *
        ((Math.pow(1 + monthlyRate, m) - 1) / monthlyRate) *
        (1 + monthlyRate);
      const inv = monthly * m;
      data.push({
        year: `Y${y}`,
        "Total Value": Math.round(v),
        "Amount Invested": Math.round(inv),
        Returns: Math.round(v - inv),
      });
    }
    return {
      totalInvested: invested,
      totalValue: Math.round(fv),
      totalReturns: Math.round(returns),
      chartData: data,
    };
  }, [monthly, years, rate]);

  const formatCr = (val: number) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(1)} L`;
    return `₹${val.toLocaleString("en-IN")}`;
  };

  const wealthGain = ((totalReturns / totalInvested) * 100).toFixed(0);

  const presets = [
    { monthly: 1000, years: 10, rate: 12, label: "Beginner" },
    { monthly: 3000, years: 15, rate: 12, label: "Regular" },
    { monthly: 5000, years: 20, rate: 14, label: "Aggressive" },
    { monthly: 10000, years: 25, rate: 15, label: "Wealth Builder" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <ToolHeader 
        title="SIP Calculator 📈" 
        category="Systematic Investment Plan" 
        icon={<TrendingUp className="w-4 h-4" />} 
        gradient="bg-gradient-to-r from-purple-700 to-indigo-800" 
      />

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Presets */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-slate-600 mb-3">Quick Presets:</p>
          <div className="flex flex-wrap gap-2">
            {presets.map((p) => (
              <button
                key={p.label}
                onClick={() => {
                  setMonthly(p.monthly);
                  setYears(p.years);
                  setRate(p.rate);
                }}
                className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-200 ${
                  monthly === p.monthly && years === p.years && rate === p.rate
                    ? "bg-purple-600 text-white border-purple-600 shadow-md"
                    : "bg-white text-slate-700 border-slate-200 hover:border-purple-400"
                }`}
              >
                {p.label} (₹{p.monthly.toLocaleString()}/mo × {p.years}yr @ {p.rate}%)
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Inputs */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-5 flex items-center gap-2">
                <IndianRupee className="w-5 h-5 text-purple-600" />
                Investment Details
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-semibold text-slate-700">
                      Monthly SIP Amount
                    </label>
                    <span className="text-purple-600 font-bold">
                      ₹{monthly.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={500}
                    max={100000}
                    step={500}
                    value={monthly}
                    onChange={(e) => setMonthly(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-slate-400 mt-1">
                    <span>₹500</span><span>₹1 Lakh</span>
                  </div>
                  <input
                    type="number"
                    value={monthly}
                    onChange={(e) => setMonthly(Number(e.target.value))}
                    className="input-premium mt-2"
                    placeholder="Monthly Investment"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-semibold text-slate-700">
                      Investment Period
                    </label>
                    <span className="text-purple-600 font-bold">{years} Years</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={40}
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-slate-400 mt-1">
                    <span>1 yr</span><span>40 yrs</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-semibold text-slate-700">
                      Expected Return (p.a.)
                    </label>
                    <span className="text-purple-600 font-bold">{rate}%</span>
                  </div>
                  <input
                    type="range"
                    min={6}
                    max={24}
                    step={0.5}
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-slate-400 mt-1">
                    <span>6% (FD rate)</span><span>24%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Result cards */}
            <div className="bg-gradient-to-br from-slate-900 to-purple-900 rounded-2xl p-5 text-white">
              <p className="text-slate-400 text-sm mb-1">Total Corpus (Maturity)</p>
              <p className="text-3xl font-black text-emerald-400 mb-4">
                {formatCr(totalValue)}
              </p>
              <div className="space-y-2.5">
                <div className="flex justify-between">
                  <span className="text-slate-400 text-sm">💳 Amount Invested</span>
                  <span className="text-white font-semibold">{formatCr(totalInvested)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 text-sm">📈 Total Returns</span>
                  <span className="text-emerald-400 font-semibold">{formatCr(totalReturns)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 text-sm">🚀 Wealth Gain</span>
                  <span className="text-yellow-400 font-semibold">{wealthGain}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-1 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-600" />
                Wealth Growth Chart
              </h3>
              <p className="text-slate-500 text-sm mb-4">
                Year-by-year growth of ₹{monthly.toLocaleString()}/month SIP
              </p>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorInvested" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1a56db" stopOpacity={0.15} />
                      <stop offset="95%" stopColor="#1a56db" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                  <YAxis
                    tickFormatter={(v) => {
                      if (v >= 10000000) return `${(v / 10000000).toFixed(1)}Cr`;
                      if (v >= 100000) return `${(v / 100000).toFixed(0)}L`;
                      return `${(v / 1000).toFixed(0)}K`;
                    }}
                    tick={{ fontSize: 11 }}
                  />
                  <Tooltip
                    formatter={(value) => [formatCr(Number(value)), ""]}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="Total Value"
                    stroke="#8b5cf6"
                    strokeWidth={2.5}
                    fill="url(#colorValue)"
                  />
                  <Area
                    type="monotone"
                    dataKey="Amount Invested"
                    stroke="#1a56db"
                    strokeWidth={2}
                    fill="url(#colorInvested)"
                    strokeDasharray="5 5"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Milestones */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-purple-600" />
                Key Wealth Milestones
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[5, 10, 15, years].filter((y, i, arr) => arr.indexOf(y) === i && y <= years).map((y) => {
                  const m = y * 12;
                  const mr = rate / 100 / 12;
                  const v = monthly * ((Math.pow(1 + mr, m) - 1) / mr) * (1 + mr);
                  return (
                    <div key={y} className="bg-purple-50 border border-purple-100 rounded-xl p-3 text-center">
                      <div className="text-purple-600 font-bold text-lg flex items-center justify-center gap-1">
                        <Clock className="w-4 h-4" /> {y}yr
                      </div>
                      <div className="text-emerald-600 font-black text-base">{formatCr(Math.round(v))}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-5 text-white">
              <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Info className="w-5 h-5" />
                💡 SIP Wisdom
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Start early — ₹1000/month at 22 beats ₹3000/month at 30",
                  "Stay invested — don't stop SIP during market dips",
                  `Yearly savings total: ₹${(monthly * 12).toLocaleString()}`,
                  "Step up SIP by 10% every year for exponential growth",
                ].map((tip) => (
                  <div key={tip} className="flex gap-2 items-start bg-white/10 rounded-xl p-3">
                    <span className="text-yellow-400 text-sm font-bold shrink-0">→</span>
                    <span className="text-white/90 text-sm">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
