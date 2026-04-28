"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, ArrowLeft, Plus, PieChart, TrendingUp, DollarSign } from "lucide-react";
import Link from "next/link";

export default function PortfolioTracker() {
  const [assets, setAssets] = useState([
    { name: "Bank Savings", amount: 50000, type: "Cash", color: "bg-blue-500" },
    { name: "Nifty 50 Index", amount: 25000, type: "Equity", color: "bg-emerald-500" },
    { name: "Emergency Fund", amount: 15000, type: "Debt", color: "bg-orange-500" },
  ]);

  const total = assets.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 transition-colors text-sm font-semibold">
            <ArrowLeft className="w-4 h-4" /> Back to Tools
          </Link>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-8 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                    <Briefcase className="w-8 h-8" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-black">Investment Portfolio</h1>
                    <p className="text-blue-100 opacity-80">Track all your assets in one place</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-blue-200 text-sm font-bold uppercase tracking-wider">Total Net Worth</p>
                  <p className="text-4xl font-black">₹{total.toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-center">
                  <p className="text-blue-600 font-bold text-sm mb-1 uppercase tracking-widest">Liquid Cash</p>
                  <p className="text-2xl font-black text-blue-900">₹{assets.filter(a => a.type === "Cash").reduce((s, a) => s + a.amount, 0).toLocaleString()}</p>
                </div>
                <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 text-center">
                  <p className="text-emerald-600 font-bold text-sm mb-1 uppercase tracking-widest">Equities</p>
                  <p className="text-2xl font-black text-emerald-900">₹{assets.filter(a => a.type === "Equity").reduce((s, a) => s + a.amount, 0).toLocaleString()}</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 text-center">
                  <p className="text-orange-600 font-bold text-sm mb-1 uppercase tracking-widest">Fixed Income</p>
                  <p className="text-2xl font-black text-orange-900">₹{assets.filter(a => a.type === "Debt").reduce((s, a) => s + a.amount, 0).toLocaleString()}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-900 text-xl flex items-center gap-2">
                    <PieChart className="w-6 h-6 text-blue-600" />
                    Asset Allocation
                  </h3>
                  <button className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700">
                    <Plus className="w-4 h-4" /> Add Asset
                  </button>
                </div>

                <div className="space-y-3">
                  {assets.map((asset, i) => (
                    <div key={i} className="bg-white border border-slate-100 rounded-2xl p-4 flex items-center justify-between hover:border-blue-200 transition-all shadow-sm">
                      <div className="flex items-center gap-4">
                        <div className={`w-3 h-12 rounded-full ${asset.color}`}></div>
                        <div>
                          <p className="font-bold text-slate-900">{asset.name}</p>
                          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{asset.type}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-black text-slate-900 text-lg">₹{asset.amount.toLocaleString()}</p>
                        <p className="text-xs font-bold text-slate-400">{((asset.amount/total)*100).toFixed(1)}% of total</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 bg-slate-900 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full bg-blue-600/10 opacity-50"></div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-black mb-2 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-emerald-400" />
                    Diversification Tip
                  </h4>
                  <p className="text-slate-400 max-w-md">
                    Your equity exposure is currently {((assets.filter(a => a.type === "Equity").reduce((s, a) => s + a.amount, 0)/total)*100).toFixed(0)}%. 
                    For a first jobber, aim for 60-70% equity for long-term wealth!
                  </p>
                </div>
                <button className="relative z-10 bg-white text-slate-900 px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform shadow-xl">
                  Analyze Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
