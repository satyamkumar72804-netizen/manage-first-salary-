"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles, Brain, ArrowLeft, Send, Bot, CheckCircle, PieChart, Wallet } from "lucide-react";
import Link from "next/link";

export default function AIBudgetCoach() {
  const [salary, setSalary] = useState(45000);
  const [city, setCity] = useState("Metro");
  const [lifestyle, setLifestyle] = useState("Moderate");
  const [advice, setAdvice] = useState<null | any>(null);
  const [loading, setLoading] = useState(false);

  const generateAdvice = () => {
    setLoading(true);
    setTimeout(() => {
      const needs = city === "Metro" ? salary * 0.55 : salary * 0.45;
      const savings = lifestyle === "Frugal" ? salary * 0.3 : salary * 0.2;
      const wants = salary - needs - savings;

      setAdvice({
        breakdown: { needs, wants, savings },
        tips: [
          city === "Metro" ? "Metro cities have high rent. Consider sharing a flat to save ₹5,000+." : "Take advantage of lower costs and boost savings to 30%.",
          lifestyle === "Luxurious" ? "Switch to 'Moderate' lifestyle for 6 months to build your emergency fund faster." : "Your lifestyle is sustainable. Keep it up!",
          "Invest your savings of ₹" + savings + " in a Diversified Equity Fund via SIP.",
        ],
        score: lifestyle === "Frugal" ? 95 : lifestyle === "Moderate" ? 75 : 50,
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 transition-colors text-sm font-semibold">
            <ArrowLeft className="w-4 h-4" /> Back to Tools
          </Link>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="bg-gradient-to-r from-indigo-600 to-violet-700 p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                  <Brain className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl font-black">AI Budget Coach</h1>
                  <p className="text-indigo-100 opacity-80">Personalized Financial Guidance Powered by AI</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Monthly Salary (₹)</label>
                    <input
                      type="number"
                      value={salary}
                      onChange={(e) => setSalary(Number(e.target.value))}
                      className="input-premium"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">City Type</label>
                    <div className="grid grid-cols-2 gap-2">
                      {["Metro", "Non-Metro"].map((c) => (
                        <button
                          key={c}
                          onClick={() => setCity(c)}
                          className={`py-3 rounded-xl border-2 font-bold transition-all ${city === c ? "border-indigo-600 bg-indigo-50 text-indigo-700" : "border-slate-100 hover:border-slate-200"}`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Lifestyle Preference</label>
                    <select
                      value={lifestyle}
                      onChange={(e) => setLifestyle(e.target.value)}
                      className="input-premium"
                    >
                      <option>Frugal</option>
                      <option>Moderate</option>
                      <option>Luxurious</option>
                    </select>
                  </div>
                  <button
                    onClick={generateAdvice}
                    disabled={loading}
                    className="btn-primary w-full justify-center py-4 text-lg shadow-xl shadow-indigo-100"
                  >
                    {loading ? "Analyzing Data..." : "Generate AI Plan"}
                  </button>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col items-center justify-center text-center">
                  {!advice && !loading ? (
                    <>
                      <Bot className="w-16 h-16 text-indigo-300 mb-4" />
                      <p className="text-slate-500 font-medium">Enter your details and click generate to get personalized AI budget advice.</p>
                    </>
                  ) : loading ? (
                    <div className="space-y-4 w-full">
                      <div className="h-4 bg-slate-200 rounded-full animate-pulse w-3/4 mx-auto"></div>
                      <div className="h-4 bg-slate-200 rounded-full animate-pulse w-full"></div>
                      <div className="h-4 bg-slate-200 rounded-full animate-pulse w-5/6 mx-auto"></div>
                      <p className="text-indigo-600 font-bold text-sm animate-bounce mt-4">AI is thinking...</p>
                    </div>
                  ) : (
                    <div className="w-full text-left space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-slate-900">Your AI Budget Score</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${advice.score > 80 ? "bg-emerald-100 text-emerald-700" : "bg-yellow-100 text-yellow-700"}`}>
                          {advice.score}/100
                        </span>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-slate-100">
                          <div className="flex items-center gap-2">
                            <Wallet className="w-4 h-4 text-blue-500" />
                            <span className="text-sm font-medium">Needs</span>
                          </div>
                          <span className="font-bold">₹{advice.breakdown.needs.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-slate-100">
                          <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-pink-500" />
                            <span className="text-sm font-medium">Wants</span>
                          </div>
                          <span className="font-bold">₹{advice.breakdown.wants.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-slate-100">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-500" />
                            <span className="text-sm font-medium">Savings</span>
                          </div>
                          <span className="font-bold">₹{advice.breakdown.savings.toLocaleString()}</span>
                        </div>
                      </div>

                      <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                        <p className="text-xs font-bold text-indigo-700 uppercase tracking-widest mb-2">Smart Insights</p>
                        <ul className="space-y-2">
                          {advice.tips.map((tip: string, i: number) => (
                            <li key={i} className="text-sm text-indigo-900 flex gap-2">
                              <span className="text-indigo-400 font-bold">•</span>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
