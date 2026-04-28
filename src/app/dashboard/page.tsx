"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionsSection from "@/components/home/SolutionsSection";
import PricingSection from "@/components/PricingSection";
import { User, Settings, LogOut, Bell, Search, Sparkles, TrendingUp, Shield, Target } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      
      {/* Dashboard Sub-Nav */}
      <div className="bg-white border-b border-slate-100 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-blue-600 font-black shadow-sm">
                PK
              </div>
              <div>
                <h1 className="text-xl font-black text-slate-900 leading-none">Namaste, Pransant!</h1>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">First-Year ECE Student</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <button className="text-slate-400 hover:text-slate-600 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="text-slate-400 hover:text-slate-600 transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <div className="h-6 w-px bg-slate-200"></div>
              <Link href="/auth" className="flex items-center gap-2 text-red-500 font-bold text-sm hover:opacity-80 transition-opacity">
                <LogOut className="w-4 h-4" />
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-[#2563EB] to-[#10B981] rounded-[2.5rem] p-8 md:p-12 text-white mb-10 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-4 h-4" />
              Your Financial Growth Awaits
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
              Ready to build your <br /> Smart Future?
            </h2>
            <p className="text-white/80 text-lg mb-8 font-medium">
              You have 3 active goals and 1 pending tax optimization. Use the tools below to manage your salary effectively.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/tools/salary-planner" className="bg-white text-slate-900 px-6 py-3 rounded-xl font-black text-sm hover:scale-105 transition-transform shadow-lg">
                Quick Budget Plan
              </Link>
              <Link href="/education" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-xl font-black text-sm hover:bg-white/20 transition-all">
                Learn SIP Basics
              </Link>
            </div>
          </div>
        </div>

        {/* Dashboard Tools Grid */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-slate-900">Your Smart Solutions</h2>
            <Link href="/tools/salary-planner" className="text-blue-600 font-bold text-sm hover:underline">View All Tools</Link>
          </div>
          
          <SolutionsSection />
        </div>

        {/* Pricing Section in Dashboard */}
        <div className="mb-20 border-t border-slate-100 pt-16">
          <PricingSection />
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-5">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
              <TrendingUp className="w-7 h-7 text-blue-600" />
            </div>
            <div>
              <p className="text-slate-500 text-xs font-black uppercase tracking-widest">Growth</p>
              <p className="text-2xl font-black text-slate-900">+₹5,400</p>
              <p className="text-emerald-500 text-[10px] font-bold">This Month</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-5">
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center">
              <Shield className="w-7 h-7 text-emerald-600" />
            </div>
            <div>
              <p className="text-slate-500 text-xs font-black uppercase tracking-widest">Safety Net</p>
              <p className="text-2xl font-black text-slate-900">85%</p>
              <p className="text-blue-500 text-[10px] font-bold">Target Reached</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-5">
            <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center">
              <Target className="w-7 h-7 text-purple-600" />
            </div>
            <div>
              <p className="text-slate-500 text-xs font-black uppercase tracking-widest">Goals</p>
              <p className="text-2xl font-black text-slate-900">2 / 3</p>
              <p className="text-purple-500 text-[10px] font-bold">On Track</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
