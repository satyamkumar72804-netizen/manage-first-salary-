"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TrendingUp, ArrowLeft, ArrowUpCircle, Target, Briefcase, Zap } from "lucide-react";
import Link from "next/link";

export default function SalaryHikePlanner() {
  const [salary, setSalary] = useState(45000);
  const [hike, setHike] = useState(10);
  const [years, setYears] = useState(5);

  const calculateFuture = () => {
    let current = salary;
    const data = [];
    for (let i = 1; i <= years; i++) {
      current = current * (1 + hike / 100);
      data.push({ year: i, amount: Math.round(current) });
    }
    return data;
  };

  const projections = calculateFuture();

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 transition-colors text-sm font-semibold">
            <ArrowLeft className="w-4 h-4" /> Back to Tools
          </Link>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-8 text-white">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                  <ArrowUpCircle className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl font-black">Salary Hike Planner</h1>
                  <p className="text-emerald-100 opacity-80">Plan your career growth and wealth projections</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Current Monthly Salary (₹)</label>
                    <input type="number" value={salary} onChange={(e) => setSalary(Number(e.target.value))} className="input-premium" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Expected Annual Hike (%)</label>
                    <input type="range" min="5" max="50" step="1" value={hike} onChange={(e) => setHike(Number(e.target.value))} className="w-full" />
                    <div className="flex justify-between text-xs text-slate-400 mt-1">
                      <span>5%</span>
                      <span className="font-bold text-emerald-600">{hike}%</span>
                      <span>50%</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Projection Years</label>
                    <select value={years} onChange={(e) => setYears(Number(e.target.value))} className="input-premium">
                      {[1, 3, 5, 10].map(y => <option key={y} value={y}>{y} Years</option>)}
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-slate-900 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Growth Projection
                  </h3>
                  <div className="space-y-3">
                    {projections.map((p) => (
                      <div key={p.year} className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex justify-between items-center group hover:bg-emerald-50 hover:border-emerald-100 transition-all">
                        <div>
                          <p className="text-xs font-bold text-slate-400">YEAR {p.year}</p>
                          <p className="text-xl font-black text-slate-800">₹{p.amount.toLocaleString()}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-bold text-emerald-600">+{Math.round(((p.amount - salary) / salary) * 100)}% Total Growth</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-emerald-600 p-5 rounded-2xl text-white shadow-lg shadow-emerald-100 mt-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Zap className="w-5 h-5 text-yellow-300" />
                      <p className="font-bold">Career Insight</p>
                    </div>
                    <p className="text-emerald-100 text-sm leading-relaxed">
                      With a {hike}% hike, your salary will be ₹{projections[projections.length-1].amount.toLocaleString()} in {years} years.
                      Invest 20% of each hike to reach your goals faster!
                    </p>
                  </div>
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
